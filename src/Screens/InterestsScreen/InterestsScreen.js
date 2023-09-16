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
import React, {useState} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import Colors from '../../Styles/Colors';
import Header from '../../Components/Header';
import ImagePath from '../../Constants/ImagePath';
import commonStyles from '../../Styles/commonStyles';
import {width} from '../../Styles/responsiveSize';
import NavigationStrings from '../../Constants/NavigationStrings';

export default function InterestsScreen({navigation}) {
  const [activeTab, setactiveTab] = useState(0);
  let data = [
    {
      title: 'Personal Information',
      image: ImagePath.userIcon,
      navigate: NavigationStrings.EDIT_PROFILE_SCREEN,
    },
    {
      title: 'Message & Privacy',
      image: ImagePath.settingIcon,
    },
    {
      title: 'Language',
      image: ImagePath.langIcon,
    },
    {
      title: 'Location',
      image: ImagePath.earthIcon,
    },
    {
      title: 'Report',
      image: ImagePath.reportIcon,
    },
  ];
  return (
    <WrapperContainer bgColor={Colors.white} statusBarColor={Colors.white}>
      <View style={{marginTop:Platform.OS=='android'?16:0}}>
        <Header
          showLeft={ImagePath.backBtn}
          leftImageStyle={{marginLeft: 16}}
          headerName={'Interests'}
          headerTextStyle={{marginLeft: -24}}
        />
      </View>
      <View style={{marginLeft: 62, marginTop: 24}}>
        <Text style={{...commonStyles.font12Regular,color:Colors.greyText}}>Pick up to 5 </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: 24, marginTop: 16}}>
          <InterestItemComp
            title={'Boardgames'}
            data={['Poker', 'Texas Hold’em', 'Mahjong', 'Chess']}
          />
          <InterestItemComp
            title={'Sports'}
            data={[
              'Snowboard',
              'Boxing',
              'Football',
              'Ice Hockey',
              'Basketball',
              'Soccer',
              'Golf',
              'Wrestling',
              'Tennis',
              'Motorsports',
            ]}
          />
          <InterestItemComp
            title={'Music'}
            data={['Rock', 'Symphony', 'Concert', 'Live House', 'Acapella']}
          />
          <InterestItemComp title={'Outdoor'} data={[]} />
          <InterestItemComp
            title={'Life'}
            data={['Roommates', 'Teammates', 'Dine Out', 'Travel']}
          />
          <InterestItemComp
            title={'Art'}
            data={['Crafts', 'Museums', 'Other']}
          />
          <InterestItemComp
            title={'Pet'}
            data={['Dog/ cat walking', 'Pet Sitting', 'Other']}
          />
          <InterestItemComp title={'Career'} data={['Career & Business']} />
          <InterestItemComp title={'Other'} data={['Other']} />
        </View>
      </ScrollView>
    </WrapperContainer>
  );
}

const InterestItemComp = ({data = [], title}) => {
  return (
    <View style={{marginBottom: 38}}>
      <Text
        style={{
          ...commonStyles.font14Black,
          color: Colors.black,
          marginBottom: 12,
        }}>
        {title}
      </Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {data.map((res, index) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.6}
              style={{
                borderWidth: 1,
                borderRadius: 14,
                marginBottom: 8,
                paddingHorizontal: 8,
                marginRight: 8,
                borderColor: Colors.lightBlue0FF,
                paddingVertical: 2,
              }}>
              <Text
                style={{
                  ...commonStyles.font11Regular,
                  color: Colors.lightBlue0FF,
                }}>
                {res}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
