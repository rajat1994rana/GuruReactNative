import React, { useEffect } from "react";
import { useColorScheme } from "react-native";
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context";
import Routes from "./src/Navigation/Routes";
import { ThemeContext, ThemeProvider } from "./src/Components/ThemeProvider";
import { Provider } from "react-redux";
import store from "./src/Redux/store";
import FlashMessage from "react-native-flash-message";
import { moderateScale, textScale } from "./src/Styles/responsiveSize";
import { locationPermission } from "./src/Constants/permissions";
import Geolocation from 'react-native-geolocation-service';
import { saveLocationInfo } from "./src/Redux/actions/locations";
import SplashScreen from "react-native-splash-screen";

const { dispatch } = store;
const App = () => {

  const colorScheme = useColorScheme();

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);  
  },[])

  useEffect(()=>{
    locationPermission().then(res=>{
      if(res=="granted"){
        Geolocation.getCurrentPosition(
          (position) => {
            console.log(position);
            saveLocationInfo(position)
          },
          (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
      }
      console.log(res,"resssssssss");
    }).catch(err=>{
      console.log(err,"Eroororor");
    })
  },[])


  return (
    <Provider store={store}>
      <ThemeProvider update={colorScheme}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <Routes />
          <FlashMessage
            titleStyle={{
              marginRight: moderateScale(5),
              // fontFamily: fontFamily.medium,
              fontSize: textScale(12),
            }}
            position="top"
          />
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;