import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  Image,
  Pressable,
  Text,
  View,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ImagePath from '../Constants/ImagePath';
import NavigationStrings from '../Constants/NavigationStrings';
import Colors from '../Styles/Colors';
import commonStyles, {hitSlopProp} from '../Styles/commonStyles';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  width,
} from '../Styles/responsiveSize';
import {ThemeContext} from './ThemeProvider';
import {useSelector} from 'react-redux';

const CardsPost = ({
  item,
  index,
  onImageView,
  setisDetailsVisible,
  setisReportVisible,
}) => {
  const navigation = useNavigation();
  // const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
  // const shimmerArrayDark = ['#23262E', '#797b82', '#6B6E77'];
  //     const shimmerLight = ['#ebebeb', '#c5c5c5', '#ebebeb'];
  // const colorScheme = useColorScheme();
  const [state, setState] = useState({
    isVidLoading: false,
  });
  const {isVidLoading} = state;
  const updateState = data => setState(state => ({...state, ...data}));
  const {theme} = useContext(ThemeContext);

  return <View style={styles.cardContainer}>
    <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}> 
      <View style={styles.cardProfileView}>
      <View style={{flexDirection:"row",alignItems:"center"}}>
     <Pressable style={styles.profileOuter}>
              {<Image
                source={ImagePath.profileImage}
                style={styles.profileImage}
              />}
            </Pressable>
            <View style={styles.nameView}>
            <Text style={styles.nameText}>{item?.userName}</Text>
            <Text style={styles.locationText} numberOfLines={2}>{item?.dateCreated}{' '}{item?.location}</Text>
            </View>
            </View>
            </View>
            
            <View style={{marginTop:moderateScaleVertical(8),height:300}}>
                {item?.postImg?.length!==0&&       
                <Pressable
                // onPress={()=>onImageView(item?.postImg)}
                 style={styles.imageView}
                >
                  <Image
                  source={item?.postImg}
                  resizeMode='contain'
                  style={styles.images}
                  />
        </Pressable>
                }
                
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text style={{...commonStyles.font16ItalicNormal,color:Colors.appBlack}}>{item?.content}</Text>
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
            <Text style={{...commonStyles.font12Regular,color:"#CE90FF"
            }}>{item?.distance}</Text>
             <View style={styles.usersIcon}>
            <View style={{flexDirection: 'row'}}>
              {[1, 2, 6, 7, 8].map((res, index) => {
                return (
                  <Image
                    source={index <= 2 ? ImagePath.user : ImagePath.userEmp}
                    style={{marginRight: 4}}
                  />
                );
              })}
              <Text
                style={{
                  ...commonStyles.font10GreyMedium,
                  color: Colors?.greyText,
                }}>
                3 going, 2 available
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.friendsText}>Friends going:</Text>
              <Image source={ImagePath.profileImg1} style={{...styles.userImg}} />
              <Image source={ImagePath.profileImg1} style={{...styles.userImg,borderWidth:1,borderColor:'#fff',marginLeft:-12,width: moderateScale(23),
    height: moderateScale(23),}} />
            </View>
          </View>
            <View style={{flexDirection:"row",}}>
            <View style={{flexDirection: 'row', marginVertical: 6}}>
            {['Poker', 'Card game'].map((res, index) => {
              return (
                <View style={styles.tagsView}>
                  <Text style={styles.tagsText}>{res}</Text>
                </View>
              );
            })}
          </View>
            </View>
            <View style={styles.line} />
            <Text style={{...commonStyles.font13Regular}}>Language</Text>
          <Text style={{...commonStyles.font11GreyMedium}}>English</Text>
          <Text style={{...commonStyles.font11Regular, marginVertical: 16}}>
            Just came to Seattle and hoping to make friends with people who also
            like playing Poker! Welcome to join the Poker event!
          </Text>

          <View style={styles.BottoBtns}>
          <TouchableOpacity onPress={()=>setisReportVisible(true)} style={{alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
            <Image source={ImagePath.reportIconNew}/>
            <Text>Report</Text>
          </TouchableOpacity>
        </View>
  </ScrollView>
  </View>
}
export default CardsPost;

const styles = StyleSheet.create({
  cardImage: {
    height: moderateScale(20),
    width: moderateScale(14),
    paddingLeft: moderateScale(20),
    position: 'absolute',
    bottom: moderateScale(1),
    left: moderateScale(57),
    zIndex: 1,
  },
  likeCommentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScaleVertical(6),
  },
  commentStyle: {
    marginHorizontal: moderateScale(12),
    // height:moderateScaleVertical(24)
  },
  tagedNameText: {
    ...commonStyles.font12Regular,
  },
  textPost: {
    ...commonStyles.font13Regular,
    marginBottom: moderateScaleVertical(8),
    color: Colors.appBlack,
  },
  nameText: {
    ...commonStyles.font14BlackBold,
    color: Colors.appBlack,
  },
  locationText: {
    ...commonStyles.font12grey,
    maxWidth: moderateScale(180),
  },
  nameView: {
    marginLeft: moderateScale(12),
  },
  profileOuter: {
    borderRadius: 40,
    height: moderateScale(42),
    width: moderateScale(42),
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.white,
  },
  profilePicView: {
    alignItems: 'center',
  },
  profileImage: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: 40,
  },
  cardContainer: {
    ...commonStyles.shadowStyle,
    marginVertical: moderateScaleVertical(10),
    padding: moderateScale(12),
    paddingHorizontal: moderateScale(8),
    borderBottomWidth: 1,
    borderBottomColor: Colors.greyButtons,
    marginHorizontal: 16,
    borderRadius: 16,
    height: height * 0.9,
    // height:700
  },
  cardProfileView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postImg: {
    height: moderateScaleVertical(220),
    width: '100%',
    borderRadius: 8,
    marginVertical: moderateScaleVertical(12),
  },
  imageView: {
    overflow: 'hidden',
  },
  tagedPeopleView: {
    paddingHorizontal: moderateScale(4),
    paddingVertical: moderateScaleVertical(4),
    borderRadius: 8,
    backgroundColor: Colors.darkGrey,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScaleVertical(10),
  },
  toolTipStyling: {
    height: moderateScale(126),
    width: '100%',
    backgroundColor: Colors.white,
    marginLeft: moderateScale(40),
    borderRadius: 8,
    marginTop: moderateScaleVertical(30),
    justifyContent: 'space-around',
    padding: 16,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: moderateScale(10)},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  tooltipText: {
    ...commonStyles.font12Regular,
    color: Colors.appBlack,
  },
  images: {
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    height: moderateScale(280),
    width: '100%',
    resizeMode: 'cover',
  },
  userImg: {
    width: moderateScale(25),
    height: moderateScale(25),
    borderRadius: moderateScale(50),
  },
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
  likeView: {
    flexDirection: 'row',
    marginRight: moderateScaleVertical(16),
    alignItems: 'center',
  },
  likeText: {...commonStyles.font11GreyMedium, marginLeft: 4},
  BottoBtns: {
    paddingHorizontal: moderateScaleVertical(16),
    borderTopColor: Colors.borderColor1,
    paddingVertical: 16,
    marginBottom:250,
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
