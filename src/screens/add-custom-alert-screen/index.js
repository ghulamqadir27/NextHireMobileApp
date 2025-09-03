import * as IMG from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import { mvs} from 'config/metrices';
import {Formik} from 'formik';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {
  TouchableOpacity,
  View,
  ScrollView,
  I18nManager,
} from 'react-native';
import PrimaryInput, {
  InputWithIconComplainTypeSelection,
} from 'components/atoms/inputs';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview/index';
import Bold from 'typography/bold-text';
import styles from './styles';
import {colors} from 'config/colors';
import {Row} from 'components/atoms/row';
import Regular from 'typography/regular-text';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import AddJobKeywordCard from 'components/molecules/add-jobs-keyword-card';

const AddCustomAlertScreen = props => {
  const initialValues = {
    email: '',
  };
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation();


  const handleFormSubmit = async values => {
    try {   
    navigate('CustomAlert2');    
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
  const keywords = ['Flutter', 'Dart', 'Firebase'];
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Icon
            name={I18nManager.isRTL ? 'arrowright' : 'arrowleft'}
            size={mvs(20)}
            color={colors.black}
          />
        </TouchableOpacity>
        <Bold
          label={'Add Custom Alert'}
          color={colors.black}
          fontSize={mvs(16)}
          style={{marginTop: mvs(25)}}
        />
        <Regular
          label={
            'You will get alerts whenever a new jib contains keywords you will add here.'
          }
          color={colors.light}
          fontSize={mvs(14)}
          style={{marginTop: mvs(10)}}
          numberOfLines={3}
        />
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
                      keyboardType={'Alert Name'}
                      error={touched?.email ? errors.email : ''}
                      placeholder={'email'}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      containerStyle={styles.input}
                    />
                    <PrimaryInput
                      error={touched?.password ? errors.password : ''}
                      placeholder={'Positive keywords'}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      errorStyle={{marginBottom: 0}}
                      containerStyle={styles.input}
                    />
                    <View>
                      <Row
                        style={styles.keywordsContainerStyle}>
                        {keywords.map((item, index) => {
                          return (
                            <AddJobKeywordCard
                              img={IMG.circledcross}
                              key={item?.id || index}
                              item={item}
                              backgroundColor={colors.lightGreen}
                              cross={false}
                            />
                          );
                        })}
                      </Row>
                    </View>
                    <PrimaryInput
                      error={touched?.password ? errors.password : ''}
                      placeholder={'Positive keywords'}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      errorStyle={{marginBottom: 0}}
                      containerStyle={[styles.input, {marginTop: mvs(15)}]}
                    />
                    <View>
                      <Row
                        style={styles.keywordsContainerStyle}>
                        {keywords.map((item, index) => {
                          return (
                            <AddJobKeywordCard
                              img={IMG.circledcrossred}
                              key={item?.id || index}
                              item={item}
                              backgroundColor={colors.lightGreen}
                              cross={true}
                            />
                          );
                        })}
                      </Row>
                    </View>

                    <Bold
                      label={'Client Info'}
                      fontSize={mvs(16)}
                      color={colors.black}
                      style={{marginTop: mvs(10), marginBottom: mvs(5)}}
                    />
                    <PrimaryInput
                      error={touched?.password ? errors.password : ''}
                      placeholder={'Minimum Hourly Rate'}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      errorStyle={{marginBottom: 0}}
                      containerStyle={styles.input}
                    />
                    <PrimaryInput
                      error={touched?.password ? errors.password : ''}
                      placeholder={'Maximum Hourly Rate'}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      errorStyle={{marginBottom: 0}}
                      containerStyle={styles.input}
                    />

                    <InputWithIconComplainTypeSelection
                      containerStyle={styles.inputContainer}
                      placeholder="Payment Method"
                      items={complainType}
                      id={values?.complainType}
                      value={values?.complainType?.name}
                      onChangeText={complainType =>
                        setFieldValue('complainType', complainType)
                      }
                      error={
                        touched?.complainType ? errors.complainType : ''
                      }
                    />
                    <InputWithIconComplainTypeSelection
                      containerStyle={styles.inputContainer}
                      placeholder="Anywhere in the world"
                      items={complainType}
                      id={values?.complainType}
                      value={values?.complainType?.name}
                      onChangeText={complainType =>
                        setFieldValue('complainType', complainType)
                      }
                      error={
                        touched?.complainType ? errors.complainType : ''
                      }
                    />
                    <PrimaryButton
                      containerStyle={styles.savebutton}
                      loading={loading}
                      onPress={handleSubmit}
                      title={'Save changes'}
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
export default AddCustomAlertScreen;
