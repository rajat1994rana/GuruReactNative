import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Animated,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import Swiper from "react-native-deck-swiper";
import CardDetailsModal from "../../Components/CardDetailsModal";
import CardsPost from "../../Components/CardPosts";
import Header from "../../Components/Header";
import IconButton from "../../Components/IconButton";
import WrapperContainer from "../../Components/WrapperContainer";
import ImagePath from "../../Constants/ImagePath";
import Colors from "../../Styles/Colors";
import commonStyles from "../../Styles/commonStyles";
import { width } from "../../Styles/responsiveSize";
import styles from "./styles";
import ActionSheetComp from "../../Components/ActionSheetComp";
import Loader from "../../Components/Loader";
import NavigationStrings from "../../Constants/NavigationStrings";
import Modal1 from "react-native-modal";
import { View } from "react-native-animatable";
import FastImage from "react-native-fast-image";
import * as Animatable from "react-native-animatable";
import GradientButton from "../../Components/GradientButton";
import LinearGradient from "react-native-linear-gradient";

const dataa = [
  {
    id: 1,
    userName: "橙橙橙er汁",
    postImg: ImagePath.casino,
    location: "Bellevue, WA",
    dateCreated: "04-13",
    content: "德扑克新手 ♠️",
    distance: "周二9:00 PM | 距离 2.7mi",
    tagsArray: ["打牌", "桌游", "打游"],
    postText:
      "太久没认识新朋友了，刚来西雅图， 大学高中都是在🇺🇸，想多社交认识些可以意思打德州的朋友，喜欢的滴滴我吧！",
  },
  {
    id: 2,
    userName: "User A",
    postImg: ImagePath.casino,
    location: "Bellevue, WA",
    dateCreated: "04-13",
    content: "Poker starters ♠️",
    distance: "Tuesday 9:00 PM | 2.7mi away",
    tagsArray: ["Card Game", "Poker", "Blackjack"],
    postText:
      "Its been a long time since I last played poker! Just moved to Seattle and I'm trying to find some new friends play poker together. Join the event if you are interested!",
  },
  {
    id: 3,
    userName: "User B",
    postImg: ImagePath.artist,
    location: "Bellevue, WA",
    dateCreated: "04-13",
    content: "Poker starters ♠️",
    distance: "Tuesday 9:00 PM | 2.7mi away",
    tagsArray: ["Card Game", "Poker", "Blackjack"],
    postText:
      "Its been a long time since I last played poker! Just moved to Seattle and I'm trying to find some new friends play poker together. Join the event if you are interested!",
  },
  {
    id: 4,
    userName: "User B",
    postImg: ImagePath.artist,
    location: "Bellevue, WA",
    dateCreated: "04-13",
    content: "Poker starters ♠️",
    distance: "Tuesday 9:00 PM | 2.7mi away",
    tagsArray: ["Card Game", "Poker", "Blackjack"],
    postText:
      "Its been a long time since I last played poker! Just moved to Seattle and I'm trying to find some new friends play poker together. Join the event if you are interested!",
  },
  {
    id: 5,
    userName: "User B",
    postImg: ImagePath.artist,
    location: "Bellevue, WA",
    dateCreated: "04-13",
    content: "Poker starters ♠️",
    distance: "Tuesday 9:00 PM | 2.7mi away",
    tagsArray: ["Card Game", "Poker", "Blackjack"],
    postText:
      "Its been a long time since I last played poker! Just moved to Seattle and I'm trying to find some new friends play poker together. Join the event if you are interested!",
  },
];

