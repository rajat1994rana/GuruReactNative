import React, { useContext, useState } from "react";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import { Image, Platform, StyleSheet,TouchableOpacity,View } from "react-native";
import NavigationStrings from "../Constants/NavigationStrings";
import * as screens from '../Screens/index';
import ImagePath from "../Constants/ImagePath";
import Colors from "../Styles/Colors";
import { moderateScale, moderateScaleVertical } from "../Styles/responsiveSize";
import { ThemeContext } from "../Components/ThemeProvider";
import strings from "../Constants/lang";
import { useSelector } from "react-redux";
import { Config } from "../../config";
import fontFamily from "../Styles/fontFamily";


const BottomTab = createBottomTabNavigator();

const TabRoutes = (props) => {
  const userData = useSelector((data) => data?.auth?.userData);
  const switchExchange = useSelector((data) => data?.switchStack?.switchInfo);
  // const [centerTabFocused,setCenterTabFocused] = useState(false);

  const CustomTabarButtonOrignal = ({children, onPress,focused}) =>{
    return(
<TouchableOpacity
style={{
  top:-21,
  justifyContent:"center",
  alignItems:"center",
}}
activeOpacity={0.8}
onPress={onPress}
>
  <View
  style={{
    height:70,width:70,borderRadius:40, backgroundColor:"transparent",
    justifyContent:"center",alignItems:"center", backfaceVisibility:"visible",
  }}>
{children}
  </View>

</TouchableOpacity>)
  }

  const CustomTabarButton = ({focused}) =>{
    return(
<View
style={{
  top:-24,
  justifyContent:"center",
  alignItems:"center",
}}
activeOpacity={0.8}
// onPress={onPress}
>
  <View
  style={{
    height:70,width:70,borderRadius:40, backgroundColor:Colors.appColorPrimary,
    justifyContent:"center",alignItems:"center"
  }}>
<Image source={ImagePath.add} resizeMode="contain" style={{...styles.activeImg,backgroundColor:Colors.appColorPrimary}} />
  </View>

</View>)
  }

  const CustomTabarButtonInactive = ({focused}) =>{
    return(
<TouchableOpacity
style={{
  top:-24,
  justifyContent:"center",
  alignItems:"center",
}}
activeOpacity={0.8}
// onPress={onPress}
>
  <View
  style={{
    height:70,width:70,borderRadius:40, backgroundColor:Colors.blackOpacity30,
    backfaceVisibility:"visible",
    justifyContent:"center",alignItems:"center"
  }}>
 <Image source={ImagePath.addBlack} resizeMode="contain" style={{...styles.inActiveImg2}} />
  </View>

</TouchableOpacity>)
  }

  return (
    <BottomTab.Navigator
      tabBar={(tabsProps) => (
        <>
          <BottomTabBar style={styles.bottomStyle} {...tabsProps} />
        </>
      )}
      initialRouteName={NavigationStrings.HOME}
      screenOptions={{
        tabBarActiveTintColor: Colors.appColorPrimary,
        tabBarInactiveTintColor: Colors.greyScale,
        // tabBarItemStyle: 10,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarStyle: { ...styles.customBottomtabsStyle, },
        tabBarLabelStyle: styles.tabLabel,
        headerShown: false
        // tabBarIconStyle:styles.tabi
      }}
    // // tabBarOptions={{
    // //   keyboardHidesTabBar: true,
    // //   style: styles.customBottomtabsStyle,
    // //   activeTintColor: Colors.appColor,
    // //   inactiveTintColor: Colors.greyScale,
    // //   showLabel: false,
    // //   labelStyle: styles.tabLabel,
    // //   iconStyle: styles.tabIcons,
    // // }}
    // screenOptions={{ headerShown: false, lazy: false }}
    // style={{ backgroundColor: "red" }}
    >
      <BottomTab.Screen
        name={NavigationStrings.HOME}
        component={screens.Home}
        options={{
          tabBarLabel: "Gugu",
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image source={ImagePath.home} resizeMode="contain" style={styles.activeImg} />
            ) : (
              <Image source={ImagePath.homeInactive} resizeMode="contain" style={styles.inActiveImg} />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={NavigationStrings.DISCOVER}
        component={screens.Discover}
        options={{
          tabBarLabel:"Discover",
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image
                source={ImagePath.globeActive}
                resizeMode="contain"
                style={styles.activeImg}
              />
            ) : (
              <Image
                source={ImagePath.globe}
                resizeMode="contain"
                style={styles.inActiveImg}
              />
            );
          },
        }}

      />
      <BottomTab.Screen
        name={NavigationStrings.s}
        component={screens.CreatePost}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return focused ? (
              // <CustomTabarButton/>
              <View
  style={{
    height:70,width:70,borderRadius:40, backgroundColor:Colors.appColorPrimary,
    justifyContent:"center",alignItems:"center", backfaceVisibility:"visible",
  }}>
              <Image source={ImagePath.add} resizeMode="contain" style={{...styles.activeImg,backgroundColor:Colors.appColorPrimary}} />
             </View>
            ) : (
            //  <CustomTabarButtonInactive/>
            <View
            style={{
              height:70,width:70,borderRadius:40, backgroundColor:Colors.blackOpacity50,
              justifyContent:"center",alignItems:"center", backfaceVisibility:"visible",
            }}>
            <Image source={ImagePath.addBlack} resizeMode="contain" style={{...styles.inActiveImg2}} />
            </View>
            );
          },
          tabBarButton:(props) =>(
            <CustomTabarButtonOrignal {...props}/>
          )
        }}
      />
      <BottomTab.Screen
        name={NavigationStrings.MESSAGE}
        component={screens.Message}
        options={{
          tabBarLabel: "Message",
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image source={ImagePath.chatActiveIcon} resizeMode="contain" style={styles.activeImg} />
            ) : (
              <Image
                source={ImagePath.chatIcon}
                resizeMode="contain"
                style={styles.inActiveImg}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={"Profile"}
        component={screens.Profile}
        options={{
          tabBarLabel: "Me",
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image
                source={ImagePath.profileActive}
                resizeMode="contain"
                style={styles.activeImg}
              />
            ) : (
              <Image
                source={ImagePath.profileIcon}
                resizeMode="contain"
                style={styles.inActiveImg}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  customBottomtabsStyle: {
    paddingTop: moderateScaleVertical(5),
    paddingBottom:moderateScaleVertical(4)
  },
  tabLabel: {
    fontSize: 10,
    fontFamily:fontFamily.italic,
    // fontFamily: fontFamily.medium,
    textAlign: "center"
  },
  addImage: {
    marginBottom: moderateScaleVertical(30),
    marginTop: moderateScaleVertical(30),
  },
  bottomStyle: {
    elevation: 30,
    height: moderateScale(Platform.OS == "ios" ? 70 : 52),
  },
  inActiveImg: {
    height: moderateScale(21),
    width: moderateScale(20),
  },
  activeImg: {
    height: moderateScale(23.5),
    width: moderateScale(22),
  },
  inActiveImg2:{
    height: moderateScale(17),
    width: moderateScale(16),
  },
  active_label: {
    color: Colors.appColor2,
    fontSize: 12
  },
  inactive_label: {
    color: Colors.greyScale,
    fontSize: 12
  }
});

export default TabRoutes;