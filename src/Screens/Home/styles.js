import { StyleSheet } from "react-native";
import Colors from "../../Styles/Colors";
import commonStyles from "../../Styles/commonStyles";
import { height, moderateScale, moderateScaleVertical } from "../../Styles/responsiveSize";

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
    buttonsContainer:{
        flexDirection:"row",
        alignItems:"center",
        width:"68%",
        justifyContent:"space-between",
        zIndex:100,
        position:"absolute",
        bottom:moderateScaleVertical(120),
        left:moderateScale(60)
    }
})