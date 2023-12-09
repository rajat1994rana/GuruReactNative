import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ImagePath from "../Constants/ImagePath";
import commonStyles from "../Styles/commonStyles";

const GradientView = ({
  colors = ["#FFC634", "#FF8400"],
  onPress,
  title,
  image,
  eventType,
  customTextStyle = {},
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0.4 }}
        colors={colors}
        style={styles.button}
      ></LinearGradient>
      <Text style={{...commonStyles.font12BlackBold,marginTop:8,...customTextStyle
      }}>{title}</Text>
      <Image
        source={image}
        style={{
          width: 70,
          height: 70,
          position: "absolute",
          resizeMode: "contain",
          right:eventType==2?-20:-15,
          top:eventType==2?-5:-15
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 70,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GradientView;
