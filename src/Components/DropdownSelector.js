import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import commonStyles from "../Styles/commonStyles";
import colors from "../Styles/Colors";
import { moderateScaleVertical } from "../Styles/responsiveSize";
import ImagePath from "../Constants/ImagePath";

export default function DropdownSelector({
  data,
  selectedValue = "",
  getSelectValue = () => {},
  isSearch = false,
  lable,
  customButtonStyle = {},
}) {
  return (
    <View>
      <SelectDropdown
        data={data}
        dropdownOverlayColor={"rgba(0,0,0,0.1)"}
        selectedRowStyle={{ backgroundColor: colors.borderColor }}
        dropdownStyle={{ ...styles.dropDownStyle }}
        buttonStyle={{ ...styles.buttonStyle, ...customButtonStyle }}
        renderCustomizedRowChild={(itm) => (
          <View style={{ paddingLeft: moderateScaleVertical(16) }}>
            <Text
              numberOfLines={2}
              style={{ ...commonStyles.font14BlackMedium }}
            >
              {!!itm?.name ? itm.name : itm}
            </Text>
          </View>
        )}
        renderDropdownIcon={() => (
          <Image source={ImagePath.dropDown} style={{ marginRight: 5 }} />
        )}
        renderCustomizedButtonChild={(item) => (
          <View
            style={{
              paddingLeft: moderateScaleVertical(8),
              borderRadius: 8,
            }}
          >
            <Text
              numberOfLines={1}
              style={{ ...commonStyles.font12Regular }}
            >
              {!!selectedValue ? selectedValue : ""}
            </Text>
          </View>
        )}
        onSelect={(selectedItem, index) => {
          getSelectValue(selectedItem);
          console.log(selectedItem);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return !!selectedItem?.name ? selectedItem?.name : selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return !!item?.name ? item.name : item;
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 5,
    width: 150,
    marginTop: 8,
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
    borderColor: "#E6E6E8",
    height: 45,
  },
  lableStyle: {
    ...commonStyles.fontMediumManrope15,
    color: colors.greyText,
    marginBottom: 16,
  },
  dropDownStyle: {
    borderRadius: 8,
    // marginTop: -moderateScaleVertical(36),
    backgroundColor: colors.white,
  },
});
