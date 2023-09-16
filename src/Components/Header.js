import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  useColorScheme,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import ImagePath from '../Constants/ImagePath';
import Colors from '../Styles/Colors';
import commonStyles from '../Styles/commonStyles';
import {moderateScale, moderateScaleVertical} from '../Styles/responsiveSize';
import ClickableImg from './ClickableImg';
import {ThemeContext} from './ThemeProvider';
const {width, height} = Dimensions.get('screen');
const Header = ({
  onPressLeft,
  showLeft,
  headerName,
  rightText,
  pressRight,
  containerStyle,
  headerTextStyle,
  rightBtnname,
  pressRightBtn,
  imgSource,
  imgStyles,
  right_text,
  imgSourceRight,
  imgStylesRight,
  rightImgOnPress,
  tintColor,
  rightBtn,
  disabledBack,
  disableRightBtn,
  leftImageStyle,
}) => {
  const navigation = useNavigation();
  const userData = useSelector(data => data?.auth?.userData);
  const colorScheme = useColorScheme();
  const {theme} = useContext(ThemeContext);
  return (
    <View
      style={{
        ...styles.topView,
        justifyContent: showLeft || imgSourceRight ? 'space-between' : 'center',
        ...containerStyle,
      }}>
      <View>
        {showLeft && (
          <ClickableImg
            imgStyle={{marginLeft: rightBtn ? 8 : 0, ...leftImageStyle}}
            disabled={disabledBack}
            onPress={() => {
              onPressLeft ? onPressLeft() : navigation.goBack();
            }}
            source={showLeft}
          />
        )}
      </View>
      {imgSource && (
        <Image
          source={imgSource}
          style={{
            ...imgStyles,
            marginRight: showLeft || imgSourceRight ? moderateScale(35) : 0,
          }}
        />
      )}
      {headerName && (
        <View style={{marginLeft: moderateScale(10)}}>
          <Text
            style={{
              ...styles.headerName,
              color: Colors.appBlack,
              marginLeft: showLeft
                ? moderateScale(5)
                : imgSourceRight
                ? moderateScale(50)
                : rightBtn
                ? moderateScale(50)
                : moderateScale(10),
              ...headerTextStyle,
            }}>
            {headerName}
          </Text>
        </View>
      )}
      {rightBtn && (
        <TouchableOpacity
          style={{...styles.rightBtn, opacity: disableRightBtn ? 0.5 : 1}}
          disabled={disableRightBtn}
          onPress={pressRightBtn}>
          <Text style={styles.textNext}>{rightBtnname}</Text>
        </TouchableOpacity>
      )}
      {!rightBtn && (
        <View style={{flexDirection: 'row'}}>
          {imgSourceRight && (
            <TouchableOpacity activeOpacity={0.8} onPress={rightImgOnPress}>
              <Image
                source={imgSourceRight}
                style={{...imgStylesRight}}
                tintColor={tintColor}
              />
            </TouchableOpacity>
          )}
          {rightText && (
            <Text
              style={{...styles.rightText, ...right_text}}
              onPress={pressRight}>
              {rightText}
            </Text>
          )}
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(16),
    // height:moderateScaleVertical(52),
    //  paddingVertical: moderateScaleVertical(8),
    // paddingTop:moderateScaleVertical(20)
  },
  textNext: {
    ...commonStyles.font12Black,
    color: Colors.white,
  },
  headerName: {
    ...commonStyles.font20Medium,
    // color:textColor,
    marginLeft: moderateScale(20),
    marginRight: moderateScale(25),
  },
  rightBtn: {
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(8),
    backgroundColor: Colors.appColorPrimary,
    borderRadius: 8,
    marginRight: moderateScale(16),
  },
  headingTextView: {
    alignItems: 'center',
    marginLeft: 0,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  rightText: {
    color: Colors.appBlack,
    textAlign: 'right',
    fontSize: 16,
  },
});
export default Header;
