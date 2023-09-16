import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import Colors from '../Styles/Colors';
import commonStyles from '../Styles/commonStyles';
import { width } from '../Styles/responsiveSize';
export default function ActionSheetComp({isVisible,isCardDetails=false,firstText='Report them', onclose = () => {},isProfile=false}) {
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={() => onclose(true)}
      onSwipeComplete={() => onclose(true)}
      onBackdropPress={() => onclose(true)}
      animationIn={'slideInUp'}
      animationOut={'fadeOut'}
      backdropOpacity={0.5}
      useNativeDriver={true}
      style={{margin: 0, justifyContent: 'flex-end'}}>
      <View style={styles.mainContainer}>
       {isProfile?<>
        <TouchableOpacity onPress={()=>{onclose(false)}} activeOpacity={0.5} style={styles?.btns}>
          <Text style={styles.btnText}>{firstText}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{onclose(true)}} activeOpacity={0.5} style={{...styles?.btns, borderBottomWidth: 0}}>
          <Text style={styles.btnText}>Cancel</Text>
        </TouchableOpacity>
       </>:<><TouchableOpacity onPress={()=>{onclose()}} activeOpacity={0.5} style={styles?.btns}>
          <Text style={styles.btnText}>Anyone on GUGU</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{onclose()}} activeOpacity={0.5} style={styles?.btns}>
          <Text style={styles.btnText}>Nearby neighborhoods</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{onclose()}} activeOpacity={0.5} style={{...styles?.btns, borderBottomWidth: 0}}>
          <Text style={styles.btnText}>Only your connections</Text>
        </TouchableOpacity></>}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    backgroundColor: Colors.white,
    paddingBottom:12,
    width: width,
  },
  btns: {
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 15,
    borderBlockColor: Colors.borderColor1,
  },
  btnText: {
    ...commonStyles.font14Black,
    color: Colors.appColorPrimary,
  },
});
