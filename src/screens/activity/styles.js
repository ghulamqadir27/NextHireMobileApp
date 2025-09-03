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
  img:{
    width:mvs(320),
    height: mvs(320),
    marginTop: mvs(45),
    alignSelf:'center'
  },
  containerStyle:{
    width:'60%',
    alignSelf:'center',
    marginTop:mvs(35),
    height:mvs(50)

  }

  


});
export default styles;
