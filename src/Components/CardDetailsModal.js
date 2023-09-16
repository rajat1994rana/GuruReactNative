
import Modal from 'react-native-modal'
import WrapperContainer from './WrapperContainer'
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    StyleSheet,
  } from 'react-native';
  import React, { useState } from 'react';
  import ImagePath from '../Constants/ImagePath';
  import {
    moderateScale,
    moderateScaleVertical,
    width,
  } from '../Styles/responsiveSize';
  import ButtonComp from './ButtonComp';
import Colors from '../Styles/Colors';
import commonStyles from '../Styles/commonStyles';
import Header from './Header';
import ActionSheetComp from './ActionSheetComp';
import Loader from './Loader';
export default function CardDetailsModal({isDetailsVisible,onClose=()=>{}}) {
    const [isReportVisible, setisReportVisible] = useState(false)
    const [isLoading, setisLoading] = useState(false)
  return (
    <Modal isVisible={isDetailsVisible}
    animationIn={'zoomIn'}
    onBackdropPress={onClose}
    onBackButtonPress={onClose}
    animationOut={'zoomOut'}
    useNativeDriver={true}
    style={{margin:0}}
    >
 <WrapperContainer bgColor={Colors.white} statusBarColor={Colors.appColor2}>
 <Header
        headerName={'猜你喜欢'}
        imgSourceRight={ImagePath.refresh}
        headerTextStyle={{...commonStyles.font20BlackBold}}
        containerStyle={{
          width: width / 1.05,
          marginHorizontal: 0,
          elevation: 10,
        }}
        rightImgOnPress={onClose}
      />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 16}}>
          <View style={styles.userTopView}>
            <View style={styles.userLeftView}>
              <Image source={ImagePath.profileImg1} style={styles.userImage} />
              <View style={{marginLeft: moderateScaleVertical(8)}}>
                <Text style={{...commonStyles.font13RedMedium}}>User A</Text>
                <Text
                  style={{...commonStyles.font11Regular, color: Colors.greyText}}>
                  04-13 Bellevue, WA
                </Text>
              </View>
            </View>
          </View>
          <View style={{marginTop: moderateScaleVertical(16)}}>
            <Image source={ImagePath.casino} style={styles.cardImage} />
            <View style={styles.cardFirstRow}>
              <Text style={{...commonStyles.font15BlackBold}}>
                Poker Starter ♠️
              </Text>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.likeView}>
                  <Image source={ImagePath.likeEmp} />
                  <Text style={styles.likeText}>5 Like</Text>
                </View>
                <TouchableOpacity>
                  <Image source={ImagePath.share} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={{...commonStyles.font12BlackMedium, color: Colors.pink}}>
              周二9:00 PM | 距离 2.7mi
            </Text>
            <View style={styles.usersIcon}>
              <View style={{flexDirection: 'row'}}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((res, index) => {
                  return (
                    <Image
                      source={index <= 5 ? ImagePath.user : ImagePath.userEmp}
                      style={{marginRight: 4}}
                    />
                  );
                })}
                <Text
                  style={{
                    ...commonStyles.font10GreyMedium,
                    color: Colors?.greyText,
                  }}>
                  6 going, 2 available
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.friendsText}>Friends going:</Text>
                <Image source={ImagePath.profileImg1} style={styles.userImg} />
              </View>
            </View>
            <View style={{flexDirection: 'row', marginVertical: 6}}>
              {['Poker', 'Card game'].map((res, index) => {
                return (
                  <View style={styles.tagsView}>
                    <Text style={styles.tagsText}>{res}</Text>
                  </View>
                );
              })}
            </View>
            <View style={styles.line} />
            <Text style={{...commonStyles.font13Regular}}>Language</Text>
            <Text style={{...commonStyles.font11GreyMedium}}>English</Text>
            <Text style={{...commonStyles.font11Regular, marginVertical: 24}}>
              Just came to Seattle and hoping to make friends with people who also
              like playing Poker! Welcome to join the Poker event!
            </Text>
          </View>
        </ScrollView>
        <View style={styles.BottoBtns}>
          <TouchableOpacity onPress={()=>setisReportVisible(true)} style={{alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
            <Image source={ImagePath.reportIconNew}/>
            <Text>Report</Text>
          </TouchableOpacity>
        </View>
        <ActionSheetComp
        isVisible={isReportVisible}
        firstText={'Report Event'}
        isProfile
        onclose={(isCancel)=>{
            if(isCancel)
            {
                setisReportVisible(false)
            }else{
                setisLoading(true)
                setisReportVisible(false)
                setTimeout(() => {
                    onClose()
                    setisLoading(false)
                }, 1000);
            }
            
        }}
        />
        <Loader isLoading={isLoading}/>
      </WrapperContainer>
    </Modal>
  )
}
  
  const styles = StyleSheet.create({
    userTopView: {
      marginTop: moderateScaleVertical(24),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    userLeftView: {flexDirection: 'row', alignItems: 'center'},
    userImage: {
      width: moderateScale(48),
      height: moderateScale(48),
      borderRadius: moderateScale(50),
    },
    userFollowView: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      height: moderateScale(22),
      borderColor: Colors?.appColorPrimary,
      paddingHorizontal: 8,
      borderRadius: moderateScale(12),
    },
    addIcon: {
      tintColor: '#FF8400',
      width: moderateScale(12),
      height: moderateScale(12),
    },
    followText: {
      ...commonStyles.font11Green,
      color: Colors.appColorPrimary,
      marginLeft: 4,
    },
    cardImage: {
      width: width - moderateScale(32),
      borderTopLeftRadius: moderateScale(20),
      borderTopRightRadius: moderateScale(20),
    },
    cardFirstRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: moderateScaleVertical(16),
    },
    likeView: {
      flexDirection: 'row',
      marginRight: moderateScaleVertical(16),
      alignItems: 'center',
    },
    likeText: {...commonStyles.font11GreyMedium, marginLeft: 4},
    usersIcon: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    friendsText: {
      ...commonStyles.font10GreyMedium,
      color: Colors?.greyText,
      marginRight: moderateScaleVertical(8),
    },
    userImg: {
      width: moderateScale(34),
      height: moderateScale(34),
      borderRadius: moderateScale(50),
    },
    tagsView: {
      borderWidth: 1,
      marginRight: moderateScaleVertical(16),
      borderColor: Colors.borderColor1,
      paddingHorizontal: moderateScaleVertical(12),
      paddingVertical: 2,
      borderRadius: moderateScale(10),
    },
    tagsText: {
      ...commonStyles.font10Regular,
      color: Colors.greyText,
    },
    line: {
      borderBottomWidth: 1,
      borderBottomColor: Colors.borderColor1,
      marginVertical: moderateScaleVertical(16),
    },
    BottoBtns: {
      paddingHorizontal: moderateScaleVertical(16),
      marginBottom: 16,
      borderTopColor: Colors.borderColor1,
      paddingVertical: 16,
      alignItems: 'center',
    },
    bottomLefView: {
      width: '50%',
      height: moderateScaleVertical(37),
      borderRadius: moderateScale(20),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F2F2F2',
    },
  });
  