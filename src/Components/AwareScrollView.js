import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Platform,
  Text,
  Image,
  useColorScheme,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ImagePath from "../Constants/ImagePath";
import Colors from "../Styles/Colors";
import commonStyles from "../Styles/commonStyles";
import { moderateScale, moderateScaleVertical, textScale } from "../Styles/responsiveSize";
// import GradientButton from "./GradientButton";
import { ThemeContext } from "./ThemeProvider";
import Buttonn from "./Buttonn";
import strings from "../Constants/lang";

const { width, height } = Dimensions.get("screen");

const AwareScrollView = ({
  children,
  btnText,
  onPressButton,
  headingTwo,
  headingText,
  headerTwoStyles,
  disabled,
  emailText,
  btnStyling,
  typeScreen,
  styling,
  createNewAcc,
  colorsArray,
  styleMain,
  scrollEnabled,
  btnStyle,
  scrollBtnCheck,
  extraScrollHeight
}) => {
  const { theme } = useContext(ThemeContext);
  const darkMode = useColorScheme();
  // console.log(darkMode);
  return (
    <>
      {/* <StatusBar translucent backgroundColor="transparent" barStyle="light-content" /> */}
      <KeyboardAwareScrollView
        enableOnAndroid
        extraScrollHeight={extraScrollHeight?extraScrollHeight:80}
        scrollEnabled={scrollEnabled}
        showsVerticalScrollIndicator={false}
        style={{ paddingTop: 0,...styleMain }}
        contentContainerStyle={{ flexGrow: 1, ...styling }}
      >
        {headingText && (
          <>
            {/* <Image
              source={darkMode === "light" ? ImagePath.login_Image : ImagePath.login_Image_dark}
              style={{ alignSelf: "center" }}
            // resizeMode={"cover"}
            /> */}
            <Text
              style={{
                ...commonStyles.font24BlackBold,
                color: Colors.appBlack,
                textAlign:"center",
                marginHorizontal: moderateScale(24),
                marginTop:moderateScaleVertical(40),
                marginBottom: moderateScaleVertical(20)
              }}
            >{headingText}</Text>
          </>
        )}
        {headingTwo && (
          <Text
            style={{
              ...styles.topText,
              color: theme.textColor,
              ...headerTwoStyles,
            }}
          >
            {headingTwo}{' '}
            <Text style={styles.emailTextStyle}>{emailText}</Text>
          </Text>
        )}
        {children}
        {!scrollBtnCheck && btnText && (<Buttonn
            btnColor={Colors.appColorPrimary}
            containerStyle={{ ...styles.customBtnStyle,...btnStyle }}
            btnText={btnText}
            onPress={onPressButton}
            textStyle={{
              ...commonStyles.font16WhiteBold,
              color: Colors.white,
            }}
            disabled={disabled}
            borderRadius={20}
            />)}
      </KeyboardAwareScrollView>
      {scrollBtnCheck &&(
        Platform.OS === "ios" ? (
          // <></>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "padding"}
            style={{
              ...styles.btnstyling,
              marginBottom: Platform.OS === "ios" ? 20 : 0,
              // backgroundColor:Colors.white
            }}
          >
            <Buttonn
            btnColor={Colors.appColorPrimary}
            containerStyle={{ ...styles.customBtnStyle }}
            btnText={btnText}
            onPress={onPressButton}
            textStyle={{
              ...commonStyles.font16WhiteBold,
              color: Colors.white,
            }}
            disabled={disabled}
            borderRadius={20}
            />


          </KeyboardAvoidingView>
        ) : (
          <>
          {typeScreen == "Login" &&<Pressable onPress={createNewAcc}><Text style={{...styles.createnewText, color:Colors.appColorPrimary}} onPress={createNewAcc}>Don't have an account? <Text style={{...commonStyles.font16Black,color:Colors.appColorPrimary}}>Create Account</Text></Text></Pressable>}
            <Buttonn
            btnColor={Colors.appColorPrimary}
            containerStyle={{ ...styles.customBtnStyle }}
            btnText={btnText}
            onPress={onPressButton}
            textStyle={{
              ...commonStyles.font16WhiteBold,
              color: Colors.white,
            }}
            disabled={disabled}
            borderRadius={20}
            />
          </>
        )
        // <CustomButton
        //   textBtn={btnText}
        //   onPress={onPressButton}
        //   customStyle={{ ...styles.customBtnStyle, marginHorizontal: 24 }}
        // />
      )}
    </>
  );
};
export default AwareScrollView;

const styles = StyleSheet.create({
  btnstyling: {
    position: "absolute",
    bottom: 2,
    paddingHorizontal: 20,
    // marginBottom:100,
  },
  emailTextStyle: {
    ...commonStyles.font16PrimeBold
  },
  customBtnStyle: {
    marginBottom: moderateScaleVertical(Platform.OS == "ios" ? 55 : 20),
    marginTop: moderateScaleVertical(18),
    alignSelf:"center",
    //marginLeft:moderateScale(Platform.OS == "ios"?80:24),
     marginHorizontal: moderateScale(36),
    height:moderateScaleVertical(52),
    width: width/1.42 ,
    borderRadius:15
  },
  createnewText:{
    ...commonStyles.font14BlackMedium,
    textAlign:"center",
     marginTop:moderateScaleVertical(4),
    marginBottom:moderateScaleVertical(16)
},
  topText: {
    ...commonStyles.font16Grey,
    // lineHeight: 25,
    // maxWidth: moderateScale(270),
    // marginHorizontal: moderateScale(24),
    marginBottom: moderateScaleVertical(24),
    marginTop: moderateScaleVertical(20),
    textAlign:"center"
  },
  backgroundImage: {
    height: height,
    width: width,
  },
  skipText: {
    textAlign: "center",
    color: Colors.white,
    fontSize: 16,
  },
  skipTouchableView: {
    marginTop: 0,
  },
  logo: {
    // marginTop: moderateScaleVertical(10),
    alignSelf: "center",
    marginBottom: moderateScaleVertical(5),
    // height:moderateScaleVertical(140)
  },
});
