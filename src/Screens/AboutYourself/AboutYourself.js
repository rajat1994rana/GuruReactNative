import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import ImagePath from '../../Constants/ImagePath';
import Colors from '../../Styles/Colors';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import styles from './styles';
import ClickableImg from '../../Components/ClickableImg';
import AwareScrollView from '../../Components/AwareScrollView';
import TextInputCustom from '../../Components/TextInputCustom';
import NavigationStrings from '../../Constants/NavigationStrings';
import ImageCropPicker from 'react-native-image-crop-picker';
import Header from '../../Components/Header';
import commonStyles from '../../Styles/commonStyles';
import strings from '../../Constants/lang';
import { moderateScale, moderateScaleVertical } from '../../Styles/responsiveSize';
import CalendarSheet from '../../Components/CalendarSheet';


const AboutYourself = ({ navigation,route }) => {
const calendarRef = useRef();
    const [state, setState] = useState({
        displayedName:"",
        isLoading: false,
        age:"",
        gender:"",
        password:"",
        activityIndex:1,
        selectedGender:1,
        profilePic:"",
        birthdayDate:""
    });
    const {isLoading,displayedName,age,gender,password,activityIndex,selectedGender,profilePic,birthdayDate } = state;
    const updateState = data => setState(state => ({ ...state, ...data }));

        const imagepicker = () => {
            updateState({uploadProfile: true});
            ImageCropPicker.openPicker({
              width: 300,
              height: 400,
            }).then(image => {
                updateState({profilePic:image?.path})
              console.log(image, 'gcfvhbj');
            //   postImage(image.path);
            });
          };

        const onPressBack = () =>{
            navigation.goBack();
          }

    const onContinue = () =>{
      if(activityIndex==1){
      updateState({activityIndex:2})}
      else if(activityIndex==2){
        navigation.navigate(NavigationStrings.INTERESTS);
        // updateState({activityIndex:3})
      }
       // navigation.navigate(NavigationStrings.INTERESTS);
    }
  const onSelectGender1 = () =>{
    updateState({selectedGender:1})
  }
  const onSelectGender2 = () =>{
    updateState({selectedGender:2})
  }
  const onSelectGender3 = () =>{
    updateState({selectedGender:3})
  }

  const convertDateTimeFormat = (dateTimeString) => {
    const date = new Date(dateTimeString);
  
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
  
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
  
    const convertedDateTimeString = `${year}/${month}/${day}`;
    return convertedDateTimeString;
  };

  function selectGender(){
    return(
      <View style={{marginTop:moderateScaleVertical(52)}}>
        <Pressable
        onPress={onSelectGender1}
         style={{...styles.genderBtns,backgroundColor:selectedGender==1?Colors.appColorPrimary:Colors.white}}>
<Text style={{...commonStyles.font16BlackBold,color:selectedGender==1?Colors.white:Colors.appBlack}}>Woman</Text>
<Image
source={selectedGender==1?ImagePath.checkWhite:null}
/>
        </Pressable>
        <Pressable
        onPress={onSelectGender2}
        style={{...styles.genderBtns,backgroundColor:selectedGender==2?Colors.appColorPrimary:Colors.white}}>
<Text style={{...commonStyles.font16BlackBold,color:selectedGender==2?Colors.white:Colors.appBlack}}>Man</Text>
<Image
source={selectedGender==2?ImagePath.checkWhite:null}
/>
        </Pressable>
        <Pressable
        onPress={onSelectGender3}
         style={{...styles.genderBtns,backgroundColor:selectedGender==3?Colors.appColorPrimary:Colors.white}}>
<Text style={{...commonStyles.font16BlackBold,color:selectedGender==3?Colors.white:Colors.appBlack}}>Choose another</Text>
<Image
source={ImagePath.right}
/>
        </Pressable>
      </View>
    )
  }

  function selectLanguage(){
return(
  <View>
<Pressable
        // onPress={onSelectGender2}
        style={{...styles.langBtns}}>
<Text style={{...commonStyles.font16BlackBold}}>English</Text>
<Image
source={selectedGender==2?ImagePath.checkWhite:ImagePath.checkSmall}
/>
        </Pressable>
  </View>
)
  }

const pressCalendarOpen = () =>{
  calendarRef.current.open();
}

const onselectDate = (selectedDate) =>{
  calendarRef.current.close();
  let newSelectedDate = convertDateTimeFormat(selectedDate);
  updateState({birthdayDate:newSelectedDate})
}

const whenBackBtnPress =() =>{
if(activityIndex==1){
navigation.goBack();
}else if(activityIndex==2){
updateState({activityIndex:1})
}else if(activityIndex===3){
  updateState({activityIndex:2})
}
}

    return (
        <WrapperContainer  bgColor={Colors.white} statusBarColor={Colors.white}>
           <Header
 leftImageStyle={{marginLeft:moderateScale(16),marginTop:moderateScaleVertical(22)}}
 onPressLeft={whenBackBtnPress}
 showLeft={ImagePath.backIcon}
/>
 <AwareScrollView onPressButton={onContinue} scrollEnabled={false} btnText={"Continue"} >
<View style={styles.mainView}>
<Text style={{...commonStyles.font32Black,color:Colors.appBlack,}}>{activityIndex==1?strings.PROFILE_DETAILS:activityIndex==2?strings.IAM:strings.SELECT_LANG}</Text>
</View>
{activityIndex==1&&<><View style={{...styles.outerPicView}}>
<Pressable 
 onPress={()=>imagepicker()} 
style={styles.profileOuter}>
                <Image
                  source={ImagePath.camera}
                  style={styles.cardImage}
                />
              <ClickableImg
                source={
                    profilePic.length!=0
                    ?{ uri:profilePic}: ImagePath.profileImg1
                }
                onPress={imagepicker}
                style={{...styles.profileImage}}
              />
            </Pressable>
            </View>
            <TextInputCustom
setText={(txt)=>updateState({displayedName:txt})}
text={displayedName}
labelText={'account name'}
/>
<TextInputCustom
setText={(txt)=>updateState({password:txt})}
text={password}

labelText={'password'}
/>
<Pressable 
onPress={pressCalendarOpen}
style={{...styles.calendarView}}>
  <Image
  source={ImagePath.calendar}
  />
<Text style={{...commonStyles.font14BlackBold,color:Colors.appColorPrimary,marginLeft:moderateScale(16)}}>{birthdayDate.length!=0?birthdayDate:"Choose birthday date"}</Text>
</Pressable></>}
{activityIndex==2&&selectGender()}
{activityIndex==3&&selectLanguage()}
 </AwareScrollView>
 <CalendarSheet
 sheetRef={calendarRef}
 onselectDate={onselectDate}
 />
        </WrapperContainer>
    )
};

export default AboutYourself;