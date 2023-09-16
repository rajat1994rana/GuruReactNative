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
    map: {
        height:moderateScaleVertical(400),
        width:"93%"
        // ...StyleSheet.absoluteFillObject,
      },
      customBtnStyle:{ marginBottom: moderateScaleVertical(Platform.OS == "ios" ? 55 : 20),
      marginTop: moderateScaleVertical(18),
      alignSelf:"center",
      //marginLeft:moderateScale(Platform.OS == "ios"?80:24),
       marginHorizontal: moderateScale(36),
      height:moderateScaleVertical(52),
      width: width/1.42 ,
      borderRadius:15
    },
})