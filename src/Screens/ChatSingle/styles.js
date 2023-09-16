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
    mainHeader:{
        width: "100%",
        paddingVertical: moderateScaleVertical(10),
        paddingHorizontal: moderateScale(16),
        flexDirection: "row",
        alignItems:"center",
        // justifyContent: "space-between",
      
    },
    profieImg:{
        height: moderateScale(50),
        width: moderateScale(50),
        borderRadius: 50,},
        profilePicNameView:{
            flexDirection:"row",
            alignItems:"center",
            width: "86%",
            justifyContent: "space-between",
            marginHorizontal:moderateScale(24)
        },
        profilePicNameViewInner:{
            flexDirection:"row",
            alignItems:"center",
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

})