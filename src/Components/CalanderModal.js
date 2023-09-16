import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Modal from 'react-native-modal';
import ImagePath from '../Constants/ImagePath';
import {Calendar} from 'react-native-calendars';
import {width} from '../Styles/responsiveSize';
import commonStyles from '../Styles/commonStyles';
import Colors from '../Styles/Colors';
import ButtonComp from './ButtonComp';
import moment from 'moment';

export default function CalanderModal({isVisible,onClose}) {
  const [selectedRange, setSelectedRange] = useState({});
  const [isStartDate, setisStartDate] = useState(true);
  const [currentMonth, setcurrentMonth] = useState(moment().format('YYYY-MM-DD'))
  const calendarRef = useRef(null)
  const currentDate = new Date();
  const onDayPress = day => {
    if (!selectedRange.startDate || selectedRange.endDate) {
      // If no start date or both start and end dates are selected, set the selected day as the start date
      setSelectedRange({startDate: day.dateString, endDate: null});
    } else if (
      !selectedRange.endDate ||
      day.dateString < selectedRange.startDate
    ) {
      // If start date is selected but end date is not, or if the selected end date is before the start date, update the end date
      setSelectedRange({...selectedRange, endDate: day.dateString});
    } else {
      // If end date is already selected and it's after the start date, reset the selection
      setSelectedRange({startDate: day.dateString, endDate: null});
    }
  };
  //  // Utility function to get the range of dates between start and end
  const getRangeBetweenDates = (startDate, endDate) => {
    const range = {};
    const currentDate = new Date(startDate);
    while (currentDate <= new Date(endDate)) {
      const dateStr = currentDate.toISOString().split('T')[0];
      range[dateStr] = {
        color: Colors.appColorPrimary,
        textColor: Colors.white,
        borderRadius: 4,
      };
      currentDate.setDate(currentDate.getDate() + 1);
    }
    const keys = Object.keys(range);

    if (keys.length >= 2) {
      range[keys[0]] = {...range[keys[0]], startingDay: true};
      range[keys[keys.length - 1]] = {
        ...range[keys[keys.length - 1]],
        endingDay: true,
      };
    }
    return range;
  };
  const [markedDates, setMarkedDates] = useState({});
  useEffect(() => {
    setMarkedDates({
      [currentDate.toISOString().split('T')[0]]: {
        selected: true,
        textColor: Colors.appColorPrimary,
      },
      [selectedRange.startDate]:{
        startingDay: true,
        textColor: Colors.appColorPrimary,
      },
      ...getRangeBetweenDates(selectedRange.startDate, selectedRange.endDate),
    });
  }, [selectedRange]);
  console.log(markedDates, 'markedDates');
  const renderHeader = date => {
    const headerText = `${date.toString('MMMM yyyy')}`;
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{headerText}</Text>
      </View>
    );
  };
  console.log(calendarRef,'calendarRef')
  const renderArrow = direction => {
    return (
      <TouchableOpacity onPress={()=>{
        console.log(CalRef.current)
  let month=direction === 'left'?moment(currentMonth,'YYYY-MM-DD').subtract(1,'month').format('YYYY-MM-DD'):moment(currentMonth,'YYYY-MM-DD').add(1,'month').format('YYYY-MM-DD')
        setcurrentMonth(month)
      }} style={{marginLeft: -16, marginRight: -16}}>
        <Image
          source={
            direction === 'left' ? ImagePath.leftArrow : ImagePath.rightArrow
          }
        />
      </TouchableOpacity>
    );
  };
  
  console.log(markedDates,'currentMonth')
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={()=>{onClose(markedDates)}}
      onBackdropPress={()=>{onClose(markedDates)}}
      animationIn={'zoomIn'}
      animationOut={'zoomOut'}
      useNativeDriver={true}>
      <View
        style={styles.mainView}>
        <View
          style={styles.datesTabView}>
          <TouchableOpacity
          onPress={()=>{setisStartDate(true)}}
            style={{...styles.dateView,borderBlockColor:isStartDate?Colors?.appColorPrimary:'transparent',}}>
            <Text style={{...commonStyles.font15BlackBold}}>Start date</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>{setisStartDate(false)}}
          style={{...styles.dateView,borderBlockColor:!isStartDate?Colors?.appColorPrimary:'transparent',}}>
            <Text style={{...commonStyles.font15BlackBold}}>End date</Text>
          </TouchableOpacity>
        </View>
        <View style={{borderBottomWidth: 1,borderBottomColor:Colors?.borderColor1}} />
        <View style={{paddingHorizontal:32}}>
        <Calendar
          ref={calendarRef}
          
          current={currentMonth}
          style={{}}
          theme={{
            arrowColor:'#797B86',
            arrowStyle:{marginLeft: -12, marginRight: -12}
          }}
          renderHeader={renderHeader}
          markedDates={markedDates}
          markingType={'period'}
          onDayPress={onDayPress}
        />
       <View style={{marginBottom:24,marginTop:48}}>
       <ButtonComp
       onPress={()=>{onClose(markedDates)}}
       btnText='Done'
       />
       </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
mainView:
{
  borderRadius:20,
    overflow: 'hidden',
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  headerText: {
    ...commonStyles.font14Regular,
    color: Colors.appColorPrimary,
  },
  datesTabView:
  {
    height: 40,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 16,
  },
  dateView:
  {
    borderBottomWidth: 3,
    flex: 0.4,
    alignItems: 'center',
    paddingBottom: 4,
    borderRadius: 2,
  
  }
});
