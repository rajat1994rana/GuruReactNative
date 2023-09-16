import React, {
  useMemo,
  useRef,
  useState
} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import FillterComp from '../../Components/FillterComp';
import ImagePath from '../../Constants/ImagePath';
import Colors from '../../Styles/Colors';
import commonStyles from '../../Styles/commonStyles';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../Styles/responsiveSize';
import styles from './styles';
import NavigationStrings from '../../Constants/NavigationStrings';

const activityData = [
  {
    activityPic: ImagePath.casino,
    activityName: 'Lets bake together!',
    activityDate: 'June 23th',
    actvityTime: '7:00PM - 9:00PM',
  },
  {
    activityPic: ImagePath.tableFood,
    activityName: 'Volunteer',
    activityDate: 'June 23th',
    actvityTime: '7:00PM - 9:00PM',
  },
  {
    activityPic: ImagePath.nearMe1,
    activityName: 'Lets bake together!',
    activityDate: 'June 23th',
    actvityTime: '7:00PM - 9:00PM',
  },
  {
    activityPic: ImagePath.sking,
    activityName: 'Lets bake together!',
    activityDate: 'June 23th',
    actvityTime: '7:00PM - 9:00PM',
  },
];

const nearMeData = [
  {
    activityPic: ImagePath.sking,
    distance: 'July 24 | 2.7mi away',
    description: 'Skiing',
    name: 'User A',
    like: '10 likes',
    type: 'large',
  },
  {
    activityPic: ImagePath.image12,
    distance: 'July 24 | 2.7mi away',
    description: 'Snowboard, $200/person',
    name: 'User B',
    like: '10 likes',
    type: 'small',
  },
  {
    activityPic: ImagePath.nearMe1,
    distance: 'July 24 | 2.7mi away',
    description: 'Camping',
    name: 'User C',
    like: '10 likes',
    type: 'small',
  },
  {
    activityPic: ImagePath.sking,
    distance: 'July 24 | 2.7mi away',
    description: 'Party🍷 Dinner',
    name: 'User D',
    like: '10 likes',
    type: 'small',
  },
  {
    activityPic: ImagePath.sking,
    distance: 'July 24 | 2.7mi away',
    name: 'User D',
    description: 'Camping',
    like: '10 likes',
    type: 'small',
  },
  {
    activityPic: ImagePath.sking,
    distance: 'July 24 | 2.7mi away',
    name: 'User D',
    description: 'Camping',
    like: '10 likes',
    type: 'small',
  },
  {
    activityPic: ImagePath.sking,
    distance: 'July 24 | 2.7mi away',
    name: 'User D',
    description: 'Camping',
    like: '10 likes',
    type: 'small',
  },
];

const Discover = ({navigation, route}) => {
  const [state, setState] = useState({
    tagData: ['Dance', 'Sports', 'Adventure', 'Music', 'Movies'],
    isLoading: false,
  });
  const {isLoading, tagData} = state;
  const updateState = data => setState(state => ({...state, ...data}));
  const [filterTypes, setfilterTypes] = useState([
    {
      title: 'Location',
      type: 'LOCATION',
    },
    {
      title: 'Time',
      type: 'TIME',
    },
    {
      title: 'Type',
      type: 'TYPE',
    },
    {
      title: 'Language',
      type: 'LANG',
    },
    {
      title: 'Count',
      type: 'COUNT',
    },
    {
      title: 'Gender',
      type: 'GENDER',
    },
    {
      title: 'Age',
      type: 'AGE',
    },
  ]);
  const [selectedFilterType, setselectedFilterType] = useState('');
  const nearMeRender = ({item, index}) => {
    return (
      <TouchableOpacity onPress={()=>navigation.navigate(NavigationStrings.EVENT_DETAILS_SCREEN)} style={styles.renderMainView}>
        <Image style={styles.nearMeImage} source={item.activityPic} />
        <View style={{paddingHorizontal: 8, paddingTop: 8, flex: 1}}>
          <View style={{flex: 1}}>
            <Text style={styles.distanceText}>{item?.distance}</Text>
            <Text numberOfLines={1} style={styles.cardDesc}>
              {item.description}
            </Text>
          </View>
          <View style={styles.renderUserView}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={ImagePath.profileImg1} style={styles.userImage} />
              <Text style={styles.userName}>{item?.name}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={ImagePath.likeEmp} style={styles.likeImage} />
              <Text style={{...commonStyles.font10Grey, marginLeft: 8}}>
                {item?.like}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const [isVisible, setisVisible] = useState(false);
  const scrollViewRef = useRef(null);
  const scrollToIndex = (index) => {
    if (scrollViewRef.current) {
      // Calculate the position you want to scroll to based on the index
      const xOffset = index * 50; // Change ITEM_HEIGHT to your item height
      scrollViewRef.current.scrollTo({ x:xOffset, animated: true });
    }
  };
  return (
    // <WrapperContainer bgColor={Colors.white} statusBarColor={Colors.appColor2}>
    <View style={{flex: 1, paddingTop: 48, backgroundColor: Colors.cardGrey}}>
      <View style={{paddingHorizontal:16}}>
      <View
        style={{
          borderWidth: 1,
          height: 36,
          borderRadius: 20,
          borderColor: Colors.borderColor1,
          marginHorizontal: 24,
          marginVertical: 16,
          paddingHorizontal: 14,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TextInput placeholder="Search......" style={{ padding: 0 }} />
        <Image source={ImagePath.searchIcon} style={{ width: 18, height: 18 }} />
      </View>
      <ScrollView
        horizontal
        ref={scrollViewRef}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          alignItems: 'center',
          marginBottom: 16,
        }}
        style={{}}>
        <View>
          <Image source={ImagePath.filterIcon} style={{ marginRight: 4 }} />
        </View>
        {filterTypes.map((res, index) => (
          <TouchableOpacity
            onPress={() => {
              scrollToIndex(index)
              setselectedFilterType(res.type);
              setisVisible(true);
            }}
            key={index}
            style={{
              flexDirection: 'row',
              paddingVertical: 4,
              paddingHorizontal: 8,
              marginHorizontal: 4,
              borderRadius: 16,
              alignItems: 'center',
              backgroundColor:
                selectedFilterType == res.type ? Colors?.appColorPrimary : null,
            }}>
            <Text
              style={{
                ...commonStyles.font11Regular,
                color: Colors?.greyText,
              }}>
              {res.title}
            </Text>
            <Image source={ImagePath.arrowDown} style={{ marginLeft: 8 }} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
      <FlatList
        data={nearMeData}
        style={{flex: 1}}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={nearMeRender}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={{paddingHorizontal: 16}}
        // ListHeaderComponent={() => (
        //   // memoizedView
        // )}
      />
      <FillterComp
        isVisible={isVisible}
        selectedFilterType={selectedFilterType}
        setisVisible={setisVisible}
        setselectedFilterType={setselectedFilterType}
      />
      {/* // </WrapperContainer> */}
    </View>
  );
};

export default Discover;
