import React, { useContext, useEffect } from "react";
import { View, StatusBar, Text, useColorScheme } from "react-native";
import Loader from "./Loader";
import Colors from "../Styles/Colors";
import { useNetInfo } from "@react-native-community/netinfo";
import Modal from "react-native-modal";
import { ActivityIndicator } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemeContext } from "./ThemeProvider";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import SuccessLoader from "./SuccessLoader";
import { moderateScale, moderateScaleVertical } from "../Styles/responsiveSize";

WrapperContainer = ({
  children,
  isLoading,
  bgColor,
  removeTopInset,
  removeBottomInset = true,
  kycCheck,
  onSuccess,
  statusBarColor
}) => {
  const netInfo = useNetInfo();
  const insets = useSafeAreaInsets();
  const { theme } = useContext(ThemeContext);
  const colorScheme = useColorScheme();
  const userData = useSelector((data) => data?.auth?.userData);
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        // paddingTop:moderateScaleVertical(32)
         backgroundColor: Colors.white,
        //  paddingBottom:moderateScale(120)
         paddingTop: removeTopInset ? 0 : insets.top,
        paddingBottom: removeBottomInset ? 0 : insets.bottom,
      }}>
      <StatusBar barStyle={colorScheme == "dark"?"dark-content":"dark-content"} backgroundColor={statusBarColor} />
      <View style={{ backgroundColor: bgColor, flex: 1}}>{children}</View>
      <Loader isLoading={isLoading} />
     {onSuccess && <SuccessLoader/>}
      {!netInfo.isConnected &&
        <Modal backdropOpacity={0.2} isVisible={!netInfo.isConnected}>
          <View
            style={{
              backgroundColor: Colors.white,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                padding: 10,
                color: Colors.themeColor,
              }}
            >
              {"Please check your internet connection"}
            </Text>
            <ActivityIndicator style={{ marginBottom: 20 }} />
          </View>
        </Modal>}
    </View>
  );
};

export default WrapperContainer;
