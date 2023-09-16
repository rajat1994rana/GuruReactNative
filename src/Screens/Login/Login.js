import { Text, View,Image, ImageBackground } from 'react-native';
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
import { height, moderateScaleVertical } from '../../Styles/responsiveSize';
import commonStyles from '../../Styles/commonStyles';


const Login = ({ navigation,route }) => {

    const [state, setState] = useState({
accName:"",
password:"",
isLoading: false,
    });
    const {isLoading,accName,password } = state;
    const updateState = data => setState(state => ({ ...state, ...data }));

useEffect(()=>{
   
},[])


const setText = (txt)=>{
updateState({accName:txt})
}


const pressLogin = () =>{
    navigation.navigate(NavigationStrings.CURVED_TAB)
}

const mobileLogin = () =>{
    return(
        <View style={{...styles.mobileView}}>

            <Text style={{...commonStyles.font24BlackBold}}>My mobile</Text>
            <Text style={{...commonStyles.font12Regular,marginTop:moderateScaleVertical(8)}}>Please enter your valid phone number. We will send you a 4-digit code to verify your account. </Text>

        </View>
    )
}

    return (
        <WrapperContainer removeTopInset={true}  bgColor={Colors.white} statusBarColor={Colors.appColorPrimary}>
        
             {/* <View style={{...styles.mainView}}> */}
               
            <AwareScrollView onPressButton={pressLogin} 
            scrollEnabled={false}
            extraScrollHeight={10}
             styling={{backgroundColor:Colors.white,flexGrow:1}}
            // styleMain={{marginTop:240,borderTopLeftRadius:70,borderTopRightRadius:70}}
             btnText={strings.LOGIN}>
                    <Image
                source={ImagePath.appLogo}
                style={{alignSelf:"center",position:"absolute",top:0,height:height/2,zIndex:-10,width:"100%"}}
                />
                 <Image
                source={ImagePath.chineseBigLogo}
                 resizeMode='contain'
                style={{alignSelf:"center",position:"absolute",top:120,zIndex:-10,width:"100%",height:moderateScaleVertical(180)}}
                />
               <View style={{flexGrow:1,backgroundColor:Colors.white,marginTop:moderateScaleVertical(280),borderTopLeftRadius:70,borderTopRightRadius:70,zIndex:100}}>
                <View style={{...styles.lowerView}}>
<TextInputCustom
setText={setText}
text={accName}
labelText={'account name'}
/>
<TextInputCustom
setText={(txt)=>updateState({password:txt})}
text={password}
labelText={'password'}
/>
</View>
</View>
            </AwareScrollView>
            {/* </View> */}
           
            {/* </View> */}
        </WrapperContainer>
    )
};

export default Login;