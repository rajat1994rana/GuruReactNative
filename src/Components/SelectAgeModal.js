
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import Colors from '../Styles/Colors';
import {Picker} from 'react-native-wheel-pick';
import commonStyles from '../Styles/commonStyles';
import moment from 'moment';
import { height, moderateScale, moderateScaleVertical } from '../Styles/responsiveSize';

export default function SelectAgeModal({isVisible,onClose,minAge,maxAge,setminAge,setmaxAge}) {
  const [timeData, settimeData] = useState([
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
  ])
  const [min, setmin] = useState(minAge)
  const [max, setmax] = useState(maxAge)
useEffect(() => {
    const array = [];
    for (let i = 0; i <= 100; i++) {
      const paddedValue = i < 10 ? `0${i}` : `${i}`;
      array.push(paddedValue);
    }
    settimeData(array)
}, [])

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={()=>{
        setminAge(min)
        setmaxAge(max)
        onClose()
      }}
      onBackButtonPress={()=>{
        setminAge(min)
        setmaxAge(max)
        onClose()
      }}
      style={{margin: 0, justifyContent: 'flex-end'}}>
      <View
        style={{
          backgroundColor: Colors.white,
          height: moderateScale(250),
          borderTopRightRadius: moderateScaleVertical(16),
          borderTopLeftRadius: moderateScaleVertical(16),
        }}>
       
        <View style={{flexDirection: 'row',alignItems:'center', flex: 1}}>
            <Picker
              style={{backgroundColor: 'white',flex:1}}
              selectedValue={minAge}
              pickerData={timeData}
              onValueChange={value => {
                setminAge(value)
                setmin(value)
              }}
            />
          <Text style={{...commonStyles.font20Medium,color:Colors.greyText, textAlign:'center'}}>to</Text>
            <Picker
              style={{backgroundColor: 'white',flex:1}}
              selectedValue={maxAge}
              pickerData={timeData}
              onValueChange={value => {
               setmaxAge(value)
               setmax(value)
              }}
            />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  datesTabView: {
    height: 40,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 16,
  },
  dateView: {
    borderBottomWidth: 3,
    flex: 0.4,
    alignItems: 'center',
    paddingBottom: 4,
    borderRadius: 2,
  },
});
