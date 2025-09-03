import messaging from '@react-native-firebase/messaging';
import * as IMG from 'assets/images';
import {auth_bg} from 'assets/images';
import {IconButton, PrimaryButton} from 'components/atoms/buttons';
import OtpModal from 'components/molecules/modals/otp-modal';
import {height, mvs, width} from 'config/metrices';
import {Formik, useFormik} from 'formik';
import {useAppDispatch} from 'hooks/use-store';
import {navigate, resetStack} from 'navigation/navigation-ref';
import React from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  ScrollView,
  I18nManager,
} from 'react-native';
import LottieView from 'lottie-react-native';
import PrimaryInput, { MessageInput, SearchInput } from 'components/atoms/inputs';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview/index';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';
import {signinFormValidation, signupDetailsFormValidation} from 'validations';
import styles from './styles';
import {colors} from 'config/colors';
import {Row} from 'components/atoms/row';
import {Clock, FacBookIcon, GoogleIcon, LoginAnimation} from 'assets/icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {onLogin} from 'services/api/auth-api-actions';
import {requestNotifications} from 'react-native-permissions';

import {UTILS} from 'utils';
import Regular from 'typography/regular-text';
import Icon from 'react-native-vector-icons/AntDesign';
import CustomFlatList from 'components/atoms/custom-flatlist';
import JobsCard from 'components/molecules/jobs-card';
import { useNavigation } from '@react-navigation/native';

const AiMentorScreen = props => {
    const navigation = useNavigation();
  
  const dispatch = useAppDispatch();
  const {t} = i18n;
  const [otpModalVisible, setOtpModalVisible] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [switchButton, setSwitchButton] = React.useState(false);
  const initialValues = {
    email: '',
    password: '',
    // fcm_token: '123456',
    type: 'Driver',
  };
  const [loading, setLoading] = React.useState(false);
  // const {values, errors, touched, setFieldValue, setFieldTouched, isValid} =
  //   useFormik({
  //     initialValues: initialValues,
  //     validateOnBlur: true,
  //     validateOnChange: true,
  //     validationSchema: signinFormValidation,
  //     onSubmit: () => {},
  //   });

  React.useEffect(() => {
    async function requestPermission() {
      const result = await requestNotifications(['alert', 'sound', 'badge']);
      if (result.status === 'granted') {
        // Notifications allowed
      } else {
        // Notifications not allowed
      }
    }

    requestPermission();
  }, []);
  async function checkApplicationPermission() {
    const authorizationStatus = await messaging().requestPermission();

    if (authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED) {
      console.log('User has notification permissions enabled.');
      return true;
    } else if (
      authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL
    ) {
      console.log('User has provisional notification permissions.');
      return true;
    } else {
      console.log('User has notification permissions disabled');
      return false;
    }
  }

  const handleFormSubmit = async values => {
    try {
      await checkApplicationPermission();
      let fcmToken = '123456';
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


    const renderItem = ({item}) => <JobsCard item={item} />;

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
     {/* <MessageInput containerStyle={{position:'absolute',bottom:mvs(10)}}/> */}
       <SearchInput
             // placeholder={'Search for jobs'}
             containerStyle={{
               marginTop: mvs(25),
               borderWidth: 1,
               borderColor: colors.primary,
             }}
           />
     <IconButton onPress={()=>navigate('ChatScreen')} title='New Chat' img={IMG.nextArrow} containerStyle={{position:'absolute',bottom:mvs(30),alignSelf:'center',height:mvs(50)}}/>
    </View>
  );
};
export default AiMentorScreen;
