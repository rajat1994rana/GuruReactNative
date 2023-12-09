import { BlurView } from "@react-native-community/blur";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FastImage from "react-native-fast-image";
import Carousel from "react-native-snap-carousel";
import ImagePath from "../Constants/ImagePath";
import Colors from "../Styles/Colors";
import commonStyles from "../Styles/commonStyles";
import {
  height,
  moderateScale,
  moderateScaleVertical,
  width,
} from "../Styles/responsiveSize";

const CardsPost = ({ item, setisReportVisible }) => {
  const navigation = useNavigation();
  const [state, setState] = useState({
    isVidLoading: false,
  });
  const [isShowMore, setIsShowMore] = useState(false);
  const [activeDot, setactiveDot] = useState(0);
  return (
    <View style={styles.cardContainer}>
      <ScrollView
        contentContainerStyle={{}}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ height: 467 }}>
          <BlurView
            style={styles.absolute}
            blurType="dark"
            blurAmount={0}
            reducedTransparencyFallbackColor="white"
          >
            <View style={styles?.blurInsideView}>
              <Text style={styles.blurUserName}>{item?.userName}</Text>
              <Text style={styles.blurDesc}>{item?.userAbout}</Text>
              <View style={{ flexDirection: "row", marginTop: 8 }}>
                <Text style={styles.blurManualText}>Mutual Connections: </Text>
                <View style={{ flexDirection: "row" }}>
                  <FastImage
                    source={ImagePath.profileImg1}
                    style={{ ...styles.userImg }}
                  />
                  <FastImage
                    source={ImagePath.profileImg1}
                    style={[styles.userImg, styles.images]}
                  />
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              {item?.images?.map((res, ind) => {
                return (
                  <View
                    style={{
                      ...styles.dotsView,
                      backgroundColor: activeDot == ind ? "#fff" : "grey",
                    }}
                  ></View>
                );
              })}
            </View>
          </BlurView>
          <Carousel
            data={item?.images}
            autoplay
            loop
            onSnapToItem={(index) => {
              setactiveDot(index);
            }}
            renderItem={(data) => {
              return (
                <FastImage source={data?.item} style={styles.crauselImage} />
              );
            }}
            sliderWidth={width}
            itemWidth={width}
          />
        </View>

        <View
          style={{
            paddingHorizontal: moderateScaleVertical(35),
            paddingVertical: moderateScaleVertical(14),
          }}
        >
          <Text style={styles.abuteText}>About</Text>
          <Text
            numberOfLines={!isShowMore ? 3 : undefined}
            style={{ ...commonStyles.font12Regular, marginTop: 16 }}
          >
            A Multimedia Specialist with multiple years of experience through
            professional work, coursework, and local organizations. A Multimedia
            Specialist with multiple years of experience through professional
            work, coursework, and local organizations A Multimedia Specialist
            with multiple years of experience through professional work,
            coursework, and local organizations A Multimedia Specialist with
            multiple years of experience through professional work, coursework,
            and local organizations
          </Text>
          <Text
            onPress={() => {
              setIsShowMore(!isShowMore);
            }}
            style={{ color: "#FF8400" }}
          >
            {isShowMore ? "Show Less" : `Show More`}
          </Text>
        </View>
        <View style={styles.lineView} />
        <View style={styles.sectionView}>
          <Text style={{ ...commonStyles.font14BlackBold }}>Intention</Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              marginBottom: 16,
              marginTop: 12,
            }}
          >
            {["Hiring", "Happy to mentor others"]?.map((res, index) => {
              return (
                <View
                  key={index}
                  style={{
                    borderWidth: 1,
                    marginRight: 8,
                    borderColor: Colors?.borderColor6EA,
                    paddingHorizontal: 8,
                    paddingVertical: 2,
                    borderRadius: 5,
                    marginBottom: 8,
                  }}
                >
                  <Text
                    style={{
                      ...commonStyles.font11BlackBold,
                      color: "#7C7C7C",
                    }}
                  >
                    {res}
                  </Text>
                </View>
              );
            })}
          </View>
          <Text style={{ ...commonStyles.font14BlackBold }}>
            Interest Industries
          </Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              marginBottom: 16,
              marginTop: 12,
            }}
          >
            {[
              { name: "Venture Capital", image: ImagePath.venture },
              { name: "Consulting", image: ImagePath.consulting },
              { name: "University/ Student", image: ImagePath.university },
            ]?.map((res, index) => {
              return (
                <View
                  key={index}
                  style={{
                    borderWidth: 1,
                    marginRight: 8,
                    borderColor: Colors?.borderColor6EA,
                    paddingHorizontal: 8,
                    paddingVertical: 2,
                    borderRadius: 5,
                    marginBottom: 8,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <FastImage source={res?.image} />
                  <Text
                    style={{
                      ...commonStyles.font12Regular,
                      color: Colors?.black,
                      marginLeft: 6,
                    }}
                  >
                    {res?.name}
                  </Text>
                </View>
              );
            })}
          </View>
          <Text style={{ ...commonStyles.font14BlackBold }}>Expertise</Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              marginTop: 12,
            }}
          >
            {[
              { name: "Product", bg: "#C2D9F4", textColor: "#5A99E2" },
              { name: "Designg", bg: "#F7D5BD", textColor: "#656363" },
            ]?.map((res, index) => {
              return (
                <View
                  key={index}
                  style={{
                    borderWidth: 1,
                    marginRight: 8,
                    borderColor: res?.textColor,
                    paddingHorizontal: 12,
                    paddingVertical: 4,
                    borderRadius: 5,
                    marginBottom: 8,
                    flexDirection: "row",
                    backgroundColor: res?.bg,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      ...commonStyles.font12BlackBold,
                      color: res?.textColor,
                      marginLeft: 6,
                    }}
                  >
                    {res?.name}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.lineView} />
        <View
          style={{
            paddingHorizontal: 35,
            paddingVertical: 22,
            marginBottom: 16,
          }}
        >
          <Text style={{ ...commonStyles.font14BlackBold }}>Education</Text>
          <View style={{ flexDirection: "row", marginTop: 16 }}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#FDF9F0",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FastImage source={ImagePath?.education} />
            </View>
            <View style={{ marginLeft: 32 }}>
              <Text style={{ ...commonStyles.font14BlackBold }}>
                Bachelor of Arts
              </Text>
              <Text style={{ ...commonStyles?.font14Regular }}>
                Rollins College 2012 - 2016
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.lineView} />
        <View style={styles.sectionView}>
          <Text style={{ ...commonStyles.font14BlackBold }}>Intention</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollViewWrap}
          >
            {[
              { heading: "Pronoun", desc: "She/ her", image: ImagePath.sheHer },
              {
                heading: "Location",
                desc: "Irvine",
                image: ImagePath.building,
              },
              { heading: "Language", desc: " English", image: ImagePath.lang },
            ]?.map((res, index) => {
              return (
                <View key={index} style={styles.scrollWrapInnerView}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingHorizontal: 8,
                    }}
                  >
                    <FastImage
                      source={res?.image}
                      style={index == 1 ? { width: 28, height: 28 } : {}}
                    />
                    <View
                      style={{
                        marginLeft: 24,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          ...commonStyles.font14BlackMedium,
                        }}
                      >
                        {res?.heading}
                      </Text>
                      <Text
                        style={{
                          ...commonStyles.font14Regular,
                        }}
                      >
                        {res?.desc}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={{ height: 1, backgroundColor: "#DADADA" }} />

        <View style={styles.BottoBtns}>
          <TouchableOpacity
            onPress={() => setisReportVisible(true)}
            style={{
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <FastImage source={ImagePath.reportIconNew} />
            <Text>Report</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default CardsPost;

const styles = StyleSheet.create({
  absolute: {
    width: "100%",
    flex: 1,
    paddingVertical: 8,
    zIndex: 10000,
    position: "absolute",
    bottom: 0,
  },
  cardContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.greyButtons,
    height: height,
  },
  images: {
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    height: moderateScale(280),
    width: "100%",
    resizeMode: "cover",
  },
  userImg: {
    width: moderateScale(25),
    height: moderateScale(25),
    borderRadius: moderateScale(50),
  },
  BottoBtns: {
    paddingHorizontal: moderateScaleVertical(16),
    borderTopColor: Colors.borderColor1,
    paddingVertical: 16,
    marginBottom: 300,
    alignItems: "center",
  },
  userImg: {
    width: moderateScale(25),
    height: moderateScale(25),
    borderRadius: moderateScale(50),
  },
  blurInsideView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  blurUserName: {
    ...commonStyles?.font24BlackBold,
    color: Colors?.white,
  },
  blurDesc: { ...commonStyles.font14Black, color: Colors?.white },
  blurManualText: { ...commonStyles.font12White, color: Colors?.white },
  images: {
    borderWidth: 1,
    borderColor: "#fff",
    marginLeft: -12,
    width: moderateScale(23),
    height: moderateScale(23),
  },
  dotsView: {
    width: 8,
    height: 8,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  crauselImage: { height: moderateScale(467), width: "100%" },
  abuteText: { ...commonStyles?.font14Regular, color: "#7C7C7C" },
  lineView: { height: 11, backgroundColor: "#DADADA" },
  sectionView: { paddingHorizontal: 35, paddingVertical: 22 },
  scrollViewWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
    marginTop: 12,
  },
  scrollWrapInnerView: {
    borderWidth: 1,
    marginRight: 16,
    borderColor: Colors?.borderColor6EA,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 5,
    marginBottom: 8,
  },
});
