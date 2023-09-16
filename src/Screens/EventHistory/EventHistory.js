import {View, Text, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import Header from '../../Components/Header';
import ImagePath from '../../Constants/ImagePath';
import commonStyles from '../../Styles/commonStyles';
import {moderateScale, width} from '../../Styles/responsiveSize';
import Colors from '../../Styles/Colors';

export default function EventHistory({navigation}) {
  const [listData, setlistData] = useState([
    {
      image: ImagePath.casino,
      name: 'User A',
      disc: 'Poker starters ♠️',
    },
    {
      name: 'User B',
      image: ImagePath.casino,
      disc: 'Concert',
    },
    {
      name: 'User C',
      image: ImagePath.casino,
      disc: 'Talk show',
    },
    {
      name: 'User D',
      image: ImagePath.casino,
      disc: 'Sandbox VR',
    },
  ]);
  return (
    <WrapperContainer bgColor={Colors.white} statusBarColor={Colors.white}>
      <Header
        showLeft={ImagePath.backBtn}
        headerName={'History'}
        headerTextStyle={{...commonStyles.font20BlackBold}}
      />
      <FlatList
        data={listData}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={{paddingHorizontal: 16, paddingVertical: 24}}
        renderItem={({item}) => {
          return (
            <View
              style={{
                ...commonStyles.boxWithShadow,
                width: moderateScale(width / 2 - 24),
                borderWidth: 0.5,
                borderColor: Colors?.borderColor1,
                paddingBottom: 8,
                borderRadius: moderateScale(12),
                marginBottom: moderateScale(16),
              }}>
              <Image
                source={item?.image}
                style={{
                  width: moderateScale(width / 2 - 24),
                  height: moderateScale(290),
                  borderTopLeftRadius: moderateScale(12),
                  borderTopRightRadius: moderateScale(12),
                }}
              />
              <View style={{paddingHorizontal: 2}}>
                <Text
                  style={{
                    ...commonStyles.font16GreyMedium,
                    color: Colors?.black,
                  }}>
                  {item.disc}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: moderateScale(24),
                  }}>
                  <Image
                    source={ImagePath.profileImg2}
                    style={{
                      borderRadius: moderateScale(50),
                      height: moderateScale(28),
                      width: moderateScale(28),
                    }}
                  />
                  <Text style={{...commonStyles.font11Regular, marginLeft: 8}}>
                    {item?.name}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </WrapperContainer>
  );
}
