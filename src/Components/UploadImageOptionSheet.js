import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {width} from '../Styles/responsiveSize';
import commonStyles from '../Styles/commonStyles';
import Colors from '../Styles/Colors';
import ButtonComp from './ButtonComp';

export default function UploadImageOptionSheet({isVisible,onClose,onGallery,onCamera}) {
    
  return (
    <Modal
      isVisible={isVisible}
      animationIn={'slideInUp'}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      animationOut={'slideOutDown'}
      useNativeDriver={true}
      style={{margin: 0, justifyContent: 'flex-end'}}>
      <View
        style={{
          backgroundColor: '#F1F1F1',
          width: width,
          borderRadius: 10,
        }}>
        <View>
          <TouchableOpacity onPress={()=>onCamera()} style={styles.BtnView}>
            <Text style={styles.btnText}>Take a Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>onGallery()} style={{...styles.BtnView, borderBottomWidth:0}}>
            <Text style={styles.btnText}>Choose from Library</Text>
          </TouchableOpacity>
        </View>
        <ButtonComp
        onPress={onClose}
          btnStyle={{
            backgroundColor: Colors.white,
            marginTop: 8,
            marginBottom: 32,
            borderRadius: 10,
            marginHorizontal: 16,
          }}
        btnText='Cancel'
        btnTextStyle={{...commonStyles.font13RedMedium, color:Colors.appColorPrimary,}}
        />
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  BtnView: {
    height: 45,
    borderBottomWidth: 1,
    borderColor: Colors.borderColor1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    ...commonStyles.font13RedMedium,
    color: Colors.appColorPrimary,
  },
});
