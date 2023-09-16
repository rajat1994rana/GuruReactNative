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
    profilePicSelect:{
        height:moderateScaleVertical(320),
        width:width/1.15,
        backgroundColor:Colors.white,
        alignSelf:"center",
        borderTopLeftRadius:12,
        borderTopRightRadius:12,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:moderateScaleVertical(16)
      },
      labelText:{
        ...commonStyles.font13Regular,
        borderBottomWidth:1,
        height:moderateScaleVertical(52),
        borderBottomColor:"#D9D9D9",
marginBottom:moderateScaleVertical(16)
      },
      textInputStyle:{
        backgroundColor:Colors.white,
        borderRadius:16,
        height:moderateScaleVertical(52),
        paddingHorizontal:moderateScale(16),
        marginHorizontal:moderateScale(24),
        marginBottom:moderateScaleVertical(8)
      }
})