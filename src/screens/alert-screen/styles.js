import {Platform, StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs, width} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // paddingHorizontal: mvs(20),
  },
  row: {
    marginTop: mvs(10),
    paddingHorizontal: mvs(20),
    // height: mvs(70),
    paddingTop: mvs(10),
  },
  imglogo: {
    width: mvs(25),
    height: mvs(25),
  },
  img: {
    width: mvs(24),
    height: mvs(24),
  },
  paramcontainer: {
    marginTop: mvs(15),
    paddingHorizontal: mvs(20),
  },
  keywordrow: {
    justifyContent: 'flex-start',
    gap: mvs(7),
    borderWidth: mvs(1),
    borderColor: colors.primary,
    borderRadius: mvs(5),
    minWidth: mvs(50),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: mvs(15),
    paddingVertical: mvs(5),
    paddingHorizontal: mvs(10),
  },
  servicecardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: mvs(10),
  },
  keywordsContainer: {
    justifyContent: 'flex-start',
    gap: mvs(20),
    flexWrap: 'wrap',
    backgroundColor: colors.blurred,
    borderRadius: mvs(10),
  },
});
export default styles;
