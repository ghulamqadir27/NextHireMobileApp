import {Platform, StyleSheet} from 'react-native';
import {colors} from 'config/colors';
import {mvs, width} from 'config/metrices';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: mvs(20),
  },
  messageText: {
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    marginHorizontal: mvs(20),
    width:'100%',
    flex:1,
  },
messageBubble: {
  flex:1,
  maxWidth: '80%',
  padding: mvs(12),
  borderRadius: mvs(12),
  marginBottom: mvs(8),
 maxWidth: '70%',
    minWidth: '25%',
  overflow: 'hidden', // Hide overflow if content exceeds maxHeight (optional)
},
userBubble: {
  alignSelf: 'flex-end',
  backgroundColor: colors.primary,
  borderBottomRightRadius: mvs(0),
},
botBubble: {
  alignSelf: 'flex-start',
  backgroundColor: 'red',
  borderBottomLeftRadius: mvs(0),
},
  messageText: {
    color: colors.white,
  },
  botMessageText: {
    color: colors.black,
  },
   userMessageText: {
    color: colors.white,
  }
});
export default styles;
