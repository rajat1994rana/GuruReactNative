import React, { useRef, useEffect, useState } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity, Text } from 'react-native';
import commonStyles from '../../Styles/commonStyles';

const ProgressBar = ({ steps, currentStep }) => {
  const [progress, setProgress] = useState(new Animated.Value(0));

  const stepWidth = 100 / steps;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: currentStep * stepWidth,
      duration: 500, // Adjust the duration as needed
      useNativeDriver: false,
    }).start();
  }, [currentStep, progress, stepWidth]);

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: progress.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
        
      </View>
      {<Text style={{...commonStyles.font14GreyMedium,marginLeft:32,marginTop:8,color:'#656363'}}>Step {currentStep} of 3</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  progressContainer: {
    height: 5,
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#FF8400', // Adjust color as needed
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  step: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProgressBar