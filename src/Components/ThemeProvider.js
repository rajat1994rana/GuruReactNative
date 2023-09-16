import React, { useCallback, useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import Colors from "../Styles/Colors";

const themes = colorScheme =>
  colorScheme === 'dark'
    ? {
      textColor: Colors.darkGrey,
      inputText: Colors.white,
      headingColor: Colors.white,
      statusColor: Colors.black,
      placeHolderColor: Colors.black454545,
      placeHolderTextColor: Colors.textInputDark,
      textInputColor: Colors.textInputDark,
      greenGrey:Colors.newBlack,
      pinColor:Colors.whiteOpacity50,
      backgroundColor: Colors.appDark,
      backgroundColorMain:Colors.appBlack,
      whiteandgreyColor: Colors.newBlack
    }
    : {
      greenGrey: Colors.greenLightColor,
      textColor: Colors.placeHolderGrey,
      inputText: Colors.appBlack,
      headingColor: Colors.appBlack,
      statusColor: Colors.appColor,
      textInputColor: Colors.textInputGrey,
      backgroundColorMain:Colors.white,
      pinColor:Colors.pinGrey,
      backgroundColor: Colors.white,
      whiteandgreyColor: Colors.white
    };

const ThemeContext = React.createContext({});
const ThemeProvider = ({ children, update }) => {
  const [theme, setTheme] = useState(themes());
  useEffect(() => {
    setTheme(themes(colorScheme));
  }, [colorScheme]);

  useEffect(() => {
    setTheme(themes(colorScheme));
  }, [update]);

  const colorScheme = useColorScheme();

  // console.log(theme,"jhsdbfiusgh");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };