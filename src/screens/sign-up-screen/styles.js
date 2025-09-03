import {Platform, StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs, width} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,    
  },
  imglogo:{
    width: mvs(100),
    height: mvs(100),
    alignSelf: 'center',
    marginTop: mvs(25),
  },
  waveimg:{
    width: mvs(30),
    height: mvs(30),
  },
  titleview:{
    width: '70%',
    justifyContent:'flex-start',
    marginTop: mvs(20),
    gap: mvs(10),
    paddingHorizontal: mvs(20),
    alignSelf:'center',
  },
  contentContainerStyle: {
    marginTop: mvs(10),
  },
  contentContainerStyleNew: {
    flexGrow: 1,
    backgroundColor: colors.white,
    paddingHorizontal: mvs(20),
    paddingVertical: mvs(10),
    backgroundColor: colors.white,
    justifyContent: 'center', 
    borderRadius: mvs(6),
  },
  input:{
    borderRadius: mvs(10),
    borderColor: colors.bluecolor,
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
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
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
  loginview:{
    justifyContent: 'center',
    alignItems: 'center',
    gap: mvs(10),
    marginTop: mvs(20),
  }
});
export default styles;
