import {Platform, StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs, width} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,  
    paddingHorizontal: mvs(20),  
  },
  input:{
    borderRadius: mvs(6),
    borderColor: colors.black,
    height: mvs(50),
    alignItems: 'center',
  },
  img: {
      height: mvs(100),
      width: mvs(100),
      borderRadius: mvs(50),
      borderWidth: mvs(3),
      backgroundColor: colors.transparent,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: mvs(15),
    },
    imgUpload: {
      height: mvs(100),
      width: mvs(100),
      borderRadius: mvs(50),
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    editimg:{
      height: mvs(30),
      width: mvs(30),
    }
});
export default styles;
