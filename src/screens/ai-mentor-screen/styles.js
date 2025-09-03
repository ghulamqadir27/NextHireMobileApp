import {Platform, StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs, width} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,  
    paddingHorizontal: mvs(20),  
  },
  imglogo:{
    width: mvs(25),
    height: mvs(25),
  },

});
export default styles;
