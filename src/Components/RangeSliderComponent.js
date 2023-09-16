import React, {useState} from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Colors from '../Styles/Colors';
import {moderateScale, width} from '../Styles/responsiveSize';
import commonStyles from '../Styles/commonStyles';
const RangeSliderComponent = ({
  minValue = 0,
  maxValue = 100,
  defaultMinValue = 0,
  defaultMaxValue = 40,
  type = 'LOCATION',
  minValueLable,
  maxValueLable,
  getValues = () => {},
}) => {
  const priceFormate = value => {
    if (value >= 1000000) {
      return parseInt(value / 1000000) + 'M';
    } else if (value >= 1000) {
      return parseInt(value / 1000) + 'K';
    }
    return value;
  };

  const [leftValue, setleftValue] = useState(defaultMinValue);
  const [rightValue, setrightValue] = useState(defaultMaxValue);
  const getType = () => {
    switch (type) {
      case 'LOCATION':
        return 'km';
      case 'TIME':
        return '';
      case 'COUNT':
        return '';
        case 'AGE':
        return '';
      default:
        return ''
        break;
    }
  };
  const getLeftSlideValue = () => {
    switch (type) {
      case 'LOCATION':
        return `${leftValue}km`;
      case 'TIME':
        return `${leftValue}:00`;
        case 'COUNT':
          return `${leftValue}`;
          case 'AGE':
            return `${leftValue}`;
      default:
        break;
    }
  };
  const getRightSlideValue = () => {
    switch (type) {
      case 'LOCATION':
        return `${rightValue}km`;
      case 'TIME':
        return `${rightValue}:00`;
        case 'COUNT':
          return `${rightValue}`;
          case 'AGE':
          return `${rightValue}`;
      default:
        break;
    }
  };
  return (
    <View>
      <MultiSlider
        isMarkersSeparated={true}
        allowOverlap={true}
        // minMarkerOverlapDistance={50}
        currentValue={30}
        min={minValue}
        max={maxValue}
        step={1}
        sliderLength={width - moderateScale(60)}
        trackStyle={{
          backgroundColor: '#D9D9D9',
          height: 2,
          borderRadius: 4,
        }}
        selectedStyle={{
          backgroundColor: Colors.appColorPrimary,
          height: 2,
        }}
        values={[defaultMinValue, defaultMaxValue]}
        onValuesChangeFinish={value => {
          console.log(value, 'value');
          getValues(value);
        }}
        customMarkerLeft={e => {
          setleftValue(e.currentValue);
          return (
            <View style={{...styles.leftMarkerView}}>
              <View style={{marginTop: -24, width: 50, alignItems: 'center'}}>
                <Text
                  style={{
                    ...commonStyles.font14Regular,
                    color: Colors.appColorPrimary,
                  }}>
                  {getLeftSlideValue()}
                </Text>
              </View>
              <View style={styles.centerColor} />
            </View>
          );
        }}
        customMarkerRight={e => {
          setrightValue(e.currentValue);
          return (
            <View style={{...styles.rightMarkerView}}>
              <View style={{marginTop: -24, width: 58, alignItems: 'center'}}>
                <Text
                  style={{
                    ...commonStyles.font14Regular,
                    color: Colors.appColorPrimary,
                  }}>
                  {getRightSlideValue()}
                </Text>
              </View>
              <View style={styles.centerColor} />
            </View>
          );
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: -8,
        }}>
        <Text
          style={{
            ...styles.rangeValue,
            marginLeft: -8,
          }}>{`${minValueLable}${getType()}`}</Text>
        <Text
          style={{
            ...styles.rangeValue,
            marginLeft: -8,
          }}>{`${maxValueLable}${getType()}`}</Text>
      </View>
    </View>
  );
};
export default RangeSliderComponent;

const styles = StyleSheet.create({
  leftMarkerView: {
    height: 18,
    width: 18,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: Colors.appColorPrimary,
    ...Platform.select({
      ios: {
        shadowColor: Colors.appColorPrimary,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 7,
      },
    }),
  },
  centerColor: {
    height: 18,
    width: 18,
    borderRadius: 50,
    backgroundColor: Colors.appColorPrimary,
  },
  rangeValue: {
    // position: 'absolute',
    // bottom: -24,
  },
  rightMarkerView: {
    height: 17,
    width: 17,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: Colors.appColorPrimary,
    ...Platform.select({
      ios: {
        shadowColor: Colors.appColorPrimary,
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 7,
      },
    }),
  },
});
