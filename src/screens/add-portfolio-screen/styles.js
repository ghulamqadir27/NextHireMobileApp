import {Platform, StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs, width} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: mvs(20),
  },

  imglogo: {
    width: mvs(25),
    height: mvs(25),
  },

  contentContainerStyle: {
    marginTop: mvs(30),
  },

  contentContainerStyleNew: {
    flexGrow: 1,
    backgroundColor: colors.white,
    paddingVertical: mvs(10),
    backgroundColor: colors.white,
    justifyContent: 'center',
    borderRadius: mvs(6),
  },
  input: {
    borderWidth: mvs(1),
    borderRadius: mvs(10),
    borderColor: colors.primary,
    height: mvs(50),
    alignItems: 'center',
  },
  txt: {marginBottom: mvs(10), fontSize: mvs(20)},
  keyboradscrollcontent: {
    paddingHorizontal: mvs(0),
    flexGrow: 0,
    paddingBottom: mvs(150),
  },
  savebutton: {
    borderRadius: mvs(10),
    height: mvs(50),
    marginTop: mvs(25),
  },
  cancelButton: {
    borderRadius: mvs(10),
    height: mvs(50),
    marginTop: mvs(25),
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderWidth: mvs(1),
  },
  countContainer: {
    alignSelf: 'flex-end',
    marginBottom: mvs(10),
    marginTop: mvs(-13),
  },
});
export default styles;
