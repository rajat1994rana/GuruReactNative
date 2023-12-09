import { Platform, StyleSheet } from "react-native";

import {
  textScale,
  moderateScale,
  moderateScaleVertical,
} from "./responsiveSize";
import fontFamily from "./fontFamily";
import Colors from "./Colors";
export const hitSlopProp = {
  top: 22,
  right: 22,
  left: 22,
  bottom: 22,
};
export default StyleSheet.create({
  mainView: {
    padding: 10,
    marginTop: 15,
    marginHorizontal: 20,
  },
  font16Grey: {
    fontSize: textScale(16),
    color: Colors.greyScale,
    fontFamily: fontFamily.regular,
    // fontWeight:'400'
  },
  font16Italic: {
    fontSize: textScale(16),
    color: Colors.greyScale,
    fontFamily: fontFamily.italic_semiBold,
     fontWeight:'600'
  },
  font16GreyBold: {
    fontSize: textScale(16),
    color: Colors.greyScale,
    fontFamily: fontFamily.bold,
    // fontWeight:'700'
  },
  font18Italic: {
    fontSize: textScale(18),
    color: Colors.greyScale,
    fontFamily: fontFamily.italic_semiBold,
     fontWeight:'600'
  },
  font24BlackBold: {
    fontSize: textScale(24),
    color: Colors.appBlack,
    fontFamily: fontFamily.bold,
    // fontWeight:'700'
  },
  font24Black: {
    fontSize: textScale(24),
    color: Colors.appBlack,
    fontFamily: fontFamily.black,
    // fontWeight:'700'
  },
  font32Black: {
    fontSize: textScale(32),
    color: Colors.appBlack,
    fontFamily: fontFamily.bold,
    // fontWeight:'700'
  },
  font22BlackBold: {
    fontSize: textScale(22),
    color: Colors.appBlack,
    fontFamily: fontFamily.bold,
    // fontWeight:'700'
  },
  font20BlackBold: {
    fontSize: textScale(20),
    color: Colors.appBlack,
    fontFamily: fontFamily.bold,
    // fontWeight:'700'
  },
  font12WhiteBold: {
    fontSize: textScale(12),
    color: Colors.white,
    fontFamily: fontFamily.bold,
    // fontWeight:'700'
  },
  font12BlackBold: {
    fontSize: textScale(12),
    color: Colors.black,
    fontFamily: fontFamily.bold,
    // fontWeight:'700'
  },
  font11BlackBold: {
    fontSize: textScale(11),
    color: Colors.black,
    fontFamily: fontFamily.bold,
    // fontWeight:'700'
  },
  font32WhiteBold: {
    fontSize: textScale(32),
    color: Colors.white,
    fontFamily: fontFamily.bold,
    // fontWeight:'700'
  },
  font18Bold: {
    fontSize: textScale(18),
    fontFamily: fontFamily.bold,
    // fontWeight:'700'
  },
  font20Medium: {
    fontSize: textScale(20),
    fontFamily: fontFamily.medium,
    // fontWeight:'700'
  },
  font20Regular: {
    fontSize: textScale(20),
    fontFamily: fontFamily.regular,
    // fontWeight:'700'
  },
  font18BlackBold: {
    fontSize: textScale(18),
    fontFamily: fontFamily.bold,
    color: Colors.black
    // fontWeight:'700'
  },
  font18Regular: {
    fontSize: textScale(18),
    fontFamily: fontFamily.regular,
    // color: Colors.black
    // fontWeight:'700'
  },
  font26WhiteBold: {
    fontSize: textScale(26),
    fontFamily: fontFamily.bold,
    color: Colors.white
    // fontWeight:'700'
  },
  font16WhiteBold: {
    fontSize: textScale(16),
    color: Colors.white,
    fontFamily: fontFamily.bold,
    fontWeight:'700'
  },
  font16BlackBold: {
    fontSize: textScale(16),
    color: Colors.black,
    fontFamily: fontFamily.bold,
    // fontWeight:'700'
  },
  font16Black: {
    fontSize: textScale(16),
    color: Colors.black,
    fontFamily: fontFamily.black,
    // fontWeight:'700'
  },
  font16GreyMedium: {
    fontSize: textScale(16),
    color: Colors.greyScale,
    fontFamily: fontFamily.medium,
     fontWeight:'600'
  },
  font14BlackBold: {
    fontSize: textScale(14),
    color: Colors.black,
    fontFamily: fontFamily.bold,
    // fontWeight:'700'
  },
  font15BlackBold: {
    fontSize: textScale(15),
    color: Colors.black,
    fontFamily: fontFamily.bold,
    // fontWeight:'700'
  },
  font15Black: {
    fontSize: textScale(15),
    color: Colors.black,
    fontFamily: fontFamily.regular,
    // fontWeight:'700'
  },
  font14GreyBold: {
    fontSize: textScale(14),
    color: Colors.greyScale,
    fontFamily: fontFamily.bold,
    // fontWeight:'700'
  },
  font11Grey: {
    fontSize: textScale(11),
    color: Colors.placeHolderGrey,
    fontFamily: fontFamily.regular,
    // fontWeight:'400'
  },
  font11GreyMedium: {
    fontSize: textScale(11),
    color: Colors.placeHolderGrey,
    fontFamily: fontFamily.medium,
    // fontWeight:'400'
  },
  font10Grey: {
    fontSize: textScale(10),
    color: Colors.placeHolderGrey,
    fontFamily: fontFamily.regular,
    // fontWeight:'400'
  },
  font10GreyMedium: {
    fontSize: textScale(10),
    color: Colors.placeHolderGrey,
    fontFamily: fontFamily.medium,
    // fontWeight:'400'
  },
  font12White: {
    fontSize: textScale(12),
    color: Colors.white,
    fontFamily: fontFamily.regular,
    // fontWeight:'400'
  },
  font8White: {
    fontSize: textScale(8),
    color: Colors.white,
    fontFamily: fontFamily.regular,
    // fontWeight:'400'
  },
  font12Red: {
    fontSize: textScale(12),
    color: Colors.amountDownColor,
    fontFamily: fontFamily.regular,
    // fontWeight:'400'
  },
  font13RedMedium: {
    fontSize: textScale(13),
    color: Colors.amountDownColor,
    fontFamily: fontFamily.medium,
    // fontWeight:'400'
  },
  font11Red: {
    fontSize: textScale(11),
    color: Colors.amountDownColor,
    fontFamily: fontFamily.regular,
    // fontWeight:'400'
  },
  font12RedBold: {
    fontSize: textScale(12),
    fontFamily: fontFamily.bold,
    // fontWeight:'400'
  },
  font12Black:{
    fontSize: textScale(12),
    fontFamily: fontFamily.black,
  },
  font12GreenBold: {
    fontSize: textScale(12),
    //here is color
    color: Colors.appColor,
    fontFamily: fontFamily.bold,
  },
  font14RedBold: {
    fontSize: textScale(14),
    color: Colors.amountDownColor,
    fontFamily: fontFamily.bold,
    // fontWeight:'400'
  },
  font14GreenBold: {
    fontSize: textScale(14),
    //here is color change
    color: Colors.appColor,
    fontFamily: fontFamily.bold,
  },
  font10Regular: {
    fontSize: textScale(10),
    fontFamily: fontFamily.regular,
    // fontWeight:'400'
  },
  font11Regular: {
    fontSize: textScale(11),
    fontFamily: fontFamily.regular,
    // fontWeight:'400'
  },
  font12Regular: {
    fontSize: textScale(12),
    fontFamily: fontFamily.regular,
    // fontWeight:'400'
  },
  font13GreenMedium: {
    fontSize: textScale(13),
    color: Colors.amountUpColor,
    fontFamily: fontFamily.medium,
    // fontWeight:'400'
  },
  font14Regular: {
    fontSize: textScale(14),
    color:Colors.appBlack,
    fontFamily: fontFamily.regular,
    // fontWeight:'400'
  },
  font14Italic: {
    fontSize: textScale(14),
    color:Colors.appBlack,
    fontFamily: fontFamily.italic,
    // fontWeight:'400'
  },
  font16ItalicNormal: {
    fontSize: textScale(16),
    color:Colors.appBlack,
    fontFamily: fontFamily.italic,
    // fontWeight:'400'
  },
  font13Regular: {
    fontSize: textScale(13),
    fontFamily: fontFamily.regular,
    // fontWeight:'400'
  },
  font13Italic: {
    fontSize: textScale(13),
    fontFamily: fontFamily.italic,
    // fontWeight:'400'
  },
  font11Green: {
    fontSize: textScale(11),
    color: Colors.amountUpColor,
    fontFamily: fontFamily.regular,
    // fontWeight:'400'
  },
  font12grey: {
    fontSize: textScale(12),
    color: Colors.greyScale,
    fontFamily: fontFamily.regular,
    // fontWeight:'400'
  },
  font12greyMedium: {
    fontSize: textScale(12),
    color: Colors.greyScale,
    fontFamily: fontFamily.medium,
    // fontWeight:'400'
  },
  font12BlackMedium: {
    fontSize: textScale(12),
    color: Colors.black,
    fontFamily: fontFamily.medium,
    // fontWeight:'400'
  },
  font13greyMedium: {
    fontSize: textScale(13),
    color: Colors.greyScale,
    fontFamily: fontFamily.medium,
    // fontWeight:'400'
  },
  font14GreyMedium: {
    fontSize: textScale(14),
    color: Colors.greyScale,
    fontFamily: fontFamily.medium,
    // fontWeight:'400'
  },
  font13GreyMedium: {
    fontSize: textScale(13),
    color: Colors.greyScale,
    fontFamily: fontFamily.medium,
    // fontWeight:'400'
  },
  font14BlackMedium: {
    fontSize: textScale(14),
    color: Colors.black,
    fontFamily: fontFamily.medium,
     fontWeight:'600'
  },
  font14WhiteMedium: {
    fontSize: textScale(14),
    color: Colors.white,
    fontFamily: fontFamily.medium,
    // fontWeight:'400'
  },
  font14WhiteBold: {
    fontSize: textScale(14),
    color: Colors.white,
    fontFamily: fontFamily.bold,
    // fontWeight:'400'
  },
  font14Black: {
    fontSize: textScale(14),
    color: Colors.black454545,
    fontFamily: fontFamily.black,
  },
  font14white: {
    fontSize: textScale(14),
    color: Colors.white,
    fontFamily: fontFamily.regular,
    // fontWeight:'400'
  },
  font14PrimeMedium: {
    fontSize: textScale(14),
    color: Colors.appColor,
    fontFamily: fontFamily.medium,
    // fontWeight:'400'
  },
  font16PrimeBold: {
    fontSize: textScale(16),
    color: Colors.appColor,
    fontFamily: fontFamily.bold,
    // fontWeight:'400'
  },
  font30Italic: {
    fontSize: textScale(24),
    fontFamily: fontFamily.italic_semiBold,
    // fontWeight:'400'
  },
  font30medium: {
    fontSize: textScale(22),
    fontFamily: fontFamily.medium,
    // fontWeight:'400'
  },
  loader: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  homeLoader:{
    position: "absolute",
    left: moderateScale(1),
    right: 0,
    top: moderateScaleVertical(10),
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  successLoader: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignSelf:"center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRect: {
    height: moderateScaleVertical(46),
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: Colors.themeColor,
    borderWidth: 1,
    // borderColor: Colors.themeColor,
    borderRadius: 4,
  },
  shadowStyle: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: moderateScale(10) },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  shadowStyle2: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: Platform.OS == 'ios' ? moderateScaleVertical(7) : moderateScaleVertical(12.41) },
    shadowOpacity: Platform.OS == 'ios' ? 0.14 : 0.19,
    shadowRadius: Platform.OS == 'ios' ? 8 : 21.27,
    elevation: 4,
  },
  shadowStyle4: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: moderateScaleVertical(4) },
    shadowOpacity: 0.19,
    shadowRadius: Platform.OS == 'ios' ? 8 : 20,
    elevation: 4,
  },
  shadowStyle3: {
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 1,
    elevation: 4,
  },
  shadowStyleWallet: {
    backgroundColor: Colors.white,
    // borderRadius: 8,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: moderateScale(10) },
    shadowOpacity: 0.19,
    shadowRadius: 20,
    elevation: 10,
  },
  boxWithShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
  },
});