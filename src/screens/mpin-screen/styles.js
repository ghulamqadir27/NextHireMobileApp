import {Platform, StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs, width} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: mvs(20),
  },
  pinIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: mvs(60),
    marginBottom: mvs(100),
  },
  dot: {
    width: mvs(15),
    height: mvs(15),
    borderRadius: mvs(6),
    backgroundColor: colors.light,
    marginHorizontal: mvs(5),
  },
  filledDot:{
    backgroundColor: colors.primary,
  },
  keypad: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: mvs(60),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: mvs(10),
  },
  key: {
    width: mvs(75),
    height: mvs(45),
    borderRadius: mvs(20),
    justifyContent: 'center',
    alignItems: 'center',
  },

  dashKey: {
    backgroundColor: colors.gray, // Light gray for dash
  },
  spaceKey: {
    backgroundColor: colors.orange, // Red for space
  },
  spaceKeyText: {
    color: colors.black, // White text for space
  },
  dashKeyText: {
    color: colors.black, // White text for space
  },
  enterKey: {
    backgroundColor: colors.primary, // Blue for enter
  },
  enterKeyText: {
    color: colors.white, // White text for enter
  },
  mpinButton: {
    marginTop: mvs(20),
    width: '80%',
    height: mvs(50),
    borderRadius: mvs(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonActive: {
    backgroundColor: colors.primary,
    marginTop: mvs(100),
    width:'100%',
    height: mvs(50),
  },
  buttonInactive: {
    backgroundColor: colors.light,
    width:'100%',
    marginTop: mvs(100),
    height: mvs(50),

  },
  buttonText: {
    fontSize: 18,  },
});
export default styles;
