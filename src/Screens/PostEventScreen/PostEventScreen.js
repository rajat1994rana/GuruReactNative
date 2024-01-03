import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import ImagePicker from "react-native-image-crop-picker";
import MapView, { Marker } from "react-native-maps";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Header from "../../Components/Header";
import ImagePath from "../../Constants/ImagePath";
import Colors from "../../Styles/Colors";
import commonStyles from "../../Styles/commonStyles";

import moment from "moment";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import CalanderModal from "../../Components/CalanderModal";
import CommonModal from "../../Components/CommonModal";
import DropdownSelector from "../../Components/DropdownSelector";
import GradientButton from "../../Components/GradientButton";
import GradientView from "../../Components/GradientView";
import SelectAgeModal from "../../Components/SelectAgeModal";
import Slider from "../../Components/Slider";
import UploadImageOptionSheet from "../../Components/UploadImageOptionSheet";
import { width } from "../../Styles/responsiveSize";
import ProgressBar from "./ProgressBar";
import Loader from "../../Components/Loader";
import { getLocation } from "../../utils/helperFunctions";
import { FlatList } from "react-native";
export default function PostEventScreen({ navigation }) {
  const locationInfo = useSelector((data) => data?.location?.locationInfo);
  const [eventType, setEventType] = useState(1);
  const [imagesData, setimagesData] = useState([]);
  const [postImage, setpostImage] = useState("");
  const [eventName, seteventName] = useState("");
  const [startTime, setstartTime] = useState(moment().format("HH:MM A"));
  const [selectedCardIndex, setselectedCardIndex] = useState(-1);
  const [endTime, setendTime] = useState(
    moment().add(4, "hour").format("HH:MM A")
  );

  const [state, setState] = useState({
    selectedLat: locationInfo?.coords?.latitude,
    selectedLng: locationInfo?.coords?.longitude,
    searchedLocation: "",
    isLoading: false,
    locationDetails: "",
    locationNameLat: locationInfo?.coords?.latitude,
    locationNameLng: locationInfo?.coords?.longitude,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const {
    selectedLng,
    selectedLat,
    isLoading,
    locationNameLat,
    locationNameLng,
    longitudeDelta,
    latitudeDelta,
  } = state;
  const updateState = (data) => setState((state) => ({ ...state, ...data }));
  const [isDateModalVisible, setisDateModalVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateRange, setdateRange] = useState("");
  const [isModalSheetVisible, setisModalSheetVisible] = useState(false);
  const [animateClassName, setanimateClassName] = useState("slideInRight");
  const [minAge, setminAge] = useState("");
  const [maxAge, setmaxAge] = useState("");
  const [isAgeModalVisible, setisAgeModalVisible] = useState(false);
  const [startTimeSeleted, setstartTimeSeleted] = useState(false);
  const [endTimeSelected, setEndTimeSelected] = useState(false);
  const [isSelectedModeDate, setIsSelectedModeDate] = useState(false);
  const [calMode, setcalMode] = useState("time");
  const [date, setdate] = useState(moment()?.format("dddd, MMMM YYYY"));
  const [cafeRestaurantsData, setcafeRestaurantsData] = useState([]);
  const [allCafesData, setallCafesData] = useState([]);
  const [searchType, setsearchType] = useState(
    eventType == 1 ? "cafe" : "restaurant"
  );
  const [userAddress, setuserAddress] = useState("");
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  useEffect(() => {
    getLocation(locationNameLat, locationNameLng)
      .then((res) => {
        let data = { ...res };
        setuserAddress(data);
        console.log(data, "datadata");
      })
      .catch((error) => {});
  }, [locationNameLat, locationNameLng]);

  const handleConfirm = (date) => {
    if (startTimeSeleted) {
      setstartTime(moment(date).format("HH:MM A"));
      hideDatePicker();
      setstartTimeSeleted(false);
      return;
    }
    if (endTimeSelected) {
      setendTime(moment(date).format("HH:MM A"));
      hideDatePicker();
      setEndTimeSelected(false);
      return;
    }
    if (isSelectedModeDate) {
      setdate(moment(date).format("dddd, MMMM YYYY"));
      hideDatePicker();
      setIsSelectedModeDate(false);
      return;
    }
  };
  useEffect(() => {
    getLocationName(searchType);
  }, [currentStep, searchType, selectedLat, selectedLng]);

  const getLocationName = async (searchType) => {
    try {
      updateState({ isLoading: true });
      // const response = await fetch(
      //   `https://nominatim.openstreetmap.org/reverse?format=json&lat=${selectedLat}&lon=${selectedLng}`
      // );
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=1500&type=${searchType}&key=AIzaSyAzu0SpTkD5ZJL_NLxDUIIKXrQ6SCFAVfg&location=${selectedLat},${selectedLng}`
      );

      const data = await response.json();
      setcafeRestaurantsData(data?.results);
      setallCafesData(data?.results);
      updateState({ isLoading: false });

      return;
      // console.log(data,"datatatat");
      const locationName = data?.display_name;
      const locationCity = data?.address?.city
        ? data?.address?.city
        : data?.address?.town;
      //console.log(locationCity,"locationCitykkkkkk");
      updateState({
        searchedLocation: locationName,
        locationDetails: locationCity,
      });
      console.log(locationName, "locationaaaNamelocationName");
      //  markerRef.current.
      // return locationName;
    } catch (error) {
      console.error("Error fetching location name:", error);
      return "Unknown Location";
    }
  };

  const onGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      setpostImage(image.path);
      setisModalSheetVisible(false);
      let data = [...imagesData];
      data.push(image.path);
      setimagesData(data);
      console.log(image);
    });
  };
  const onCamera = () => {
    setisModalSheetVisible(false);
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      setisModalSheetVisible(false);
      let data = [...imagesData];
      data.push(image.path);
      setimagesData(data);
      console.log(image);
    });
  };
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepPress = (step) => {
    setCurrentStep(step);
  };
  const [selectedGen, setselectedGen] = useState("Evryone");
  const [lang, setlang] = useState("English");
  const [guest, setguest] = useState(1);
  const chandigarhMarkers = [
    {
      id: 1,
      title: "Marker 1",
      coordinate: { latitude: 30.7333, longitude: 76.7794 },
    },
    {
      id: 2,
      title: "Marker 2",
      coordinate: { latitude: 30.7122, longitude: 76.7684 },
    },
    {
      id: 3,
      title: "Marker 3",
      coordinate: { latitude: 30.7278, longitude: 76.7971 },
    },
    {
      id: 4,
      title: "Marker 4",
      coordinate: { latitude: 30.7069, longitude: 76.8104 },
    },
    {
      id: 6,
      title: "Marker 6",
      coordinate: { latitude: 30.75, longitude: 76.8 },
    },
    // Add more markers as needed
  ];
  const inputRef = useRef(null);
  const flatListRef = useRef(null);

  const scrollToIndex = (index) => {
    flatListRef.current.scrollToIndex({ index, animated: true });
  };
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setselectedCardIndex(index);
          updateState({
            locationNameLat: item.geometry?.location?.lat,
            locationNameLng: item.geometry?.location?.lng,
          });
        }}
        style={{
          borderWidth: selectedCardIndex === index ? 2 : 0.5,
          borderColor:
            selectedCardIndex === index
              ? Colors?.appColorPrimary
              : "rgba(0, 0, 0, 0.08)",
          margin: 1,
          borderRadius: 10,
          height: 172,
          marginRight: 16,
          overflow: "hidden",
          width: 252,
        }}
      >
        <View style={{ height: 100, backgroundColor: "#D8D8D8" }}>
          <Image
            source={{
              uri: !!item?.photos?.length
                ? `https://maps.googleapis.com/maps/api/place/photo?photoreference=${item?.photos[0]?.photo_reference}&sensor=false&maxheight=${item?.photos[0]?.height}&maxwidth=${item?.photos[0]?.width}&key=AIzaSyAzu0SpTkD5ZJL_NLxDUIIKXrQ6SCFAVfg`
                : item?.icon,
            }}
            style={{ width: "100%", height: 100, resizeMode: "cover" }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "flex-end",
            marginTop: -12,
          }}
        >
          <View
            style={{
              minWidth: 85,
              paddingHorizontal: 8,
              height: 24,
              borderRadius: 12,
              marginRight: 16,
              backgroundColor: "#FF8400",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 11, color: "#fff" }}>
              {item?.user_ratings_total ?? 0} reviews
            </Text>
          </View>
          <View
            style={{
              width: 50,
              height: 24,
              borderTopLeftRadius: 12,
              borderBottomLeftRadius: 12,
              backgroundColor: "#7E7E7E",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 11, color: "#fff" }}>
              {item?.rating ?? 0}
            </Text>
          </View>
        </View>
        <Text style={{ fontSize: 12, marginTop: 16, marginLeft: 16 }}>
          {item?.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        extraHeight={200}
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
          <View style={{ marginBottom: 8 }}>
            {currentStep == 3 ? (
              <View style={{ flexDirection: "row", marginLeft: 16 }}>
                <TouchableOpacity
                  onPress={() => handleStepPress(currentStep - 1)}
                >
                  <Image source={ImagePath.backBtn} />
                </TouchableOpacity>
                <View style={{ flexDirection: "row", marginLeft: 34 }}>
                  {[
                    { name: "Cafes", image: ImagePath.cup },
                    { name: "Restaurants", image: ImagePath.plat },
                  ]?.map((res, index) => {
                    return (
                      <LinearGradient
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0.4 }}
                        colors={
                          eventType == index + 1
                            ? ["#FFC634", "#FF8400"]
                            : ["#EFF0F0", "#EFF0F0"]
                        }
                        style={{ marginRight: 8, borderRadius: 5 }}
                      >
                        <TouchableOpacity
                          activeOpacity={1}
                          // onPress={() => {
                          //   setEventType(index + 1);
                          //   setsearchType(
                          //     index + 1 == 1 ? "cafe" : "restaurant"
                          //   );
                          // }}
                          style={{
                            flexDirection: "row",
                            height: 26,
                            paddingHorizontal: 5,
                            alignItems: "center",
                          }}
                        >
                          <Image
                            source={res?.image}
                            style={{
                              width: 15,
                              height: 15,
                              resizeMode: "contain",
                              tintColor:
                                eventType == index + 1 ? "#fff" : "#656363",
                            }}
                          />
                          <Text
                            style={{
                              ...commonStyles?.font12BlackBold,
                              marginLeft: 6,
                              color:
                                eventType == index + 1 ? "#fff" : "#656363",
                            }}
                          >
                            {res?.name}
                          </Text>
                        </TouchableOpacity>
                      </LinearGradient>
                    );
                  })}
                </View>
              </View>
            ) : (
              <Header
                showLeft={ImagePath.backBtn}
                headerTextStyle={{ ...commonStyles.font30Italic }}
                onPressLeft={() => {
                  if (currentStep == 1) {
                    navigation.goBack();
                    return;
                  }
                  handleStepPress(currentStep - 1);
                }}
              />
            )}
          </View>
          {currentStep != 3 && (
            <ProgressBar steps={3} currentStep={currentStep} />
          )}
          <Animatable.View
            animation={animateClassName}
            duration={100}
            style={{ flex: 1, backgroundColor: Colors.white }}
          >
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1 }}>
                {(currentStep == 1 || currentStep == 2) && (
                  <Text
                    style={{
                      ...commonStyles.font22BlackBold,
                      textAlign: "center",
                      marginVertical: 16,
                      color: "#000",
                    }}
                  >
                    {currentStep == 1
                      ? "Give your event title &\ndescription"
                      : "What is your event basics"}
                  </Text>
                )}

                {currentStep == 1 && (
                  <Animatable.View
                    animation={animateClassName}
                    duration={500}
                    style={{ flex: 1, paddingHorizontal: 32 }}
                  >
                    <Pressable
                      onPress={() => setisModalSheetVisible(true)}
                      style={{
                        height: 200,
                        marginBottom: 16,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        source={
                          postImage ? { uri: postImage } : ImagePath.galleryIcon
                        }
                        style={
                          postImage
                            ? {
                                height: "100%",
                                width: "100%",
                                resizeMode: "cover",
                                borderRadius: 5,
                              }
                            : {}
                        }
                      />
                    </Pressable>
                    <View style={{}}>
                      <TextInput
                        placeholder="Event Name"
                        placeholderTextColor={"#656363"}
                        onChangeText={seteventName}
                        multiline
                        style={{
                          ...commonStyles?.font14BlackBold,
                          alignSelf: "center",
                          color: "#656363",
                          padding: 0,
                          margin: 0,
                        }}
                      />
                    </View>
                    <View
                      style={{
                        borderBottomWidth: 1,
                        marginTop: 80,
                        borderBottomColor: "#ABABAB",
                      }}
                    ></View>
                    <View style={{ flex: 1 }} />
                    <View>
                      <GradientButton
                        colors={
                          !!eventName && !!postImage
                            ? ["#FFC634", "#FF8400"]
                            : ["#EFF0F0", "#EFF0F0"]
                        }
                        title="Next"
                        customTextStyle={{
                          color:
                            !!eventName && !!postImage ? "#fff" : "#656363",
                        }}
                        onPress={() => {
                          handleStepPress(currentStep + 1);

                          if (!(!!eventName && !!postImage)) {
                            return;
                          }
                          handleStepPress(currentStep + 1);
                        }}
                      />
                    </View>
                  </Animatable.View>
                )}
                {currentStep == 2 && (
                  <Animatable.View
                    animation={animateClassName}
                    duration={500}
                    style={{ marginTop: 16, flex: 1, paddingHorizontal: 32 }}
                  >
                    <View style={{}}>
                      <Text
                        style={{
                          ...commonStyles.font14BlackMedium,
                          color: "#656363",
                        }}
                      >
                        Event Type <Text style={{ color: "#FF0000" }}>*</Text>
                      </Text>
                    </View>
                    <View
                      style={{
                        marginTop: 24,
                        flexDirection: "row",
                        justifyContent: "space-around",
                      }}
                    >
                      <GradientView
                        onPress={() => {
                          setEventType(1);
                          setsearchType("cafe");
                        }}
                        image={ImagePath.cup}
                        eventType={1}
                        colors={
                          eventType == 1
                            ? ["#FFC634", "#FF8400"]
                            : ["#FF840033", "#FF840033"]
                        }
                        title={"Cafe"}
                        customTextStyle={
                          eventType == 1
                            ? { ...commonStyles.font12BlackBold }
                            : { ...commonStyles.font12Regular }
                        }
                      />
                      <GradientView
                        onPress={() => {
                          setEventType(2);
                          setsearchType("restaurant");
                        }}
                        image={ImagePath.plat}
                        eventType={2}
                        colors={
                          eventType == 2
                            ? ["#FFC634", "#FF8400"]
                            : ["#FF840033", "#FF840033"]
                        }
                        title={"Restaurant "}
                        customTextStyle={
                          eventType == 2
                            ? { ...commonStyles.font12BlackBold }
                            : { ...commonStyles.font12Regular }
                        }
                      />
                    </View>
                    <View style={{ marginTop: 50 }}>
                      <Text style={{ ...commonStyles.font12Regular }}>
                        {userAddress?.address}
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 30 }}>
                      <Image source={ImagePath.watch} />
                      <View style={{ marginLeft: 16 }}>
                        <View style={{ flexDirection: "row" }}>
                          <TouchableOpacity
                            onPress={() => {
                              setDatePickerVisibility(true);
                              setstartTimeSeleted(true);
                              setcalMode("time");
                            }}
                          >
                            <Text
                              style={{
                                ...commonStyles.font14BlackMedium,
                                color: "#4D4F59",
                              }}
                            >
                              {startTime}
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => {
                              setDatePickerVisibility(true);
                              setEndTimeSelected(true);
                              setcalMode("time");
                            }}
                          >
                            <Text
                              style={{
                                ...commonStyles.font14BlackMedium,
                                color: "#4D4F59",
                              }}
                            >
                              {` - ${endTime}`}
                              <Text style={{ color: "red" }}>*</Text>
                            </Text>
                          </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                          onPress={() => {
                            setDatePickerVisibility(true);
                            setIsSelectedModeDate(true);
                            setcalMode("date");
                          }}
                        >
                          <Text
                            style={{
                              ...commonStyles.font14Regular,
                              color: "#4D4F59",
                            }}
                          >
                            {date}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 24,
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            ...commonStyles.font14BlackMedium,
                            color: "#656363",
                          }}
                        >
                          Guests
                        </Text>
                        <View
                          style={{
                            width: 90,
                            height: 45,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingHorizontal: 8,
                            backgroundColor: "#FAFAFA",
                            borderWidth: 1,
                            borderRadius: 5,
                            borderColor: "#E6E6E8",
                            marginTop: 8,
                          }}
                        >
                          <TouchableOpacity
                            onPress={() => {
                              if (guest > 0) {
                                setguest(guest - 1);
                              }
                            }}
                            style={{
                              width: 15,
                              height: 15,
                              backgroundColor: "#FF840080",
                              borderRadius: 2,
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Text style={{ color: "#fff" }}>-</Text>
                          </TouchableOpacity>
                          <Text>{guest}</Text>
                          <TouchableOpacity
                            onPress={() => {
                              setguest(guest + 1);
                            }}
                            style={{
                              width: 15,
                              height: 15,
                              backgroundColor: "#FF840080",
                              borderRadius: 2,
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Text style={{ color: "#fff" }}>+</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View style={{ flex: 1 }} />
                      <View>
                        <Text
                          style={{
                            ...commonStyles.font14BlackMedium,
                            color: "#656363",
                          }}
                        >
                          Gender
                        </Text>
                        <DropdownSelector
                          data={["Male", "Female", "Evryone"]}
                          selectedValue={selectedGen}
                          getSelectValue={setselectedGen}
                        />
                      </View>
                    </View>
                    <View style={{ marginTop: 45 }}>
                      <Slider />
                    </View>
                    <View style={{ marginTop: 34 }}>
                      <Text
                        style={{
                          ...commonStyles.font14BlackMedium,
                          color: "#656363",
                        }}
                      >
                        Event Language
                      </Text>
                      <DropdownSelector
                        data={["English", "Other"]}
                        selectedValue={lang}
                        customButtonStyle={{ width: width - 64 }}
                        getSelectValue={setlang}
                      />
                    </View>
                    <View style={{ marginTop: 34 }}>
                      <Text
                        style={{
                          ...commonStyles.font14BlackMedium,
                          color: "#656363",
                          marginBottom: 8,
                        }}
                      >
                        Event Descriptions{" "}
                      </Text>
                      <TextInput
                        placeholder="Share your thoughts about the event"
                        placeholderTextColor={"#ABABAB"}
                        style={{
                          ...commonStyles.font14Regular,
                          borderWidth: 1,
                          height: 44,
                          paddingHorizontal: 20,
                          borderRadius: 5,
                          borderColor: "#E6E6E8",
                          backgroundColor: "#FAFAFA",
                        }}
                      />
                    </View>
                    <View style={{ marginTop: 34 }}>
                      <GradientButton
                        colors={["#FFC634", "#FF8400"]}
                        title="Post Your Event!"
                        onPress={() => {
                          handleStepPress(currentStep + 1);
                        }}
                      />
                    </View>
                  </Animatable.View>
                )}
                {currentStep == 3 && (
                  <Animatable.View
                    animation={animateClassName}
                    duration={500}
                    style={{ flex: 1 }}
                  >
                    <MapView
                      style={{
                        ...styles.map,
                        alignSelf: "center",
                        width: "100%",
                        zIndex: -100,
                        flex: 1,
                      }}
                      zoomEnabled={true}
                      moveOnMarkerPress={true}
                      region={{
                        latitude: selectedLat,
                        longitude: selectedLng,
                        latitudeDelta: latitudeDelta,
                        longitudeDelta: longitudeDelta,
                      }}
                      initialRegion={{
                        latitude: 30.7333,
                        longitude: 76.7794,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                      }}
                      onRegionChangeComplete={(e) => {
                        console.log(JSON.stringify(e));
                        setselectedCardIndex(-1);
                        updateState({
                          selectedLat: e.latitude,
                          selectedLng: e.longitude,
                          longitudeDelta:e?.longitudeDelta,
                          latitudeDelta:e?.latitudeDelta
                        });
                      }}
                    >
                      {cafeRestaurantsData.map((marker, ind) => {
                        let markerObj = {
                          latitude: marker?.geometry?.location?.lat,
                          longitude: marker?.geometry?.location?.lng,
                        };
                        return (
                          <Marker
                            key={marker.place_id}
                            coordinate={markerObj}
                            tracksInfoWindowChanges={true}
                            onPress={() => {
                              console.log(
                                JSON?.stringify(marker.name, null, 2)
                              );
                              scrollToIndex(ind);
                            }}
                          >
                            <Image
                              source={ImagePath.locationPin}
                              style={{
                                width: 44,
                                height: 44,
                                resizeMode: "contain",
                              }}
                            />
                          </Marker>
                        );
                      })}
                    </MapView>
                    <View
                      style={{
                        backgroundColor: Colors.white,
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        marginTop: -20,
                      }}
                    >
                      <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                          inputRef?.current?.focus();
                        }}
                        style={{
                          height: 38,
                          backgroundColor: "#F2F2F2",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          paddingHorizontal: 16,
                          alignItems: "center",
                          marginTop: 16,
                          marginHorizontal: 18,
                          borderRadius: 10,
                        }}
                      >
                        <TextInput
                          ref={inputRef}
                          placeholder={`Search for ${searchType}s`}
                          style={{ padding: 0 }}
                          onChangeText={(val) => {
                            let arr = [...allCafesData];
                            const lowercaseSearchText = val.toLowerCase();
                            const result = arr.filter((location) =>
                              location.name
                                .toLowerCase()
                                .includes(lowercaseSearchText)
                            );
                            if (result) {
                              setcafeRestaurantsData(result);
                            } else {
                              setcafeRestaurantsData(allCafesData);
                            }
                          }}
                        />
                        <Image source={ImagePath.searchIcon} />
                      </TouchableOpacity>
                      <View style={{ marginTop: 24 }}>
                        <Text
                          style={{
                            ...commonStyles.font14Regular,
                            marginBottom: 8,
                            paddingHorizontal: 32,
                          }}
                        >
                          Suggestions
                        </Text>
                        <FlatList
                          ref={flatListRef}
                          horizontal
                          data={cafeRestaurantsData}
                          keyExtractor={(item, index) => index.toString()}
                          renderItem={renderItem}
                          showsHorizontalScrollIndicator={false}
                          contentContainerStyle={{ paddingHorizontal: 32 }}
                        />
                      </View>
                      <View style={{ marginTop: 34, paddingHorizontal: 32 }}>
                        <GradientButton
                          colors={["#FFC634", "#FF8400"]}
                          title="Confirm location"
                          customTextStyle={{}}
                          onPress={() => {
                            handleStepPress(currentStep - 1);
                          }}
                        />
                      </View>
                    </View>
                  </Animatable.View>
                )}
              </View>
            </View>
          </Animatable.View>
          <CalanderModal
            isVisible={isDateModalVisible}
            onClose={(dates) => {
              const markedDatesKeys = Object?.keys(dates);
              const firstIndexDate = markedDatesKeys[1];
              const lastIndexDate =
                markedDatesKeys[markedDatesKeys?.length - 1];
              if (markedDatesKeys.length > 2) {
                setdateRange(
                  `${moment(firstIndexDate, "YYYY-MM-DD").format(
                    "DD/MM/YYYY"
                  )} to ${moment(lastIndexDate, "YYYY-MM-DD").format(
                    "DD/MM/YYYY"
                  )}`
                );
              }
              setisDateModalVisible(false);
            }}
          />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode={calMode}
            is24Hour={false}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            buttonTextColorIOS={Colors.appColorPrimary}
          />
          <UploadImageOptionSheet
            isVisible={isModalSheetVisible}
            onGallery={onGallery}
            onCamera={onCamera}
            onClose={() => setisModalSheetVisible(false)}
          />
        </SafeAreaView>
        <View style={{ height: currentStep != 3 ? 70 : 0 }} />
      </KeyboardAwareScrollView>

      <SelectAgeModal
        isVisible={isAgeModalVisible}
        onClose={() => setisAgeModalVisible(false)}
        minAge={minAge}
        maxAge={maxAge}
        setminAge={setminAge}
        setmaxAge={setmaxAge}
      />
      <Loader isLoading={isLoading} />
    </View>
  );
}
const styles = StyleSheet.create({
  listView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 24,
    borderBottomColor: Colors?.borderColor1,
    marginRight: 48,
    borderBottomWidth: 1,
    paddingBottom: 16,
  },
  listText: {
    ...commonStyles.font14Regular,
    color: Colors?.greyText,
  },
  mainView: {
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  headerText: {
    ...commonStyles.font14Regular,
    color: Colors.appColorPrimary,
  },
  datesTabView: {
    height: 40,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    marginTop: 16,
  },
  dateView: {
    borderBottomWidth: 3,
    flex: 0.4,
    alignItems: "center",
    paddingBottom: 4,
    borderRadius: 2,
  },
});
