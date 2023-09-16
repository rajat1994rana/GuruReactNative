import React, {
  useCallback,
  useRef,
  useState
} from 'react';
import {
  Animated,
  FlatList,
  Pressable
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import CardDetailsModal from '../../Components/CardDetailsModal';
import CardsPost from '../../Components/CardPosts';
import Header from '../../Components/Header';
import IconButton from '../../Components/IconButton';
import WrapperContainer from '../../Components/WrapperContainer';
import ImagePath from '../../Constants/ImagePath';
import Colors from '../../Styles/Colors';
import commonStyles from '../../Styles/commonStyles';
import { width } from '../../Styles/responsiveSize';
import styles from './styles';
import ActionSheetComp from '../../Components/ActionSheetComp';
import Loader from '../../Components/Loader';
import NavigationStrings from '../../Constants/NavigationStrings';

const dataa = [
  {
    id: 1,
    userName: '橙橙橙er汁',
    postImg: ImagePath.casino,
    location: 'Bellevue, WA',
    dateCreated: '04-13',
    content: '德扑克新手 ♠️',
    distance: '周二9:00 PM | 距离 2.7mi',
    tagsArray: ['打牌', '桌游', '打游'],
    postText:
      '太久没认识新朋友了，刚来西雅图， 大学高中都是在🇺🇸，想多社交认识些可以意思打德州的朋友，喜欢的滴滴我吧！',
  },
  {
    id: 2,
    userName: 'User A',
    postImg: ImagePath.casino,
    location: 'Bellevue, WA',
    dateCreated: '04-13',
    content: 'Poker starters ♠️',
    distance: 'Tuesday 9:00 PM | 2.7mi away',
    tagsArray: ['Card Game', 'Poker', 'Blackjack'],
    postText:
      "Its been a long time since I last played poker! Just moved to Seattle and I'm trying to find some new friends play poker together. Join the event if you are interested!",
  },
  {
    id: 3,
    userName: 'User B',
    postImg: ImagePath.artist,
    location: 'Bellevue, WA',
    dateCreated: '04-13',
    content: 'Poker starters ♠️',
    distance: 'Tuesday 9:00 PM | 2.7mi away',
    tagsArray: ['Card Game', 'Poker', 'Blackjack'],
    postText:
      "Its been a long time since I last played poker! Just moved to Seattle and I'm trying to find some new friends play poker together. Join the event if you are interested!",
  },
  {
    id: 4,
    userName: 'User B',
    postImg: ImagePath.artist,
    location: 'Bellevue, WA',
    dateCreated: '04-13',
    content: 'Poker starters ♠️',
    distance: 'Tuesday 9:00 PM | 2.7mi away',
    tagsArray: ['Card Game', 'Poker', 'Blackjack'],
    postText:
      "Its been a long time since I last played poker! Just moved to Seattle and I'm trying to find some new friends play poker together. Join the event if you are interested!",
  },
  {
    id: 5,
    userName: 'User B',
    postImg: ImagePath.artist,
    location: 'Bellevue, WA',
    dateCreated: '04-13',
    content: 'Poker starters ♠️',
    distance: 'Tuesday 9:00 PM | 2.7mi away',
    tagsArray: ['Card Game', 'Poker', 'Blackjack'],
    postText:
      "Its been a long time since I last played poker! Just moved to Seattle and I'm trying to find some new friends play poker together. Join the event if you are interested!",
  },
];

const Home = ({navigation, route}) => {
  const [isDetailsVisible, setisDetailsVisible] = useState(false)
  const [isReportVisible, setisReportVisible] = useState(false)

  // useFocusEffect(
  //   useCallback(() => {
  //      setPostsdata(dataa);
  //   }, []));

  const [state, setState] = useState({
    isLoading: false,
    handleClickCheck: false,
  });
  const {isLoading, handleClickCheck} = state;
  const updateState = data => setState(state => ({...state, ...data}));
  const [listData, setListData] = useState(
    Array(20)
      .fill('')
      .map((_, i) => ({key: `${i}`, text: `item #${i}`})),
  );

  const [postsData, setPostsdata] = useState([
    {
      id: 1,
      userName: '橙橙橙er汁',
      postImg: ImagePath.casino,
      location: 'Bellevue, WA',
      dateCreated: '04-13',
      content: '德扑克新手 ♠️',
      distance: '周二9:00 PM | 距离 2.7mi',
      tagsArray: ['打牌', '桌游', '打游'],
      postText:
        '太久没认识新朋友了，刚来西雅图， 大学高中都是在🇺🇸，想多社交认识些可以意思打德州的朋友，喜欢的滴滴我吧！',
    },
    {
      id: 2,
      userName: 'User A',
      postImg: ImagePath.casino,
      location: 'Bellevue, WA',
      dateCreated: '04-13',
      content: 'Poker starters ♠️',
      distance: 'Tuesday 9:00 PM | 2.7mi away',
      tagsArray: ['Card Game', 'Poker', 'Blackjack'],
      postText:
        "Its been a long time since I last played poker! Just moved to Seattle and I'm trying to find some new friends play poker together. Join the event if you are interested!",
    },
    {
      id: 3,
      userName: 'User B',
      postImg: ImagePath.artist,
      location: 'Bellevue, WA',
      dateCreated: '04-13',
      content: 'Poker starters ♠️',
      distance: 'Tuesday 9:00 PM | 2.7mi away',
      tagsArray: ['Card Game', 'Poker', 'Blackjack'],
      postText:
        "Its been a long time since I last played poker! Just moved to Seattle and I'm trying to find some new friends play poker together. Join the event if you are interested!",
    },
    {
      id: 4,
      userName: 'User B',
      postImg: ImagePath.casino,
      location: 'Bellevue, WA',
      dateCreated: '04-13',
      content: 'Poker starters ♠️',
      distance: 'Tuesday 9:00 PM | 2.7mi away',
      tagsArray: ['Card Game', 'Poker', 'Blackjack'],
      postText:
        "Its been a long time since I last played poker! Just moved to Seattle and I'm trying to find some new friends play poker together. Join the event if you are interested!",
    },
    {
      id: 5,
      userName: 'User B',
      postImg: ImagePath.profileImg2,
      location: 'Bellevue, WA',
      dateCreated: '04-13',
      content: 'Poker starters ♠️',
      distance: 'Tuesday 9:00 PM | 2.7mi away',
      tagsArray: ['Card Game', 'Poker', 'Blackjack'],
      postText:
        "Its been a long time since I last played poker! Just moved to Seattle and I'm trying to find some new friends play poker together. Join the event if you are interested!",
    },
  ]);

  const animationIsRunning = useRef(false);
  const position = useRef(new Animated.Value(0)).current;
  const animatedValues = useRef(
    postsData.map(() => new Animated.Value(0)),
  ).current;
  const animatedValue = useRef(
    postsData.map(() => new Animated.Value(0)),
  ).current;

  const useSwiper = useRef(null);
  const handleOnSwipedLeft = () => useSwiper.current.swipeLeft();
  const handleOnSwipedTop = () => useSwiper.current.swipeTop();
  const handleOnSwipedRight = () => useSwiper.current.swipeRight();

  const [currentCardIndex, setCurrentCardIndex] = useState(null);

  const handleViewableItemsChanged = useCallback(({viewableItems, changed}) => {
    console.log(changed, 'changediii');
    if (viewableItems.length > 0) {
      const {index} = viewableItems[0];
      setCurrentCardIndex(index);
    }
  }, []);

  const handleMoveOutLeft = index => {
    console.log(index, 'indexxssxbxxxs');
    Animated.timing(animatedValues[index], {
      toValue: -500, // Adjust this value to move the card off-screen
      duration: 500, // Duration of the animation in milliseconds
      useNativeDriver: true,
    }).start(() => {
      let nextIndex = index + 1;
      // const newData = [...postsData];
      // newData.splice(index, 1);
      const newData = postsData.filter((item, ind) => ind !== index);
      console.log(newData, 'newDataksskkkkkk');
      setTimeout(() => {
        // updateState({handleClickCheck:true})
        setPostsdata(newData);
        Animated.timing(animatedValues[index], {
          toValue: 0, // Adjust this value to move the card off-screen
          duration: 5, // Duration of the animation in milliseconds
          useNativeDriver: true,
        }).start();
      }, 800);
    });
  };

  const handleMoveOut = index => {
    console.log(index, 'indexxxbxxx');
    Animated.timing(animatedValues[index], {
      toValue: 500, // Adjust this value to move the card off-screen
      duration: 500, // Duration of the animation in milliseconds
      useNativeDriver: true,
    }).start(() => {
      let nextIndex = index + 1;

      const newData = postsData.filter((item, ind) => ind !== index);
      // console.log(newData,"newDatakkkkkkk");
      setTimeout(() => {
        // updateState({handleClickCheck:true})
        setPostsdata(newData);
        Animated.timing(animatedValues[index], {
          toValue: 0, // Adjust this value to move the card off-screen
          duration: 50, // Duration of the animation in milliseconds
          useNativeDriver: true,
        }).start();
      }, 800);
    });
  };

  const renderCardItem = useCallback(({item, index}) => {
    let newInd = index + 1;
    const animatedStyle = {
      transform: [{translateX: animatedValues[index]}],
    };

    return (
      <Animated.View style={[animatedStyle]}>
        <CardsPost
          item={item}
          setisReportVisible={setisReportVisible}
          //  index={index}
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
        containerStyle={{innerHeight: 400, outerHeight: 400}}
        cards={postsData}
        // childrenOnTop={true}
        renderCard={item => <CardsPost item={item} />}
        cardIndex={0}
        cardHorizontalMargin={0}
        cardVerticalMargin={0}
        cardStyle={{width: '100%', marginHorizontal: 0, height: 400}}
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

  return (
    <WrapperContainer bgColor={Colors.white} statusBarColor={Colors.white}>
      <Header
        headerName={'Explore'}
        imgSourceRight={ImagePath.refresh}
        headerTextStyle={{...commonStyles.font30Italic}}
        containerStyle={{
          width: width / 1.05,
          marginHorizontal: 0,
          elevation: 10,
        }}
        rightImgOnPress={()=>navigation.navigate(NavigationStrings.EVENT_HISTORY)}
      />

      {/* {cardSwiper()}   */}

      <Pressable style={styles.buttonsContainer}>
        <IconButton
          name={ImagePath.cardCross}
          customStyle={{height: 65, width: 65}}
          onPress={() => handleMoveOutLeft(currentCardIndex)}
          // color="white"
          // backgroundColor="#FFFFFF"
        />
        <IconButton
          customStyle={{height: 65, width: 65}}
          name={ImagePath.cardAdd}
          onPress={() => handleMoveOutLeft(currentCardIndex)}
          color="white"
        />
        <IconButton
          customStyle={{height: 65, width: 65}}
          name={ImagePath.cardLike}
          onPress={() => handleMoveOut(currentCardIndex)}
        />
      </Pressable>
      <FlatList
        data={postsData}
        style={{}}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        //   initialNumToRender={maxRender}
        //   extraData={postsData}
        //   onEndReachedThreshold={0.2}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={{itemVisiblePercentThreshold: 50}}
        //  keyExtractor={(item, index) => index.toString()}
        renderItem={renderCardItem}
        //  ListHeaderComponent={ListHeaderComponent}
      />
      {/* <SwipeListView
         useFlatList={true}
         disableLeftSwipe
         disableRightSwipe
        data={postsData}
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
        onClose={()=>setisDetailsVisible(false)}
        />
        <ActionSheetComp
        isVisible={isReportVisible}
        firstText={'Report Event'}
        isProfile
        onclose={(isCancel)=>{
            if(isCancel)
            {
                setisReportVisible(false)
            }else{
              updateState({isLoading:true})
                setisReportVisible(false)
                setTimeout(() => {
                  updateState({isLoading:false})
                }, 1000);
            }
            
        }}
        />
        <Loader isLoading={isLoading}/>
    </WrapperContainer>
  );
};

export default Home;
