import {
  BackHandler,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import ImagePath from '../../Constants/ImagePath';
import Colors from '../../Styles/Colors';
import {ThemeContext} from '../../Components/ThemeProvider';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import styles from './styles';
import ClickableImg from '../../Components/ClickableImg';
import {moderateScale, moderateScaleVertical} from '../../Styles/responsiveSize';
import NavigationStrings from '../../Constants/NavigationStrings';
import commonStyles from '../../Styles/commonStyles';
import Header from '../../Components/Header';
import strings from '../../Constants/lang';

const Interests = ({navigation, route}) => {
  const [state, setState] = useState({
    isLoading: false,
    selectedArray: [], 
  });
  const {isLoading,selectedArray} = state;
  const updateState = data => setState(state => ({...state, ...data}));
  const data = [
    {id: 1, itemT: 'Photography', img: ImagePath.camera2,imgWhite:ImagePath.cameraWhite},
    {id: 2, itemT: 'Shopping', img: ImagePath.market,imgWhite:ImagePath.marketWhite},
    {id: 3, itemT: 'Karaoke', img: ImagePath.voice_Icon,imgWhite:ImagePath.voiceWhite},
    {id: 4, itemT: 'Yoga', img: ImagePath.yogaVien,imgWhite:ImagePath.yogaVienWhite},
    {id: 5, itemT: 'Cooking', img: ImagePath.noodles,imgWhite:ImagePath.noodlesWhite},
    {id: 6, itemT: 'Tennis', img: ImagePath.tennis,imgWhite:ImagePath.tennisWhite},
    {id: 7, itemT: 'Run', img: ImagePath.run,imgWhite:ImagePath.runWhite},
    {id: 8, itemT: 'Swimming', img: ImagePath.swim,imgWhite:ImagePath.swimWhite},
    {id: 9, itemT: 'Art', img: ImagePath.platte,imgWhite:ImagePath.platteWhite},
    {id: 10, itemT: 'Traveling', img: ImagePath.outdoor,imgWhite:ImagePath.outdoorWhite},
    {id: 11, itemT: 'Hiking', img: ImagePath.hiking,imgWhite:ImagePath.cameraWhite},
  ];

  const rows = [];
  for (let i = 0; i < data.length - 1; i += 2) {
    const row = [data[i], data[i + 1]];
    rows.push(row);
  }

  const onPressBack = () => {
    navigation.goBack();
  };
  const onChoose = () =>{
    navigation.navigate(NavigationStrings.LOCATION_UPLOAD)
    //navigation.navigate(NavigationStrings.LOCATION_UPLOAD) 
  }

  const onselectInterest = (item) =>{
let dummyArr =[...selectedArray];
if(!selectedArray.includes(item.id)){
dummyArr.push(item.id)
updateState({selectedArray:[...dummyArr]})}
else{
 let selectedId = dummyArr.indexOf(item.id);
  dummyArr.splice(selectedId,1);
  updateState({selectedArray:[...dummyArr]});
}
  }

  return (
    <WrapperContainer
      bgColor={Colors.white}
      statusBarColor={Colors.appColor2}>
    <Header
 leftImageStyle={{marginLeft:moderateScale(16),marginTop:moderateScaleVertical(22)}}
 showLeft={ImagePath.backIcon}
/>
<View style={{...styles.mainView}}>
  <Text style={{...commonStyles.font32Black,color:Colors.appBlack,}}>Your interests</Text>
  <Text style={{...commonStyles.font14Regular,color:Colors.appBlack}}>{strings.InterestsText}</Text>
</View>
      <View style={styles.container}>
        {rows.map((row, index) => (
          <View key={index} style={styles.row}>
            {row.map(item => {
              console.log(item, 'itemitemitem');
              return (
                <TouchableOpacity activeOpacity={0.9}
                 key={item.id}
                 onPress={()=>onselectInterest(item)}
                  style={{...styles.item,
                    shadowColor: selectedArray.includes(item.id)?Colors.black:null,
                    shadowOffset: { width: 0, height: moderateScale(10) },
                    shadowOpacity: selectedArray.includes(item.id)?0.15:0,
                    shadowRadius: selectedArray.includes(item.id)?12:0,
                    elevation: selectedArray.includes(item.id)?10:0,
                    paddingVertical:selectedArray.includes(item.id)?15:14.5,
                  borderWidth:selectedArray.includes(item.id)?0:1,borderColor:selectedArray.includes(item.id)?null:Colors.greyButtons,backgroundColor:selectedArray.includes(item.id)?Colors.appColorPrimary:Colors.white}}>
                  <Image source={selectedArray.includes(item.id)?item.imgWhite:item.img} />
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      flex: 1,
                    }}>
                    <Text style={{textAlign: 'center',color:selectedArray.includes(item.id)?Colors.white:"#656363"}}>{item.itemT}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={onChoose}>
        <Text style={{...commonStyles.font13Regular,color:Colors.white}}>Choose{' '}{selectedArray.length}</Text>
      </TouchableOpacity>
    </WrapperContainer>
  );
};

export default Interests;
