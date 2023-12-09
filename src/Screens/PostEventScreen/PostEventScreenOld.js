import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useRef, useState} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import Colors from '../../Styles/Colors';
import Modal from 'react-native-modal'
import commonStyles from '../../Styles/commonStyles';
import Header from '../../Components/Header';
import ImagePath from '../../Constants/ImagePath';
import ButtonComp from '../../Components/ButtonComp';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import MapView, {Marker} from 'react-native-maps';
import ImagePicker from 'react-native-image-crop-picker';
import * as Animatable from 'react-native-animatable';

import {
  height,
  moderateScale,
  moderateScaleVertical,
  width,
} from '../../Styles/responsiveSize';
import StepIndicator from 'react-native-step-indicator';
import CalanderModal from '../../Components/CalanderModal';
import NumberOfPeopleModal from '../../Components/CommonModal';
import CommonModal from '../../Components/CommonModal';
import moment from 'moment';
import {useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import UploadImageOptionSheet from '../../Components/UploadImageOptionSheet';
import NavigationStrings from '../../Constants/NavigationStrings';
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectTimeRangeModal from '../../Components/SelectTimeRangeModal';
import SelectAgeModal from '../../Components/SelectAgeModal';
export default function PostEventScreen({navigation}) {
  const locationInfo = useSelector(data => data?.location?.locationInfo);

  const markerRef = useRef(null);
  const [imagesData, setimagesData] = useState([])
  const [isTimeModalVisible, setisTimeModalVisible] = useState(false)
  const [startTime, setstartTime] = useState('')
  const [endTime, setendTime] = useState('')

  const [state, setState] = useState({
    selectedLat: locationInfo?.coords?.latitude,
    selectedLng: locationInfo?.coords?.longitude,
    searchedLocation: '',
    isLoading: false,
    locationDetails: '',
  });
  const {
    isLoading,
    searchedLocation,
    selectedLng,
    selectedLat,
    locationDetails,
  } = state;
  const updateState = data => setState(state => ({...state, ...data}));
  const [isReadyToCreate, setisReadyToCreate] = useState(false);
  const [currentPossition, setcurrentPossition] = useState(0);
  const [isDateModalVisible, setisDateModalVisible] = useState(false);
  const [activeCat, setactiveCat] = useState(0);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isPeopleModalVisible, setisPeopleModalVisible] = useState(false);
  const [numberPeople, setnumberPeople] = useState(0);
  const [contentType, setcontentType] = useState(1);
  const [Gender, setGender] = useState('');
  const [langType, setlangType] = useState('');
  const [time, settime] = useState('');
  const [dateRange, setdateRange] = useState('');
  const [isModalSheetVisible, setisModalSheetVisible] = useState(false);
  const [animateClassName, setanimateClassName] = useState('slideInRight')
  const [minAge, setminAge] = useState('')
  const [maxAge, setmaxAge] = useState('')
  const [isAgeModalVisible, setisAgeModalVisible] = useState(false)

  const [age, setage] = useState(0);
  const [isAge, setisAge] = useState(false);

  const [activeType, setactiveType] = useState(-1);
  const [typeData, settypeData] = useState([
    {
      image: ImagePath.gameIcon,
      name: 'Card',
    },
    {
      image: ImagePath.sports,
      name: 'Sport',
    },
    {
      image: ImagePath.music,
      name: 'Music',
    },
    {
      image: ImagePath.outdoorFilter,
      name: 'Outdoor',
    },
    {
      image: ImagePath.travel,
      name: 'Travel',
    },
    {
      image: ImagePath.lifeIcon,
      name: 'Life',
    },
    {
      image: ImagePath.platteFilter,
      name: 'Arts',
    },
    {
      image: ImagePath.petIcon,
      name: 'Pets',
    },
    {
      image: ImagePath.Group,
      name: 'Jobs',
    },
    {
      image: ImagePath.otherIcon,
      name: 'Others',
    },
  ]);
  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 25,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 2,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 2,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#D9D9D9',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#D9D9D9',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
  };
  const [categoryType, setcategoryType] = useState([
    'All',
    'Cat/ Dog Walking',
    'Pet Sitting',
    'Others',
  ]);
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    settime(moment(date).format('HH:MM'));
    hideDatePicker();
  };
  const getLocationName = async () => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${selectedLat}&lon=${selectedLng}`,
      );
      const data = await response.json();
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
      console.log(locationName, 'locationaaaNamelocationName');
      //  markerRef.current.
      // return locationName;
    } catch (error) {
      console.error('Error fetching location name:', error);
      return 'Unknown Location';
    }
  };

  const onGallery=()=>{
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      setisModalSheetVisible(false)
      let data=[...imagesData]
      data.push(image.path)
      setimagesData(data)
      console.log(image);
    });
  }
  const onCamera=()=>{
    setisModalSheetVisible(false)
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setisModalSheetVisible(false)
      let data=[...imagesData]
      data.push(image.path)
      setimagesData(data)
      console.log(image);
    });
  }
  return (
    // <WrapperContainer bgColor={Colors.white} statusBarColor={Colors.white}>
    <View style={{flex:1,backgroundColor:Colors.white}}>
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
          <SafeAreaView style={{flex:1,backgroundColor:Colors.white}}>
        <Animatable.View animation={animateClassName} duration={100} style={{flex:1,backgroundColor:Colors.white}}>
        {isReadyToCreate ? (
          <View style={{flex: 1}}>
            <Header
              showLeft={
                currentPossition == 0 ? ImagePath.close : ImagePath.backBtn
              }
              headerTextStyle={{...commonStyles.font30Italic}}
              onPressLeft={() => {
                if (!!currentPossition) {
                  setanimateClassName('slideInLeft')
                  setcurrentPossition(currentPossition - 1);
                } else {
                  setisReadyToCreate(false);
                }
              }}
            />
            <View style={{flex: 1}}>
              <Text
                style={{
                  ...commonStyles.font20Medium,
                  textAlign: 'center',
                  marginVertical: 16,
                }}>
                {currentPossition == 0
                  ? 'Choose your event type'
                  : currentPossition == 1
                  ? 'What is your event basics'
                  : currentPossition == 2
                  ? 'Where is your event located?'
                  : 'Give your event title &\ndescription'}
              </Text>
              <StepIndicator
                customStyles={customStyles}
                stepCount={4}
                renderStepIndicator={evet => {
                  return (
                    <TouchableOpacity
                      onPress={() => setcurrentPossition(evet?.position)}>
                      {evet?.stepStatus == 'finished' ? (
                        <Image source={ImagePath.checkWhite} />
                      ) : (
                        <Text
                          style={{
                            ...commonStyles.font11Regular,
                            color: Colors.appColorPrimary,
                          }}>
                          {evet?.position + 1}
                        </Text>
                      )}
                    </TouchableOpacity>
                  );
                }}
                currentPosition={currentPossition}
              />
              {currentPossition == 0 && (
                <Animatable.View
                animation={animateClassName}
                duration={500}
                  style={{
                    //   width: width - 32,
                    marginTop: 80,
                  }}>
                  <FlatList
                    data={typeData}
                    numColumns={5}
                    disableVirtualization={true}
                    contentContainerStyle={{
                      paddingHorizontal: 16,
                      marginTop: 16,
                      paddingRight: 32,
                    }}
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    renderItem={({item, index}) => {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            setactiveType(index);
                          }}
                          style={{
                            width: 60,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 28,
                          }}>
                          <View>
                            <View
                              style={{
                                width: 54,
                                height: 54,
                                backgroundColor:
                                  activeType == index ? '#EFF0F0' : null,
                                borderRadius: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                overflow: 'visible',
                              }}>
                              <Image
                                source={item?.image}
                                style={{
                                  marginTop: activeType == index ? -16 : 0,
                                  width: activeType == index ? 48 : 37,
                                  height: activeType == index ? 57 : 37,
                                  resizeMode: 'contain',
                                  tintColor:
                                    activeType == index
                                      ? Colors.appColorPrimary
                                      : '#FF840080',
                                }}
                              />
                            </View>
                          </View>
                          <Text
                            style={{
                              ...commonStyles.font11Regular,
                              marginTop: 8,
                              color:
                                activeType == index
                                  ? Colors.appColorPrimary
                                  : Colors?.ABABAB,
                            }}>
                            {item?.name}
                          </Text>
                        </TouchableOpacity>
                      );
                    }}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: moderateScaleVertical(40),
                      marginTop: moderateScale(108),
                    }}>
                    {categoryType?.map((res, index) => {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            setactiveCat(index);
                          }}
                          key={index}
                          style={{
                            borderWidth: activeCat == index ? 1 : 0,
                            borderRadius: moderateScale(5),
                            paddingVertical: 1,
                            paddingHorizontal: moderateScaleVertical(10),
                            backgroundColor:
                              activeCat == index
                                ? 'rgba(255, 132, 0, 0.50)'
                                : Colors?.borderColor,
                            borderColor:
                              activeCat == index
                                ? Colors?.appColorPrimary
                                : Colors?.borderColor,
                          }}>
                          <Text
                            style={{
                              ...commonStyles.font10Grey,
                              color:
                                activeCat == index
                                  ? Colors?.white
                                  : Colors?.greyText,
                            }}>
                            {res}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </Animatable.View>
              )}
              {currentPossition == 1 && (
                <Animatable.View
                animation={animateClassName}
                duration={500}
                  style={{
                    //   width: width - 32,
                    marginTop: moderateScaleVertical(120),
                  }}>
                  <View style={styles.listView}>
                    <Text style={styles?.listText}>Date</Text>
                    <TouchableOpacity
                      onPress={() => {
                        setisDateModalVisible(true);
                      }}>
                      <Text style={styles?.listText}>
                        {!!dateRange ? dateRange : `Any date`}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{...styles.listView, marginTop: 18}}>
                    <Text style={styles?.listText}>Time</Text>
                    <TouchableOpacity
                      onPress={() => setisTimeModalVisible(true)}>
                      <Text style={styles?.listText}>
                        {(!!startTime&& !!endTime) ? `${startTime} To ${endTime}` : `Any time `}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{...styles.listView, marginTop: 18}}>
                    <Text style={styles?.listText}># of people</Text>
                    <TouchableOpacity
                      onPress={() => {
                        setcontentType(1);
                        setisPeopleModalVisible(true);
                      }}>
                      <Text style={styles?.listText}>
                        {!!numberPeople ? numberPeople : `Any number`}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{...styles.listView, marginTop: 18}}>
                    <Text style={styles?.listText}>{`Age`}</Text>
                    <TouchableOpacity
                      onPress={() => {
                        // setcontentType(2);
                        // setisPeopleModalVisible(true);
                        setisAgeModalVisible(true)
                      }}>
                      <Text style={styles?.listText}>
                        {(!!minAge && !!maxAge) ? `${minAge} yrs to ${maxAge} yrs` : `Any age`}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{...styles.listView, marginTop: 18}}>
                    <Text style={styles?.listText}>Gender </Text>
                    <TouchableOpacity
                      onPress={() => {
                        setcontentType(3);
                        setisPeopleModalVisible(true);
                      }}>
                      <Text style={styles?.listText}>
                        {!!Gender ? Gender : `Any one`}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{...styles.listView, marginTop: 18}}>
                    <Text style={styles?.listText}>Event language</Text>
                    <TouchableOpacity
                      onPress={() => {
                        setcontentType(4);
                        setisPeopleModalVisible(true);
                      }}>
                      <Text style={styles?.listText}>
                        {!!langType ? langType : `Any language`}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </Animatable.View>
              )}
              {currentPossition == 2 && (
                <Animatable.View
                animation={animateClassName}
                duration={500} style={{marginTop: 16, flex: 1}}>
                  <MapView
                    //provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={{
                      ...styles.map,
                      alignSelf: 'center',
                      //  overflow: 'hidden'
                      width: '100%',
                      zIndex: -100,
                      flex: 1,
                      // height: moderateScaleVertical(500),
                    }}
                    onRegionChangeComplete={e => {
                      console.log(e, 'euwnfuwneufnewu'),
                        updateState({
                          selectedLat: e.latitude,
                          selectedLng: e.longitude,
                        });
                      getLocationName();
                      // updateState({selectedLat:e.latitude,selectedLng:e.longitude});
                      // markerRef.current.setNativeProps({ title: locationDetails, description: searchedLocation });
                    }}
                    zoomEnabled={true}
                    moveOnMarkerPress={true}
                    //customMapStyle={{borderRadius:400,width:"100%",height:moderateScaleVertical(isKeyboardShown?140:400)}}
                    region={{
                      latitude: selectedLat,
                      longitude: selectedLng,
                      latitudeDelta: 0.015,
                      longitudeDelta: 0.0121,
                    }}>
                    <Marker
                      key={selectedLat}
                      ref={ref => (markerRef.current = ref)}
                      coordinate={{
                        latitude: selectedLat,
                        longitude: selectedLng,
                      }}
                      tappable={true}
                      title={locationDetails}
                      description={searchedLocation}
                      tracksInfoWindowChanges={true}
                      isPreselected={true}>
                      <Image
                        source={ImagePath.locationPin}
                        style={{width: 44, height: 44, resizeMode: 'contain'}}
                      />
                    </Marker>
                  </MapView>
                  <View
                    style={{
                      flex: 0.5,
                      backgroundColor: Colors.white,
                      borderTopRightRadius: 20,
                      borderTopLeftRadius: 20,
                      marginTop: -20,
                    }}>
                    <View
                      style={{
                        height: 38,
                        backgroundColor: '#F2F2F2',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 16,
                        alignItems: 'center',
                        marginTop: 16,
                        marginHorizontal: 18,
                        borderRadius: 20,
                      }}>
                      <TextInput
                        placeholder="Enter your location"
                        style={{padding: 0}}
                      />
                      <Image source={ImagePath.searchIcon} />
                    </View>
                  </View>
                </Animatable.View>
              )}
              {currentPossition == 3 && (
                <Animatable.View
                animation={animateClassName}
                duration={500} style={{flex: 1}}>
                  <View
                    style={{
                      height: moderateScale(300),
                      borderWidth: 1,
                      borderRadius: 20,
                      borderColor: Colors.borderColor1,
                      marginHorizontal: 24,
                      marginTop: 80,
                    }}>
                    <View
                      style={{
                        height: 48,
                        borderBottomWidth: 1,
                        borderBlockColor: Colors.borderColor1,
                        justifyContent: 'center',
                        paddingHorizontal: 8,
                      }}>
                      <TextInput
                        placeholder="Title"
                        style={{...commonStyles.font13RedMedium}}
                      />
                    </View>
                    <View style={{paddingHorizontal: 8, paddingTop: 8}}>
                      <TextInput
                        placeholder="Tell everyone about your event"
                        tyle={{...commonStyles.font13RedMedium}}
                      />
                    </View>
                  </View>
                    {!!imagesData?.length && <View style={{paddingHorizontal:24,marginTop:24,flexDirection:'row',flexWrap:'wrap'}}>
                      {imagesData?.map((res)=>{
                        return(
                          <Image source={{uri:res}} style={{width:104,height:128,borderRadius:10,marginRight:16,marginBottom:16}}/>
                        )
                      })}
                      <TouchableOpacity onPress={()=>setisModalSheetVisible(true)} style={{width:104,justifyContent:'center',alignItems:'center',height:128,borderWidth:1,borderRadius:10,borderWidth:1,borderColor:Colors?.borderColor1}}>
                      <Image source={ImagePath.addGrey}/>
                      </TouchableOpacity>
                    </View>}
                  {!!imagesData?.length?<View style={{marginHorizontal:24,marginBottom:32,marginTop:16}}>
                    <ButtonComp
                    onPress={()=>navigation.navigate(NavigationStrings.HOME)}
                    btnText='Post'
                    />
                  </View>:<TouchableOpacity
                  onPress={()=>setisModalSheetVisible(true)}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'row',
                      borderWidth: 1,
                      height: 48,
                      borderRadius: 20,
                      marginHorizontal: 24,
                      marginTop:!!imagesData?.length?24:80,
                      borderColor: Colors.borderColor1,
                      marginBottom:16
                    }}>
                    <Image source={ImagePath.gallery} />
                    <Text
                      style={{
                        ...commonStyles.font15Black,
                        marginLeft: 16,
                        color: Colors.greyText,
                      }}>
                      Add photos
                    </Text>
                  </TouchableOpacity>}
                </Animatable.View>
              )}
            </View>
          </View>
        ) : (
          <View style={{flex: 1}}>
            <Header
              headerName={'发表'}
              showLeft={ImagePath.close}
              headerTextStyle={{...commonStyles.font30Italic}}
            />
            <View
              style={{
                flex: 0.7,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={ImagePath.tutorial_img}
                style={{width: width, resizeMode: 'stretch'}}
              />
            </View>
            <View style={{flex: 0.3, paddingTop: 16}}>
              <Text style={{...commonStyles.font30medium, textAlign: 'center'}}>
                Ready to post an Event?
              </Text>
              <View style={{paddingHorizontal: 24, marginTop: 60}}>
                <ButtonComp
                  onPress={() => {
                    setisReadyToCreate(true);
                  }}
                  btnText="Get Started"
                />
              </View>
            </View>
          </View>
        )}
        </Animatable.View>
        <CalanderModal
          isVisible={isDateModalVisible}
          onClose={dates => {
            const markedDatesKeys = Object?.keys(dates);
            const firstIndexDate = markedDatesKeys[1];
            const lastIndexDate = markedDatesKeys[markedDatesKeys?.length - 1];
          if(markedDatesKeys.length>2)
            {
            
              setdateRange(
                `${moment(firstIndexDate, 'YYYY-MM-DD').format(
                  'DD/MM/YYYY',
                )} to ${moment(lastIndexDate, 'YYYY-MM-DD').format(
                  'DD/MM/YYYY',
                )}`,
              );
            }
            setisDateModalVisible(false);
          }}
        />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="time"
          is24Hour={false}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          buttonTextColorIOS={Colors.appColorPrimary}
        />
        <CommonModal
          isVisible={isPeopleModalVisible}
          value={contentType == 2 ? age : numberPeople}
          contentType={contentType}
          onClose={data => {
            if (contentType == 2) {
              setage(data);
            }
            if (contentType == 1) {
              setnumberPeople(data);
            }
            if (contentType == 3) {
              setGender(data);
            }
            if (contentType == 4) {
              setlangType(data.name);
            }
            setisPeopleModalVisible(false);
          }}
        />
        <UploadImageOptionSheet
          isVisible={isModalSheetVisible}
          onGallery={onGallery}
          onCamera={onCamera}
          onClose={() => setisModalSheetVisible(false)}
        />
        </SafeAreaView>
      </KeyboardAwareScrollView>
      {isReadyToCreate && currentPossition != 3 && (
        <View
          style={{
            width: 16,
            height: height,
            position: 'absolute',
            backgroundColor: '#FF8400',
            marginTop: 0,
            right: 0,
            overflow: 'visible',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              setanimateClassName('slideInRight')
              setcurrentPossition(currentPossition + 1);
            }}
            style={{
              marginLeft: -38,
              position: 'absolute',
              bottom: height / 3.8,
            }}>
            <Image source={ImagePath.shape_ic} />
          </TouchableOpacity>
        </View>
      )}
      <SelectTimeRangeModal
      onClose={()=>setisTimeModalVisible(false)}
      startTime={startTime}
      endTime={endTime}
      setstartTime={setstartTime}
      setendTime={setendTime}
      isVisible={isTimeModalVisible}/>
      <SelectAgeModal
      isVisible={isAgeModalVisible}
      onClose={()=>setisAgeModalVisible(false)}
      minAge={minAge}
      maxAge={maxAge}
      setminAge={setminAge}
      setmaxAge={setmaxAge}
      />
      </View>
    // </WrapperContainer>
  );
}
const styles = StyleSheet.create({
  listView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  mainView:
  {
    borderRadius:20,
      overflow: 'hidden',
      backgroundColor: Colors.white,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 16,
    },
    headerText: {
      ...commonStyles.font14Regular,
      color: Colors.appColorPrimary,
    },
    datesTabView:
    {
      height: 40,
      marginBottom: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 24,
      marginTop: 16,
    },
    dateView:
    {
      borderBottomWidth: 3,
      flex: 0.4,
      alignItems: 'center',
      paddingBottom: 4,
      borderRadius: 2,
    
    }
});