const Home = ({ navigation, route }) => {
  const [isDetailsVisible, setisDetailsVisible] = useState(false);
  const [isReportVisible, setisReportVisible] = useState(false);
  // useFocusEffect(
  //   useCallback(() => {
  //      setNewPostsData(dataa);
  //   }, []));

  const [state, setState] = useState({
    isLoading: false,
    handleClickCheck: false,
  });
  const { isLoading, handleClickCheck } = state;
  const updateState = (data) => setState((state) => ({ ...state, ...data }));
  const [selectedPost, setselectedPost] = useState({
    id: 1,
    userName: "Eldon Agolsti",
    postImg: ImagePath.image1,
    userAbout: "Content Specialist at Superopa",
    educatio: "Rollins College 2012 - 2016",
    location: "Bellevue, WA",
    dateCreated: "04-13",
    content: "德扑克新手 ♠️",
    distance: "周二9:00 PM | 距离 2.7mi",
    tagsArray: ["打牌", "桌游", "打游"],
    postText:
      "太久没认识新朋友了，刚来西雅图， 大学高中都是在🇺🇸，想多社交认识些可以意思打德州的朋友，喜欢的滴滴我吧！",
  });
  const [listData, setListData] = useState(
    Array(20)
      .fill("")
      .map((_, i) => ({ key: `${i}`, text: `item #${i}` }))
  );

  // const [newPostsData, setNewPostsData] = useState([
  //   {
  //     id: 1,
  //     userName: "橙橙橙er汁",
  //     postImg: ImagePath.casino,
  //     location: "Bellevue, WA",
  //     dateCreated: "04-13",
  //     content: "德扑克新手 ♠️",
  //     distance: "周二9:00 PM | 距离 2.7mi",
  //     tagsArray: ["打牌", "桌游", "打游"],
  //     postText:
  //       "太久没认识新朋友了，刚来西雅图， 大学高中都是在🇺🇸，想多社交认识些可以意思打德州的朋友，喜欢的滴滴我吧！",
  //   },
  //   {
  //     id: 2,
  //     userName: "User A",
  //     postImg: ImagePath.casino,
  //     location: "Bellevue, WA",
  //     dateCreated: "04-13",
  //     content: "Poker starters ♠️",
  //     distance: "Tuesday 9:00 PM | 2.7mi away",
  //     tagsArray: ["Card Game", "Poker", "Blackjack"],
  //     postText:
  //       "Its been a long time since I last played poker! Just moved to Seattle and I'm trying to find some new friends play poker together. Join the event if you are interested!",
  //   },
  //   {
  //     id: 3,
  //     userName: "User B",
  //     postImg: ImagePath.artist,
  //     location: "Bellevue, WA",
  //     dateCreated: "04-13",
  //     content: "Poker starters ♠️",
  //     distance: "Tuesday 9:00 PM | 2.7mi away",
  //     tagsArray: ["Card Game", "Poker", "Blackjack"],
  //     postText:
  //       "Its been a long time since I last played poker! Just moved to Seattle and I'm trying to find some new friends play poker together. Join the event if you are interested!",
  //   },
  //   {
  //     id: 4,
  //     userName: "User B",
  //     postImg: ImagePath.casino,
  //     location: "Bellevue, WA",
  //     dateCreated: "04-13",
  //     content: "Poker starters ♠️",
  //     distance: "Tuesday 9:00 PM | 2.7mi away",
  //     tagsArray: ["Card Game", "Poker", "Blackjack"],
  //     postText:
  //       "Its been a long time since I last played poker! Just moved to Seattle and I'm trying to find some new friends play poker together. Join the event if you are interested!",
  //   },
  //   {
  //     id: 5,
  //     userName: "User B",
  //     postImg: ImagePath.profileImg2,
  //     location: "Bellevue, WA",
  //     dateCreated: "04-13",
  //     content: "Poker starters ♠️",
  //     distance: "Tuesday 9:00 PM | 2.7mi away",
  //     tagsArray: ["Card Game", "Poker", "Blackjack"],
  //     postText:
  //       "Its been a long time since I last played poker! Just moved to Seattle and I'm trying to find some new friends play poker together. Join the event if you are interested!",
  //   },
  // ]);
  const [newPostsData, setNewPostsData] = useState([
    {
      id: 1,
      userName: "Eldon Agolsti",
      postImg: ImagePath.image1,
      images:[ImagePath.image1,ImagePath.casino,ImagePath.artist,ImagePath.casino,ImagePath.profileImg2],
      userAbout: "Content Specialist at Superopa",
      educatio: "Rollins College 2012 - 2016",
      location: "Bellevue, WA",
      dateCreated: "04-13",
      content: "德扑克新手 ♠️",
      distance: "周二9:00 PM | 距离 2.7mi",
      tagsArray: ["打牌", "桌游", "打游"],
      postText:
        "太久没认识新朋友了，刚来西雅图， 大学高中都是在🇺🇸，想多社交认识些可以意思打德州的朋友，喜欢的滴滴我吧！",
    },
    {
      id: 2,
      userName: "User A",
      postImg: ImagePath.casino,
      images:[ImagePath.image1,ImagePath.casino,ImagePath.artist,ImagePath.casino,ImagePath.profileImg2],
      userAbout: "developer Specialist at Superopa",
      educatio: "Rollins College 2011 - 2012",
      location: "Bellevue, WA",
      dateCreated: "04-13",
      content: "Poker starters ♠️",
      distance: "Tuesday 9:00 PM | 2.7mi away",
      tagsArray: ["Card Game", "Poker", "Blackjack"],
      postText:
        "Its been a long time since I last played poker! Just moved to Seattle and I'm trying to find some new friends play poker together. Join the event if you are interested!",
    },
    {
      id: 3,
      userName: "User B",
      postImg: ImagePath.artist,
      images:[ImagePath.image1,ImagePath.casino,ImagePath.artist,ImagePath.casino,ImagePath.profileImg2],
      userAbout: "Designer Specialist at Superopa",
      educatio: "Rollins College 2011 - 2017",
      location: "Bellevue, WA",
      dateCreated: "04-13",
      content: "Poker starters ♠️",
      distance: "Tuesday 9:00 PM | 2.7mi away",
      tagsArray: ["Card Game", "Poker", "Blackjack"],
      postText:
        "Its been a long time since I last played poker! Just moved to Seattle and I'm trying to find some new friends play poker together. Join the event if you are interested!",
    },
    {
      id: 4,
      userName: "User B",
      postImg: ImagePath.casino,
      images:[ImagePath.image1,ImagePath.casino,ImagePath.artist,ImagePath.casino,ImagePath.profileImg2],
      location: "Bellevue, WA",
      dateCreated: "04-13",
      content: "Poker starters ♠️",
      distance: "Tuesday 9:00 PM | 2.7mi away",
      tagsArray: ["Card Game", "Poker", "Blackjack"],
      postText:
        "Its been a long time since I last played poker! Just moved to Seattle and I'm trying to find some new friends play poker together. Join the event if you are interested!",
    },
    {
      id: 5,
      userName: "User B",
      postImg: ImagePath.profileImg2,
      images:[ImagePath.image1,ImagePath.casino,ImagePath.artist,ImagePath.casino,ImagePath.profileImg2],
      location: "Bellevue, WA",
      dateCreated: "04-13",
      content: "Poker starters ♠️",
      distance: "Tuesday 9:00 PM | 2.7mi away",
      tagsArray: ["Card Game", "Poker", "Blackjack"],
      postText:
        "Its been a long time since I last played poker! Just moved to Seattle and I'm trying to find some new friends play poker together. Join the event if you are interested!",
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setisModalVisible2] = useState(false);
  const [isCrossModalVisible, setIsCrossModalVisible] = useState(false);
  const animationIsRunning = useRef(false);
  const position = useRef(new Animated.Value(0)).current;
  const animatedValues = useRef(
    newPostsData.map(() => new Animated.Value(0))
  ).current;
  const animatedValue = useRef(
    newPostsData.map(() => new Animated.Value(0))
  ).current;

  const useSwiper = useRef(null);
  const handleOnSwipedLeft = () => useSwiper.current.swipeLeft();
  const handleOnSwipedTop = () => useSwiper.current.swipeTop();
  const handleOnSwipedRight = () => useSwiper.current.swipeRight();

  const [currentCardIndex, setCurrentCardIndex] = useState(null);

  const handleViewableItemsChanged = useCallback(
    ({ viewableItems, changed }) => {
      console.log(changed, "changediii");
      if (viewableItems.length > 0) {
        console.log(viewableItems[0], "viewableItems[0]");
        const { index } = viewableItems[0];
        setCurrentCardIndex(index);
      }
    },
    []
  );

  const handleMoveOutLeft = (index) => {
    console.log(index, "indexxssxbxxxs");
    Animated.timing(animatedValues[index], {
      toValue: -500, // Adjust this value to move the card off-screen
      duration: 500, // Duration of the animation in milliseconds
      useNativeDriver: true,
    }).start(() => {
      let nextIndex = index + 1;
      // const newData = [...newPostsData];
      // newData.splice(index, 1);
      const newData = newPostsData.filter((item, ind) => ind !== index);
      console.log(newData, "newDataksskkkkkk");
      setTimeout(() => {
        // updateState({handleClickCheck:true})
        setNewPostsData(newData);
        Animated.timing(animatedValues[index], {
          toValue: 0, // Adjust this value to move the card off-screen
          duration: 5, // Duration of the animation in milliseconds
          useNativeDriver: true,
        }).start();
      }, 800);
    });
  };

  const handleMoveOut = (index) => {
    console.log(index, "indexxxbxxx");
    Animated.timing(animatedValues[index], {
      toValue: 500, // Adjust this value to move the card off-screen
      duration: 500, // Duration of the animation in milliseconds
      useNativeDriver: true,
    }).start(() => {
      let nextIndex = index + 1;

      const newData = newPostsData.filter((item, ind) => ind !== index);
      // console.log(newData,"newDatakkkkkkk");
      setTimeout(() => {
        // updateState({handleClickCheck:true})
        setNewPostsData(newData);
        Animated.timing(animatedValues[index], {
          toValue: 0, // Adjust this value to move the card off-screen
          duration: 50, // Duration of the animation in milliseconds
          useNativeDriver: true,
        }).start();
      }, 800);
    });
  };

  const renderCardItem = useCallback(({ item, index }) => {
    let newInd = index + 1;
    const animatedStyle = {
      transform: [{ translateX: animatedValues[index] }],
    };

    return (
      <Animated.View style={[animatedStyle]}>
        <CardsPost
          item={item}
          setisReportVisible={setisReportVisible}
          index={index}
        />
      </Animated.View>
    );
  }, []);

  const cardSwiper = () => {
    return (
      <Swiper
        ref={useSwiper}
        animateCardOpacity={false}
        onTapCardDeadZone={0}
        marginTop={40}
        marginBottom={100}
        onTapCard={() => {}}
        scrollEnabled={false}
        disableLeftSwipe
        disableRightSwipe={true}
        disableTopSwipe
        disableBottomSwipe
        containerStyle={{ innerHeight: 400, outerHeight: 400 }}
        cards={newPostsData}
        // childrenOnTop={true}
        renderCard={(item) => <CardsPost item={item} />}
        cardIndex={0}
        cardHorizontalMargin={0}
        cardVerticalMargin={0}
        cardStyle={{ width: "100%", marginHorizontal: 0, height: 400 }}
        backgroundColor="white"
        stackSize={1}
        infinite
        horizontalSwipe={false}
        verticalSwipe={false}
        showSecondCard
        swipeAnimationDuration={300}
        animateOverlayLabelsOpacity
        // overlayLabels={{
        //   left: {
        //     title: 'NOPE',
        //     element: <OverlayLabel label="NOPE" color="#E5566D" />,
        //     style: {
        //       wrapper: styles.overlayWrapper,
        //     },
        //   },
        //   right: {
        //     title: 'LIKE',
        //     element: <OverlayLabel label="LIKE" color="#4CCC93" />,
        //     style: {
        //       wrapper: {
        //         ...styles.overlayWrapper,
        //         alignItems: 'flex-start',
        //         marginLeft: 30,
        //       },
        //     },
        //   },
        // }}
      />
    );
  };

  const [isCardModalVisible, setisCardModalVisible] = useState(false);
  const [cardItem, setcardItem] = useState({});

  useEffect(() => {
   if(isCrossModalVisible)
   {
    setTimeout(() => {
      setIsCrossModalVisible(false)
    }, 1500);
   }
  }, [isCrossModalVisible])
  const [willAnimationShow, setwillAnimationShow] = useState(false)
  useEffect(() => {
    if(willAnimationShow)
    {
setTimeout(() => {
  setIsModalVisible(true)
}, 500);
    }
  }, [willAnimationShow])
  
  return (
    <WrapperContainer bgColor={Colors.white} statusBarColor={Colors.white}>
      <Header
        headerName={"Explore"}
        imgSourceRight={ImagePath.refresh}
        headerTextStyle={{ ...commonStyles.font30Italic }}
        containerStyle={{
          width: width / 1.05,
          marginHorizontal: 0,
          elevation: 10,
        }}
        rightImgOnPress={() =>
          navigation.navigate(NavigationStrings.EVENT_HISTORY)
        }
      />

      <Pressable style={styles.buttonsContainer}>
        <IconButton
          name={ImagePath.leftIcon}
          customStyle={{ height: 65, width: 65 }}
          onPress={() => {
            setIsCrossModalVisible(true)
            setTimeout(() => {
            handleMoveOutLeft(currentCardIndex)
            }, 500);
          }}
          // color="white"
          // backgroundColor="#FFFFFF"
        />
        <IconButton
          customStyle={{ height: 65, width: 65 }}
          name={ImagePath.middleIcon}
          onPress={() => {
            setisModalVisible2(true);
          }}
          color="white"
        />
        <IconButton
          customStyle={{ height: 65, width: 65 }}
          name={ImagePath.rightIcon}
          onPress={() => {
            if (newPostsData?.length) {
              setIsModalVisible(true);
              setselectedPost(newPostsData[currentCardIndex]);
              handleMoveOut(currentCardIndex);
            }
          }}
        />
      </Pressable>
      <FlatList
        data={newPostsData}
        style={{}}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        //   initialNumToRender={maxRender}
        //   extraData={newPostsData}
        //   onEndReachedThreshold={0.2}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
        //  keyExtractor={(item, index) => index.toString()}
        renderItem={renderCardItem}
        //  ListHeaderComponent={ListHeaderComponent}
      />
      {/* <SwipeListView
         useFlatList={true}
         disableLeftSwipe
         disableRightSwipe
        data={newPostsData}
            renderItem={ renderCardItem}
            renderHiddenItem={ (data, rowMap) => (
                <View style={styles.rowBack}>
                    <Text>Left</Text>
                    <Text>Right</Text>
                </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
        /> */}
      <CardDetailsModal
        isDetailsVisible={isDetailsVisible}
        onClose={() => setisDetailsVisible(false)}
      />
      <ActionSheetComp
        isVisible={isReportVisible}
        firstText={"Report Event"}
        isProfile
        onclose={(isCancel) => {
          if (isCancel) {
            setisReportVisible(false);
          } else {
            updateState({ isLoading: true });
            setisReportVisible(false);
            setTimeout(() => {
              updateState({ isLoading: false });
            }, 1000);
          }
        }}
      />
      <Loader isLoading={isLoading} />
      <Modal
        animationType="fade"
        useNativeDriver={false}
        transparent
        visible={isModalVisible}
        style={{ justifyContent: "center", alignItems: "center" }}
        onRequestClose={() => {
          setIsModalVisible(false);
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(229,227,230,.95)",
            alignItems: "center",
            paddingHorizontal: 16,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 15,
              padding: 24,
              width: width - 32,
              borderWidth: 1,
              borderColor: "#FF8400",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setwillAnimationShow(false)
                setIsModalVisible(false);
              }}
              style={{ alignSelf: "flex-end" }}
            >
              <Image source={ImagePath.modalCross} />
            </TouchableOpacity>
           
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 24,
              }}
            >
              <Animatable.View
            animation={willAnimationShow?'fadeInUp':undefined}
            duration={700}
            style={{justifyContent: "center",
            alignItems: "center",}}
          >
              <Text style={{ ...commonStyles.font14Regular }}>
                Send your profile and a message to
              </Text>
              <Text style={{ ...commonStyles.font16Black }}>
                {selectedPost?.userName}
              </Text>
              </Animatable.View>
              <ImageBackground
                source={ImagePath.ring}
                style={{
                  width: 135,
                  marginTop: 34,
                  height: 135,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                resizeMode="contain"
              >
                <FastImage
                  source={selectedPost?.postImg}
                  style={{ width: 124, height: 124, borderRadius: 132 / 2,}}
                />
              </ImageBackground>
              {/* <Animated.View
                style={[{marginTop:-60}, { transform: [{ translateY: translateY }] }]}
              > */}
               <Animatable.View
            animation={willAnimationShow?'fadeInDown':undefined}
            duration={700}
          >
                { <View
                  style={{
                    height: 47,
                    marginTop: 90,
                    marginBottom: 80,
                    backgroundColor: "#FDF9F0",
                    borderRadius: 30,
                    alignItems: "center",
                    flexDirection: "row",
                    width:width-74,
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ marginLeft: 24 }}
                  >{`Hello! I’m Ivan Fisher and I’d love\nto connect with you!`}</Text>
                 {!willAnimationShow && <TouchableOpacity
                    onPress={() => {
                      setwillAnimationShow(true)
                      setIsModalVisible(false)}}
                    style={{ alignSelf: "center" }}
                  >
                    <Image source={ImagePath.sendBtn} />
                  </TouchableOpacity>}
                </View>}
                </Animatable.View>
              {/* </Animated.View> */}
            </View>
          </View>
        </View>
      </Modal>


























      <Modal
        animationType="fade"
        useNativeDriver={false}
        visible={isModalVisible2}
        transparent={true}
        style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        onRequestClose={() => {
          setisModalVisible2(false);
        }}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: 16,
            justifyContent: "center",
            backgroundColor: "rgba(229,227,230,1)",
          }}
        >
          {isModalVisible2 && (
            <>
              <View
                style={{
                  backgroundColor: "#F2F2F2",
                  borderRadius: 15,
                  padding: 24,
                  borderWidth: 1,
                  borderColor: "#FF8400",
                }}
              >
                <TouchableOpacity
                  onPress={() => setisModalVisible2(false)}
                  style={{ alignSelf: "flex-end", marginTop: 20 }}
                >
                  <Image source={ImagePath.modalCross} />
                </TouchableOpacity>
                <View style={{ marginTop: 34 }}>
                  <GradientButton
                    colors={["#FFC634", "#FF8400"]}
                    title="Host New Event"
                    customTextStyle={{}}
                    onPress={() => {
                      setisModalVisible2(false);
                      navigation?.navigate(NavigationStrings.POST_EVENT_SCREEN);
                    }}
                  />
                  <View
                    style={{
                      height: 1,
                      backgroundColor: "#D9D9D9",
                      marginVertical: 34,
                    }}
                  />
                  <Text
                    style={{
                      ...commonStyles.font14GreyMedium,
                      marginBottom: 16,
                      textAlign: "center",
                      color: "#000000",
                    }}
                  >
                    Invite Eldon Agolsti to existing events
                  </Text>
                  <FlatList
                    data={[
                      {
                        image: ImagePath.card1,
                        title: "ConveyUX ’24\nSeattle",
                      },
                      {
                        image: ImagePath.card2,
                        title: "Paradigm Shift |\nNeurodiversity...",
                      },
                      {
                        image: ImagePath.card3,
                        title: "Women in Tech\nSeattle...",
                      },
                      {
                        image: ImagePath.card4,
                        title: "D6 Northwest - \n2024",
                      },
                    ]}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                    numColumns={2}
                    renderItem={({ item, index }) => {
                      return (
                        <TouchableOpacity
                          onPress={() => {
                            setcardItem(item);
                            setisCardModalVisible(true);
                          }}
                          activeOpacity={0.9}
                          style={{
                            marginBottom: 16,
                            borderRadius: 16,
                            overflow: "hidden",
                          }}
                        >
                          <LinearGradient
                            colors={["rgba(0,0,0,0)", "#000"]}
                            style={{}}
                          >
                            <Image
                              source={item.image}
                              style={{ width: width / 2.8 }}
                            />
                            <Text
                              style={{
                                ...commonStyles.font12BlackMedium,
                                lineHeight: 16,
                                color: "#FFFFFF",
                                position: "absolute",
                                bottom: 6,
                                left: 8,
                              }}
                            >
                              {item?.title}
                            </Text>
                          </LinearGradient>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>
              </View>
              <Modal
                animationType="fade"
                transparent
                visible={isCardModalVisible}
                onBackButtonPress={() => setisCardModalVisible(false)}
                onBackdropPress={() => setisCardModalVisible(false)}
              >
                <Pressable
                  onPress={() => {
                    setisCardModalVisible(false);
                  }}
                  style={{
                    flex: 1,
                    paddingHorizontal: 16,
                    justifyContent: "center",
                    backgroundColor: "rgba(0,0,0,0.3)",
                  }}
                >
                  <View
                    style={{
                      height: 500,
                      backgroundColor: "#F2F2F2",
                      borderRadius: 10,
                      alignItems: "center",
                      paddingTop: 116,
                    }}
                  >
                    <Text style={{ ...commonStyles.font14Regular }}>
                      Congradulations! You’ve sent event
                    </Text>
                    <Text style={{ ...commonStyles.font14Regular }}>
                      invitation to Eldon Agolsti
                    </Text>
                    <View
                      style={{
                        borderRadius: 5,
                        overflow: "hidden",
                        marginTop: 80,
                      }}
                    >
                      <Image source={cardItem?.image} style={{ height: 160 }} />
                      <View
                        style={{
                          height: 34,
                          backgroundColor: "#FFFFFF",
                          justifyContent: "center",
                          paddingHorizontal: 8,
                        }}
                      >
                        <Text style={{ ...commonStyles.font11Regular }}>
                          {cardItem?.title}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Pressable>
              </Modal>
            </>
          )}
        </View>
      </Modal>
      <Modal
       animationType="fade"
        useNativeDriver={true}
        transparent
        visible={isCrossModalVisible}
      >
       <Animatable.View
            animation={'fadeInUp'}
            duration={700}
            style={{justifyContent: "center",
            alignItems: "center",flex:1,backgroundColor: "rgba(229,227,230,.99)",}}
          >
 <Animatable.View
            animation={'zoomIn'}
            duration={700}
            style={{justifyContent: "center",
            alignItems: "center",}}
          >
<Image source={ImagePath.leftIcon}/>
        </Animatable.View>
        </Animatable.View>
      </Modal>
    </WrapperContainer>
  );
};

export default Home;
