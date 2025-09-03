import * as IMG from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import {mvs} from 'config/metrices';
import {Formik} from 'formik';
import {useAppDispatch} from 'hooks/use-store'; // Assuming you still need this for potential state updates
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {
  View,
  Image,
  Alert, // Import Alert for user feedback
} from 'react-native';
import LottieView from 'lottie-react-native';
import PrimaryInput from 'components/atoms/inputs';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview/index';
import i18n from 'translation'; // Assuming you use i18n for localization
import Bold from 'typography/bold-text';
// import { forgotPasswordValidation } from 'validations'; // We will define this inline with Yup
import styles from './styles';
import {colors} from 'config/colors';
import {
  ForgotPasswordAnimation,
} from 'assets/icons';
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import {forgotPassword, onForgot, verifyOtp} from 'services/api/auth-api-actions'; // Ensure this path is correct
import * as Yup from 'yup'; // Import Yup for validation
import { ForgotPasswordSchema } from 'validations';
import ResendOtpModal from 'components/molecules/modals/ResendOtp-modal';

const ForgotPasswordScreen = props => {
  const [otpModalVisible, setOtpModalVisible] = React.useState(false); // If you plan to show an OTP modal after
  const [loading, setLoading] = React.useState(false);
  const dispatch = useAppDispatch(); // Assuming you might use dispatch for global state
  const [verifyLoading, setVerifyLoading] = React.useState(false); // For OTP verification button
  const [otpValue, setOtpValue] = React.useState(''); // State for OTP input in modal
  
  

  const initialValues = {
    email: '',
  };

  const handleFormSubmit = async values => {
    try {
      setLoading(true);
      const apiBody = {
        email: values.email,
      };
      console.log('Forgot Password API Body:', apiBody);
      const response = await forgotPassword(apiBody);
      if (response.success) { 
        setOtpModalVisible(true); 
      }
    } catch (error) {
      // Alert.alert('Error', response?.message || 'Failed to send password reset instructions. Please try again.',);
    } finally {
      setLoading(false); 
    }
  };

 const FullverifyOtp = async () => {
   try {
     setLoading(true);
     const payload = {
       otp: parseInt(otpValue), 
       reset: true, 
      };
      console.log("payload", payload)
      const res = await verifyOtp(payload);
        if (res?.success) {
          setOtpModalVisible(false);
          navigate("ResetPassword");
        }
      } catch (error) {
        Alert.alert('Error', 'An error occurred while verifying OTP');
      } finally {
        setLoading(false);
      }
    };

  return (
    <View style={styles.container}>
      <Image source={IMG.LogoBackground} style={styles.logobackground} />
      <Header1x2x title={'Forgot password'}/>
      <View style={{alignSelf: 'center'}}>
        <Image
          source={IMG.nextHire}
          resizeMode={'contain'}
          style={{width: mvs(300), height: mvs(100)}}
        />
      </View>

      <View style={styles.contentContainerStyle}>
        <KeyboardAvoidScrollview
          contentContainerStyle={styles.keyboradscrollcontent}>
          <View style={styles.contentContainerStyleNew}>
            <Formik
              initialValues={initialValues}
              validationSchema={ForgotPasswordSchema} 
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
                  <View style={styles.lottiview}>
                    <LottieView
                      source={ForgotPasswordAnimation}
                      autoPlay={true}
                      loop={true}
                      style={{width: mvs(100), height: mvs(100)}}
                    />
                  </View>
                  <Bold
                    label={'Forgot Password?'} 
                    color={colors.bluecolor}
                    fontSize={mvs(16)}
                    style={styles.forgottext}
                  />

                  <PrimaryInput
                    keyboardType={'email-address'}
                    error={touched?.email ? errors.email : ''}
                    placeholder={'Email Address'}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    containerStyle={styles.input} 
                  />

                  <PrimaryButton
                    containerStyle={{
                      borderRadius: mvs(10),
                    }}
                    loading={loading}
                    onPress={handleSubmit}
                    title={'Send '} 
                  />
                </>
              )}
            </Formik>
          </View>
        </KeyboardAvoidScrollview>
      </View>
      <ResendOtpModal
        visible={otpModalVisible}
        onClose={() => setOtpModalVisible(false)}
        onPress={FullverifyOtp} // This triggers handleVerify internally
        value={otpValue}
        setValue={setOtpValue}
        loading={verifyLoading} // Use a separate loading state for the OTP modal
        reset={true}
      />
    </View>
  );
};
export default ForgotPasswordScreen;