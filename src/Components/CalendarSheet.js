import React, { useContext, useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet,Animated, FlatList } from 'react-native';
import ImagePath from '../Constants/ImagePath';
import Colors from '../Styles/Colors';
import commonStyles from '../Styles/commonStyles';
import { height, moderateScale, moderateScaleVertical, textScale, width } from '../Styles/responsiveSize';
import BottomUpSheet from './BottomUpSheet';
import { ThemeContext } from './ThemeProvider';
import ClickableImg from './ClickableImg';
import fontFamily from '../Styles/fontFamily';
import { Calendar } from 'react-native-calendars';
import Buttonn from './Buttonn';
import CalendarPicker from 'react-native-calendar-picker';

const messageData = [
    {id:1,msgStatus:1,msgText:"哈咯 你怎么样! 我在app上看到我们这周已经有好几次交集了 😄",
    msgTime:"2:55 PM",
},
{id:2,msgStatus:2,msgText:"哈哈确实！很高兴认识grace！今天晚上喝杯咖啡怎么样 ☕️ ",
msgTime:"3:02 PM",
},
{id:3,msgStatus:1,msgText:"好啊好啊！ 😊",
msgTime:"3:03 PM"
},
{id:4,msgStatus:2,msgText:"行 那晚点见！",
msgTime:"3:04 PM"
}
]

export default function CalendarSheet({
sheetRef,
onselectDate,
onBack
}) {
  // console.log(data,"jnjionoi");
  const [state, setState] = useState({
    loader: false,
    value: "",
    selectedStartDate:""
  });
  const { loader, value,selectedStartDate } = state;
  const updateState = data => setState(state => ({ ...state, ...data }));
  const [selectedDay, setSelectedDay] = React.useState(new Date().toISOString().slice(0, 10))
  const { theme } = useContext(ThemeContext);

  const onDayPress = (date) => {
    console.log(date,"fattaata");
    setSelectedDay(date);
  }
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const onPrevYearPress = () => {
    setCurrentYear(currentYear - 1);
  };

  const onNextYearPress = () => {
    console.log(currentYear,"currentYearuhuh");
    setCurrentYear(currentYear + 1);
  };

  const onDateChange = (date) => {updateState({
    selectedStartDate: date,
  });
}
  console.log(selectedStartDate,"selectedStartDateijwijiwjiwj");
  return (
    <BottomUpSheet
    containerStyle={{ ...styles.listStyle, height: height / 1.3,backgroundColor:Colors.white }}
    dragFromTopOnly={true}
    sheetRef={sheetRef}
    iconStyle={{ width: 24, borderRightWidth: 0, backgroundColor: Colors.appColorPrimary }}>
 {/* <Calendar
                //   minDate={new Date()}
                  hideArrows={false}
                  // onPressArrowLeft={onPrevYearPress}
                  // onPressArrowRight={onNextYearPress}
                  hideExtraDays={true}
                  onDayPress={(day) => onDayPress(day.dateString)}
                  enableSwipeMonths={true}
                  //current={`${currentYear}`}
                
                  markedDates={{
                    [selectedDay]: { selected: true },
                  }}
                 // customHeaderTitle={<View><Text>`${currentYear}`</Text></View>}
                  markingType={"custom"}
                  //markedDates={markedDate}
                  theme={{
                    textDayFontFamily: fontFamily.regular,
                    textMonthFontFamily: fontFamily.regular,
                    textMonthFontSize: textScale(15),
                    textDayFontSize: textScale(15),
                    backgroundColor: Colors.white,
                    calendarBackground: Colors.white,
                    selectedDayBackgroundColor: Colors.appColorPrimary,
                    selectedDayTextColor:Colors.white,
                    textSectionTitleColor: '#b6c1cd',
            
                  }}
                   style={styles.calStyle}
                /> */}

<CalendarPicker
          onDateChange={onDateChange}
          nextTitle=">"
          previousTitle="<"
          nextTitleStyle={{backgroundColor:Colors.greyButtons,paddingVertical:4,paddingHorizontal:8}}
          previousTitleStyle={{backgroundColor:Colors.greyButtons,paddingVertical:4,paddingHorizontal:8}}
          selectedDayColor={Colors.appColorPrimary}
          selectedDayTextColor={Colors.white}
          selectedDayTextStyle={{color:Colors.white}}
         
          monthYearHeaderWrapperStyle={{flexDirection:"column-reverse"}}
          yearTitleStyle={{...commonStyles.font22BlackBold,color:Colors.appColorPrimary}}
          monthTitleStyle={{color:Colors.appColorPrimary}}
        />
       <Buttonn
       btnText={"Save"}
       onPress={()=>onselectDate(selectedStartDate)}
       btnColor={Colors.appColorPrimary}
       containerStyle={styles.btnStyle}
       />
    </BottomUpSheet>
  );
}

const styles = StyleSheet.create({
    listStyle: {
        //   height: moderateScale(88),
        backgroundColor: 'transparent',
        borderTopLeftRadius:24,
        borderTopRightRadius:24
    },
    calStyle: {
        alignSelf: 'center',
        width: '80%',
        padding: 10,
        backgroundColor: Colors.white,
        marginVertical: 10,
        backgroundColor: Colors.transparent,
      },
    btnStyle:{
        borderRadius:15,
        width:width/1.4,
        marginHorizontal:moderateScale(56),
        marginTop:moderateScaleVertical(34),
        // alignSelf:"flex-end"
    },
      calTheme: {
        textDayFontFamily: fontFamily.regular,
        textMonthFontFamily: fontFamily.regular,
        textMonthFontSize: textScale(15),
        textDayFontSize: textScale(15),
        backgroundColor: Colors.white,
        calendarBackground: Colors.white,
        selectedDayBackgroundColor: Colors.appColorPrimary,
        selectedDayTextColor:Colors.white,
        textSectionTitleColor: '#b6c1cd',
      },
});
