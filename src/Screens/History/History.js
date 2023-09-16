import { BackHandler, FlatList, Image, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import ImagePath from '../../Constants/ImagePath';
import Colors from '../../Styles/Colors';
import { ThemeContext } from '../../Components/ThemeProvider';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Header from '../../Components/Header';
import commonStyles from '../../Styles/commonStyles';
import styles from './styles';
import { moderateScaleVertical } from '../../Styles/responsiveSize';

const nearMeData = [
    {activityPic:ImagePath.casino,activityName:'Poker Starter ',userName:'User A', profileImg:ImagePath.profileImg1},
    {activityPic:ImagePath.image12,activityName:'Volunteer',userName:'User B', profileImg:ImagePath.profileImg2},
    {activityPic:ImagePath.nearMe1,activityName:'Lets bake together!',userName:'User C', profileImg:ImagePath.profileImg3},
    {activityPic:ImagePath.casino,activityName:'Lets bake together!',userName:'User D', profileImg:ImagePath.profileImg8},
]

const History = ({ navigation,route }) => {
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

const renderHistoryCard = ({item,index}) =>{
    return(
<View style={{...styles.historyCardView}}>
<Image
source={item.activityPic}
style={{...styles.imageCardStyle}}
/>
<Text style={{...styles.activityText}}>{item.activityName}</Text>
<View style={{...styles.profileImgView}}>
    <Image
    source={item.profileImg}
    style={{...styles.imgStyle}}
    />
    <Text style={styles.userNameText}>{'  '}{item.userName}</Text>
</View>
</View>
    )
}

    return (
        <WrapperContainer statusBarColor={Colors.appColor2}>
<Header
showLeft={ImagePath.backBtn}
headerName={"History"}
headerTextStyle={{...commonStyles.font30Italic}}
containerStyle={{paddingBottom:moderateScaleVertical(18)}}
/>
    <FlatList
data={nearMeData}
numColumns={2}
showsVerticalScrollIndicator={false}
renderItem={renderHistoryCard}
    />
         
        </WrapperContainer>
    )
};

export default History;