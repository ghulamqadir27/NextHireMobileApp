import * as IMG from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import {mvs} from 'config/metrices';
import {Formik} from 'formik';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import PrimaryInput from 'components/atoms/inputs';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview/index';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';
// import {signupDetailsFormValidation} from 'validations'; // We will create this
import styles from './styles';
import {colors} from 'config/colors';
import {Row} from 'components/atoms/row';
import {FacBookIcon, GoogleIcon} from 'assets/icons';
import Regular from 'typography/regular-text';
import DropdownModal from 'components/molecules/modals/dropdown-modal';
import ResendOtpModal from 'components/molecules/modals/ResendOtp-modal';
import * as Yup from 'yup'; // Import Yup for validation
import { SignupSchema } from 'validations';
import { signUpForm, verifyOtp } from 'services/api/auth-api-actions';

const SignUpScreen = props => {
  const [loading, setLoading] = React.useState(false);
  const [otpValue, setOtpValue] = React.useState('');
  const [otpModalVisible, setOtpModalVisible] = React.useState(false);

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
    const FullverifyOtp = async () => {
      try {
        setLoading(true);
        const payload = {
          otp: parseInt(otpValue), 
          reset: false, 
        };
        const res = await verifyOtp(payload);
        if (res?.success) {
          setOtpModalVisible(false);
          navigate("Login");
        }
      } catch (error) {
        Alert.alert('Error', 'An error occurred while verifying OTP');
      } finally {
        setLoading(false);
      }
    };

  const handleFormSubmit = async (values,{ resetForm }) => {
    try {
      setLoading(true); 
      const apiBody = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      };
      console.log('API Body:', apiBody);
      const response = await signUpForm(apiBody);
      if (response.success) { 
        console.log('API Response:', response);
        resetForm(); 
        setOtpModalVisible(true); 
      }
      console.log('response', response);
    } catch (error) {
      console.log('error=>', error);
    } finally {
      setLoading(false); // Set loading to false after submission (success or error)
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={IMG.nextHirelogo} style={styles.imglogo} />
        <Row style={styles.titleview}>
          <Bold
            label={'Welcome back'}
            color={colors.black}
            fontSize={mvs(26)}
          />
          <Image source={IMG.wave} style={styles.waveimg} />
        </Row>
        <Regular
          label={'Register'}
          color={colors.light}
          fontSize={mvs(14)}
          style={{alignSelf: 'center', marginTop: mvs(5)}}
        />
        <View style={styles.contentContainerStyle}>
          <KeyboardAvoidScrollview
            contentContainerStyle={styles.keyboradscrollcontent}>
            <View style={styles.contentContainerStyleNew}>
              <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema} // Apply the validation schema
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
                    {console.log('errors', errors)}
                    <PrimaryInput
                      error={touched?.firstName ? errors.firstName : ''}
                      placeholder={'First Name'}
                      onChangeText={handleChange('firstName')}
                      onBlur={handleBlur('firstName')}
                      value={values.firstName}
                      containerStyle={styles.input}
                    />
                    <PrimaryInput
                      error={touched?.lastName ? errors.lastName : ''}
                      placeholder={'Last Name'}
                      onChangeText={handleChange('lastName')}
                      onBlur={handleBlur('lastName')}
                      value={values.lastName}
                      containerStyle={styles.input}
                    />
                    <PrimaryInput
                      keyboardType={'email-address'}
                      error={touched?.email ? errors.email : ''}
                      placeholder={'Email'}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      containerStyle={styles.input}
                    />
                    <PrimaryInput
                      isPassword
                      error={touched?.password ? errors.password : ''}
                      placeholder={'Password'}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      errorStyle={{marginBottom: 0}}
                      containerStyle={styles.input}
                    />
                    <PrimaryInput
                      isPassword
                      error={
                        touched?.confirmPassword ? errors.confirmPassword : ''
                      }
                      placeholder={'Confirm Password'}
                      onChangeText={handleChange('confirmPassword')}
                      onBlur={handleBlur('confirmPassword')}
                      value={values.confirmPassword}
                      errorStyle={{marginBottom: 0}}
                      containerStyle={styles.input}
                    />
                    <PrimaryButton
                      containerStyle={{
                        borderRadius: mvs(50),
                        height: mvs(50),
                        marginTop: mvs(25),
                      }}
                      loading={loading}
                      onPress={handleSubmit}
                      title={'Register'}
                    />
                    <View style={styles.createaccountview}>
                      <Medium
                        label={'Or continue with social account'}
                        color={colors.black}
                      />
                    </View>
                    <Row style={{marginTop: mvs(10)}}>
                      <TouchableOpacity style={styles.googlebutton}>
                        <Row style={styles.googlefacebookview}>
                          <GoogleIcon height={mvs(25)} width={mvs(25)} />
                          <Medium
                            label={'google'}
                            style={{marginTop: mvs(5)}}
                            color={colors.black}
                            fontSize={mvs(14)}
                          />
                        </Row>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.googlebutton}>
                        <Row style={styles.googlefacebookview}>
                          <FacBookIcon height={mvs(25)} width={mvs(25)} />
                          <Medium
                            label={'facebook'}
                            style={{marginTop: mvs(5)}}
                            color={colors.black}
                            fontSize={mvs(14)}
                          />
                        </Row>
                      </TouchableOpacity>
                    </Row>
                  </>
                )}
              </Formik>
              <Row style={styles.loginview}>
                <Regular label={'Already have an account?'} />
                <TouchableOpacity onPress={() => navigate('Login')}>
                  <Medium label={'Login'} color={colors.primary} />
                </TouchableOpacity>
              </Row>
            </View>
          </KeyboardAvoidScrollview>
        </View>
      </ScrollView>
      {/* <DropdownModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onChangeText={() => {
          setModalVisible(false);
        }}
      /> */}
      <ResendOtpModal
        visible={otpModalVisible}
        onClose={() => setOtpModalVisible(false)}
        onPress={FullverifyOtp}
        value={otpValue}
        setValue={setOtpValue}
        email={initialValues.email} // Pass the email from form
        loading={loading} // Pass loading state if needed
        
      />
    </View>
  );
};
export default SignUpScreen;