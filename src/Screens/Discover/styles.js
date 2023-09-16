import {StyleSheet} from 'react-native';
import Colors from '../../Styles/Colors';
import commonStyles from '../../Styles/commonStyles';
import {
  height,
  moderateScale,
  moderateScaleVertical,
  width,
} from '../../Styles/responsiveSize';

// console.log(height / 4.5, "hedfkhheight");

export default StyleSheet.create({
  header: {
    width: '100%',
    paddingVertical: moderateScaleVertical(10),
    paddingHorizontal: moderateScale(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:"#ECFFDC",
  },
  textFilter: {
    ...commonStyles.font16GreyMedium,
    marginLeft: moderateScale(16),
  },
  itemView: {
    height: moderateScale(40),
    // minWidth: '16%',
    backgroundColor: Colors.lightGreyF0F0F0,
    // maxWidth:'80%',
    // borderWidth: 1,
    borderRadius: 24,
    borderColor: Colors.borderColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: moderateScale(5),
    paddingVertical: moderateScaleVertical(4),
    paddingHorizontal: moderateScale(9),
    marginTop: moderateScale(8),
  },
  itemText: {
    ...commonStyles.font13Regular,
    color: Colors.appBlack,
  },
  cardHorizontal: {
    ...commonStyles.shadowStyle,
    borderRadius: 16,
    height: moderateScaleVertical(180),
    width: moderateScale(280),
  },
  actvityText: {
    ...commonStyles.font14Italic,
    marginLeft: moderateScale(16),
    marginTop: moderateScaleVertical(4),
  },
  nearMeImageView: {
    // height:moderateScaleVertical(180),
  },
  nearMeImage: {
    height: moderateScaleVertical(250),
    width: width / 2 - 24,
    borderBottomLeftRadius: 0,
  },
  headingTexts: {
    ...commonStyles.font18Italic,
    color: Colors.appBlack,
    marginLeft: moderateScale(16),
    marginBottom: moderateScaleVertical(8),
  },
  renderMainView: {
    width: width / 2 - 24,
    borderRadius: moderateScaleVertical(16),
    height: moderateScale(380),
    overflow: 'hidden',
    backgroundColor: Colors.white,
    marginBottom: moderateScaleVertical(16),
  },
  distanceText: {...commonStyles.font11GreyMedium, color: Colors?.pink},
  cardDesc: {
    ...commonStyles.font11GreyMedium,
    marginTop: moderateScaleVertical(8),
    color: Colors.black,
  },
  renderUserView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: moderateScaleVertical(8),
  },
  userImage: {
    width: moderateScale(24),
    height: moderateScale(24),
    borderRadius: moderateScale(50),
  },
  userName: {...commonStyles.font10Grey, marginLeft: 4},
  likeImage: {
    width: moderateScale(15),
    height: moderateScale(15),
    borderRadius: 50,
  },
});
