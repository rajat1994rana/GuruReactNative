import { Text, View,Image, ImageBackground, Keyboard } from 'react-native';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import Colors from '../../Styles/Colors';
import AwareScrollView from '../../Components/AwareScrollView';
import strings from '../../Constants/lang';
import styles from './styles';
import ImagePath from '../../Constants/ImagePath';
import Header from '../../Components/Header';
import _BackgroundTimer from 'react-native-background-timer';
import { useFocusEffect } from '@react-navigation/native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from "react-native-confirmation-code-field";
import commonStyles from '../../Styles/commonStyles';
import NavigationStrings from '../../Constants/NavigationStrings';
import { moderateScale, moderateScaleVertical } from '../../Styles/responsiveSize';


const OtpScreen = ({ navigation,route }) => {
    const [secondsLeft, setSecondsLeft] = useState(59);
    const ref = useBlurOnFulfill({ value, cellCount: 4 });
    const [propsOtp = props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
      });
      const [value, setValue] = useState("");
    const [state, setState] = useState({
isLoading: false,
showExpire:false,
    });
    const {isLoading,showExpire } = state;
    const updateState = data => setState(state => ({ ...state, ...data }));

    useFocusEffect(useCallback(()=>{
        updateState({showExpire:false});
        setSecondsLeft(60);
        startTimer();
        return () => {
                _BackgroundTimer.stopBackgroundTimer();
              };
      },[]))

      useEffect(() => {
        if (value.length == 4 && !showExpire) {
          onVerify();
        }
      }, [value]);

      const onVerify = () => {
        console.log(value,"ininin");
      }


const pressLogin = () =>{
 navigation.navigate(NavigationStrings.ABOUT_YOURSELF)
}

const startTimer = () => {
    _BackgroundTimer.runBackgroundTimer(() => {
      setSecondsLeft(secs => {
        if (secs > 0) return secs - 1
        else return 0;
      })
    }, 1000)
  }


    return (
        <WrapperContainer bgColor={Colors.white} statusBarColor={Colors.appColor2}>
               
            <AwareScrollView onPressButton={pressLogin} 
             scrollEnabled={false}
             btnStyle={{marginTop:moderateScaleVertical(100)}}
            // styling={{backgroundColor:Colors.white,flexGrow:1}}
            // styleMain={{marginTop:240,borderTopLeftRadius:70,borderTopRightRadius:70}}
             btnText={strings.CONTINUE}>
<Header
showLeft={ImagePath.backIcon}
leftImageStyle={{marginLeft:moderateScale(16),marginTop:moderateScaleVertical(22)}}
/>
<View style={styles.mainView}>
<Text style={{...commonStyles.font32Black,color:Colors.appBlack,textAlign:"center"}}>00:{secondsLeft}</Text>
<Text numberOfLines={3} style={{...commonStyles.font18Regular,color:Colors.appBlack,textAlign:"center"}}>{"Type the verification \n code \nwe've sent you"}</Text>

<CodeField
            ref={ref}
            {...propsOtp}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            autoFocus={true}
            onChangeText={setValue}
            cellCount={4}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            onSubmitEditing={() => { value.length == 6 ? onVerify() : Keyboard.dismiss() }}
            textInputStyle={{
              backgroundColor: Colors.appBlack,
              alignSelf: "center",
            }}
            renderCell={({ index, symbol, isFocused }) => {
                console.log(index, symbol.length, isFocused);
                return(
              <Text
                key={index}
                style={{ ...styles.cell, borderWidth: isFocused ? 2.3 : 1.3, 
                    backgroundColor:symbol.length==1?Colors.appColorPrimary:Colors.white,
                    color:Colors.white,fontSize:24,fontWeight:700 }}
                onLayout={() => { getCellOnLayoutHandler(index) }}>
                {symbol || (isFocused ? <Cursor /> : index == 3 ? onVerify : null)}
              </Text>
            )}}
          />
          <Text style={{...commonStyles.font16GreyMedium,color:Colors.appColorPrimary,textAlign:"center",marginTop:moderateScaleVertical(12)}}>{strings.SEND_AGAIN}</Text>
</View>
            </AwareScrollView>
           
        </WrapperContainer>
    )
};

export default OtpScreen;