import React from "react";
import NavigationStrings from "../Constants/NavigationStrings";
import * as screens from '../Screens';
import TabRoutes from "./TabRoutes";

export default function (Stack) {
  return (
    <>
      <Stack.Screen name={NavigationStrings.BOTTOM_BAR} component={TabRoutes} options={{ headerShown: false,gestureEnabled:false }} />
    </>
  );
}
