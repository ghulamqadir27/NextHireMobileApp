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
  usermessage:{
    width: mvs(26),
    height: mvs(26),
  },
  img:{
    width:mvs(300),
    height: mvs(300),
    marginTop: mvs(45),
  },
  containerStyle:{
    width:'50%',
    alignSelf:'center',
    marginTop:mvs(35),
    height:mvs(50),
    justifyContent:'flex-start',
    gap:mvs(20),
    justifyContent:'center'

  }

  


});
export default styles;
