import {Platform, StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs, width} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    // paddingHorizontal: mvs(20),
  },
  row: {
    marginTop: mvs(15),
    paddingHorizontal: mvs(20),
    height: mvs(70),
    paddingTop: mvs(10),
  },
  imglogo: {
    width: mvs(25),
    height: mvs(25),
  },
  img: {
    width: mvs(26),
    height: mvs(26),
  },
  trashimg: {
    width: mvs(23),
    height: mvs(23),
  },
  circledtickimg: {
    width: mvs(20),
    height: mvs(20),
  },
  notiimg: {
    width: mvs(130),
    height: mvs(130),
    position:'absolute',
    top:mvs(-50),
    alignSelf:'center'
  },
  rowimg: {
    width: mvs(30),
    height: mvs(30),
  
  },
  keywordrow: {
    justifyContent: 'flex-start',
    gap: mvs(7),
    borderWidth: mvs(1),
    borderColor: colors.primary,
    borderRadius: mvs(5),
    width: mvs(110),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: mvs(15),
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: mvs(20),
    borderTopLeftRadius: mvs(25),
    borderTopRightRadius: mvs(25),
    padding: mvs(20),
  },
  title:{alignSelf: 'center', marginTop: mvs(60),borderBottomWidth:mvs(1),borderBottomColor:colors.primary},
  keywordrow:{
    marginTop: mvs(15),
    justifyContent: 'flex-start',
    gap: mvs(10),
    alignItems: 'center',
    width: '49%',
  },
  keywordContainer: {
    justifyContent: 'flex-start',
    gap: mvs(9),
    flexWrap: 'wrap',
    marginTop: mvs(15),
  }
});
export default styles;
