import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { moderateScale, moderateScaleVertical, textScale } from '../Styles/responsiveSize';

const TextInputCustom = ({
    text,
    setText,
    labelText,
    labelStyle,
    textInputStyle
}) => {
//   const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      {/* <View style={{...styles.labelView}}><Text style={styles.label}>Enter your text:</Text></View> */}
      <Text style={{...styles.label,labelStyle}}>{labelText}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={{...styles.input,height:moderateScaleVertical(52),textInputStyle}}
          value={text}
          onChangeText={(txt)=>setText(txt)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginHorizontal:moderateScale(38),
  },
  label: {
    position: 'absolute',
    top: 7,
    left: 40,
    textAlign:"center",
    backgroundColor: 'white',
    paddingHorizontal: 4,
    fontSize: 14,
    color: '#999',
    paddingHorizontal:moderateScale(10),
    zIndex:100
  },
  labelView:{
    zIndex:100,
    position: 'absolute',
    top: 7,
    left: 20,
    width:120,
height:60,
    // backgroundColor:"pink"
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#E8E6EA',
    borderRadius:15
  },
  input: {
    fontSize: textScale(14),
    paddingLeft: 8,
  },
});

export default TextInputCustom;
