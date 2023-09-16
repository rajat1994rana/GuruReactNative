import { BackHandler, FlatList, Image, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import ImagePath from '../../Constants/ImagePath';
import Colors from '../../Styles/Colors';
import { ThemeContext } from '../../Components/ThemeProvider';
import { useFocusEffect, useNavigation } from '@react-navigation/native';


const Scanner = ({ navigation,route }) => {
    // const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
    // const shimmerArrayDark = ['#23262E', '#797b82', '#6B6E77'];
    // const shimmerLight = ['#ebebeb', '#c5c5c5', '#ebebeb'];
    // const colorScheme = useColorScheme();
    const { theme } = useContext(ThemeContext);

    const [state, setState] = useState({

        isLoading: false,
    });
    const {isLoading } = state;
    const updateState = data => setState(state => ({ ...state, ...data }));

    useEffect(() => {

    }, [])


    useFocusEffect(
        useCallback(() => {
          
        }, []));

    return (
        <WrapperContainer bgColor={theme.backgroundColorMain} statusBarColor={Colors.appColor2}>
         
        </WrapperContainer>
    )
};

export default Scanner;