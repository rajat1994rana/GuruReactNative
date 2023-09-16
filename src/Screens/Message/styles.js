import { StyleSheet } from "react-native";
import Colors from "../../Styles/Colors";
import commonStyles from "../../Styles/commonStyles";
import { height, moderateScale, moderateScaleVertical, width } from "../../Styles/responsiveSize";

// console.log(height / 4.5, "hedfkhheight");


export default StyleSheet.create({
    header: {
        width: "100%",
        paddingVertical: moderateScaleVertical(10),
        paddingHorizontal: moderateScale(16),
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor:"#ECFFDC",
    },
    chatTabView:{alignItems:"center",justifyContent:"center",width:width/4,paddingBottom:moderateScaleVertical(6)},
    historyCardView:{
            height:moderateScaleVertical(320),
            width:width/2.5,
            borderRadius:16,
             marginHorizontal:moderateScale(14),
             marginBottom:moderateScaleVertical(8)
    },
    profieImg:{
    height: moderateScale(38),
    width: moderateScale(38),
    borderRadius: 50,},
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
        left: moderateScale(18),
        zIndex: 100,
        borderRadius: 48,},
    imageCardStyle:{
        height:moderateScaleVertical(240),
        borderTopLeftRadius:12,
        borderTopRightRadius:12,
        width:width/2.2
    },
    profileImgView:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:moderateScaleVertical(12)
    },
    imgStyle:{
        height:moderateScaleVertical(32),
        width:moderateScale(32),
        borderRadius:32
    },activityText:{
        ...commonStyles.font16Italic,color:Colors.appBlack
    },
    userNameText:{
        ...commonStyles.font13Italic,color:Colors.appBlack
    }
})