import {Platform, StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs, width} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,  
    paddingHorizontal: mvs(20),  
  },
img:{
  width:mvs(25),
  height:mvs(25),
},
searchInputContainer:{
  marginTop: mvs(20),
  borderWidth: 1,
  borderColor: colors.primary,
}
  
});
export default styles;
