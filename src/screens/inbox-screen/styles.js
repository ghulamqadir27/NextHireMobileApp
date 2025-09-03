import {Platform, StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: mvs(0),
    paddingBottom: mvs(150),
  },
  imageContainer: {
    height: mvs(60),
    borderColor: colors.primary,
    borderWidth: 1,
    width: mvs(60),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: mvs(10),
    marginLeft: mvs(20),
  },
  backGroundImage: {
    width: mvs(55),
    height: mvs(55),
    resizeMode: 'cover',
    // marginTop: mvs(10),
  },
  sendIcon: {
    width: mvs(50),
    height: mvs(52),
    backgroundColor: colors.primary,
    borderRadius: mvs(10),
    marginLeft: mvs(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  // backGroundImage: {
  //   width: mvs(20),
  //   height: mvs(18),
  //   borderWidth: 1,
  //   // marginTop: mvs(10),
  // },
});
export default styles;
