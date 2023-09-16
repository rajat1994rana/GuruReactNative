import React from 'react';
import {View, Modal, ActivityIndicator, Image} from 'react-native';

import {BarIndicator,PacmanIndicator,SkypeIndicator} from 'react-native-indicators';
import commonStyles from '../Styles/commonStyles';
import Colors from '../Styles/Colors';
import ImagePath from '../Constants/ImagePath';

const LoadingComponent = () => (
  <View
    style={{
      ...commonStyles.loader,
      backgroundColor: 'rgba(0,0,0,0.5)',
      elevation: 5,
    }}>
    <SkypeIndicator size={45} color={Colors.appColor}/>
  </View>
);
const Loader = ({isLoading = false, withModal}) => {
  if (withModal) {
    return (
      <Modal transparent visible={isLoading}>
        {/* <Image source={ImagePath.loadder} style={{height:150,width:150,alignSelf:"center",marginTop:70}} /> */}
        <LoadingComponent />
      </Modal>
    );
  }
  if (isLoading) {
    return <LoadingComponent />
    // return(
    //   <Modal transparent visible={isLoading} >
    //     <View style={{flex:1}}>
    // <Image source={ImagePath.loadder} style={{height:200,width:200,alignSelf:"center",marginBottom:20, marginTop:70}}/>
    // </View>
    // </Modal>
    // )
  }
  return null;
};

export default Loader;
