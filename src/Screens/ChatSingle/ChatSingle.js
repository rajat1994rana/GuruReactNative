import { BackHandler, FlatList, Image, KeyboardAvoidingView, Pressable, Text, TextInput, TouchableOpacity, useColorScheme, View } from 'react-native';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import ImagePath from '../../Constants/ImagePath';
import Colors from '../../Styles/Colors';
import { ThemeContext } from '../../Components/ThemeProvider';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Header from '../../Components/Header';
import commonStyles from '../../Styles/commonStyles';
import styles from './styles';
import { moderateScale, moderateScaleVertical, width } from '../../Styles/responsiveSize';
import SearchBar from '../../Components/SearchBar';
import ChatSheet from '../../Components/ChatSheet';
import ClickableImg from '../../Components/ClickableImg';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';

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
// const ChatListData = [
//     {
//         profileName:"Taro",
// profilePic:ImagePath.profileImg1,
// timeBefore:"23 min",
// messageContent:"表情 😍",
// messageRead:1
//     },
//     {profileName:"FanzzZ",messageContent:"正在输入...",profilePic:ImagePath.profileImg2,timeBefore:"27 min",messageRead:2},
//     {profileName:"FanzzZ",messageContent:"表情 😍",profilePic:ImagePath.profileImg2,timeBefore:"27 min",messageRead:2},
// ]

const ChatSingle = ({ navigation,route }) => {

    const usersPhoto = route?.params?.profileDetail?.profilePic
    // const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
    // const shimmerArrayDark = ['#23262E', '#797b82', '#6B6E77'];
    // const shimmerLight = ['#ebebeb', '#c5c5c5', '#ebebeb'];
    // const colorScheme = useColorScheme();
    const { theme } = useContext(ThemeContext);
const chatSheetRef = useRef();

    const [state, setState] = useState({
        search:"",
        isLoading: false,
        activityIndex:1,
        typedMsg:"",
        chatData:[...messageData]
    });
    const {isLoading,search,activityIndex,typedMsg,chatData} = state;
    const updateState = data => setState(state => ({ ...state, ...data }));

    useEffect(() => {

    }, [])


    useFocusEffect(
        useCallback(() => {
          
        }, []));

        const onSubmitEditing = ()=>{
            let newData ={id:chatData?.length+1,msgStatus:2,msgText:typedMsg,msgTime:"3:04 PM"};
            let dummyData = [...chatData];
            dummyData.unshift(newData);
            updateState({chatData:dummyData,typedMsg:""})
        }

        const footerView = () => {
            return (
              <View
                style={{
                  height: moderateScale(79),
                  paddingLeft: moderateScale(24),
                  paddingRight: moderateScale(24),
                  flexDirection: 'row',
                alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
              <View style={{...styles.chatAddView}}>
                <Image
                source={ImagePath.chatAdd}
                />
              </View>
              <View style={{...styles.chatInputView}}>
        <TextInput
        placeholder='Your message'
        value={typedMsg}
        onSubmitEditing={onSubmitEditing}
        onChangeText={txt=>updateState({typedMsg:txt})}
        style={{width:"73%"}}
        />
        <ClickableImg
        source={ImagePath.stickers_Icon}
        style={{marginRight:21}}/>
        <ClickableImg
        source={ImagePath.voice_Icon}/>
              </View>
              </View>
            );
          };

        const renderChatList =({item,index}) =>{
            return(<>
            {index==3&&<View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
              <View style={{borderTopColor:Colors.greyScale,borderTopWidth:1,width:"33%"}}></View>
         <Text style={{...commonStyles.font12Regular,color:Colors.greyText,backgroundColor:Colors.white,}}>July 25 2:55 PM</Text>
         <View style={{borderTopColor:Colors.greyScale,borderTopWidth:1,width:"30%"}}></View>
              </View>}
                <View
              style={{
                alignSelf: item.msgStatus==2
                  ? 'flex-end'
                  : 'flex-start',
              }}>
              <View
                style={{
                  ...styles.messageContainer,
                  
                  backgroundColor: item.msgStatus==2
                    ? Colors.lightGreyF0F0F0
                    : Colors.msgSenderOrange,
                }}>
                  <View>
                    {/* <Text
                      style={{
                        ...styles.name,
                        color: senderCheck
                          ? Colors.white
                          : Colors.Gradient1,
                      }}>
                      {item?.senderName}
                    </Text> */}
                    <Text
                      style={{
                        ...commonStyles.font14Regular,
                        color: Colors.appBlack
                      }}>
                      {item?.msgText}
                    </Text>
                  </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: item.msgStatus==2 ? 'flex-end' : 'flex-start',
                  marginBottom:moderateScaleVertical(16)
                }}>
                <Text
                  style={{
                    ...commonStyles.font12Regular,
                    color:Colors.greyText,
                    textAlign: item.msgStatus==2 ? 'right' : 'left',
                  }}>
                  {item.msgTime}
                </Text>
                 {item.msgStatus==2 && <Image source={ImagePath.chatRead} style={{tintColor: Colors.blackOpacity30}}/>}
              </View>
            </View>
            </>)
          }

    return (
        <WrapperContainer statusBarColor={Colors.appColor2}>
<View style={{...styles.mainHeader}}>
<ClickableImg
onPress={()=>navigation.goBack()}
source={ImagePath.backBtn}
/>
<View style={{...styles.profilePicNameView}}>
<View style={{...styles.profilePicNameViewInner}}>
<Image
source={usersPhoto}
style={styles.profieImg}
/>
<View style={{marginLeft:moderateScale(12)}}>
<Text style={{...commonStyles.font16BlackBold}}>{route?.params?.profileDetail?.profileName}</Text>
<Text style={{...commonStyles.font12Regular,color:Colors.greyScale}}>Online</Text>
</View>
</View>
<Image
source={ImagePath.moreOptions}
/>
</View>
</View>
  {/* <FlatList
  data={ChatListData}
  renderItem={renderChatList}
  ListHeaderComponent={headerComponentList}
  
  /> */}
  {/* <KeyboardAwareFlatList
  sc
  style={{
              flex:1
  }}> */}
   <FlatList
            inverted
            data={chatData}
            keyExtractor={(item) => item.id}
            // initialNumToRender={10}
            style={{flex: 1, paddingHorizontal: moderateScale(24)}}
            renderItem={(item,index) => renderChatList(item,index)}
            // ItemSeparatorComponent={() => {}
            // }
          />
           <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "padding"}
            style={{
              
              // marginBottom: Platform.OS === "ios" ? 20 : 0,
            }}
          >
          {footerView()}
          </KeyboardAvoidingView>
        </WrapperContainer>
    )
};

export default ChatSingle;