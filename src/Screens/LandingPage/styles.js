import { StyleSheet } from "react-native";
import Colors from "../../Styles/Colors";
import commonStyles from "../../Styles/commonStyles";
import { height, moderateScale, moderateScaleVertical, width } from "../../Styles/responsiveSize";

// console.log(height / 4.5, "hedfkhheight");


export default StyleSheet.create({
    mainView:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    header: {
        width: "100%",
        paddingVertical: moderateScaleVertical(10),
        paddingHorizontal: moderateScale(16),
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor:"#ECFFDC",
    },
    appLogoStyle:{
         width:"100%",
        height:moderateScaleVertical(120),
        justifyContent:"flex-end",
        alignItems:"center"
        // paddingHorizontal:moderateScale(12)

    },
    discriptionTextStyle:{
        ...commonStyles.font20Medium,
        color:Colors.appBlack
    },
    discriptionTextStyle2:{
        ...commonStyles.font20Regular,
        color:Colors.appBlack
    },
    loginSignUpBtns:{
        backgroundColor:Colors.white,
        // height:moderateScaleVertical(33),
        // width:"70%",
        borderRadius:15,
        borderColor:"#F3F3F3",
        borderWidth:1,
        paddingHorizontal:moderateScale(12),
        paddingVertical:moderateScaleVertical(16),
        marginBottom:moderateScaleVertical(23),
        alignItems:"center",
        justifyContent:"center"
    },
    loginSignupView:{flex:0.5,marginTop:moderateScaleVertical(80),
        width:"100%",alignItems:"center",justifyContent:"center",
    marginBottom:moderateScaleVertical(24)},
    orView:{
        marginTop:moderateScaleVertical(40),
flexDirection:"row",
justifyContent:"center",
alignItems:"center"
    },
    orLine:{
borderBottomColor:Colors.greyText,
borderBottomWidth:1,
width:"32%"
    },
    socialLoginView:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        marginTop:moderateScaleVertical(48)
    },
    iconsStyle:{
        marginHorizontal:moderateScale(20)
    },
    customBtnStyle: {
        marginBottom: moderateScaleVertical(28),
        marginTop: moderateScaleVertical(18),
        alignSelf:"center",
        // marginHorizontal: moderateScale(24),
        width: width/1.5 ,
        borderRadius:15,
        height:moderateScaleVertical(56)
      },
      lowerView:{
        flexDirection:"row",alignItems:"center",
        width:"70%",
        justifyContent:"space-around",
       marginTop:moderateScaleVertical(72)
      }
})