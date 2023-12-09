import {
  View,
  Text,
  Platform,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React from "react";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import Colors from "../Styles/Colors";
import ImagePath from "../Constants/ImagePath";
import { width } from "../Styles/responsiveSize";
import commonStyles from "../Styles/commonStyles";

export default function Slider() {
  const CustomMarker = ({ currentValue }) => (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: 18,
        height: 18,
        backgroundColor: "#FF8400",
        borderRadius: 18,
      }}
    >
      <ImageBackground
        source={ImagePath?.slideBG}
        style={{ width: 30, height: 36, marginTop: -60,justifyContent:'center',alignItems:'center' }}
      >
        <Text style={{...commonStyles.font12Regular,color:'#FF8400'}}>{currentValue}</Text>
      </ImageBackground>
    </View>
  );
  return (
    <View style={{ flex: 1 }}>
        <Text style={{...commonStyles.font14BlackMedium,color:'#656363'}}>Age</Text>
      <MultiSlider
        selectedStyle={{ backgroundColor: "#FF8400" }}
        unselectedStyle={{
          backgroundColor: "silver",
        }}
        min={18}
        max={100}
        onValuesChangeStart={() => {}}
        onValuesChange={() => {}}
        onValuesChangeFinish={() => {}}
        values={[50]}
        trackStyle={{ backgroundColor: "#D9D9D9" }}
        customMarker={CustomMarker}
        sliderLength={width-64}
      />
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style={{...commonStyles.font14BlackMedium,color:'#656363'}}>18</Text>
      <Text style={{...commonStyles.font14BlackMedium,color:'#656363'}}>100</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  leftMarkerView: {
    height: 18,
    width: 18,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 5,
    shadowColor: Colors.appColorPrimary,
    ...Platform.select({
      ios: {
        shadowColor: Colors.appColorPrimary,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 7,
      },
    }),
  },
  centerColor: {
    height: 18,
    width: 18,
    borderRadius: 50,
    backgroundColor: Colors.appColorPrimary,
  },
  rangeValue: {
    // position: 'absolute',
    // bottom: -24,
  },
  rightMarkerView: {
    height: 17,
    width: 17,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 5,
    shadowColor: Colors.appColorPrimary,
    ...Platform.select({
      ios: {
        shadowColor: Colors.appColorPrimary,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 7,
      },
    }),
  },
});
