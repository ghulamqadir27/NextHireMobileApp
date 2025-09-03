import React from 'react';
import {
  Alert,
  I18nManager,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomFlatList from 'components/atoms/custom-flatlist';

import i18n from 'translation';
import styles from './styles';
import * as IMG from 'assets/images';
import {Row} from 'components/atoms/row';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from 'config/colors';
import {ford, forklift} from 'assets/images';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import {MessageInput} from 'components/atoms/inputs';
import Feather from 'react-native-vector-icons/Feather';

import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {goBack} from 'navigation/navigation-ref';
import Medium from 'typography/medium-text';
import InboxChatCard from 'components/molecules/inbox-chat-card';
import {getChatMessages, onSendMessage} from 'services/api/chat-api-actions';
import {UTILS} from 'utils';
import {Loader} from 'components/atoms/loader';
import {useIsFocused} from '@react-navigation/native';
import {getOrderListList} from 'services/api/auth-api-actions';
const InboxScreen = props => {
  const {info, id, title, email, image} = props?.route?.params || {};
  // const {id} = props?.route?.params || {};
  console.log('info', id, info, title, email, image);
  const dispatch = useAppDispatch();
  const user = useAppSelector(s => s?.user);
  const userInfo = user?.userInfo;
  const {t} = i18n;
  const [messages, setMessages] = React.useState([]);
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const [orderData, setOrderData] = React.useState([]);
  const isFocus = useIsFocused();

  // React.useEffect(() => {
  //   if (isFocus) {
  //     getList();
  //   }
  // }, [isFocus]);
  // const featuredCategories = [
  //   {
  //     id: 1,
  //   },
  //   {
  //     id: 2,
  //     me: true,
  //   },
  //   {
  //     id: 3,
  //   },
  //   {
  //     id: 3,
  //     me: true,
  //   },
  //   {
  //     id: 3,
  //     me: false,
  //   },
  //   {
  //     id: 3,
  //     me: true,
  //   },
  //   {
  //     id: 3,
  //     me: false,
  //   },
  // ];
  const getMessages = async () => {
    try {
      const res = await getChatMessages(info?.id || id);
      setMessages(res?.data || []);
      setLoading(false);
    } catch (error) {
      console.log('error', error);
      Alert.alert('Error', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
  const getList = async () => {
    try {
      // Set refreshing to true when the fetch starts
      setLoading(true);
      const res = await getOrderListList();
      setOrderData(res?.data);
      console.log('object', res?.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      getMessages();
      // getList();
    }, 15000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, []);

  const sendMessage = async () => {
    try {
      if (!message?.trim()) return;
      await onSendMessage({
        conversation_id: info?.id || id,
        message: message,
      });
      await getMessages();
      setMessage('');
      // setMessages(res?.data || []);
    } catch (error) {
      console.log('error', error);
      Alert.alert('Error', UTILS.returnError(error));
    } finally {
      setLoading(false);
    }
  };
  const featuredProduct = ({item}) => (
    <InboxChatCard item={{...item, me: userInfo?.id === item?.user_id}} />
  );
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined} // Adjust behavior for iOS
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0} // Optionally adjust vertical offset for iOS
    >
      <View style={styles.container}>
        <View
          style={{
            paddingHorizontal: mvs(20),
            paddingVertical: mvs(15),
          }}>
          <Row
            style={{
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => goBack()}>
              <FontAwesome5
                name={I18nManager.isRTL ? 'arrow-right' : 'arrow-left'}
                size={mvs(20)}
                color={colors.primary}
              />
            </TouchableOpacity>
            <View style={styles.imageContainer}>
              <Image
                borderRadius={mvs(10)}
                source={
                  info?.receiver_image
                    ? {uri: info.receiver_image}
                    : image
                    ? {uri: image}
                    : IMG.Drawerman
                }
                // source={IMG.messagelogo}
                style={styles.backGroundImage}
              />
            </View>
            <View style={{paddingHorizontal: mvs(10), flex: 1}}>
              <Bold label={info?.receiver_name || title} />
              <Regular
                numberOfLines={1}
                label={info?.receiver_email || email}
                color={colors.black}
              />
            </View>
          </Row>
        </View>
        {loading ? (
          <Loader />
        ) : (
          <CustomFlatList
            inverted
            showsVerticalScrollIndicator={false}
            data={messages || []}
            renderItem={featuredProduct}
            contentContainerStyle={{
              paddingBottom: mvs(20),
              paddingHorizontal: mvs(20),
            }}
          />
        )}

        <Row
          style={{
            marginHorizontal: mvs(20),
            alignItems: 'center',
            paddingBottom: Platform.OS === 'ios' ? mvs(50) : mvs(10),
          }}>
          <MessageInput value={message} onChangeText={setMessage} />
          <TouchableOpacity style={styles.sendIcon} onPress={sendMessage}>
            <Feather name={'send'} size={25} color={colors.white} />
          </TouchableOpacity>
        </Row>
      </View>
    </KeyboardAvoidingView>
  );
};
export default InboxScreen;
