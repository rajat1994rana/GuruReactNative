import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
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
import Modal from 'react-native-modal';
export default function EditProfileScreen({navigation}) {
  const [isVisible, setisVisible] = useState(false);
  const [bio, setbio] = useState('My name is Tashmat , I like photography and travelling all around  the world  ')
  return (
    <WrapperContainer bgColor={Colors.white} statusBarColor={Colors.white}>
      <View style={{marginTop:Platform.OS=='android'?16:0}}>
        <Header
          showLeft={ImagePath.backBtn}
          leftImageStyle={{marginLeft: 16}}
          headerName={'Profile'}
          headerTextStyle={{marginLeft: -24}}
        />
      </View>
      <View style={{alignSelf: 'center', marginVertical: 80}}>
        <Image
          source={ImagePath.profileImg2}
          style={{width: 88, height: 88, borderRadius: 50}}
        />
        <Image
          source={ImagePath.editProfile}
          style={{position: 'absolute', bottom: 0, right: -4}}
        />
      </View>
      <View style={{paddingHorizontal: 28}}>
        <ProfileList title={'Account Name'} value={'@tashmat13'} />
        <ProfileList title={'Email'} value={'149385@gmail.com'} />
        <ProfileList title={'Phone Number'} value={'+14987889999'} />
        <ProfileList
          title={'Bio'}
          onPress={() => {
            setisVisible(true)
          }}
          value={bio}
          isRightIcon
        />
        <ProfileList title={'Birthday'} value={'Apr, 08,1998'} />
        <ProfileList title={'Gender'} value={'Female'} />
        <ProfileList
          title={'Interests'}
          onPress={() => {
            navigation.navigate(NavigationStrings.INTEREST_SCREEN);
          }}
          isTags
        />
      </View>
      <Modal isVisible={isVisible}
      animationIn={'slideInRight'}
      animationOut={'slideOutRight'}
      useNativeDriver={true}
      style={{margin: 0}}>
        <WrapperContainer bgColor={Colors.white} statusBarColor={Colors.white}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 28,
              marginTop:Platform.OS=='android'?16:0
            }}>
            <TouchableOpacity onPress={()=>{setisVisible(false)}}>
              <Text style={{...commonStyles.font14Black,color:Colors?.greyText}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setisVisible(false)}}>
            <Text style={{...commonStyles.font14Black,color:Colors?.appColorPrimary}}>Done</Text>
            </TouchableOpacity>
          </View>
          <View style={{borderBottomWidth:1,marginTop:24,marginHorizontal:28,paddingVertical:4,borderBlockColor:Colors?.borderColor1}}>
            <TextInput
            placeholder='Please Enter Bio'
            defaultValue={bio}
            onChangeText={setbio}
            style={{...commonStyles.font11Regular,color:Colors?.greyText,padding:0}}
            multiline
            />
          </View>
        </WrapperContainer>
      </Modal>
    </WrapperContainer>
  );
}

const ProfileList = ({
  isRightIcon = false,
  title,
  value,
  isTags = false,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={{
        borderBottomWidth: 1,
        paddingVertical: 12,
        borderBlockColor: Colors?.borderColor1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
      }}>
      <View style={{flex: 1}}>
        <Text style={{...commonStyles.font14Black, color: Colors.black}}>
          {title}
        </Text>
      </View>
      {isTags ? (
        <View style={{flexDirection: 'row',}}>
          {['🃏打牌', '⛷️滑雪', '🛫旅游', '🫕约饭']?.map((res, index) => {
            if (index > 1) {
              return;
            }
            return (
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 14,
                  paddingHorizontal: 12,
                  marginRight: 8,
                  borderColor: Colors.lightBlue0FF,
                  paddingVertical: 2,
                }}>
                <Text style={{color: Colors.lightBlue0FF}}>{res}</Text>
              </View>
            );
          })}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: '#000', marginBottom: 8}}>...</Text>
            <Image source={ImagePath.right} />
          </View>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            numberOfLines={1}
            style={{...commonStyles.font12grey, color: Colors?.greyText}}>
            {value}
          </Text>
          {isRightIcon && <Image source={ImagePath.right} />}
        </View>
      )}
    </TouchableOpacity>
  );
};
