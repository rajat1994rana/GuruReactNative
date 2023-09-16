import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  width,
} from '../../Styles/responsiveSize';
import Colors from '../../Styles/Colors';
import commonStyles from '../../Styles/commonStyles';

const styles = StyleSheet.create({
  bgImage: {
    borderBottomRightRadius: moderateScaleVertical(24),
    borderBottomLeftRadius: moderateScaleVertical(24),
  },
  bgWrapper: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingBottom: moderateScaleVertical(24),
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScaleVertical(16),
    marginTop:42
  },
  headerIcon: {
    width: moderateScale(22),
    height: moderateScale(22),
    marginRight: 8,
  },
  userImageCont: {
    width: 68,
    height: 68,
    borderRadius: 50,
    backgroundColor: Colors.white,
    alignSelf: 'center',
    marginTop: 68,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImage: {width: 62, height: 62, borderRadius: 50},
  followText: {
    ...commonStyles.font13Regular,
    color: Colors.greyText,
  },
  capsuleView: {
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 12,
    marginRight: 8,
    borderColor: Colors.lightBlue0FF,
    paddingVertical: 2,
  },
  desc: {
    ...commonStyles.font11Grey,
    color: Colors.white,
    textAlign: 'center',
    marginHorizontal: 16,
    marginTop: 16,
  },
  followingBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.appColorPrimary,
    padding: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  followTick: {width: 19, height: 19, marginLeft: 4},
  messageBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    padding: 4,
    paddingHorizontal: 18,
    marginLeft: 16,
    borderRadius: 8,
  },
  followingText: {
    ...commonStyles.font13Regular,
    color: Colors.white,
  },
  messageText: {
    ...commonStyles.font13GreenMedium,
    color: Colors.greyText,
    textAlign: 'center',
  },
  editBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    padding: 4,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  editText: {
    ...commonStyles.font13GreenMedium,
    color: Colors.greyText,
    textAlign: 'center',
  },
  listTopBtnView: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  deshStyle: {
    width: 16,
    height: 4,
    borderRadius: 2,

    marginTop: 4,
  },
  tagText: {
    ...commonStyles.font13Regular,
    color: Colors.black,
  },
  cardMainView:{
    height: 290,
    borderWidth: 1,
    width: (width - 48) / 2,
    marginBottom: 16,
    borderColor: Colors.borderColor,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardImage:{
    backgroundColor: Colors.greyButtons,
    height: 200,
  },
  cardTag:{
    marginTop: 8,
    alignSelf: 'flex-end',
    marginRight: 8,
  },
  cardDesc:{
    ...commonStyles.font11BlackBold,
    marginTop: 12,
  },
  cardBottomView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardUserImage:{width: 24, borderRadius: 50, height: 24},
  cardUserName:{
    ...commonStyles.font11BlackBold,
    textTransform: 'capitalize',
    color: Colors?.gray7C,
    marginLeft: 4,
  }
});

export default styles;
