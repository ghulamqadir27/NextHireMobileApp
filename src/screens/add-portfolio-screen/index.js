import messaging from '@react-native-firebase/messaging';
import * as IMG from 'assets/images';
import {auth_bg} from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import OtpModal from 'components/molecules/modals/otp-modal';
import {height, mvs, width} from 'config/metrices';
import {Formik, useFormik} from 'formik';
import {useAppDispatch} from 'hooks/use-store';
import {navigate, resetStack} from 'navigation/navigation-ref';
import React, {useState} from 'react';
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
import PrimaryInput, {
  InputWithIconComplainTypeSelection,
  TextAreaInput,
} from 'components/atoms/inputs';
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
import DropdownModal from 'components/molecules/modals/dropdown-modal';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const AddPortfolioScreen = props => {
  const navigation = useNavigation();
  const initialValues = {
    email: '',
  };
  const [loading, setLoading] = React.useState(false);

  const handleFormSubmit = async values => {
    try {
      setModalVisible(true);
    } catch (error) {
      console.log('error=>', error);
      setLoading(false);
    }
  };
  const complainType = [
    {id: 1, name: 'General'},
    {id: 2, name: 'Department'},
    {id: 3, name: 'Individuals'},
  ];
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Row>
          <TouchableOpacity onPress={() => navigation?.goBack()}>
            <Icon
              name={I18nManager.isRTL ? 'arrowright' : 'arrowleft'}
              size={mvs(20)}
              color={colors.black}
            />
          </TouchableOpacity>
          <Bold
            label={'Add Portfolio'}
            color={colors.black}
            fontSize={mvs(16)}
          />
          <Image source={IMG.notification2} style={styles.imglogo} />
        </Row>

        <View style={styles.contentContainerStyle}>
          <KeyboardAvoidScrollview
            contentContainerStyle={styles.keyboradscrollcontent}>
            <View style={styles.contentContainerStyleNew}>
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
                      label="Title:"
                      keyboardType={'Alert Name'}
                      error={touched?.email ? errors.email : ''}
                      placeholder={'mobile app development'}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      containerStyle={styles.input}
                    />
                    <Regular
                      label={'3/200'}
                      fontSize={mvs(14)}
                      style={styles.countContainer}
                    />
                    <InputWithIconComplainTypeSelection
                      label={'Select Category'}
                      isRequired={true}
                      containerStyle={{
                        backgroundColor: colors.white,
                        borderColor: colors.border,
                        marginBottom: mvs(0),
                      }}
                      placeholder="Payment Method"
                      items={complainType}
                      id={values?.complainType}
                      value={values?.complainType?.name}
                      onChangeText={complainType =>
                        setFieldValue('complainType', complainType)
                      }
                      error={touched?.complainType ? errors.complainType : ''}
                    />
                    <TextAreaInput
                      error={touched?.reason ? errors.reason : ''}
                      placeholder={'Text Here'}
                      onChangeText={handleChange('reason')}
                      onBlur={handleBlur('reason')}
                      value={values.reason}
                      label="Description:"
                    />
                    <Regular
                      label={'3/200'}
                      fontSize={mvs(14)}
                      style={styles.countContainer}
                    />

                    <PrimaryButton
                      containerStyle={styles.savebutton}
                      loading={loading}
                      onPress={handleSubmit}
                      title={'Save profile'}
                    />
                    <PrimaryButton
                      containerStyle={styles.cancelButton}
                      loading={loading}
                      onPress={handleSubmit}
                      title={'cancel'}
                      textStyle={{color: colors.primary}}
                    />
                  </>
                )}
              </Formik>
            </View>
          </KeyboardAvoidScrollview>
        </View>
      </ScrollView>
    </View>
  );
};
export default AddPortfolioScreen;
