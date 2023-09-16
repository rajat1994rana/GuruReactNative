import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useRef, useState} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import Colors from '../../Styles/Colors';
import Header from '../../Components/Header';
import ImagePath from '../../Constants/ImagePath';
import commonStyles from '../../Styles/commonStyles';
import {width} from '../../Styles/responsiveSize';
import NavigationStrings from '../../Constants/NavigationStrings';
import styles from './styles';
import ActionSheetComp from '../../Components/ActionSheetComp';

export default function LanguageScreen({navigation}) {
  const [activeTab, setactiveTab] = useState(0);
  const [langData, setlangData] = useState([
    {
      name: 'English',
      image: ImagePath.englishIcon,
    },
    {
      name: 'German',
      image: ImagePath.germanIcon,
    },
    {
      name: 'French',
      image: ImagePath.french,
    },
    {
      name: 'Russian',
      image: ImagePath.russiaIcon,
    },
    {
      name: 'Greek',
      image: ImagePath.greeceIcon,
    },
  ]);
  return (
    <WrapperContainer bgColor={Colors.white} statusBarColor={Colors.white}>
      <View style={{marginTop:Platform.OS=='android'?16:0}}>
        <Header
          showLeft={ImagePath.backBtn}
          leftImageStyle={{marginLeft: 16}}
          headerName={'Language'}
          headerTextStyle={{marginLeft: -24}}
        />
      </View>

      <View style={{flex: 1, backgroundColor: '#F2F2F2', marginTop: 8}}>
        <Text style={{marginLeft: 32, marginTop: 24}}>Language</Text>
        <View style={{marginTop: 16}}>
          {langData?.map((res, index) => {
            return (
              <TouchableOpacity
              onPress={()=>{
                setactiveTab(index)
              }}
              activeOpacity={0.7}
                key={index}
                style={{
                  backgroundColor: Colors.white,
                  marginBottom: 5,
                  paddingVertical: 14,
                  paddingHorizontal: 28,
                  flexDirection:'row',
                  alignItems:'center',
                  justifyContent:'space-between'
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={res.image} />
                  <Text style={{...commonStyles.font16Black,marginLeft:24}}>{res?.name}</Text>
                </View>
                <Image source={activeTab==index?ImagePath.radioFill:ImagePath.radio} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </WrapperContainer>
  );
}
