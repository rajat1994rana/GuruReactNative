import { StyleSheet } from "react-native";
import Colors from "../../Styles/Colors";
import commonStyles from "../../Styles/commonStyles";
import { height, moderateScale, moderateScaleVertical, width } from "../../Styles/responsiveSize";

// console.log(height / 4.5, "hedfkhheight");


export default StyleSheet.create({
    lowerView:{
     marginTop:moderateScaleVertical(120)
    },
    mainView:{
        paddingTop:moderateScaleVertical(120),
        paddingHorizontal:moderateScale(65)
    },
    cell: {
        width: "21%",
        height: moderateScale(56),
        marginVertical:moderateScaleVertical(40),
        borderWidth:1.3,
        borderColor:Colors.appColorPrimary,
        // fontFamily: fontFamily.regular,
        lineHeight: width * 0.14,
        alignItems:"center",
        justifyContent:'center',
        textAlign: 'center',
        marginRight: 4,
        backgroundColor: Colors.textInputGrey,
        borderRadius: 8,
        overflow: 'hidden',
        color: Colors.black,
    },
})