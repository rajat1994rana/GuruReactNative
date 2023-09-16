import { BackHandler, FlatList, Image, ImageBackground, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import ImagePath from '../../Constants/ImagePath';
import Colors from '../../Styles/Colors';
import { ThemeContext } from '../../Components/ThemeProvider';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import styles from './styles';
import strings from '../../Constants/lang';
import commonStyles from '../../Styles/commonStyles';
import { moderateScale, moderateScaleVertical } from '../../Styles/responsiveSize';
import ClickableImg from '../../Components/ClickableImg';
import NavigationStrings from '../../Constants/NavigationStrings';
import Buttonn from '../../Components/Buttonn';
import { locationPermission } from '../../Constants/permissions';
import Geolocation from 'react-native-geolocation-service';
import { saveLocationInfo } from '../../Redux/actions/locations';


const LandingPage = ({ navigation,route }) => {
    const [state, setState] = useState({
        isLoading: false,
        disabled:false,
    });
    const {isLoading,disabled } = state;
    const updateState = data => setState(state => ({ ...state, ...data }));


  useEffect(()=>{
    locationPermission().then(res=>{
      if(res=="granted"){
        Geolocation.getCurrentPosition(
          (position) => {
            saveLocationInfo(position)
          },
          (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 2000, maximumAge: 3600000 }
      );
      }
      console.log(res,"resssssssss");
    }).catch(err=>{
      console.log(err,"Eroororor");
    })
  },[])

      const onLogin = () =>{
        navigation.navigate(NavigationStrings.LOGIN);
      }

      const onSignUp = () =>{
        navigation.navigate(NavigationStrings.SIGN_UP);
      }

    return (
        <WrapperContainer bgColor={Colors.white} statusBarColor={Colors.appColor2}>
            <View style={{...styles.mainView}}>
            <ImageBackground
            source={ImagePath.appLogo}
            style={{...styles.appLogoStyle}}
            resizeMode='contain'
            >
              <Image
              source={ImagePath.chineseLogo}
resizeMode='contain'
style={{width:moderateScale(160)}}
              />
            </ImageBackground>
            {/* <Text style={{...styles.discriptionTextStyle}}>discription</Text>
            <Text style={{...styles.discriptionTextStyle2}}>xxxxxxxxxxxxxxx</Text> */}
            <View style={{...styles.loginSignupView}}>
                <Buttonn
                btnColor={Colors.appColorPrimary}
                 containerStyle={{ ...styles.customBtnStyle }}
                btnText={strings.LOGIN}
                onPress={onLogin}
                textStyle={{
                  ...commonStyles.font16BlackBold,
                  color: Colors.white,
                }}
                disabled={disabled}
                />
                {/* <TouchableOpacity onPress={onSignUp}  activeOpacity={0.8} style={{...styles.loginSignUpBtns}}>
                <Text style={{...commonStyles.font13Regular,color:Colors.appBlack}}>{strings.SIGNUP}</Text>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={onSignUp}  activeOpacity={0.8} style={{...styles.loginSignUpBtns}}>
                <Text onPress={onSignUp} style={{...commonStyles.font16BlackBold,color:Colors.appColorPrimary}}>Sign up with phone number</Text>
                </TouchableOpacity>
            </View>
            <View style={{...styles.orView}}>
                <View style={{...styles.orLine}}></View>
                <Text style={{...commonStyles.font13Regular,color:Colors.greyText,marginHorizontal:moderateScale(24)}}>or</Text>
                <View style={{...styles.orLine}}></View>
            </View>
            <View style={{...styles.socialLoginView}}>
<ClickableImg
source={ImagePath.chatIcon}
style={styles.iconsStyle}
onPress={()=>{navigation.navigate(NavigationStrings.LOCATION_UPLOAD)}}
/>
<ClickableImg
source={ImagePath.googleIcon}
style={styles.iconsStyle}
/>
<ClickableImg
source={ImagePath.facebookIcon}
style={styles.iconsStyle}
/>
<ClickableImg
source={ImagePath.appleIcon}
style={styles.iconsStyle}
/>
            </View>
            <View style={{...styles.lowerView}}>
              <Text style={{...commonStyles.font14Regular,color:Colors.appColorPrimary}}>Terms of use</Text>
              <Text style={{...commonStyles.font14Regular,color:Colors.appColorPrimary}}>Privacy Policy</Text>
            </View>
         </View>
        </WrapperContainer>
    )
};

export default LandingPage;