import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator,CardStyleInterpolators } from "@react-navigation/stack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStack from "./MainStack";
import { isReadyRef, _navigator } from "./NavigationService";
import AuthStack from "./AuthStack";
import { useSelector } from "react-redux";
import { getItem, getUserRegion } from "../Utils/requestHandler";

const Stack = createStackNavigator();

export default function Routes() {
 // const userData = useSelector((data) => data?.auth?.userData);
 
  return (
    <NavigationContainer
      onReady={() => {
        isReadyRef.current = true;
      }}
      ref={_navigator}
    >
      <Stack.Navigator
       screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      >
        {
          // !userData[0]?.jwt_token
          //   ?
           AuthStack(Stack)
        //     :
        // MainStack(Stack)
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}