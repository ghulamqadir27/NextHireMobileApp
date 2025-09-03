import {mvs} from 'config/metrices';
import {StyleSheet} from 'react-native';
import {colors} from 'config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  body: {
    flex: 1,
  },
  profilepics: {
    width: mvs(60),
    height: mvs(60),
    borderRadius: mvs(25),
  },
  giftpic: {
    width: mvs(60),
    height: mvs(60),
  },
  wave: {
    width: mvs(20),
    height: mvs(20),
  },
  messageicon: {
    width: mvs(25),
    height: mvs(25),
  },
  giftcard: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    marginVertical: mvs(20),
    borderRadius: mvs(10),
    padding: mvs(10),
  },
  next: {
    width: mvs(30),
    height: mvs(30),
  },
  containerStyle: {
    backgroundColor: colors.transparent,
    paddingHorizontal: mvs(0),
    justifyContent: 'flex-start',
    height: mvs(25),
  },
  wealth: {
    width: mvs(70),
    height: mvs(70),
  },
  wealthcard: {
    gap: mvs(5),
    alignItems: 'center',
    backgroundColor: colors.lightGreen,
    padding: mvs(10),
    borderRadius: mvs(10),
  },
  slide: {
    borderRadius: mvs(10),
    overflow: 'hidden',
    // elevation: 3,
  },
  image: {
    width: '100%',
    height: mvs(200),
    borderRadius: mvs(10),
  },
  serviceCardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: mvs(20),
    marginBottom: mvs(30),
  },
});
export default styles;
