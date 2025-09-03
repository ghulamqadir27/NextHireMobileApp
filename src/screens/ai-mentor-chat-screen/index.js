import * as IMG from 'assets/images';
import {mvs} from 'config/metrices';
import {useAppDispatch} from 'hooks/use-store';
import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  I18nManager,
  FlatList,
  Platform,
} from 'react-native';
import {MessageInput} from 'components/atoms/inputs';
import Bold from 'typography/bold-text';
import styles from './styles';
import {colors} from 'config/colors';
import {Row} from 'components/atoms/row';
import {onLogin} from 'services/api/auth-api-actions';
import Icon from 'react-native-vector-icons/AntDesign';
import AiMentorChatCard from 'components/molecules/ai-mentor-chat-card';
import { useNavigation } from '@react-navigation/native';
import Regular from 'typography/regular-text';

const AiMentorScreen = props => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const handleFormSubmit = async values => {
    try {
      try {
        setLoading(true);
        fcmToken = await messaging().getToken();
      } catch (error) {
        console.log('fcm token error', error);
      }
      const res = await dispatch(
        onLogin(
          {...values, fcm_token: fcmToken, online_status: '0'},
          setLoading,
          setOtpModalVisible,
          setEmail(values.email),
        ),
      );
      console.log('ressss', res);
    } catch (error) {
      console.log('error=>', error);
      setLoading(false);
    }
  };
  
  const [messages, setMessages] = useState([
    {id: '1', text: 'Hello!', sender: 'bot'},
    {id: '2', text: 'Hi, how are you?', sender: 'user'},
    {id: '3', text: "I'm doing well, thanks for asking!", sender: 'bot'},
    {id: '4', text: 'Hi, how are you?', sender: 'user'},
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim().length > 0) {
      const newUserMessage = {
        id: Math.random().toString(),
        text: inputText,
        sender: 'user',
      };
      
      // Add user message
      setMessages(prevMessages => [...prevMessages, newUserMessage]);
      setInputText('');

      // Immediately add bot response
      const botResponse = {
        id: Math.random().toString(),
        text: "Thanks for your message! I'm thinking...",
        sender: 'bot',
      };
      
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, botResponse]);
      }, 500);
    }
  };

  const featuredProduct = ({item}) => (
    <AiMentorChatCard item={{...item}} />
  );
  
  return (
    <View style={styles.container}>
      <Row style={{marginTop: mvs(15)}}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Icon
            name={I18nManager.isRTL ? 'arrowright' : 'arrowleft'}
            size={mvs(20)}
            color={colors.black}
          />
        </TouchableOpacity>
        <Bold label={'AI Mentor'} fontSize={18} color={colors.black} />
        
        <TouchableOpacity>
          <Image source={IMG.message2} style={styles.imglogo} />
        </TouchableOpacity>
      </Row>
      
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={[
              styles.messageBubble,
              item.sender === 'user' ? styles.userBubble : styles.botBubble,
            ]}>
            <Regular style={styles.messageText} label={item.text} />
          </View>
        )}
        contentContainerStyle={{padding: mvs(20),flexGrow: 1}}
        style={{marginBottom: mvs(50)}}
        inverted={false} 
      />
      
      <Row
        style={[styles.inputContainer,{
          alignItems: 'center',
          paddingBottom: Platform.OS === 'ios' ? mvs(50) : mvs(10),
          backgroundColor: colors.white,
        }]}>
        <MessageInput 
          value={inputText} 
          onChangeText={setInputText} 
          sendMessage={sendMessage} 
        />
      </Row>
    </View>
  );
};

export default AiMentorScreen;