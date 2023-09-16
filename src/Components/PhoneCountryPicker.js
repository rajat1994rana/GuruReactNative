import React, {useState} from 'react';
import { useContext } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import strings from '../Constants/lang';
import Colors from '../Styles/Colors';
import commonStyles from '../Styles/commonStyles';
import fontFamily from '../Styles/fontFamily';
import {moderateScale, moderateScaleVertical} from '../Styles/responsiveSize';
import { ThemeContext } from './ThemeProvider';

export default function PhoneCountryPicker({
  onCountrySelected,
  countryCode,
  onChangeMobile,
  label,
  editable,
  editableCheck,
  onEditPress,
  value,
  callingCode,
  containerStyle,
  flagContainerStyle
}) {
  const [state, setState] = useState({
    isVisibleCntryModal: false,
  });

  const updateState = data => setState(state => ({...state, ...data}));
  const {theme} = useContext(ThemeContext);

  const _onSelectCountry = cntry => {
    updateState({
      isVisibleCntryModal: false,
      cntryData: {
        countryCode: cntry.cca2,
        callingCode: cntry.callingCode[0],
        countryName: cntry.name,
        countryFlag: cntry.flag,
      },
    });
    onCountrySelected(cntry);
  };
  const _onClose = () => {
    updateState({isVisibleCntryModal: false});
  };
  return (
    <View>
      {/* <Text style={styles.label}>{label}</Text> */}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: Colors.white,
          height: moderateScaleVertical(56),
          borderRadius: 15,
          borderWidth:1,
          borderColor:"#E8E6EA",
          // marginTop: moderateScaleVertical(12),
           marginBottom: moderateScaleVertical(16),
           ...containerStyle
         
        }}>
        {editable ?<TouchableOpacity
        disable={true}
          // onPress={() =>  updateState({isVisibleCntryModal: true})}
          style={{flexDirection: 'row'}}>
          <CountryPicker
            onSelect={_onSelectCountry}
            onOpen={_onClose}
            onClose={_onClose}
            theme={{
              onBackgroundTextColor:Colors.appDark,
              backgroundColor:Colors.white,
               fontSize:14
            // flagSizeButton:30
            }}
             withCallingCode={false}
             withCallingCodeButton
            withFlagButton={true}
            withFilter
            countryCode={countryCode}
            containerButtonStyle={{...styles.containerBtnStyle,color:Colors.appBlack,...flagContainerStyle}}
          />
          {/* <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{marginRight: 10}} source={imagePath.drop_Down} />
          </View> */}
        </TouchableOpacity>:
        <View style={styles.callingCodeView}>
        <Text style={styles.callingCodetext}>+{callingCode}</Text></View>}
        <View
          style={{
            flex: 1,
            marginTop: 10,
            marginBottom: 10,
            borderLeftWidth: 1,
            borderColor: Colors.blackOpacity20,
            // height: moderateScaleVertical(48),
          }}>
          <TextInput
            onChangeText={onChangeMobile}
            maxLength={14}
            style={{
              flex: 1,
              // ...commonStyles.font13Regular,
              fontSize:16,
              color:Colors.appBlack,
              paddingLeft: 10,
              paddingHorizontal: 5,
              paddingTop: 0,
              paddingBottom: 0,
            }}
            placeholder="Mobile number"
            keyboardType="numeric"
            returnKeyType="done"
            editable={editable}
            value={value}
            
            placeholderTextColor={Colors.darkGrey}
          />
        </View>
        {editableCheck && <TouchableOpacity onPress={onEditPress} style={{...styles.editView}}>
        <Text style={{...styles.editSaveText}}>{editable?`${strings.SAVE}`:`${strings.EDIT}`}</Text>
        </TouchableOpacity>}
      </View>
    </View>
  );
}
const cntryTheme = {
  theme: {
    // flagSizeButton: 14,
    // backgroundColor: colors.emailContainer,

    // ...commonStyles.fontSize16,
    // fontFamily:fontFamily.monBold
  },
};
const styles = StyleSheet.create({
  containerBtnStyle: {
    width: moderateScale(90),
    height: moderateScaleVertical(50),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"row",
    paddingHorizontal: 0,
    paddingLeft: 8,
    paddingRight: 0,
    marginTop: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
  callingCodetext:{
    ...commonStyles.font13GreyMedium,
    textAlign:"center"
  },
  callingCodeView:{
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:moderateScale(12)
  },
  editView:{
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:moderateScale(16),
    margin:moderateScale(8),
    backgroundColor:Colors.appColor,
borderRadius:8
  },
  editSaveText:{
    ...commonStyles.font14BlackMedium,
    color:Colors.white
  },
  label: {
    ...commonStyles.fontSize16,
    textTransform: 'capitalize',
    fontFamily: fontFamily.medium,
    marginBottom: 4,
    color: Colors.black,
  },
  cntryContainer: {
    borderBottomWidth: 0.6,
    borderBottomColor: Colors.textInputDark,
    marginRight: 16,
    // backgroundColor:'green'
  },
});
