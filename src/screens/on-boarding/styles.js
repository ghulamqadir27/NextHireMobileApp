import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white, padding: mvs(20)},
  dot: {
    width: mvs(12),
    height: mvs(12),
    borderRadius: 6,
    marginHorizontal: mvs(3),
    marginBottom: mvs(30),
  },
  button: {
    backgroundColor: colors.white,
    borderRadius: mvs(6),
    height: mvs(50),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: mvs(15),
  },

  paginationContainer: {
    position: 'absolute',
    bottom: mvs(16), // Adjust the bottom value to position the pagination container as desired
    alignSelf: 'center',
    // Add any other styles for the pagination container
  },
  paginationDot: {
    width: mvs(8),
    height: mvs(8),
    borderRadius: mvs(4),
    marginHorizontal: mvs(6),
    // Add any other styles for the pagination dot
  },
 
});
export default styles;
