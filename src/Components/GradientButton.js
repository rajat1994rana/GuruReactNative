import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientButton = ({ colors, onPress, title,customTextStyle={} }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
    start={{x: 0.1, y: 1}} end={{x: 0.6, y: 1}}
      colors={colors} style={styles.button}>
        <Text style={{...styles.buttonText,...customTextStyle}}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GradientButton