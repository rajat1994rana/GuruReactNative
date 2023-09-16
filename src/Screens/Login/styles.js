import { StyleSheet } from "react-native";
import Colors from "../../Styles/Colors";
import commonStyles from "../../Styles/commonStyles";
import { height, moderateScale, moderateScaleVertical } from "../../Styles/responsiveSize";

// console.log(height / 4.5, "hedfkhheight");


export default StyleSheet.create({
    mainView:{
        flex:1
        // justifyContent:"flex-end",
    },
    lowerView:{
     marginTop:moderateScaleVertical(120)
    },
    mobileView:{
        paddingTop:moderateScaleVertical(140),
        paddingHorizontal:moderateScale(65)
    }
})