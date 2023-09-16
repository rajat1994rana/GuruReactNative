import { View, Text, TouchableOpacity, TextInput, Image, FlatList, Platform } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import Colors from '../../Styles/Colors'
import Header from '../../Components/Header'
import ImagePath from '../../Constants/ImagePath'
import commonStyles from '../../Styles/commonStyles'
import { width } from '../../Styles/responsiveSize'
import NavigationStrings from '../../Constants/NavigationStrings'
import ButtonComp from '../../Components/ButtonComp'

export default function SettingScreen({navigation}) {
    const [activeTab, setactiveTab] = useState(0)
   let data=[
    {
        title:'Personal Information',
        image:ImagePath.userIcon,
        navigate:NavigationStrings.EDIT_PROFILE_SCREEN
    },
    {
        title:'Message & Privacy',
        image:ImagePath.settingIcon,
        navigate:NavigationStrings.PRIVACY_SCREEN
    },
    {
        title:'Language',
        image:ImagePath.langIcon,
        navigate:NavigationStrings.LANGUAGE_SCREEN
    },
    {
        title:'Location',
        image:ImagePath.earthIcon,
        navigate:NavigationStrings.LANGUAGE_SCREEN
    },
    {
        title:'Report',
        image:ImagePath.reportIcon,
        navigate:NavigationStrings.LANGUAGE_SCREEN
    },
   ]
  return (
    <WrapperContainer bgColor={Colors.white} statusBarColor={Colors.white}>
     <View style={{marginTop:Platform.OS=='android'?16:0}}>
     <Header showLeft={ImagePath.backBtn} leftImageStyle={{marginLeft:16}} headerName={'Setting'} headerTextStyle={{}}/>
     </View>
     <View style={{marginTop:48,paddingLeft:16,paddingRight:24,flex:1}}>
        {data?.map((res,index)=>{
            return(
                <TouchableOpacity onPress={()=>{
                    if(res?.navigate)
                    {
                        navigation.navigate(res?.navigate)
                    }
                }} key={index} style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={res.image}/>
                    <Text style={{...commonStyles.font16Black,marginBottom:12}}>{res?.title}</Text>
                    </View>
                    <Image source={ImagePath.right}/>
                </TouchableOpacity>
            )
        })}
     </View>
     <View style={{marginBottom:60,paddingHorizontal:24}}>
       <ButtonComp
       btnText='Log Out'
       btnTextStyle={{color:Colors.greyText}}
       btnStyle={{backgroundColor:'#D9D9D98A'}}
       />
     </View>
    </WrapperContainer>
  )
}