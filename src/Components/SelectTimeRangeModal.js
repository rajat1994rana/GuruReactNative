import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import Colors from '../Styles/Colors';
import {Picker} from 'react-native-wheel-pick';
import commonStyles from '../Styles/commonStyles';
import moment from 'moment';
import { useEffect } from 'react';

export default function SelectTimeRangeModal({isVisible,onClose,startTime,endTime,setstartTime,setendTime}) {
  const [isStartDate, setisStartDate] = useState(true);
  const [timeData, settimeData] = useState([])
useEffect(() => {
  const startTime = 0; // Start time in minutes (00:00)
const endTime = 24 * 60; // End time in minutes (24:00)

const timeArray = [];
for (let minutes = startTime; minutes < endTime; minutes += 30) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
  const formattedMins = mins.toString().padStart(2, '0');
  const formattedTime = `${formattedHours}:${formattedMins} ${ampm}`;
  timeArray.push(formattedTime);
}
settimeData(timeArray)
}, [])

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      style={{margin: 0, justifyContent: 'flex-end'}}>
      <View
        style={{
          backgroundColor: Colors.white,
          height: 300,
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
        }}>
        <View style={styles.datesTabView}>
          <TouchableOpacity
            onPress={() => {
              setisStartDate(true);
            }}
            style={{
              ...styles.dateView,
              borderBlockColor: isStartDate
                ? Colors?.appColorPrimary
                : 'transparent',
            }}>
            <Text style={{...commonStyles.font15BlackBold}}>Start time</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setisStartDate(false);
            }}
            style={{
              ...styles.dateView,
              borderBlockColor: !isStartDate
                ? Colors?.appColorPrimary
                : 'transparent',
            }}>
            <Text style={{...commonStyles.font15BlackBold}}>End time</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View pointerEvents={isStartDate ? `auto` : 'none'} style={{flex: 1}}>
            <Picker
              style={{backgroundColor: 'white',}}
              selectedValue={moment().format("HH")}
              pickerData={timeData}
              onValueChange={value => {
                setstartTime(value)
              }}
            />
          </View>
          <View
            pointerEvents={!isStartDate ? `auto` : 'none'}
            style={{flex: 1}}>
            <Picker
              style={{backgroundColor: 'white'}}
              selectedValue={moment().add(1,'h').format("HH")}
              pickerData={timeData}
              onValueChange={value => {
               setendTime(value)
              }}
            />
          </View>
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
