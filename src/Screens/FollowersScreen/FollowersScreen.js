import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import Colors from '../../Styles/Colors';
import Header from '../../Components/Header';
import ImagePath from '../../Constants/ImagePath';
import commonStyles from '../../Styles/commonStyles';
import {width} from '../../Styles/responsiveSize';
import NavigationStrings from '../../Constants/NavigationStrings';

export default function FollowersScreen({navigation}) {
  const [activeTab, setactiveTab] = useState(0);
  let data = [
    {
      name: 'user A',
      number: '+2330944747494',
    },
    {
      name: 'user B',
      number: '+2330944747494',
    },
    {
      name: 'user C',
      number: '+2330944747494',
    },
    {
      name: 'user D',
      number: '+2330944747494',
    },
    {
      name: 'user E',
      number: '+2330944747494',
    },
    {
      name: 'user F',
      number: '+2330944747494',
    },
    {
      name: 'user G',
      number: '+2330944747494',
    },
    {
      name: 'user H',
      number: '+2330944747494',
    },
    {
      name: 'user I',
      number: '+2330944747494',
    },
    {
      name: 'user J',
      number: '+2330944747494',
    },
    {
      name: 'user K',
      number: '+2330944747494',
    },
    {
      name: 'user L',
      number: '+2330944747494',
    },
    {
      name: 'user M',
      number: '+2330944747494',
    },
  ];
  return (
    <WrapperContainer bgColor={Colors.white} statusBarColor={Colors.white}>
      <View style={{marginTop:Platform.OS=='android'?16:0}}>
        <Header
          showLeft={ImagePath.backBtn}
          headerName={'@tashmat13'}
          headerTextStyle={{...commonStyles.font15BlackBold}}
        />
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          marginTop: 16,
          flexDirection: 'row',
          justifyContent: 'center',
          borderBottomColor: Colors?.greyButtons,
        }}>
        {['Following', 'Follower'].map((res, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setactiveTab(index);
              }}
              key={index}
              style={{
                width: width / 2,
                alignItems: 'center',
                paddingVertical: 8,
              }}>
              <Text
                style={{
                  ...commonStyles.font13GreenMedium,
                  color:
                    activeTab == index ? Colors.appColorPrimary : Colors.black,
                }}>
                {res}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{paddingHorizontal: 24, marginVertical: 16}}>
        <View
          style={{
            backgroundColor: Colors.lightGreyF0F0F0,
            height: 25,
            borderRadius: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 8,
          }}>
          <Image
            source={ImagePath.searchIcon}
            style={{width: 16, height: 16}}
          />
          <TextInput
            placeholder="Search people you know ......"
            placeholderTextColor={Colors.greyText}
            style={{
              ...commonStyles.font11Regular,
              color: '#C4C4C4',
              flex: 1,
              padding: 0,
              marginLeft: 8,
            }}
          />
        </View>
      </View>
      <FlatList
        data={data}
        contentContainerStyle={{paddingHorizontal: 32}}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
            onPress={()=>{
              navigation.navigate(NavigationStrings.FOLLOWERS_DETAILS_SCREEN,{item:item})
            }}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: Colors?.greyButtons,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 8,
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={ImagePath.profileImg2}
                  style={{width: 34, height: 34, borderRadius: 50}}
                />
                <View style={{marginLeft: 16}}>
                  <Text
                    style={{
                      ...commonStyles.font13greyMedium,
                      color: Colors.black,
                      fontWeight: '500',
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{...commonStyles.font13greyMedium, marginTop: 4}}>
                    {item.number}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  paddingVertical: 2,
                  paddingHorizontal: 8,
                  borderRadius: 10,
                  borderColor: Colors?.greyButtons,
                }}>
                <Text
                  style={{...commonStyles.font11Regular, color: Colors.black}}>
                  {'Following'}
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
    </WrapperContainer>
  );
}
