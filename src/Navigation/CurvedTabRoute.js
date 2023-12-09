import React from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text
} from 'react-native';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import ImagePath from '../Constants/ImagePath';
import * as screens from '../Screens/index';
import NavigationStrings from '../Constants/NavigationStrings';
import { moderateScale, moderateScaleVertical } from '../Styles/responsiveSize';
import Colors from "../Styles/Colors";
import { useNavigation } from '@react-navigation/native';
import commonStyles from '../Styles/commonStyles';
// import { NavigationContainer } from '@react-navigation/native';

// const Screen1 = () => {
//   return <View style={styles.screen1} />;
// };

// const Screen2 = () => {
//   return <View style={styles.screen2} />;
// };

const CurvedTabRoute = (props) => {

   const naviagtion = useNavigation();
  const _renderIcon = (routeName, selectedTab) => {

    switch (routeName) {
      case NavigationStrings.HOME:
        iconActive = ImagePath.homeIconActive;
        iconInactive = ImagePath.homeIcon;
        iconName = NavigationStrings.HOME
        break;
      case NavigationStrings.DISCOVER:
        iconActive = ImagePath.globeActive;
        iconInactive = ImagePath.globe;
        iconName = NavigationStrings.DISCOVER
        break;
    case NavigationStrings.MESSAGE:
        iconActive = ImagePath.chatActiveIcon;
        iconInactive = ImagePath.chatIcon;
        iconName = NavigationStrings.MESSAGE
        break;
        case NavigationStrings.PROFILE_SCREEN:
        iconActive = ImagePath.profileActive;
        iconInactive = ImagePath.profileIcon;
        iconName = NavigationStrings.PROFILE_SCREEN
        break;
    }

    return (
        <View style={{alignItems:"center",justifyContent:"center"}}>
        <Image
        source={routeName === selectedTab ? iconActive : iconInactive}
        />
        <Text style={{...styles.tanName,color:routeName === selectedTab?Colors.appColorPrimary:Colors.greyScale}}>{iconName}</Text>
        </View>
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
      <CurvedBottomBarExpo.Navigator
        type="DOWN"
        style={styles.bottomBar}
        shadowStyle={styles.shawdow}
        
        height={55}
        circleWidth={50}
        bgColor="white"
        initialRouteName="title1"
        borderTopLeftRight
        screenOptions={{headerShown:false,}}
        renderCircle={({ selectedTab, navigate }) => {
            return(
          <Animated.View style={{...styles.btnCircleUp}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => naviagtion.navigate(NavigationStrings.POST_EVENT_SCREEN)}
            >
      <Image source={ImagePath.add} resizeMode="contain" style={{...styles.activeImg}} />
            </TouchableOpacity>
          </Animated.View>
        )}}
        tabBar={renderTabBar}
      >
        <CurvedBottomBarExpo.Screen
          name={NavigationStrings.HOME}
          position="LEFT"
          component={screens.Home}
        //   screenOptions={{ headerShown: false }}
        />
        <CurvedBottomBarExpo.Screen
          name={NavigationStrings.DISCOVER}
          component={screens.Discover}
          position="LEFT"
        />
         <CurvedBottomBarExpo.Screen
          name={NavigationStrings.POST_EVENT_SCREEN}
          component={screens.PostEventScreen}
          position="CENTER"
        />
        <CurvedBottomBarExpo.Screen
          name={NavigationStrings.MESSAGE}
          component={screens.Message}
          position="RIGHT"
        />
        <CurvedBottomBarExpo.Screen
          name={NavigationStrings.PROFILE_SCREEN}
          component={screens.Profile}
          position="RIGHT"
        />
      </CurvedBottomBarExpo.Navigator>
    // </NavigationContainer>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 80,
  },
  tanName:{
    ...commonStyles.font11Regular,
    textAlign:"center"
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    shadowOpacity: 1,
    // shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems:"center",
    backfaceVisibility:"visible",backgroundColor:"transparent"
  },
  bottomBar: {
    // marginBottom:30
    paddingBottom:moderateScaleVertical(20),
backgroundColor:Colors.white
    // height:moderateScaleVertical(72)
  },
  btnCircleUp: {
    width: 50,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    backfaceVisibility:"visible",
    bottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 10,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
  activeImg: {
    height: moderateScale(23.5),
    width: moderateScale(22),
  },
});

export default CurvedTabRoute;