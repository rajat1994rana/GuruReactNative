import React, { useEffect } from "react";
import NavigationStrings from "../Constants/NavigationStrings";
import * as screens from '../Screens';
import TabRoutes from "./TabRoutes";
import CurvedTabRoute from "./CurvedTabRoute";
// import TabRoutes from "./TabRoutes";
// import GuestTabRoutes from "./GuestTabRoutes";

export default function (Stack) {
  return (
    <>
     <Stack.Screen name={NavigationStrings.LANDING_PAGE} component={screens.LandingPage} options={{ headerShown: false }} />
     <Stack.Screen name={NavigationStrings.LOGIN} component={screens.Login} options={{ headerShown: false }} />
     <Stack.Screen name={NavigationStrings.LOCATION_UPLOAD} component={screens.LocationUpload} options={{ headerShown: false }} />
     <Stack.Screen name={NavigationStrings.ABOUT_YOURSELF} component={screens.AboutYourself} options={{ headerShown: false }} />
     <Stack.Screen name={NavigationStrings.SIGN_UP} component={screens.SignUp} options={{ headerShown: false }} />
     <Stack.Screen name={NavigationStrings.OTP_SCREEN} component={screens.OtpScreen} options={{ headerShown: false }} />
     <Stack.Screen name={NavigationStrings.INTERESTS} component={screens.Interests} options={{ headerShown: false }} />
     <Stack.Screen name={NavigationStrings.CHAT_SINGLE} component={screens.ChatSingle} options={{ headerShown: false }} />
     <Stack.Screen name={NavigationStrings.FOLLOWERS_SCREEN} component={screens.FollowersScreen} options={{ headerShown: false }} />
     <Stack.Screen name={NavigationStrings.SETTING_SCREEN} component={screens.SettingScreen} options={{ headerShown: false }} />
     <Stack.Screen name={NavigationStrings.EDIT_PROFILE_SCREEN} component={screens.EditProfileScreen} options={{ headerShown: false }} />
     <Stack.Screen name={NavigationStrings.INTEREST_SCREEN} component={screens.InterestsScreen} options={{ headerShown: false }} />
     <Stack.Screen name={NavigationStrings.PRIVACY_SCREEN} component={screens.PrivacyScreen} options={{ headerShown: false }} />
     <Stack.Screen name={NavigationStrings.LANGUAGE_SCREEN} component={screens.LanguageScreen} options={{ headerShown: false }} />
    <Stack.Screen name={NavigationStrings.BOTTOM_BAR} component={TabRoutes} options={{ headerShown: false }} />
    <Stack.Screen name={NavigationStrings.FOLLOWERS_DETAILS_SCREEN} component={screens.FollowerDetailsScreen} options={{ headerShown: false }} />
    <Stack.Screen name={NavigationStrings.POST_EVENT_SCREEN} component={screens.PostEventScreen} options={{ headerShown: false }} />
    <Stack.Screen name={NavigationStrings.EVENT_DETAILS_SCREEN} component={screens.EventDetailScreen} options={{ headerShown: false }} />
    <Stack.Screen name={NavigationStrings.EVENT_HISTORY} component={screens.EventHistory} options={{ headerShown: false }} />
    
     <Stack.Screen name={NavigationStrings.CURVED_TAB} component={CurvedTabRoute} options={{ headerShown: false,gestureEnabled:false }} />
     {/* <Stack.Screen name={NavigationStrings.SIGNUP} component={screens.} options={{ headerShown: false }} /> */}
    </>
  );
}
