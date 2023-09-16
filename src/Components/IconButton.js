import React from 'react'
import { TouchableOpacity,Image, StyleSheet } from 'react-native'
import { func, string } from 'prop-types'
// import styles from './IconButton.styles'
import Colors from '../Styles/Colors';
const IconButton = ({ onPress, name, backgroundColor,customStyle, color }) => (
  <TouchableOpacity
    style={{...styles.singleButton, backgroundColor:backgroundColor,...customStyle }}
    onPress={onPress}
    activeOpacity={0.85}
  >
    <Image
      source={name}
    />
  </TouchableOpacity>
)
IconButton.defaultProps = {
  color: Colors.white,
  backgroundColor: Colors.heartColor,
}
IconButton.propTypes = {
  onPress: func.isRequired,
  name: string.isRequired,
  color: string,
  backgroundColor: string,
}

const styles = StyleSheet.create({
    singleButton: {
      backgroundColor: 'transparent',
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 6,
      shadowOpacity: 0.3,
      elevation: 2,
      padding: 15,
    },
  })
export default IconButton;