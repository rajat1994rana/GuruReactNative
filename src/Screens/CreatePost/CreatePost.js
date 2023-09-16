import { Image, Text, TextInput, TouchableOpacity, } from 'react-native';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import ImagePath from '../../Constants/ImagePath';
import Colors from '../../Styles/Colors';
import styles from './styles';
import Header from '../../Components/Header';
import strings from '../../Constants/lang';
import commonStyles from '../../Styles/commonStyles';
import { moderateScale } from '../../Styles/responsiveSize';
import ImageCropPicker from 'react-native-image-crop-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const CreatePost = ({ navigation,route }) => {

    const [state, setState] = useState({
        isLoading: false,
    });
    const {isLoading } = state;
    const updateState = data => setState(state => ({ ...state, ...data }));

        const imagepicker = () => {
            updateState({uploadProfile: true});
            ImageCropPicker.openPicker({
              width: 300,
              height: 400,
            }).then(image => {
                setUserResidenceProof({
                    path: image?.path,
                    uri:  image?.path,
                    name: "image.png",
                    type: image?.mime,
                })
                updateState({profilePic:image?.path})
            //   postImage(image.path);
            });
          };

    return (
        <WrapperContainer bgColor={Colors.F5F5F5} statusBarColor={Colors.appColor2}>
         <Header
         headerName={strings.HOST}
         headerTextStyle={{...commonStyles.font30Italic}}
         />
         <KeyboardAwareScrollView>
         <TouchableOpacity activeOpacity={0.8}
         onPress={imagepicker}
          style={styles.profilePicSelect}>
<Image
source={ImagePath.addGrey}/>
            </TouchableOpacity>
        <TextInput
        placeholder={strings.TITLE}
        placeholderTextColor={Colors.ABABAB}
         style={{...styles.labelText,marginHorizontal:moderateScale(24)}}/>

        <TextInput
        placeholder={strings.ADDRESS}
        placeholderTextColor={Colors.ABABAB}
        style={{...styles.textInputStyle}}
        />
         <TextInput
        placeholder={strings.TIME}
        placeholderTextColor={Colors.ABABAB}
        style={{...styles.textInputStyle}}
        />
        <TextInput
        placeholder={strings.NUMBER_PARTICIPANTS}
        placeholderTextColor={Colors.ABABAB}
        style={{...styles.textInputStyle}}
        />
        <TextInput
        placeholder={strings.LANGUAGE}
        placeholderTextColor={Colors.ABABAB}
        style={{...styles.textInputStyle}}
        />
        </KeyboardAwareScrollView>
        </WrapperContainer>
    )
};

export default CreatePost;