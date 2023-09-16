import {
  BackHandler,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import ImagePath from '../../Constants/ImagePath';
import Colors from '../../Styles/Colors';
import {ThemeContext} from '../../Components/ThemeProvider';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Header from '../../Components/Header';
import commonStyles from '../../Styles/commonStyles';
import styles from './styles';
import {
  moderateScale,
  moderateScaleVertical,
  width,
} from '../../Styles/responsiveSize';
import SearchBar from '../../Components/SearchBar';
import ChatSheet from '../../Components/ChatSheet';
import NavigationStrings from '../../Constants/NavigationStrings';

const nearMeData = [
  {
    activityPic: ImagePath.casino,
    userName: '爱狗的...',
    profileImg: ImagePath.profileImg1,
  },
  {
    activityPic: ImagePath.image12,
    userName: '忌伊',
    profileImg: ImagePath.profileImg2,
  },
  {
    activityPic: ImagePath.nearMe1,
    userName: 'User C',
    profileImg: ImagePath.profileImg3,
  },
  {
    activityPic: ImagePath.casino,
    userName: 'User D',
    profileImg: ImagePath.profileImg8,
  },
  {
    activityPic: ImagePath.casino,
    userName: 'User D',
    profileImg: ImagePath.profileImg8,
  },
  {
    activityPic: ImagePath.casino,
    userName: 'User D',
    profileImg: ImagePath.profileImg8,
  },
  {
    activityPic: ImagePath.casino,
    userName: 'User D',
    profileImg: ImagePath.profileImg8,
  },
  {
    activityPic: ImagePath.casino,
    userName: 'User D',
    profileImg: ImagePath.profileImg8,
  },
];

const ChatListData = [
  {
    profileName: 'Taro',
    profilePic: ImagePath.profileImg1,
    timeBefore: '23 min',
    messageContent: '表情 😍',
    messageRead: 1,
  },
  {
    profileName: 'FanzzZ',
    messageContent: '正在输入...',
    profilePic: ImagePath.profileImg2,
    timeBefore: '27 min',
    messageRead: 2,
  },
  {
    profileName: 'FanzzZ',
    messageContent: '表情 😍',
    profilePic: ImagePath.profileImg2,
    timeBefore: '27 min',
    messageRead: 2,
  },
];

const GroupChatListData = [
  {
    profileName: 'Vivian’s Birthday Secret',
    profilePic1: ImagePath.profileImg1,
    profilePic2: ImagePath.profileImg2,
    timeBefore: '23 min',
    messageContent: '表情 😍',
    messageRead: 1,
  },
  {
    profileName: 'Vivian’s Birthday Secret',
    messageContent: '正在输入...',
    profilePic1: ImagePath.profileImg3,
    profilePic2: ImagePath.profileImg2,
    timeBefore: '27 min',
    messageRead: 2,
  },
];

const Message = ({navigation, route}) => {
  // const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
  // const shimmerArrayDark = ['#23262E', '#797b82', '#6B6E77'];
  // const shimmerLight = ['#ebebeb', '#c5c5c5', '#ebebeb'];
  // const colorScheme = useColorScheme();
  const {theme} = useContext(ThemeContext);
  const chatSheetRef = useRef();

  const [state, setState] = useState({
    search: '',
    isLoading: false,
    activityIndex: 1,
    groupData: null,
  });
  const {isLoading, search, activityIndex, groupData} = state;
  const updateState = data => setState(state => ({...state, ...data}));

  useEffect(() => {}, []);

  useFocusEffect(useCallback(() => {}, []));

  const onSelectChat = item => {
    if (activityIndex == 1) {
      updateState({groupData: item});
      chatSheetRef.current.open();
    } else {
      navigation.navigate(NavigationStrings.CHAT_SINGLE, {profileDetail: item});
    }
  };

  const onCloseChatSheet = () => {
    chatSheetRef.current.close();
  };

  const renderChatList = ({item, index}) => {
    return (
      <Pressable
        onPress={() => onSelectChat(item)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '90%',
          paddingHorizontal: moderateScale(40),
          marginBottom: moderateScaleVertical(20),
        }}>
        {activityIndex == 2 ? (
          <Image source={item.profilePic} style={styles.profieImg} />
        ) : (
          <>
            <Image source={item.profilePic1} style={styles.profieImg1} />
            <Image source={item.profilePic2} style={styles.profieImg2} />
          </>
        )}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '90%',
            marginLeft: moderateScale(14),
          }}>
          <View>
            <Text style={{...commonStyles.font14BlackMedium}}>
              {item.profileName}
            </Text>
            <Text style={{...commonStyles.font14Regular}}>
              {item.messageContent}
            </Text>
          </View>
          <View>
            <Text
              style={{...commonStyles.font12Regular, color: Colors.greyText}}>
              {item.timeBefore}
            </Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'flex-end',
                borderRadius: 40,
                backgroundColor: Colors.appColorPrimary,
                height: 20,
                width: 20,
              }}>
              <Text style={{color: Colors.white}}>{item.messageRead}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  const onPresstab1 = () => {
    updateState({activityIndex: 1});
  };

  const onPresstab2 = () => {
    updateState({activityIndex: 2});
  };

  const renderTopItems = ({item, index}) => {
    return (
      <TouchableOpacity
      onPress={()=>navigation.navigate(NavigationStrings.EVENT_DETAILS_SCREEN)}
        style={{
          alignItems: 'center',
          marginLeft: moderateScale(index ? 8 : 24),
        }}>
            <ImageBackground source={ImagePath.orangeCircle} style={{width:44,height:44,alignItems:'center',justifyContent:'center'}}>
            <Image source={item.profileImg} style={styles.profieImg} />
            </ImageBackground>
        <Text>{item.userName}</Text>
      </TouchableOpacity>
    );
  };

  const headerComponentList = () => {
    return (
      <>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={nearMeData}
          renderItem={renderTopItems}
        />
        <View
          style={{
            height: moderateScaleVertical(40),
            width: width,
            marginTop: moderateScaleVertical(32),
            marginBottom: moderateScaleVertical(24),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: width,
              justifyContent: 'space-evenly',
            }}>
            <Pressable
              style={{
                ...styles.chatTabView,
                borderBottomColor: Colors.appColorPrimary,
                borderBottomWidth: activityIndex == 1 ? 2 : 0,
              }}
              onPress={onPresstab1}>
              <Text
                style={{
                  ...commonStyles.font15BlackBold,
                  color:
                    activityIndex == 1
                      ? Colors.appColorPrimary
                      : Colors.appBlack,
                }}>
                Groups
              </Text>
            </Pressable>
            <Pressable
              style={{
                ...styles.chatTabView,
                borderBottomColor: Colors.appColorPrimary,
                borderBottomWidth: activityIndex == 2 ? 2 : 0,
              }}
              onPress={onPresstab2}>
              <Text
                style={{
                  ...commonStyles.font15BlackBold,
                  color:
                    activityIndex == 2
                      ? Colors.appColorPrimary
                      : Colors.appBlack,
                }}>
                Chats
              </Text>
            </Pressable>
          </View>
        </View>
      </>
    );
  };

  return (
    <WrapperContainer statusBarColor={Colors.appColor2}>
      <Header
        // showLeft={ImagePath.backBtn}
        headerName={'Messages'}
        headerTextStyle={{...commonStyles.font30Italic}}
        containerStyle={{
          paddingBottom: moderateScaleVertical(18),
          paddingTop: moderateScaleVertical(8),
        }}
      />
      <SearchBar
        placeholder={'Search'}
        value={search}
        searchBarStyle={{marginBottom: moderateScaleVertical(18),borderRadius:50,height:38,backgroundColor:'#F2F2F2'}}
      />
      <FlatList
        data={activityIndex == 2 ? ChatListData : GroupChatListData}
        renderItem={renderChatList}
        ListHeaderComponent={headerComponentList}
      />
      <ChatSheet sheetRef={chatSheetRef} groupData={groupData} />
    </WrapperContainer>
  );
};

export default Message;
