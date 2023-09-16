import React, { useContext, useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet,Animated, FlatList, KeyboardAvoidingView } from 'react-native';
import ImagePath from '../Constants/ImagePath';
import Colors from '../Styles/Colors';
import commonStyles from '../Styles/commonStyles';
import { height, moderateScale, moderateScaleVertical, width } from '../Styles/responsiveSize';
import BottomUpSheet from './BottomUpSheet';
import { ThemeContext } from './ThemeProvider';
import ClickableImg from './ClickableImg';

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

export default function ChatSheet({
chatData,
sheetRef,
onBack,
groupData
}) {
  // console.log(data,"jnjionoi");
  const [state, setState] = useState({
    loader: false,
    value: "",
    typedMsg:"",
    chatTextData:[...messageData]
  });
  const { loader, value,typedMsg,chatTextData } = state;
  const updateState = data => setState(state => ({ ...state, ...data }));

  const { theme } = useContext(ThemeContext);

  const onSubmitEditing = ()=>{
    let newData ={id:chatTextData?.length+1,msgStatus:2,msgText:typedMsg,msgTime:"3:04 PM"};
    let dummyData = [...chatTextData];
    dummyData.unshift(newData);
    updateState({chatTextData:dummyData,typedMsg:""})
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
  console.log(groupData,"groupDatajii");
  return (
    <BottomUpSheet
    containerStyle={{ ...styles.listStyle, height: height / 1.2,backgroundColor:Colors.white }}
    dragFromTopOnly={true}
    sheetRef={sheetRef}
    iconStyle={{ width: 24, borderRightWidth: 0, backgroundColor: Colors.appColorPrimary }}>
     <View style={{...styles.profilePicNameView}}>
<View style={{...styles.profilePicNameViewInner}}>
<Image
    source={groupData?.profilePic1}
    style={styles.profieImg1}
    />
     <Image
    source={groupData?.profilePic2}
    style={styles.profieImg2}
    />
<View style={{marginLeft:moderateScale(12)}}>
<Text style={{...commonStyles.font16BlackBold}}>{groupData?.profileName}</Text>
<Text style={{...commonStyles.font12Regular,color:Colors.greyScale}}>Online</Text>
</View>
</View>
<Image
source={ImagePath.moreOptions}
/>
</View>
 <FlatList
            inverted
            data={chatTextData}
            style={{flex: 1, paddingHorizontal: moderateScale(24)}}
            renderItem={(item,index) => renderChatList(item,index)}
          />
           <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "padding"}
            style={{
            }}
          >
          {footerView()}
          </KeyboardAvoidingView>
    </BottomUpSheet>
  );
}

const styles = StyleSheet.create({
    listStyle: {
        //   height: moderateScale(188),
        backgroundColor: 'transparent',
        borderTopLeftRadius:24,
        borderTopRightRadius:24
    },
    messageContainer: {
        width: '70%',
        marginBottom: 9,
        borderRadius: 8,
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScaleVertical(8),
      },
      chatAddView:{
        alignItems:"center",justifyContent:"center",padding:moderateScale(14),borderRadius:15,
        borderWidth:1,borderColor:Colors.greyButtons
      },
      chatInputView:{
        borderRadius:15,
        borderWidth:1,borderColor:Colors.greyButtons,
        flexDirection:"row",
        alignItems:"center",
paddingHorizontal:moderateScale(16),
paddingVertical:moderateScaleVertical(14),
width:width/1.45
      },
      profieImg1:{
        height: moderateScale(48),
        width: moderateScale(48),
        borderRadius:48,},
    profieImg2:{
        height: moderateScale(48),
        width: moderateScale(48),
        paddingLeft: moderateScale(20),
        position: "absolute",
        borderWidth:3,
        borderColor:Colors.white,
        top: moderateScale(10),
        left: moderateScale(-15),
        zIndex: 100,
        borderRadius: 48,},
        profilePicNameView:{
          flexDirection:"row",
          alignItems:"center",
          width: "86%",
          justifyContent: "space-between",
          marginHorizontal:moderateScale(40)
      },
      profilePicNameViewInner:{
          flexDirection:"row",
          alignItems:"center",
      }
});
