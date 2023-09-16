import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import commonStyles from "../Styles/commonStyles";
import { moderateScaleVertical, moderateScale } from "../Styles/responsiveSize";
import Colors from "../Styles/Colors";
const Buttonn = ({
  onPress = () => {},
  btnText,
  btnStyle,
  btnColor,
  textColor,
  containerStyle,
  activeOpacity,
  disabled,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.nextButton,
        backgroundColor: btnColor,
        ...containerStyle,
      }}
      activeOpacity={activeOpacity?activeOpacity:0.8}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={{ ...styles.nextText, textStyle }}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default Buttonn;

const styles = StyleSheet.create({
  nextButton: {
    marginVertical: moderateScaleVertical(20),
    // width: '100%',
    height: moderateScale(45),
    borderRadius: 30,
    marginHorizontal: moderateScale(24),
    justifyContent: "center",
    alignItems: "center",
  },
  nextText: {
    ...commonStyles.font16BlackBold,
    textAlign: "center",
    color:Colors.white
  },
});
