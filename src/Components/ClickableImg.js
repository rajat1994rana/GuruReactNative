import React from 'react';
import {
  Image,
  Pressable,
  Text,
} from 'react-native';
import { hitSlopProp } from '../Styles/commonStyles';

const ClickableImg = ({
  imgStyle = {},
  source,
  onPress,
  style,
  activeOpacity,
  tintColor,
  resizeMode,
  disableHitSlop,
  disabled,
  key,
  labelText,
  textStyles
}) => {
  return (
    <Pressable
      onPress={onPress}
      key={key}
      hitSlop={!disableHitSlop ? hitSlopProp : null}
      style={{ ...imgStyle, zIndex: 1 }}
      disabled={disabled}
      activeOpacity={activeOpacity}>
      <Image source={source} style={style} tintColor={tintColor} resizeMode={resizeMode} />
      {labelText && <Text style={textStyles} >{labelText}</Text>}
    </Pressable>
  );
};
export default ClickableImg;
