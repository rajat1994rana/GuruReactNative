import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Modal from 'react-native-modal';
import ImagePath from '../Constants/ImagePath';
import Colors from '../Styles/Colors';
import commonStyles from '../Styles/commonStyles';
import {moderateScale, width} from '../Styles/responsiveSize';
import RangeSliderComponent from './RangeSliderComponent';
import WrapperContainer from './WrapperContainer';
export default function FillterComp({
  isVisible,
  setisVisible,
  selectedFilterType,
  setselectedFilterType
}) {
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
  const [typeData, settypeData] = useState([
    {
      image: ImagePath.gameIcon,
      name: 'Card',
    },
    {
      image: ImagePath.sports,
      name: 'Sport',
    },
    {
      image: ImagePath.music,
      name: 'Music',
    },
    {
      image: ImagePath.outdoorFilter,
      name: 'Outdoor',
    },
    {
      image: ImagePath.travel,
      name: 'Travel',
    },
    {
      image: ImagePath.lifeIcon,
      name: 'Life',
    },
    {
      image: ImagePath.platteFilter,
      name: 'Arts',
    },
    {
      image: ImagePath.petIcon,
      name: 'Pets',
    },
    {
      image: ImagePath.Group,
      name: 'Jobs',
    },
    {
      image: ImagePath.otherIcon,
      name: 'Others',
    },
  ]);
  const [langData, setlangData] = useState([
    {
      image: ImagePath.englishFilter,
      name: 'English',
    },
    {
      image: ImagePath.ChinaFilter,
      name: '中文',
    },
    {
      image: ImagePath.franceFilter,
      name: 'Français',
    },
    {
      image: ImagePath.Spainfilter,
      name: 'Español',
    },
  ]);
  const scrollViewRef = useRef(null);
  const [genderData, setgenderData] = useState(['Guys', 'Girls', 'Unlimited']);
  const [isTimeShow, setisTimeShow] = useState(false);
  const [selectedRange, setSelectedRange] = useState({});
  const [selectTabType, setselectTabType] = useState('LOCATION');
  const [activeType, setactiveType] = useState(-1);
  const [activeLang, setactiveLang] = useState(1);
  const [activeGender, setactiveGender] = useState(2);
  const [isPrefrencesVisible, setisPrefrencesVisible] = useState(false);
  const currentDate = new Date();
  useEffect(() => {
    setselectTabType(selectedFilterType);
    let scrollIndex=filterTypes?.findIndex((item)=>item.type==selectedFilterType) 
    setTimeout(() => {
      scrollToIndex(scrollIndex)
    }, 0);
  }, [selectedFilterType]);
  const scrollToIndex = (index) => {
    if (scrollViewRef.current) {
      // Calculate the position you want to scroll to based on the index
      const xOffset = index * 50; // Change ITEM_HEIGHT to your item height
      scrollViewRef.current.scrollTo({ x:xOffset, animated: true });
    }
  };
console.log(selectedRange,'selectedRange')
  const onDayPress = day => {
    if (!selectedRange.startDate || selectedRange.endDate) {
      // If no start date or both start and end dates are selected, set the selected day as the start date
      setSelectedRange({startDate: day.dateString, endDate: null});
    } else if (
      !selectedRange.endDate ||
      day.dateString < selectedRange.startDate
    ) {
      // If start date is selected but end date is not, or if the selected end date is before the start date, update the end date
      setSelectedRange({...selectedRange, endDate: day.dateString});
    } else {
      // If end date is already selected and it's after the start date, reset the selection
      // setSelectedRange({startDate: day.dateString, endDate: null});
    }
  };
  //  // Utility function to get the range of dates between start and end
  const getRangeBetweenDates = (startDate, endDate) => {
    const range = {};
    const currentDate = new Date(startDate);
    while (currentDate <= new Date(endDate)) {
      const dateStr = currentDate.toISOString().split('T')[0];
      range[dateStr] = {
        color: Colors.appColorPrimary,
        textColor: Colors.white,
        borderRadius: 4,
      };
      currentDate.setDate(currentDate.getDate() + 1);
    }
    const keys = Object.keys(range);

    if (keys.length >= 2) {
      range[keys[0]] = {...range[keys[0]], startingDay: true};
      range[keys[keys.length - 1]] = {
        ...range[keys[keys.length - 1]],
        endingDay: true,
      };
    }
    return range;
  };
  const [markedDates, setMarkedDates] = useState({});
  useEffect(() => {
    setMarkedDates({
      [currentDate.toISOString().split('T')[0]]: {
        selected: true,
        textColor: Colors.appColorPrimary,
      },
      [selectedRange.startDate]:{
        startingDay: true,
        textColor: Colors.appColorPrimary,
      },
      ...getRangeBetweenDates(selectedRange.startDate, selectedRange.endDate),
    });
  }, [selectedRange]);
  const renderHeader = date => {
    const headerText = `${date.toString('MMMM yyyy')}`;
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{headerText}</Text>
      </View>
    );
  };
  const renderArrow = direction => {
    return (
      <TouchableOpacity style={{marginLeft: -16, marginRight: -16}}>
        <Image
          source={
            direction === 'left' ? ImagePath.leftArrow : ImagePath.rightArrow
          }
        />
      </TouchableOpacity>
    );
  };
  const calendarRef = useRef(null);
  return (
    <Modal
      isVisible={isVisible}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      useNativeDriver={true}
      onBackdropPress={() => {
        setisVisible(false);
      }}
      style={{margin: 0, justifyContent: 'flex-start'}}>
      <View>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#F6F6F6'} />
        <View style={{backgroundColor: '#F6F6F6', paddingTop: 48}}>
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
            <TextInput placeholder="Search......" style={{padding: 0}} />
            <Image
              source={ImagePath.searchIcon}
              style={{width: 18, height: 18}}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 16,
            marginTop: -8,
            paddingTop: 8,
            alignItems: 'center',
          }}>
          <ScrollView
          ref={scrollViewRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 16,
              alignItems: 'center',
            }}
            style={{}}>
            <View>
              <Image source={ImagePath.filterIcon} style={{marginRight: 4}} />
            </View>
            {filterTypes.map((res, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setselectedFilterType(res.type)
                    setselectTabType(res.type);
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
                      selectTabType == res.type
                        ? Colors?.appColorPrimary
                        : null,
                  }}>
                  <Text
                    style={{
                      ...commonStyles.font11Regular,
                      color: Colors?.greyText,
                    }}>
                    {res.title}
                  </Text>
                  <Image source={ImagePath.arrowDown} style={{marginLeft: 8}} />
                </TouchableOpacity>
              );
            })}
            <TouchableOpacity
              onPress={() => {
                setisPrefrencesVisible(true);
              }}>
              <Image source={ImagePath.settingIconFilter} />
            </TouchableOpacity>
          </ScrollView>
          <View style={{height: null, paddingBottom: 16}}>
            {selectTabType == 'LOCATION' && (
              <View style={{marginTop: 24}}>
                <RangeSliderComponent
                  minValueLable={'0'}
                  maxValueLable={'100'}
                  minValue={0}
                  maxValue={100}
                  defaultMinValue={0}
                  defaultMaxValue={40}
                  type={'LOCATION'}
                />
              </View>
            )}
            {selectTabType == 'TIME' && (
              <>
                <View
                  style={{
                    borderBottomWidth: 1,
                    marginTop: 24,
                    paddingBottom: 4,
                    borderBlockColor: Colors.borderColor1,
                  }}>
                  <Text style={{...commonStyles.font11Regular}}>Date</Text>
                </View>
                <Calendar
                  current={new Date().toISOString().split('T')[0]}
                  style={{width: width - 68}}
                  theme={{
                    arrowColor: '#797B86',
                    arrowStyle: {marginLeft: -12, marginRight: -12},
                  }}
                  // renderArrow={renderArrow}
                  renderHeader={renderHeader}
                  markedDates={markedDates}
                  markingType={'period'}
                  onDayPress={onDayPress}
                />
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBlockColor: Colors.borderColor1,
                    marginVertical: 16,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 16,
                  }}>
                  <Text>Time</Text>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                      setisTimeShow(!isTimeShow);
                    }}>
                    <Image
                      source={
                        isTimeShow ? ImagePath.toggleOn2 : ImagePath.toggleOff2
                      }
                    />
                  </TouchableOpacity>
                </View>
                {isTimeShow && (
                  <View style={{}}>
                    <RangeSliderComponent
                      minValueLable={'00:00'}
                      maxValueLable={'24:00'}
                      minValue={0}
                      maxValue={24}
                      defaultMinValue={10}
                      defaultMaxValue={17}
                      type={'TIME'}
                    />
                  </View>
                )}
              </>
            )}
            {selectTabType == 'TYPE' && (
              <View
                style={{
                  height: moderateScale(200),
                  width: width - 32,
                  marginTop: 16,
                }}>
                <FlatList
                  data={typeData}
                  numColumns={5}
                  disableVirtualization={true}
                  contentContainerStyle={{paddingHorizontal: 16, marginTop: 16}}
                  columnWrapperStyle={{justifyContent: 'space-between'}}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          setactiveType(index);
                        }}
                        style={{
                          width: 60,
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginBottom: 34,
                        }}>
                        <Image
                          source={item?.image}
                          style={{
                            tintColor:
                              activeType == index
                                ? Colors.appColorPrimary
                                : Colors?.ABABAB,
                          }}
                        />
                        <Text
                          style={{
                            ...commonStyles.font11Regular,
                            marginTop: 8,
                            color:
                              activeType == index
                                ? Colors.appColorPrimary
                                : Colors?.ABABAB,
                          }}>
                          {item?.name}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            )}
            {selectTabType == 'LANG' && (
              <View style={{width: width - 48, marginTop: 24}}>
                {langData.map((res, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => setactiveLang(index)}
                      key={index}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 8,
                        paddingVertical: 4,
                        borderRadius: 50,
                        paddingHorizontal: 16,
                        backgroundColor:
                          activeLang == index ? '#FF840080' : null,
                      }}>
                      <Image source={res.image} />
                      <Text
                        style={{...commonStyles.font12Black, marginLeft: 16}}>
                        {res?.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
            {selectTabType == 'COUNT' && (
              <View style={{marginTop: 24}}>
                <RangeSliderComponent
                  minValueLable={'1 person'}
                  maxValueLable={'100+'}
                  minValue={1}
                  maxValue={100}
                  defaultMinValue={1}
                  defaultMaxValue={28}
                  type={'COUNT'}
                />
              </View>
            )}
            {selectTabType == 'GENDER' && (
              <View
                style={{
                  flexDirection: 'row',
                  width: width - 48,
                  justifyContent: 'space-between',
                  marginVertical: 16,
                  marginTop: 32,
                }}>
                {genderData?.map((res, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setactiveGender(index);
                      }}
                      key={index}
                      style={{
                        borderWidth: 1,
                        paddingHorizontal: 18,
                        paddingVertical: 4,
                        borderRadius: 15,
                        borderColor: Colors?.appColorPrimary,
                        backgroundColor:
                          activeGender == index ? Colors.appColorPrimary : null,
                      }}>
                      <Text
                        style={{
                          ...commonStyles.font12Black,
                          color:
                            activeGender == index
                              ? Colors.white
                              : Colors.greyText,
                        }}>
                        {res}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
            {selectTabType == 'AGE' && (
              <View style={{marginTop: 24}}>
                <RangeSliderComponent
                  minValueLable={'18'}
                  maxValueLable={'100'}
                  minValue={18}
                  maxValue={100}
                  defaultMinValue={18}
                  defaultMaxValue={28}
                  type={'AGE'}
                />
              </View>
            )}
          </View>
        </View>
      </View>
      <Modal
        isVisible={isPrefrencesVisible}
        animationIn={'slideInRight'}
        animationOut={'slideOutRight'}
        useNativeDriver={true}
        onBackdropPress={() => {
          setisVisible(false);
        }}
        style={{margin: 0}}>
        <WrapperContainer bgColor={Colors.white} statusBarColor={Colors.white}>
          <View
            style={{
              paddingHorizontal: 24,
              paddingTop: Platform.OS == 'android' ? 16 : 0,
              paddingBottom: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#fff',
            }}>
            <TouchableOpacity
              onPress={() => {
                setisPrefrencesVisible(false);
              }}>
              <Image source={ImagePath.backBtn} />
            </TouchableOpacity>
            <Text style={{...commonStyles.font16Black}}>Preferences</Text>
            <TouchableOpacity
              onPress={() => {
                setisPrefrencesVisible(false);
              }}>
              <Text
                style={{
                  ...commonStyles.font14Black,
                  color: Colors.appColorPrimary,
                }}>
                Done
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            contentContainerStyle={{
              backgroundColor: '#FBFBFB',
              flexGrow: 1,
              paddingHorizontal: 24,
              paddingBottom: 16,
            }}
            showsVerticalScrollIndicator={false}>
            <View style={{marginTop: 24}}>
              <Text style={{...commonStyles.font14Black}}>Location</Text>
              <View style={{paddingHorizontal: 16, marginTop: 16}}>
                <RangeSliderComponent
                  minValueLable={'0'}
                  maxValueLable={'100'}
                  minValue={0}
                  maxValue={100}
                  defaultMinValue={0}
                  defaultMaxValue={40}
                  type={'LOCATION'}
                />
              </View>
            </View>
            <View style={{marginTop: 16}}>
              <Text style={{...commonStyles.font14Black}}>Time</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 8,
                }}>
                <Text style={{...commonStyles.font11Regular}}>Start</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View
                    style={{
                      backgroundColor: '#EFF0F0',
                      paddingHorizontal: 12,
                      paddingVertical: 2,
                      borderRadius: 5,
                    }}>
                    <Text style={{...commonStyles.font11Regular}}>
                      Aug 2, 2022
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#EFF0F0',
                      paddingHorizontal: 12,
                      paddingVertical: 2,
                      borderRadius: 5,
                      marginLeft: 16,
                    }}>
                    <Text style={{...commonStyles.font11Regular}}>7:00 PM</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 8,
                }}>
                <Text style={{...commonStyles.font11Regular}}>End</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View
                    style={{
                      backgroundColor: '#EFF0F0',
                      paddingHorizontal: 12,
                      paddingVertical: 2,
                      borderRadius: 5,
                    }}>
                    <Text style={{...commonStyles.font11Regular}}>
                      Aug 2, 2022
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#EFF0F0',
                      paddingHorizontal: 12,
                      paddingVertical: 2,
                      borderRadius: 5,
                      marginLeft: 16,
                    }}>
                    <Text style={{...commonStyles.font11Regular}}>9:00 PM</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{marginTop: 24}}>
              <Text style={{...commonStyles.font14Black}}>Type</Text>
              <ScrollView
                horizontal
                contentContainerStyle={{marginTop: 16}}
                showsHorizontalScrollIndicator={false}>
                {typeData.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        marginRight: 16,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={item.image}
                        style={{width: 28, height: 28, resizeMode: 'contain'}}
                      />
                      <Text
                        style={{
                          ...commonStyles.font11Regular,
                          color:
                            index == 7
                              ? Colors.appColorPrimary
                              : Colors.greyText,
                        }}>
                        {item?.name}
                      </Text>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
            <View style={{marginTop: 24}}>
              <Text style={{...commonStyles.font14Black}}>Language</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 16,
                }}>
                <Text
                  style={{...commonStyles.font12Black, color: Colors.greyText}}>
                  English
                </Text>
                <Image source={ImagePath.right} />
              </View>
            </View>
            <View style={{marginTop: 24}}>
              <Text style={{...commonStyles.font14Black}}>
                Number of People
              </Text>
              <View style={{paddingHorizontal: 16, marginTop: 16}}>
                <RangeSliderComponent
                  minValueLable={'1 person'}
                  maxValueLable={'100+'}
                  minValue={1}
                  maxValue={100}
                  defaultMinValue={1}
                  defaultMaxValue={28}
                  type={'COUNT'}
                />
              </View>
            </View>
            <View style={{marginTop: 24}}>
              <Text style={{...commonStyles.font14Black}}>Gender </Text>
              <View
                style={{
                  marginTop: 16,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                {genderData?.map((res, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setactiveGender(index);
                      }}
                      key={index}
                      style={{
                        borderWidth: 1,
                        paddingHorizontal: 18,
                        paddingVertical: 4,
                        borderRadius: 15,
                        borderColor: Colors?.appColorPrimary,
                        backgroundColor:
                          activeGender == index ? Colors.appColorPrimary : null,
                      }}>
                      <Text
                        style={{
                          ...commonStyles.font12Black,
                          color:
                            activeGender == index
                              ? Colors.white
                              : Colors.greyText,
                        }}>
                        {res}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
            <View style={{marginTop: 24}}>
              <Text style={{...commonStyles.font14Black}}>Age</Text>
              <View style={{paddingHorizontal: 16, marginTop: 16}}>
                <RangeSliderComponent
                  minValueLable={'18'}
                  maxValueLable={'100'}
                  minValue={18}
                  maxValue={100}
                  defaultMinValue={18}
                  defaultMaxValue={28}
                  type={'AGE'}
                />
              </View>
            </View>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                paddingHorizontal: 16,
                paddingVertical: 8,
                marginTop: 24,
                backgroundColor: '#F2F2F2',
                borderRadius: 10,
                marginBottom: 16,
              }}>
              <Text
                style={{
                  ...commonStyles.font12BlackBold,
                  color: Colors?.greyText,
                }}>
                Deselect All
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </WrapperContainer>
      </Modal>
    </Modal>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  headerText: {
    ...commonStyles.font14Regular,
    color: Colors.appColorPrimary,
  },
});
