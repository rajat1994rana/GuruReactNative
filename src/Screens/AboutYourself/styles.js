import { StyleSheet } from "react-native";
import Colors from "../../Styles/Colors";
import commonStyles from "../../Styles/commonStyles";
import { height, moderateScale, moderateScaleVertical } from "../../Styles/responsiveSize";

// console.log(height / 4.5, "hedfkhheight");


export default StyleSheet.create({
    editProfileView:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:moderateScaleVertical(40)
      },
      mainView:{
        paddingTop:moderateScaleVertical(30),
        paddingHorizontal:moderateScale(35)
    },
      editProfileText:{
        ...commonStyles.font24Black,
        color:Colors.black
      },
      profilePicSelect:{
        height:moderateScaleVertical(250),
        width:"60%",
        backgroundColor:Colors.greyButtons,
        alignSelf:"center",
        borderTopLeftRadius:12,
        borderTopRightRadius:12,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:moderateScaleVertical(16)
      },
      label:{
        ...commonStyles.font11Regular,
        marginHorizontal:moderateScale(90),
        marginBottom:moderateScaleVertical(8)
      },
      profileOuter: {
        borderRadius: 80,
        height: moderateScale(82),
        width:moderateScale(82),
        borderWidth: 2,
        zIndex:30,
        alignItems: "center",
        justifyContent: "center",
        borderColor: Colors.white,
      },profilePicView:{
        alignItems:"center",
        zIndex:30,
        marginTop:moderateScaleVertical(20)
      },
      cardImage: {
          height: moderateScale(20),
          width: moderateScale(14),
          paddingLeft: moderateScale(20),
          position: "absolute",
          bottom: moderateScale(0),
          left: moderateScale(62),
          zIndex: 100,
        },
        profileImage: {
          height: moderateScale(80),
          width: moderateScale(80),
          borderRadius: 80,
          zIndex: 100,
          opacity: 0.9,
        },
        outerPicView:{
          alignItems:"center",
          marginTop:moderateScaleVertical(44),
          marginBottom:moderateScaleVertical(32)
        },
        calendarView:{
          flexDirection:"row",
          alignItems:"center",
          backgroundColor:"#ffe3c4",
          padding:20,
          marginHorizontal:moderateScale(56),
          borderRadius:15,
          marginBottom:moderateScaleVertical(24)
        },
        genderBtns:{
          flexDirection:"row",
          padding:16,
          borderRadius:15,
          borderColor:"#E8E6EA",
          borderWidth:1,
          marginHorizontal:moderateScale(54),
          justifyContent:"space-between",
          alignItems:"center",
          marginBottom:moderateScaleVertical(12)
        },
        langBtns:{
          ...commonStyles.shadowStyle2,
          flexDirection:"row",
          padding:16,
          borderRadius:15,
          // borderColor:"#E8E6EA",
          // borderWidth:1,
          marginHorizontal:moderateScale(54),
          justifyContent:"space-between",
          alignItems:"center",
          marginBottom:moderateScaleVertical(12)
        }
})