import * as IMG from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import PrimaryInput from 'components/atoms/inputs';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {Formik} from 'formik';
import {useAppSelector} from 'hooks/use-store';
import React from 'react';
import {I18nManager, ImageBackground, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Medium from 'typography/medium-text';
import {UTILS} from 'utils';
import {updateProfileFormValidation} from 'validations';
import styles from './styles';
import Bold from 'typography/bold-text';
import { Row } from 'components/atoms/row';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { STORAGEKEYS } from 'config/constants';


const UserTab = props => {
    const navigation = useNavigation();
  const onSubmit = async values => {
    console.log('values', values);
  };
const [userData, setUserData] = React.useState(null);

React.useEffect(() => {
  const fetchUserData = async () => {
    const data = await UTILS.getItem(STORAGEKEYS.user);
    setUserData(data?.user);
    console.log('user data', data);
  };

  fetchUserData();
}, []);
  const openGallery = async () => {
    try {
      const res = await UTILS._returnImageGallery(false, true);
      return;
      console.log('image path get', res);
    } catch (error) {
      console.log('upload image error', error);
    }
  };
    const initialValues = {
    firstName: 'Humair' || '',
    lastName: 'Niazi' || '',
    email: 'abcd@gmail.com' || '',
  };
  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        <Row style={{marginTop: mvs(15), alignItems: 'center',paddingHorizontal:mvs(20)}}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Icon
            name={I18nManager.isRTL ? 'arrowright' : 'arrowleft'}
            size={mvs(20)}
            color={colors.white}
          />
        </TouchableOpacity>
         <Bold
          label="User Profile"
          color={colors.white}
         
          fontSize={mvs(20)}
        />
        <View></View>
      </Row>
      </View>
      <View
        style={{
          width: '100%',
          marginTop: mvs(-60),
          height: mvs(150),
        }}>
        <ImageBackground source={IMG.profilepic} style={styles.imgUpload}>
          <FontAwesome
            onPress={() => {
              console.log('edit button');
              openGallery();
            }}
            name="edit"
            color={colors.primary}
            size={mvs(30)}
            style={styles.editbtn}
          />
        </ImageBackground>

        <Medium
          color={colors.primary}
          label={'Hello Malik Humair'}
          style={styles.name}
        />
      </View>

      <KeyboardAvoidScrollview
        contentContainerStyle={styles.keyboardcontentcontainer}>
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={updateProfileFormValidation}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
          }) => (
            <View style={styles.inputcontainer}>
              <PrimaryInput
                label={'First Name'}
                editIcons={true}
                placeholder={'First Name'}
                style={styles.textinput}
                placeholderTextColor={colors.secondary}
                onBlur={handleBlur('firstname')}
                error={touched.firstname && errors.firstname}
                onChangeText={handleChange('firstname')}
                value={values.firstname}
              />
              <PrimaryInput
                label={'Last Name'}
                editIcons={true}
                placeholder={'Last Name'}
                style={styles.textinput}
                placeholderTextColor={colors.secondary}
                onBlur={handleBlur('lastname')}
                error={touched.lastname && errors.lastname}
                onChangeText={handleChange('lastname')}
                value={values.lastname}
              />
              <PrimaryInput
                label={'Email'}
                isEmail={true}
                placeholder={'Email'}
                style={styles.textinput}
                placeholderTextColor={colors.secondary}
                onBlur={handleBlur('email')}
                error={touched.email && errors.email}
                onChangeText={handleChange('email')}
                value={values.email}
                editable={false}
              />

              <View style={{marginTop: mvs(50), gap: mvs(18)}}>
                <PrimaryButton
                  title="Save Changes"
                  containerStyle={styles.containerStyle}
                  onPress={handleSubmit}
                />
                <PrimaryButton
                  title="Cancel"
                  containerStyle={styles.containerStyle2}
                  textStyle={styles.textStyle}
                />
              </View>
            </View>
          )}
        </Formik>
      </KeyboardAvoidScrollview>
    </View>
  );
};
export default UserTab;
