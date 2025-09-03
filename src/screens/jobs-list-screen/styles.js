import {Platform, StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs, width} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: mvs(20),
  },
  imglogo: {
    width: mvs(25),
    height: mvs(25),
  },
  img: {
    width: mvs('100%'),
    height: mvs(300),
    marginTop: mvs(-20),
  },
  containerStyle: {
    width: '50%',
    alignSelf: 'center',
    marginTop: mvs(35),
    height: mvs(50),
    justifyContent: 'flex-start',
    gap: mvs(20),
  },
  containerStyle2: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    height: mvs(50),
    alignSelf: 'center',
    marginTop: mvs(35),
  },
  categoryButton: {
    width: '50%',
    borderRadius: mvs(10),
  },
  searchContainer: {
    marginTop: mvs(25),
    borderWidth: 1,
    borderColor: colors.primary,
  },
});
export default styles;
