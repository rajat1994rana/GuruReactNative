import { Text, View,Image, ImageBackground, Keyboard } from 'react-native';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import Colors from '../../Styles/Colors';
import { ThemeContext } from '../../Components/ThemeProvider';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AwareScrollView from '../../Components/AwareScrollView';
import strings from '../../Constants/lang';
import TextInputCustom from '../../Components/TextInputCustom';
import NavigationStrings from '../../Constants/NavigationStrings';
import styles from './styles';
import ImagePath from '../../Constants/ImagePath';
import { height, moderateScale, moderateScaleVertical } from '../../Styles/responsiveSize';
import commonStyles from '../../Styles/commonStyles';
import PhoneCountryPicker from '../../Components/PhoneCountryPicker';


const SignUp = ({ navigation,route }) => {

    const [state, setState] = useState({
accName:"",
password:"",
isLoading: false,
activityIndex:1,
mobileNumber:"",
iso2:"US",
countryCode:"+1"
    });
    const {isLoading,accName,password,activityIndex,mobileNumber,iso2,countryCode } = state;
    const updateState = data => setState(state => ({ ...state, ...data }));

const pressLogin = () =>{
    navigation.navigate(NavigationStrings.OTP_SCREEN)
}

const selectCountry = (data) => {
    updateState({ iso2: data.cca2 });
    updateState({ countryCode: `${data.callingCode[0]}` });
//    let validatedNumber = isPossiblePhoneNumber(mobileNumber, data.cca2)
//    updateState({phoneValidationCheck:validatedNumber})
  };

const mobileLogin = () =>{
    return(
        <View style={{...styles.mobileView}}>

            <Text style={{...commonStyles.font24BlackBold}}>My mobile</Text>
            <Text style={{...commonStyles.font12Regular,marginTop:moderateScaleVertical(8)}}>Please enter your valid phone number. We will send you a 4-digit code to verify your account. </Text>
            <PhoneCountryPicker
            onCountrySelected={selectCountry}
            editable={true}
            value={mobileNumber}
            onChangeMobile={(text) => {updateState({ mobileNumber: text.trim().replace(",","") })}}
            countryCode={iso2}
            containerStyle={{marginTop:moderateScaleVertical(28)}}
            flagContainerStyle={{width:moderateScale(countryCode.length>2?102:90)}}
          />
        </View>
    )
}

    return (
        <WrapperContainer bgColor={Colors.white} statusBarColor={Colors.appColor2}>
               
            <AwareScrollView onPressButton={pressLogin} 
             scrollEnabled={false}
             btnStyle={{marginTop:moderateScaleVertical(180)}}
             scrollBtnCheck={true}
            // styling={{backgroundColor:Colors.white,flexGrow:1}}
            // styleMain={{marginTop:240,borderTopLeftRadius:70,borderTopRightRadius:70}}
             btnText={strings.CONTINUE}>
                
{activityIndex==1&& mobileLogin()}
            </AwareScrollView>
           
        </WrapperContainer>
    )
};

export default SignUp;