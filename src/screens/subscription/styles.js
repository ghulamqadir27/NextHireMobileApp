import {Platform, StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs, width} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: mvs(20),
  },
  topcontainer: {
    marginVertical: mvs(25),
    backgroundColor: colors.primary,
    padding: mvs(20),
    borderRadius: mvs(10),
  },
  detailcontainer: {
    marginVertical: mvs(20),
    borderWidth: mvs(1),
    borderColor: colors.primary,
    borderRadius: mvs(10),
    padding: mvs(20),
  },
  imglogo: {
    width: mvs(25),
    height: mvs(25),
  },
  img: {
    width: mvs(36),
    height: mvs(36),
  },
  circledtickimg: {
    width: mvs(20),
    height: mvs(20),
  },
  containerStyle: {
    width: '100%',
    alignSelf: 'center',
    marginTop: mvs(45),
    height: mvs(50),
  },
  containerStyle2: {
    width: '100%',
    alignSelf: 'center',
    marginTop: mvs(15),
    height: mvs(50),
    borderColor: colors.primary,
    backgroundColor: colors.white,
    borderWidth: mvs(1),
  },
  subscriptionlist: {
    justifyContent: 'flex-start',
    gap: mvs(15),
    marginTop: mvs(5),
  },
});
export default styles;
