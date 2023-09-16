import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from 'react-native-popup-menu';
import WrapperContainer from '../../Components/WrapperContainer';
import ImagePath from '../../Constants/ImagePath';
import NavigationStrings from '../../Constants/NavigationStrings';
import Colors from '../../Styles/Colors';
import commonStyles from '../../Styles/commonStyles';
import {width} from '../../Styles/responsiveSize';
import styles from './styles';
import ActionSheetComp from '../../Components/ActionSheetComp';
import { SafeAreaView } from 'react-native-safe-area-context';

const data = [
  {id: 1, text: 'Basketball watching party', name: 'User A'},
  {id: 2, text: 'Concert', name: 'User A'},
  {id: 3, text: 'Card 3', name: 'User A'},
  {id: 4, text: 'Card 3', name: 'User A'},
  {id: 5, text: 'Card 3', name: 'User A'},
  {id: 6, text: 'Card 3', name: 'User A'},
  // Add more card objects as needed
];

const Profile = ({navigation, route}) => {
  const [state, setState] = useState({
    isLoading: false,
    activeTab: 0,
    isToggleOn: false,
  });
  const [isVisible, setisVisible] = useState(false)
  const {isLoading, activeTab, isToggleOn} = state;
  const updateState = data => setState(state => ({...state, ...data}));
  const [isMyProfile, setisMyProfile] = useState(true)

  useEffect(() => {}, []);

  useFocusEffect(useCallback(() => {}, []));

  return (
    // <WrapperContainer bgColor={Colors.white} statusBarColor={Colors.appColor2}>
    <View style={{flex:1,backgroundColor:'#F6F6F6'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
         
          <FastImage source={ImagePath.profileBG} style={styles.bgImage}>
            <View style={styles.bgWrapper}>
              <View style={styles.headerView}>
                <View style={{marginLeft:16}}/>
                <View>
                  <Text style={{...commonStyles.font15BlackBold}}>Account</Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                      navigation.navigate(NavigationStrings.SETTING_SCREEN);
                    }}>
                    <Image
                      source={ImagePath.setting}
                      style={styles.headerIcon}
                    />
                  </TouchableOpacity>
              </View>
              <View style={styles.userImageCont}>
                <Image
                  source={ImagePath.profileImg2}
                  style={styles?.userImage}
                />
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{...commonStyles.font15BlackBold, marginTop: 8}}>
                  @tashmat13
                </Text>
                <Text
                  style={{...commonStyles.font11Grey, color: Colors.greyText}}>
                  Seattle, USA
                </Text>
                <View style={{flexDirection: 'row', marginTop: 8}}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate(NavigationStrings.FOLLOWERS_SCREEN);
                    }}>
                    <Text style={{...commonStyles.font15BlackBold}}>
                      10k <Text style={styles.followText}>Followers</Text>
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate(NavigationStrings.FOLLOWERS_SCREEN);
                    }}>
                    <Text
                      style={{...commonStyles.font15BlackBold, marginLeft: 24}}>
                      135 <Text style={styles.followText}>Following</Text>
                    </Text>
                  </TouchableOpacity>
                  <View></View>
                </View>
                <View style={{flexDirection: 'row', marginTop: 24}}>
                  {['🃏打牌', '⛷️滑雪', '🛫旅游', '🫕约饭']?.map(
                    (res, index) => {
                      return (
                        <View key={index} style={styles.capsuleView}>
                          <Text style={{color: Colors.lightBlue0FF}}>
                            {res}
                          </Text>
                        </View>
                      );
                    },
                  )}
                </View>
                <Text style={styles.desc}>
                  My name is Tashmat , I like photography and travelling all
                  around the world{' '}
                </Text>
                <View style={{flexDirection: 'row', marginTop: 24}}>
                <TouchableOpacity onPress={() => {
                      navigation.navigate(NavigationStrings.EDIT_PROFILE_SCREEN);
                    }} style={styles.editBtn}>
                      <Text style={styles.editText}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
              </View>
            </View>
          </FastImage>
          
          <View style={{flex: 1}}>
            <View style={styles.listTopBtnView}>
              {['upcoming', 'past', 'saved', 'IMAGE'].map((res, index) => {
                return (
                  <>
                    {res == 'IMAGE' ? (
                      <TouchableOpacity
                        onPress={() => {
                          updateState({isToggleOn: !isToggleOn});
                        }}
                        style={{marginRight: 24}}>
                        <Image
                          source={
                            isToggleOn
                              ? ImagePath.toggelOn
                              : ImagePath.toggleOff
                          }
                        />
                      </TouchableOpacity>
                    ) : (
                      <View style={{alignItems: 'center', marginRight: 24}}>
                        <TouchableOpacity
                          onPress={() => {
                            updateState({activeTab: index});
                          }}
                          style={{}}>
                          <Text style={styles.tagText}>{res}</Text>
                        </TouchableOpacity>
                        <View
                          style={{
                            ...styles.deshStyle,
                            backgroundColor:
                              activeTab == index ? '#6C7A9C' : 'transparent',
                          }}
                        />
                      </View>
                    )}
                  </>
                );
              })}
            </View>
            <FlatList
              data={data}
              numColumns={2}
              disableVirtualization={false}
              contentContainerStyle={{paddingHorizontal: 16, marginTop: 16}}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity onPress={()=>{
                    // setisMyProfile(!isMyProfile)
                    navigation.navigate(NavigationStrings.FOLLOWERS_DETAILS_SCREEN,{item:item})
                  }} style={styles.cardMainView}>
                    <View style={styles.cardImage}>
                      {index % 2 == 1 && (
                        <Image source={ImagePath.host} style={styles.cardTag} />
                      )}
                    </View>
                    <View style={{padding: 8, flex: 1}}>
                      <View style={{flexGrow: 1}}>
                        <Text numberOfLines={1} style={styles.cardDesc}>
                          {item?.text}
                        </Text>
                      </View>
                      <View style={styles.cardBottomView}>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Image
                            source={ImagePath.profileImg1}
                            style={styles.cardUserImage}
                          />
                          <Text style={styles.cardUserName}>{item?.name}</Text>
                        </View>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Image
                            source={ImagePath.likeEmp}
                            style={{width: 24, borderRadius: 50, height: 24}}
                          />
                          <Text
                            style={{
                              ...commonStyles.font11Regular,
                              textTransform: 'capitalize',
                              color: Colors?.gray7C,
                              marginLeft: 4,
                            }}>
                            {'10 likes'}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </ScrollView>
        <ActionSheetComp
      isVisible={isVisible}
      onclose={()=>{
        setisVisible(false)
      }}
      isProfile={true}
      />
        </View>
      //   <ActionSheetComp
      // isVisible={isVisible}
      // onclose={()=>{
      //   setisVisible(false)
      // }}
      // isProfile={true}
      // />
    // </WrapperContainer>
  );
};

export default Profile;
