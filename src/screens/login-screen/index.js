import * as IMG from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import {mvs} from 'config/metrices';
import {Formik} from 'formik';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {TouchableOpacity, View, Image, ScrollView, Alert} from 'react-native';
import PrimaryInput from 'components/atoms/inputs';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview/index';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';
import {LoginSchema, signinFormValidation} from 'validations';
import styles from './styles';
import {colors} from 'config/colors';
import {Row} from 'components/atoms/row';
import {FacBookIcon, GoogleIcon} from 'assets/icons';
import Regular from 'typography/regular-text';
import {login} from 'services/api/auth-api-actions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {UTILS} from 'utils';
import {STORAGEKEYS} from 'config/constants';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithCredential,
} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const LoginScreen = props => {
  const [loading, setLoading] = React.useState(false);
  const [rember, setRemember] = React.useState(true);
  const initialValues = {
    email: '',
    password: '',
  };
  const handleFormSubmit = async (values, {resetForm}) => {
    try {
      setLoading(true);
      const apiBody = {
        email: values.email,
        password: values.password,
      };
      const response = await login(apiBody);
      if (response.success) {
        // console.log('Login Successful:', response);
        // if (rember) {
        await UTILS.setItem(STORAGEKEYS.user, JSON.stringify(response.auth));
        //   const storedUser = JSON.parse(
        //     await UTILS.getItem(STORAGEKEYS.user),
        //   );
        //   console.log('Stored user:', storedUser);
        // }
        resetForm();
        navigate('Drawer');
      } else {
        Alert.alert('Login Failed', response.message || 'Invalid credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert(
        'Error',
        error?.message || 'An error occurred. Please try again.',
      );
    } finally {
      setLoading(false);
    }
  };
async function onGoogleButtonPress() {
  try {

    // 2. Check Play Services
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    // 3. Sign in
    const { idToken, user } = await GoogleSignin.signIn();
    console.log('User info:', user);

    if (!idToken) {
      throw new Error('No ID token found - check webClientId configuration');
    }

    // 4. Create Firebase credential
    const credential = GoogleAuthProvider.credential(idToken);
    const auth = getAuth();
    
    // 5. Sign in with Firebase
    const firebaseUser = await signInWithCredential(auth, credential);
    
    console.log('Firebase user:', firebaseUser);
    navigate('Drawer');
    
    return firebaseUser;
  } catch (error) {
    console.error('Full error:', error);
    if (error.code === 'SIGN_IN_CANCELLED') {
      Alert.alert('Cancelled', 'You cancelled the sign in.');
    } else {
      Alert.alert('Error', error.message || 'Sign in failed');
    }
    throw error;
  }
}
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={IMG.arrow} style={styles.imglogo} />
        <Row style={styles.titleview}>
          <Bold
            label={'Welcome back'}
            color={colors.black}
            fontSize={mvs(26)}
          />
          <Image source={IMG.wave} style={styles.waveimg} />
        </Row>
        <Regular
          label={'Login'}
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
                validationSchema={LoginSchema}
                onSubmit={handleFormSubmit}>
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  touched,
                  values,
                  errors,
                }) => {
                  console.log('Formik errors:', errors);
                  console.log('Formik values:', values);

                  return (
                    <>
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
                      {/* <TouchableOpacity
                        style={styles.forgotpasswordview}
                        onPress={() => navigate('ForgotPassword')}
                      >
                        <Medium
                          label={'Forgot Password?'}
                          style={{textDecorationLine: 'underline'}}
                          color={colors.bluecolor}
                        />
                      </TouchableOpacity> */}
                      <Row
                        style={{
                          alignItems: 'center',
                          paddingHorizontal: mvs(10),
                          marginTop: mvs(5),
                          marginBottom: mvs(20),
                        }}>
                        <Row style={{gap: mvs(10), alignItems: 'center'}}>
                          <View
                            style={{
                              ...styles.checkView,
                              backgroundColor: rember ? colors.green : null,
                              borderWidth: rember ? mvs(0) : mvs(1),
                            }}>
                            <TouchableOpacity
                              onPress={() => setRemember(!rember)}>
                              <MaterialIcons
                                size={15}
                                name={'done'}
                                color={colors.white}
                              />
                            </TouchableOpacity>
                          </View>
                          <Regular
                            color={colors.bluecolor}
                            label={'Remember Me'}
                            style={{marginTop: mvs(3)}}
                          />
                        </Row>

                        <TouchableOpacity
                          onPress={() => navigate('ForgotPassword')}>
                          <Medium
                            label={'forgot_password?'}
                            color={colors.bluecolor}
                            style={{marginTop: mvs(3)}}
                          />
                        </TouchableOpacity>
                      </Row>
                      <PrimaryButton
                        containerStyle={{
                          borderRadius: mvs(50),
                          height: mvs(50),
                          marginTop: mvs(10),
                        }}
                        loading={loading}
                        onPress={handleSubmit}
                        title={'Login'}
                      />
                      <View style={styles.createaccountview}>
                        <Medium
                          label={'Or continue with social account'}
                          color={colors.black}
                        />
                      </View>
                      <Row style={{marginTop: mvs(10)}}>
                        <TouchableOpacity
                          style={styles.googlebutton}
                          onPress={() =>
                            onGoogleButtonPress().then(() =>
                              console.log('Signed in with Google!'),
                            )
                          }>
                          <Row style={styles.googlefacebookview}>
                            <GoogleIcon height={mvs(25)} width={mvs(25)} />
                            <Medium
                              label={'Google'}
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
                              label={'Facebook'}
                              style={{marginTop: mvs(5)}}
                              color={colors.black}
                              fontSize={mvs(14)}
                            />
                          </Row>
                        </TouchableOpacity>
                      </Row>
                    </>
                  );
                }}
              </Formik>
              <Row style={styles.loginview}>
                <Regular label={'do not have an account?'} />
                <TouchableOpacity onPress={() => navigate('SignUp')}>
                  <Medium label={'Register'} color={colors.primary} />
                </TouchableOpacity>
              </Row>
            </View>
          </KeyboardAvoidScrollview>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;
