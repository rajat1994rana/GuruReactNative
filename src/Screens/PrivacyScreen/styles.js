import { StyleSheet } from "react-native"
import Colors from "../../Styles/Colors"
import commonStyles from "../../Styles/commonStyles"

const styles = StyleSheet.create({
  mainRow:{
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingLeft: 24,
    paddingRight: 16,
    backgroundColor: Colors.white,
    borderBlockColor: Colors?.borderColor1,
    paddingVertical: 8,
    alignItems:'center'

  },
  rowText:{
    ...commonStyles.font13RedMedium,
    color: Colors?.black,
    lineHeight: 18,
  }
})
export default  styles