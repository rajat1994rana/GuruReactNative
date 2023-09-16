import React, { useContext, useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet,Animated } from 'react-native';
import ImagePath from '../Constants/ImagePath';
import Colors from '../Styles/Colors';
import commonStyles from '../Styles/commonStyles';
import { moderateScale, moderateScaleVertical } from '../Styles/responsiveSize';
import ClickableImg from './ClickableImg';
import { ThemeContext } from './ThemeProvider';

export default function SearchBar({
  placeholder,
  marginTop,
  backgroundColor,
  onChangeText,
  onPressSearch,
  filteredData,
  animatedWidth,
  data,
  searchBarStyle
}) {
  // console.log(data,"jnjionoi");
  const [state, setState] = useState({
    loader: false,
    value: "",
  });
  const { loader, value } = state;
  const updateState = data => setState(state => ({ ...state, ...data }));

  const { theme } = useContext(ThemeContext);

  // console.log(data,"dattatatta");

  const searchText = (e) => {
    updateState({ value: e })
    // let text = e.toLowerCase()
    // let filteredName = data.filter((item) => {
    //   return item?.slug?.toLowerCase().match(text) || item?.name?.toLowerCase().match(text) || item?.symbol?.toLowerCase().match(text)
    // })
    // if (!text || text === '') {
    //   filteredData(filteredName, false);
    // }
    // else {
    //   filteredData(filteredName, false);
    // }
  }

  const clearSearch = () => {
    updateState({ value: "" })
    // let filteredName = [...data];
    // filteredData(filteredName, false); 
  }
  
  return (
    <Animated.View style={{ ...styles.searchBar, marginTop,width: animatedWidth,backgroundColor: theme.placeHolderColor, ...searchBarStyle }}>
      <ClickableImg source={ImagePath.Search_Icon} style={styles.searchIcon} onPress={onPressSearch}/>
      <TextInput
        style={{ ...styles.text, color: theme.inputText }}
        placeholder={placeholder}
        onChangeText={searchText}
        value={value}
      />
      {value && <ClickableImg source={ImagePath.searchClear} style={styles.micIcon} onPress={clearSearch} />}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    height: moderateScale(50),
    marginHorizontal: moderateScale(24),
    backgroundColor: Colors.white,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: "center",
    marginBottom: moderateScaleVertical(8),
    borderWidth:1,
    borderColor:Colors.greyButtons
    // position: 'rlative',
  },
  searchIcon: {
    height: moderateScaleVertical(22),
    width: moderateScale(20),
    margin: moderateScale(16),
  },
  micIcon: {
    height: moderateScale(20),
    width: moderateScale(20),
    margin: moderateScale(16),
  },
  text: {
    ...commonStyles.font16Grey,
    color: Colors.black,
    flex: 1,
  },
});
