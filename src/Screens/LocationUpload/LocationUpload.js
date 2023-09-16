import { BackHandler, FlatList, Image, KeyboardAvoidingView, Platform, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import React, { useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import ImagePath from '../../Constants/ImagePath';
import Colors from '../../Styles/Colors';
import styles from './styles';
import { ThemeContext } from '../../Components/ThemeProvider';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker } from 'react-native-maps';
import { moderateScale, moderateScaleVertical, width } from '../../Styles/responsiveSize';
import { ScrollView } from 'react-native-gesture-handler';
import commonStyles from '../../Styles/commonStyles';
import Header from '../../Components/Header';
import { useSelector } from 'react-redux';
import Buttonn from '../../Components/Buttonn';
import NavigationStrings from '../../Constants/NavigationStrings';


const LocationUpload = ({ navigation,route }) => {
    // const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
    // const shimmerArrayDark = ['#23262E', '#797b82', '#6B6E77'];
    // const shimmerLight = ['#ebebeb', '#c5c5c5', '#ebebeb'];
    // const colorScheme = useColorScheme();
    const { theme } = useContext(ThemeContext);
    const locationInfo = useSelector((data) => data?.location?.locationInfo);
    const markerRef = useRef(null);

    const [state, setState] = useState({
        selectedLat:locationInfo?.coords?.latitude,
        selectedLng:locationInfo?.coords?.longitude,
       // selectedLat:"",
        //selectedLng:"",
        searchedLocation:"",
        isLoading: false,
        locationDetails:""
    });
    const {isLoading,searchedLocation,selectedLng,selectedLat,locationDetails

     } = state;
    const updateState = data => setState(state => ({ ...state, ...data }));
    const [isKeyboardShown, setIsKeyboardShown] = useState(false);


    // useEffect(()=>{
    //   if (markerRef.current) {
    //     markerRef.current.setNativeProps({ title: locationDetails, description: searchedLocation });
    // }
    // },[searchedLocation,selectedLat,selectedLng])

    useLayoutEffect( () => {
      getLocationName();
     // console.log(searchedLocation,locationDetails,"searchedLocationsearchedLocation");
      // updateState({:searchedLocation})
      // const updateMarkerDescription = () => {
        // Find the markerRef and update the description
       
    // };
    }, [selectedLat,selectedLng,searchedLocation,locationDetails])

    const  getLocationName = async() => {
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${selectedLat}&lon=${selectedLng}`)
        const data = await response.json();
        // console.log(data,"datatatat");
        const locationName = data?.display_name;
        const locationCity = data?.address?.city?data?.address?.city:data?.address?.town;
        //console.log(locationCity,"locationCitykkkkkk");
          updateState({searchedLocation:locationName,locationDetails:locationCity,})
         console.log(locationName,"locationaaaNamelocationName");
        //  markerRef.current.
        // return locationName;
      } catch (error) {
        console.error('Error fetching location name:', error);
        return 'Unknown Location';
      }
    };

  const getLocationNameNew = async(selectedLatt,selectedLngg) => {
    // try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${selectedLatt}&lon=${selectedLngg}`)
      .then(res=>{
      const data = res.json();
      // console.log(data,"datatatat");
      const locationName = data?.display_name;
      const locationCity = data?.address?.city?data?.address?.city:data?.address?.town;
      //console.log(locationCity,"locationCitykkkkkk");
        updateState({searchedLocation:locationName,locationDetails:locationCity,})
        updateState({selectedLat:selectedLatt,selectedLng:selectedLngg});
       console.log(locationName,"locationaaaNamelocationName");
      //  markerRef.current.
      // return locationName;
       } ).catch(err=>{

      })
    // } catch (error) {
    //   console.error('Error fetching location name:', error);
    //   return 'Unknown Location';
    // }
  };

    const onPressButton = () =>{
navigation.navigate(NavigationStrings.CURVED_TAB);
    }

    const GooglePlacesInput = useCallback(() => {
        return (<>
       <Text style={{...commonStyles.font14Regular,textAlign:"center"}}>Enter you city</Text>
       <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "padding"}
          style={{ flex: 1,}}
       > 
          <GooglePlacesAutocomplete
          placeholder='add a city or postal code'
          
          textInputProps={{
            placeholderTextColor: Colors.greyScale,
            returnKeyType: "search",
            defaultValue:searchedLocation,
            //  value:searchedLocation,
             clearTextOnFocus:true,
            onChangeText:txt=>{if(txt.length==0){updateState({disableRightBtn:true,})}}
          }}
          fetchDetails={true}
            onPress={async(data, details) => {
              updateState({
                 searchedLocation:data.description, 
                selectedLat:details.geometry.location.lat,
              selectedLng:details.geometry.location.lng});
              await getLocationName();
            }}
            styles={{
              textInputContainer: {
                backgroundColor: "white",
                placeholderTextColor:Colors.greyScale,
                zIndex:100
                // borderWidth:0.7,
                // borderColor:Colors.appColor2
              },
              textInput: {
                height: 38,
                color: '#5d5d5d',
              marginTop:moderateScaleVertical(12),
                fontSize: 16,
                borderWidth:0.9,
                borderRadius:24,
                marginHorizontal:moderateScale(20),
                borderColor:Colors.appColorPrimary
              },
              
              listView:{
                color: Colors.appBlack,
                zIndex:100
              },
            
              predefinedPlacesDescription: {
                color:Colors.appBlack,
                zIndex:100
              },
            }}
            renderRow={(rowData) => {console.log(rowData,"rowDatajkjjkk");
            const title = rowData.structured_formatting.main_text;
            const address = rowData.structured_formatting.secondary_text;
            return (
              <View
                style={{
                  flex: 1,
                  height: '100%',
                  zIndex:100
                }}>
                <Text style={{fontSize: 14,color:Colors.appBlack}}>{title}</Text>
                <Text style={{fontSize: 14,color:Colors.appBlack}}>{address}</Text>
              </View>
            );}}
            query={{
              key: "AIzaSyAzu0SpTkD5ZJL_NLxDUIIKXrQ6SCFAVfg",
              language: 'en',
            }}
          />
          
          <View style={{
            height:moderateScaleVertical(300),width:moderateScale(300),
             justifyContent: 'center',
             alignItems: 'center',
             borderRadius:300,
             borderWidth:3,
             borderColor:Colors.appColorPrimary,
             overflow: 'hidden',
             alignSelf:"center",
             zIndex:100,
             marginTop:moderateScaleVertical(isKeyboardShown?0:80),
             marginBottom:moderateScaleVertical(24)
          }}>
          <MapView
             //provider={PROVIDER_GOOGLE} // remove if not using Google Maps
             style={{
              ...styles.map,
             alignSelf:"center",
            //  overflow: 'hidden'
            width:"100%",     
             zIndex:-100,height:moderateScaleVertical(isKeyboardShown?140:500)
            }}
          onRegionChangeComplete={e=>{console.log(e,"euwnfuwneufnewu"),
          updateState({selectedLat:e.latitude,selectedLng:e.longitude});
          getLocationName();
          // updateState({selectedLat:e.latitude,selectedLng:e.longitude});
          // markerRef.current.setNativeProps({ title: locationDetails, description: searchedLocation });
        }}
        zoomEnabled={true}
        moveOnMarkerPress={true}
             //customMapStyle={{borderRadius:400,width:"100%",height:moderateScaleVertical(isKeyboardShown?140:400)}}
             region={{
               latitude: selectedLat,
               longitude: selectedLng,
               latitudeDelta: 0.015,
               longitudeDelta: 0.0121,
             }}
           ><Marker
           key={selectedLat}
                  // draggable
                   ref={(ref) => (markerRef.current = ref)}
                  coordinate={{
                    latitude: selectedLat,
                    longitude: selectedLng,
                  }}
                  // onDragEnd={
                  //   (e) => {console.log(JSON.stringify(e.nativeEvent.coordinate),"pkpkpkpk");
                  //   updateState({selectedLat:e.nativeEvent.coordinate.latitude,selectedLng:e.nativeEvent.coordinate.longitude})
                  // }
                  // }
                  // onMagicTap={}
                  tappable={true}
                  title={locationDetails}
                  description={searchedLocation}
                  tracksInfoWindowChanges={true}
                  isPreselected={true}
                />
                </MapView>
           </View>
           </KeyboardAvoidingView>
          </>
        );
      },[selectedLat,selectedLng,searchedLocation]);
    return (
        <WrapperContainer bgColor={Colors.white} statusBarColor={Colors.appColor2}>
          <Header
 leftImageStyle={{marginLeft:moderateScale(16),marginTop:moderateScaleVertical(22)}}
 showLeft={ImagePath.backIcon}
/>
          <ScrollView keyboardShouldPersistTaps="handled">
         {GooglePlacesInput()}
         <Buttonn
            btnColor={Colors.appColorPrimary}
            containerStyle={{ ...styles.customBtnStyle }}
            btnText={"Continue"}
            onPress={onPressButton}
            textStyle={{
              ...commonStyles.font16WhiteBold,
              color: Colors.white,
            }}
            // disabled={disabled}
            borderRadius={20}
            />
         </ScrollView>
        </WrapperContainer>
    )
};

export default LocationUpload;