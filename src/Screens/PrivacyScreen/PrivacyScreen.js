import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import Colors from '../../Styles/Colors';
import Header from '../../Components/Header';
import ImagePath from '../../Constants/ImagePath';
import commonStyles from '../../Styles/commonStyles';
import {width} from '../../Styles/responsiveSize';
import NavigationStrings from '../../Constants/NavigationStrings';
import styles from './styles';
import ActionSheetComp from '../../Components/ActionSheetComp';

export default function PrivacyScreen({navigation}) {
  const [activeTab, setactiveTab] = useState(0);
 const [isVisible, setisVisible] = useState(false)

  return (
    <WrapperContainer bgColor={Colors.white} statusBarColor={Colors.white}>
      <View style={{marginTop: 16}}>
        <Header
          showLeft={ImagePath.backBtn}
          leftImageStyle={{marginLeft: 16}}
          headerName={'Privacy'}
          headerTextStyle={{marginLeft: -24}}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flex: 1,
          backgroundColor: '#F2F2F2',
          marginTop: 8,
        }}>
        <View style={{marginTop: 16,flex:1}}>
          <MessagesComp 
          onPress={()=>{
            setisVisible(true)
          }}
          />
          <PrivacyComp onPress={()=>{
            setisVisible(true)
          }}/>
          <LanguageComp onPress={()=>{
            setisVisible(true)
          }}/>
          <AboutComp/>
        </View>
        <TouchableOpacity style={{height:40,backgroundColor:Colors.white,marginBottom:16,marginHorizontal:18,borderRadius:10,alignItems:'center',justifyContent:'center'}}>
            <Text style={{...commonStyles.font16Black,color:Colors?.greyText}}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
      <ActionSheetComp
      isVisible={isVisible}
      onclose={()=>{
        setisVisible(false)
      }}
      />
    </WrapperContainer>
  );
}

const MessagesComp = ({onPress=()=>{}}) => {
  return (
    <View style={{}}>
      <Text style={{...commonStyles.font13Black,color:Colors.greyText,marginLeft: 24,marginBottom:8}}>Messages</Text>
      <View style={styles.mainRow}>
        <View style={{flex: 0.9}}>
          <Text style={styles.rowText}>
           {'Not allow others to add you through\ngroup chat'}
          </Text>
        </View>
        <TouchableOpacity style={{flex: 0.1, alignItems: 'flex-end'}}>
          <Image source={ImagePath.toggelOn} />
        </TouchableOpacity>
      </View>
      <View style={{...styles.mainRow,paddingVertical:12}}>
        <View style={{flex: 0.9}}>
          <Text style={styles.rowText}>
          From whom you’ll receive messages
          </Text>
        </View>
        <TouchableOpacity onPress={onPress} style={{flex: 0.1, alignItems: 'flex-end'}}>
          <Image source={ImagePath.right} />
        </TouchableOpacity>
      </View>
      <View style={{...styles.mainRow,paddingVertical:12,borderBottomWidth:0}}>
        <View style={{flex: 0.9}}>
          <Text style={styles.rowText}>
          From whom can send you message directly
          </Text>
        </View>
        <TouchableOpacity onPress={onPress} style={{flex: 0.1, alignItems: 'flex-end'}}>
          <Image source={ImagePath.right} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const PrivacyComp =({onPress=()=>{}})=> {
    return (
      <View style={{marginTop:17}}>
        <Text style={{...commonStyles.font13Black,color:Colors.greyText, marginLeft: 24,marginBottom:8}}>Privacy</Text>
        <View style={styles.mainRow}>
          <View style={{flex: 0.9}}>
            <Text style={styles.rowText}>
             {'From whom can search for you'}
            </Text>
          </View>
          <TouchableOpacity onPress={onPress} style={{flex: 0.1, alignItems: 'flex-end'}}>
          <Image source={ImagePath.right} />
          </TouchableOpacity>
        </View>
        <View style={{...styles.mainRow,paddingVertical:12}}>
          <View style={{flex: 0.9}}>
            <Text style={styles.rowText}>
            Set your saved posts to private
            </Text>
          </View>
          <TouchableOpacity style={{flex: 0.1, alignItems: 'flex-end'}}>
            <Image source={ImagePath.toggleOff} />
          </TouchableOpacity>
        </View>
        <View style={{...styles.mainRow,paddingVertical:12}}>
          <View style={{flex: 0.9}}>
            <Text style={styles.rowText}>
            Sync address book contacts
            </Text>
          </View>
          <TouchableOpacity style={{flex: 0.1, alignItems: 'flex-end'}}>
            <Image source={ImagePath.toggleOff} />
          </TouchableOpacity>
        </View>
        <View style={{...styles.mainRow,paddingVertical:12,borderBottomWidth:0}}>
          <View style={{flex: 0.9}}>
            <Text style={styles.rowText}>
            Let others discover you by phone
            </Text>
          </View>
          <TouchableOpacity style={{flex: 0.1, alignItems: 'flex-end'}}>
            <Image source={ImagePath.toggleOff} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const LanguageComp =({onPress=()=>{}}) => {
    return (
      <View style={{marginTop:17}}>
        <Text style={{...commonStyles.font13Black,color:Colors.greyText, marginLeft: 24,marginBottom:8}}>English</Text>
        <View style={styles.mainRow}>
          <View style={{flex: 0.9}}>
            <Text style={styles.rowText}>
             {'English'}
            </Text>
          </View>
          <TouchableOpacity onPress={onPress} style={{flex: 0.1, alignItems: 'flex-end'}}>
          <Image source={ImagePath.right} />
          </TouchableOpacity>
        </View>
     
      </View>
    );
  };
  
  const AboutComp = ({onPress=()=>{}}) => {
    return (
      <View style={{marginTop:17}}>
        <Text style={{...commonStyles.font13Black,color:Colors.greyText, marginLeft: 24,marginBottom:8}}>About</Text>
        <View style={styles.mainRow}>
          <View style={{flex: 0.9}}>
            <Text style={styles.rowText}>
             {'Privacy Policy'}
            </Text>
          </View>
        </View>
        <View style={{...styles.mainRow,paddingVertical:12,borderBottomWidth:0}}>
          <View style={{flex: 0.9}}>
            <Text style={styles.rowText}>
            Acknowledgements
            </Text>
          </View>
        </View>
      </View>
    );
  };