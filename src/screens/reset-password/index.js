import messaging from '@react-native-firebase/messaging'; // Keep if used elsewhere
import * as IMG from 'assets/images';
// import {auth_bg} from 'assets/images'; // Not used in JSX
import {PrimaryButton} from 'components/atoms/buttons';

import {height, mvs, width} from 'config/metrices'; // Keep if used in styles
import {Formik} from 'formik';
import {navigate, resetStack} from 'navigation/navigation-ref';
import React from 'react';
import {
  ImageBackground, // Not used in JSX
  TouchableOpacity,
  View,
  Image,
  StyleSheet, // Keep if you have external styles. StyleSheet.create from 'styles.js' is typically used.
  ScrollView,
  Alert,
} from 'react-native';
import LottieView from 'lottie-react-native';
import PrimaryInput from 'components/atoms/inputs';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview/index';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';
// import { signinFormValidation, signupDetailsFormValidation, updatePasswordValidation, } from 'validations'; // Will replace updatePasswordValidation with Yup
import styles from './styles';
import {colors} from 'config/colors';
import {
  Clock, // Not used in JSX
  FacBookIcon, // Not used in JSX
  ForgotPasswordAnimation, // Not used in JSX
  GoogleIcon, // Not used in JSX
  LoginAnimation, // Not used in JSX
  PasswordChangedAnimation,
  resetPassword, // Used for Lottie animation
  ResetYourPasswordAnimation, // Not used in JSX
} from 'assets/icons';
import AntDesign from 'react-native-vector-icons/AntDesign'; // Keep if used for icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // Keep if used for icons
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import {UTILS} from 'utils'; // Assuming UTILS provides error handling
import { ResetPasswordSchema } from 'validations';
import { updatePassword } from 'services/api/auth-api-actions';

const ResetPasswordScreen = props => {
  const {t} = i18n; // For localization
  const [isPasswordChanged, setIsPasswordChanged] = React.useState(false); // State to show success animation
  const [loading, setLoading] = React.useState(false); 
  const [passwordData, setPasswordData] = React.useState({}); 
  const initialValues = {
    password: '',
    confirm_password: '',
  };

  const handleFormSubmit = async (values) => { 
    try {
      setLoading(true); 
      const payload = {
        password: values.password,
      };
      const response = await updatePassword(payload); 
      if (response?.success) {
        Alert.alert('Success', response.message || 'Password updated successfully.'); 
        navigate('Login'); 
      }
    } catch (error) {
      console.log('Error preparing password reset:', error);
      Alert.alert('Error', response.message || 'Could not process password. Please try again.');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <View style={styles.container}>
      <Header1x2x title={'Reset password'} />
      <View style={{alignSelf: 'center'}}>
        <Image
          source={IMG.nextHire}
          resizeMode={'contain'}
          style={{width: mvs(300), height: mvs(100)}}
        />
      </View>

      <View style={styles.contentContainerStyle}>
        <KeyboardAvoidScrollview
          contentContainerStyle={styles.keyboardcontentcontainer}>
          <View style={styles.contentContainerStyleNew}>
            <Formik
              initialValues={initialValues}
              validationSchema={ResetPasswordSchema} 
              onSubmit={handleFormSubmit}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                touched,
                values,
                errors,
              }) => (
                <>
                  {/* {console.log('errors', errors)} // Keep for debugging if needed */}
                  {!isPasswordChanged ? (
                    <>
                      <View style={styles.lottiview}>
                        <LottieView
                          source={resetPassword}
                          autoPlay={true}
                          loop={true}
                          style={{width: mvs(200), height: mvs(200)}}
                        />
                      </View>
                      <Bold
                        label={t('reset_your_password')}
                        color={colors.bluecolor}
                        fontSize={mvs(16)}
                        style={styles.resetpasswordtext}
                      />

                      <PrimaryInput
                        isPassword
                        error={touched?.password ? t(errors.password) : ''}
                        placeholder={t('password')}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        containerStyle={{marginBottom: mvs(15)}} // Added margin
                      />
                      <PrimaryInput
                        isPassword
                        error={
                          touched?.confirm_password
                            ? t(errors.confirm_password)
                            : ''
                        }
                        placeholder={t('confirm_password')}
                        onChangeText={handleChange('confirm_password')}
                        onBlur={handleBlur('confirm_password')}
                        value={values.confirm_password}
                        containerStyle={{marginBottom: mvs(20)}} // Added margin
                      />

                      <PrimaryButton
                        containerStyle={{
                          borderRadius: mvs(10),
                        }}
                        loading={loading}
                        onPress={handleSubmit}
                        title={t('confirm')}
                      />
                    </>
                  ) : (
                    // Displayed after successful password change
                    <View>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Bold
                          label={t('password_changed')}
                          style={styles.txt}
                        />
                        <Bold
                          label={t('congratulations')}
                          style={styles.txt2}
                        />
                        <Medium
                          label={t(
                            'you_have_successfully_changed_your_password',
                          )}
                          fontSize={mvs(16)}
                          numberOfLines={2}
                          style={{textAlign: 'center'}}
                        />
                        <LottieView
                          source={PasswordChangedAnimation}
                          autoPlay={true}
                          loop={true}
                          style={{width: mvs(200), height: mvs(200)}}
                        />
                      </View>

                      <PrimaryButton
                        containerStyle={{
                          borderRadius: mvs(10),
                          marginTop: mvs(30), // Add spacing
                        }}
                        loading={false} // This button doesn't need its own loading
                        onPress={() => resetStack('Login')} // Navigate back to Login and clear stack
                        title={t('back_to_login')}
                      />
                    </View>
                  )}
                </>
              )}
            </Formik>
          </View>
        </KeyboardAvoidScrollview>
      </View>
    </View>
  );
};
export default ResetPasswordScreen;