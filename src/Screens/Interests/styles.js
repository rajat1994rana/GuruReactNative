import { StyleSheet } from "react-native";
import Colors from "../../Styles/Colors";
import commonStyles from "../../Styles/commonStyles";
import { height, moderateScale, moderateScaleVertical, width } from "../../Styles/responsiveSize";

// console.log(height / 4.5, "hedfkhheight");


export default StyleSheet.create({
    editProfileView:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:moderateScaleVertical(40),
        marginTop:moderateScaleVertical(30)
      },
      editProfileText:{
        ...commonStyles.font24Black,
        color:Colors.black,
        textAlign:"center"
      },
      container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal:moderateScale(20)
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      },
      item: {
        flex:1, // Each item takes half the width
        backgroundColor: Colors.greyButtons,
        paddingHorizontal:moderateScale(10),
        paddingVertical: moderateScaleVertical(14),
        borderRadius:10,
marginHorizontal:moderateScale(6),
flexDirection:"row",
alignItems:"center",
      },
      itemTouchOuter: {
        height:moderateScaleVertical(62),
        width:width/2,
        // Each item takes half the width
//         backgroundColor: Colors.greyButtons,
        paddingHorizontal:moderateScale(10),
        paddingVertical: moderateScaleVertical(6),
//         borderRadius:10,
marginHorizontal:moderateScale(6),
// flexDirection:"row",
// alignItems:"center",
      },
      nextButton: {
        marginVertical: moderateScaleVertical(20),
        // width: '100%',
        backgroundColor:Colors.appColorPrimary,
        height: moderateScale(52),
        width:width/1.4,
        alignSelf:"center",
        borderRadius: 15,
        marginHorizontal: moderateScale(24),
        justifyContent: "center",
        alignItems: "center",
        marginBottom:moderateScaleVertical(32)
      },
      mainView:{
        paddingTop:moderateScaleVertical(30),
        paddingHorizontal:moderateScale(35),
        marginBottom:moderateScaleVertical(20)
    },
})