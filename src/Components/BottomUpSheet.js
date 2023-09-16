import React from "react";
import { useContext } from "react";
import { View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import ImagePath from "../Constants/ImagePath";
import Colors from "../Styles/Colors";
import ClickableImg from "./ClickableImg";
import { ThemeContext } from "./ThemeProvider";

export default function Sheet({
  children,
  height,
  containerStyle,
  iconStyle,
  onPressClose,
  onCloseEvent,
  sheetRef = () => { },
}) {

  const { theme } = useContext(ThemeContext);
  return (
    <RBSheet
      ref={sheetRef}
      animationType="fade"
      closeOnDragDown={true}
      minClosingHeight={300}
      dragFromTopOnly={true}
      onClose={onCloseEvent}
      height={height}
      openDuration={250}
      customStyles={{
        wrapper: {
          backfaceVisibility: "hidden",
          
        },
        container: {
          ...containerStyle
        },
        draggableIcon: {
          backgroundColor: Colors.white,
          borderRightWidth: 60,
          borderRightColor: 'white',
          ...iconStyle,
        },
      }}
    >
       {onPressClose && <ClickableImg source={ImagePath.searchClear}
        // disableHitSlop={true}
        onPress={onPressClose}
         style={{alignItems:"flex-end", position:"absolute", top:0, right:18}}/>}
      {children}
    </RBSheet>
  );
}




