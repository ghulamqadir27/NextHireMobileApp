import messaging from '@react-native-firebase/messaging';
import * as IMG from 'assets/images';
import {auth_bg} from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
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
import PrimaryInput, { InputWithIconComplainTypeSelection } from 'components/atoms/inputs';
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import CustomFlatList from 'components/atoms/custom-flatlist';
import ProfileCard from 'components/molecules/modals/profiles-card';

const ProfileScreen = props => {
  const navigation = useNavigation();

  const dispatch = useAppDispatch();
  const {t} = i18n;
  const [otpModalVisible, setOtpModalVisible] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [email, setEmail] = React.useState('');
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

  const items = [
    {label: 'Unlimited Job Alerts'},
    {label: 'Instant Notifications'},
    {label: 'Custom Job Filters'},
    {label: 'Exclusive Offers'},
  ];
  const complainType = [
    {id: 1, name: 'General'},
    {id: 2, name: 'Department'},
    {id: 3, name: 'Individuals'},
  ];
  const profileType = [
    {id: 1, profile: 'Upwork Profile'},
    {id: 2, profile: 'Fiver Profile'},
    {id: 3, profile: 'Guru Profile'},
  ];
  const renderItem = ({item}) => <ProfileCard item={item} />;

  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.container}> */}
      <Row style={{marginTop: mvs(15), alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Icon
            name={I18nManager.isRTL ? 'arrowright' : 'arrowleft'}
            size={mvs(20)}
            color={colors.black}
          />
        </TouchableOpacity>
        <Bold label={'Edit Profile'} fontSize={18} color={colors.primary} />
        <View></View>
      </Row>

      <View style={{...styles.img}}>
        {loading ? (
          <Loader color={colors.white} />
        ) : (
          <TouchableOpacity
            // onPress={() => handleImagePress(userInfo?.avatar)}
            style={styles.imgUpload}>
            <Image
              source={IMG.profilepic}
              // source={{uri: saveFile?.uri}}
              // source={saveFile?.uri ? {uri: saveFile?.uri} : IMG.Drawerman}
              // source={IMG.Drawerman}
              style={styles.imgUpload}
              resizeMode="cover"
            />
          </TouchableOpacity>
        )}
        {/* {userInfo?.id && ( */}
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            borderRadius: mvs(10),
            position: 'absolute',
            right: mvs(-12),
            bottom: mvs(10),
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => openGallery()}>
          <Image
            source={IMG.profileedit}
            style={styles.editimg}
            resizeMode="contain"
          />
          {/* <MaterialIcons name="edit" color={colors.black} size={mvs(20)} /> */}
        </TouchableOpacity>
        {/* )} */}
      </View>
      <View style={{marginTop: mvs(20)}}>
        <Formik
          initialValues={initialValues}
          // validationSchema={signinFormValidation}
          onSubmit={handleFormSubmit}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            touched,
            values,
            errors,
          }) => (
            <>
              {console.log('errror2', errors)}
              <PrimaryInput
                keyboardType={'email-address'}
                error={touched?.email ? t(errors.email) : ''}
                placeholder={t('Alexa Smith')}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                containerStyle={styles.input}
                label={'Name :'}
                labelStyle={{color: colors.primary, fontSize: mvs(14)}}
              />
              <PrimaryInput
                error={touched?.password ? t(errors.password) : ''}
                placeholder={t('App Design')}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                errorStyle={{marginBottom: 0}}
                containerStyle={styles.input}
                label={'Experience :'}
                labelStyle={{color: colors.primary, fontSize: mvs(14)}}
              />
              <PrimaryInput
                error={touched?.password ? t(errors.password) : ''}
                placeholder={t('0325698979654')}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                errorStyle={{marginBottom: 0}}
                containerStyle={styles.input}
                label={'Whatsapp number :'}
                labelStyle={{color: colors.primary, fontSize: mvs(14)}}
              />
              <InputWithIconComplainTypeSelection
                label={'Complain Type'}
                isRequired={true}
                containerStyle={{
                  backgroundColor: colors.white,
                  borderColor: colors.border,
                  marginBottom: mvs(0),
                  // marginTop: mvs(10),
                }}
                placeholder="Payment Method"
                items={complainType}
                id={values?.complainType}
                value={values?.complainType?.name}
                onChangeText={complainType =>
                  setFieldValue('complainType', complainType)
                }
                error={touched?.complainType ? t(errors.complainType) : ''}
              />
              <PrimaryInput
                error={touched?.password ? t(errors.password) : ''}
                placeholder={t('alexa@gmail.com')}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                errorStyle={{marginBottom: 0}}
                containerStyle={styles.input}
                label={'Email :'}
                labelStyle={{color: colors.primary, fontSize: mvs(14)}}
              />
            </>
          )}
        </Formik>
         <Bold
                label={'Freelance Profile'}
                color={colors.black}
                fontSize={mvs(16)}
                style={{marginVertical: mvs(10)}}
              />
                <CustomFlatList
                      showsVerticalScrollIndicator={false}
                      data={profileType}
                      renderItem={renderItem}
                      contentContainerStyle={{
                        // paddingBottom: mvs(20),
                        backgroundColor: colors.white,
                        marginTop: mvs(10),
                      }}
                    />
      </View>
      {/* </View> */}
    </ScrollView>
  );
};
export default ProfileScreen;
