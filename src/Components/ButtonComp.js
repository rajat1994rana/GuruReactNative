import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../Styles/Colors';
import { moderateScale } from '../Styles/responsiveSize';
import commonStyles from '../Styles/commonStyles';
const ButtonComp = ({
  onPress = () => { },
  btnText = '',
  btnTextStyle = {},
  btnStyle = {},
  btnLoader = false,
  leftImg,
  isShadow=true,
  disabled = false,
  customLeftIconStyle={}
}) => {
  return (
    <TouchableOpacity
      disabled={disabled || btnLoader}
      style={{ ...styles.btnStyle, ...btnStyle,}}
      activeOpacity={0.8}
      onPress={onPress}
    >
      {!!leftImg ?
        <Image style={{ tintColor: Colors.white,...customLeftIconStyle }} source={leftImg} />
        : null
      }
      {btnLoader ?
       <ActivityIndicator size={25} color={Colors.white}/>
         :
        <Text style={{ ...styles.btnTextStyle, ...btnTextStyle }}
        >{btnText}</Text>}

    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: Colors.appColorPrimary,
    height: moderateScale(56),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(8),
    borderRadius: moderateScale(15),
  },
  btnTextStyle: {
    ...commonStyles.font14Regular,
    color: Colors.white
  },
});
export default React.memo(ButtonComp);

