import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Colors from '../Styles/Colors';
import Modal from 'react-native-modal';
import ImagePath from '../Constants/ImagePath';
import commonStyles from '../Styles/commonStyles';

export default function CommonModal({
  isVisible,
  onClose = () => {},
  value,
  contentType,
}) {
  const [genderData, setgenderData] = useState(['Male', 'Female', 'Any']);
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
  const [activeGender, setactiveGender] = useState(2);
  const [peopleNum, setpeopleNum] = useState(value);
  const [activeLang, setactiveLang] = useState(1);
  useEffect(() => {
    setpeopleNum(value);
  }, [value]);

  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={() => {
        onClose(contentType == 3 ? genderData[activeGender] :contentType==4?langData[activeLang]: peopleNum);
      }}
      onBackdropPress={() => {
        onClose(contentType == 3 ? genderData[activeGender] :contentType==4?langData[activeLang]: peopleNum);
      }}
      animationIn={'zoomIn'}
      animationOut={'zoomOut'}
      useNativeDriver={true}>
      <View style={styles.mainView}>
        {(contentType == 1 || contentType == 2) && (
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              paddingHorizontal: 24,
            }}>
            <TouchableOpacity
              style={{}}
              onPress={() => setpeopleNum(peopleNum > 0 ? peopleNum - 1 : 0)}>
              <Image source={ImagePath.subIcon} />
            </TouchableOpacity>
            <Text
              style={{
                ...commonStyles.font22BlackBold,
                color: Colors.appColorPrimary,
              }}>
              {peopleNum}
            </Text>
            <TouchableOpacity onPress={() => setpeopleNum(peopleNum + 1)}>
              <Image source={ImagePath.addIcon} />
            </TouchableOpacity>
          </View>
        )}
        {contentType == 3 && (
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
                        activeGender == index ? Colors.white : Colors.greyText,
                    }}>
                    {res}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
            {contentType==4 && <View>
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
}
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  mainView: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 44,
  },
});
