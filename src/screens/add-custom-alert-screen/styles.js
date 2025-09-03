import {Platform, StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs, width} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: mvs(20),
  },
  row: {
    justifyContent: 'flex-start',
    gap: mvs(7),
    borderWidth: mvs(1),
    borderColor: colors.primary,
    borderRadius: mvs(5),
    width: mvs(110),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imglogo: {
    width: mvs(22),
    height: mvs(22),
  },
  imglogo2: {
    width: mvs(18),
    height: mvs(18),
  },
  waveimg: {
    width: mvs(30),
    height: mvs(30),
  },
  titleview: {
    width: '70%',
    justifyContent: 'flex-start',
    marginTop: mvs(20),
    gap: mvs(10),
    paddingHorizontal: mvs(20),
    alignSelf: 'center',
  },
  contentContainerStyle: {
    // flexGrow: 1,
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
  button: {
    width: '100%',
    paddingHorizontal: mvs(20),
    position: 'absolute',
    bottom: 0,
    paddingBottom: mvs(Platform?.OS === 'android' ? 20 : 40),
  },
  googlebutton: {
    width: '48%',
    height: mvs(50),
    backgroundColor: colors.white,
    borderRadius: mvs(10),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 1,
  },
  imagebackground: {
    height: mvs(400),
    width: width,
    position: 'absolute',
  },
  loginlogoview: {
    alignSelf: 'center',
    marginTop: mvs(20),
  },
  lottieview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboradscrollcontent: {
    paddingHorizontal: mvs(0),
    flexGrow: 0,
    paddingBottom: mvs(150),
  },
  loginmoverstext: {
    marginTop: mvs(10),
    marginBottom: mvs(20),
  },
  forgotpasswordview: {
    alignSelf: 'flex-end',
    marginBottom: mvs(15),
  },
  createaccountview: {
    alignSelf: 'center',
    marginTop: mvs(25),
  },
  signupbuttoncontainer: {
    backgroundColor: colors.bluecolor,
    marginTop: mvs(20),
    borderRadius: mvs(10),
  },
  googlefacebookview: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: mvs(10),
  },
  loginview: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: mvs(10),
    marginVertical: mvs(60),
  },
  cancelButton: {
    borderRadius: mvs(10),
    height: mvs(50),
    marginTop: mvs(25),
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderWidth: mvs(1),
  },
  inputContainer:{
    backgroundColor: colors.white,
    borderColor: colors.border,
    marginBottom: mvs(0),
  },
  savebutton:{
    borderRadius: mvs(10),
    height: mvs(50),
    marginTop: mvs(25),
  },
  keywordsContainerStyle:{
    justifyContent: 'flex-start',
    gap: mvs(8),
    flexWrap: 'wrap',
  }
});
export default styles;
