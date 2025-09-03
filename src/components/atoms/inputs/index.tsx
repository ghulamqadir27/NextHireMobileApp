import React, {useState, useRef} from 'react';
import * as IMG from 'assets/images';

import {
  I18nManager,
  Image,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import PhoneInput from 'react-native-phone-number-input';
import Regular from 'typography/regular-text';
import {mvs} from 'config/metrices';
import {colors} from 'config/colors';
import Medium from 'typography/medium-text';
import {Row} from '../row';
import {useAppSelector} from 'hooks/use-store';
import DropdownModal from 'components/molecules/modals/dropdown-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {t} from 'i18next';
import {menue} from 'assets/images';
import {DatePicker} from '../date-picker';
import moment from 'moment';
import DropdownModalNew from 'components/molecules/modals/new-dropdown-modal';
import DropdownModalComplainTypeSelection from 'components/molecules/modals/dropdown-modal-complain-type-selection';

type props = {
  isRequired?: boolean;
  onChangeText: (text: string) => void;
  onPress?: () => void;
  onPressMinus?: () => void;
  onPressIn?: () => void;
  getCallingCode?: (text: string) => void | undefined;
  value?: string;
  label?: string;
  label2?: string;
  numberOfLines?: number;
  height?: number;
  items?: any[];
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  mainContainer?: StyleProp<ViewStyle>;
  errorStyle?: StyleProp<ViewStyle>;
  secureTextEntry?: boolean | undefined;
  ref?: React.LegacyRef<PhoneInput> | undefined;
  defaultCode?: 'PK';
  layout?: 'first';
  isPassword?: boolean;
  isCalendar?: boolean;
  editable?: boolean;
  disabledSearch?: boolean;
  error?: string;
  id?: any;
  mtop?: number;
  maximumDate?: Date;
  keyboardType?: KeyboardTypeOptions | undefined;
  onBlur?: (e?: NativeSyntheticEvent<TextInputFocusEventData>) => void;
};
export const InputPresciption = (props: props) => {
  const [secure, setSecure] = useState(true);
  const {language} = useAppSelector(s => s.user);
  const {
    onChangeText,
    value,
    style,
    label,
    placeholder = 'type here',
    labelStyle,
    containerStyle,
    errorStyle,
    secureTextEntry,
    isPassword,
    keyboardType,
    error,
    editable = true,
    onBlur = () => {},
    onPressIn = () => {},
    onPressMinus = () => {},
    isRequired = false,
  } = props;
  return (
    <>
      <Row style={{alignItems: 'center'}}>
        <Regular label={label} style={[styles.labelStyle, labelStyle]} />
        <TouchableOpacity onPress={onPressMinus}>
          <AntDesign name="minuscircle" color={colors.primary} size={mvs(14)} />
        </TouchableOpacity>
      </Row>
      <View style={[styles.Container, containerStyle]}>
        <TextInput
          editable={editable}
          onBlur={onBlur}
          onPressIn={onPressIn}
          keyboardType={keyboardType}
          secureTextEntry={isPassword && secure}
          value={value}
          placeholderTextColor={`${colors.lightGray}`}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[
            styles.textInput,
            style,
            {textAlign: I18nManager.isRTL ? 'right' : 'left'},
          ]}
        />
        {isPassword && (
          <TouchableOpacity
            style={styles.PasswordIcon}
            onPress={() => setSecure(!secure)}>
            <Feather
              size={25}
              name={secure ? 'eye' : 'eye-off'}
              color={colors.black}
            />
          </TouchableOpacity>
        )}
      </View>
      <Regular
        label={error ? error : ''}
        style={[styles.errorLabel, errorStyle]}
      />
    </>
  );
};
const PrimaryInput = (props: props) => {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false); // Add state for DateTimePickerModal

  const [secure, setSecure] = useState(true);
  const {language} = useAppSelector(s => s.user);

  const {
    onChangeText,
    value,
    style,
    label,
    placeholder = 'type here',
    labelStyle,
    containerStyle,
    errorStyle,
    numberOfLines,
    secureTextEntry,
    isPassword,
    height,
    isCalendar,
    keyboardType,
    error,
    mainContainer,
    editable = true,
    onBlur = () => {},
    onPressIn = () => {},
    isRequired = false,
    maximumDate,
  } = props;
  const showDatePicker = () => {
    setDatePickerVisible(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisible(false); // Call onCancel when the modal is canceled
  };
  const handleConfirm = (date: Date) => {
    onChangeText(moment(date).format('YYYY-MM-DD'));
    hideDatePicker();
  };

  return (
    <View style={[mainContainer]}>
      {label && (
        <Regular label={label} style={[styles.labelStyle, labelStyle]}>
          {isRequired ? <Regular color={colors.red} label={' *'} /> : null}
        </Regular>
      )}
      <View style={[styles.Container, containerStyle]}>
        <TextInput
          editable={editable}
          onBlur={onBlur}
          onPressIn={onPressIn}
          keyboardType={keyboardType}
          secureTextEntry={isPassword && secure}
          value={value}
          placeholderTextColor={`${colors.placeholder}`}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[
            styles.textInput,
            style,
            {textAlign: I18nManager.isRTL ? 'right' : 'left'},
          ]}
        />
        {isPassword && (
          <TouchableOpacity
            style={styles.PasswordIcon}
            onPress={() => setSecure(!secure)}>
            <Feather
              size={25}
              name={secure ? 'eye-off' : 'eye'}
              color={colors.black}
            />
          </TouchableOpacity>
        )}
        {isCalendar && (
          <TouchableOpacity
            style={styles.PasswordIcon}
            // onPress={() => setSecure(!secure)}
            onPress={showDatePicker}>
            <FontAwesome size={20} name={'calendar'} color={colors.black} />
          </TouchableOpacity>
        )}
      </View>
      <DatePicker
        isVisible={isDatePickerVisible}
        onChangeText={str => {
          setDatePickerVisible(false);
          onChangeText(str);
        }}
        maximumDate={maximumDate}
        onCancel={hideDatePicker}
      />
      <Regular
        numberOfLines={numberOfLines}
        label={error ? error : ''}
        style={[
          styles.errorLabel,
          errorStyle,
          {
            height: height,
          },
        ]}
      />
    </View>
  );
};
export default React.memo(PrimaryInput);

export const CommentInput = (props: props) => {
  const {
    onChangeText,
    onPress = () => {},
    value,
    style,
    placeholder = 'Write Message',
    containerStyle,
    isPassword,
    keyboardType,
    error,
    onBlur = () => {},
  } = props;
  return (
    <>
      <View style={[styles.commentContainer, containerStyle]}>
        <TextInput
          onBlur={onBlur}
          keyboardType={keyboardType}
          value={value}
          placeholderTextColor={`${colors.black}50`}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[styles.textInput, style]}
        />
        <TouchableOpacity style={styles.PasswordIcon} onPress={onPress}>
          <Feather
            size={20}
            name={value?.trim()?.length ? 'send' : 'mic'}
            color={colors.black}
          />
        </TouchableOpacity>
      </View>
      <Regular label={error ? error : ''} style={styles.errorLabel} />
    </>
  );
};
export const MessageInput = (props: props) => {
  const {
    onChangeText,
    onPress = () => {},
    value,
    style,
    placeholder = 'Write Message',
    containerStyle,
    isPassword,
    keyboardType,
    error,
    sendMessage,
    onBlur = () => {},
  } = props;
  
  return (
    <>
      <Row style={[styles.messageContainer, containerStyle]}>
        <Row style={{flex: 1}}>
          <TouchableOpacity style={styles.PasswordIcon} onPress={onPress}>
            <Image source={IMG.attachment} style={styles.imglogo} />
          </TouchableOpacity>
          <TextInput
            onBlur={onBlur}
            keyboardType={keyboardType}
            value={value}
            placeholderTextColor={`${colors.black}50`}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={[styles.textInput, style]}
            multiline={true} // Add this
          />
        </Row>
        <TouchableOpacity style={styles.sendIcon} onPress={sendMessage}>
          <Feather name={'send'} size={25} color={colors.white} />
        </TouchableOpacity>
      </Row>
    </>
  );
};

// export const MessageInput = (props: props) => {
//   const {
//     onChangeText,
//     onPress = () => {},
//     value,
//     style,
//     placeholder = 'Write Message',
//     containerStyle,
//     isPassword,
//     keyboardType,
//     error,
//     onBlur = () => {},
//   } = props;
//   return (
//     <>
//       <Row style={[styles.messageContainer, containerStyle]}>
//       <TouchableOpacity style={styles.PasswordIcon} onPress={onPress}>
//           <Image source={IMG.attachment} style={styles.imglogo} />
//         </TouchableOpacity>
//         <TextInput
//           onBlur={onBlur}
//           keyboardType={keyboardType}
//           value={value}
//           placeholderTextColor={`${colors.black}50`}
//           onChangeText={onChangeText}
//           placeholder={placeholder}
//           style={[styles.textInput, style]}
//         />
      
//         {/* <TouchableOpacity style={styles.PasswordIcon} onPress={onPress}>
//           <Entypo size={20} name={'attachment'} color={colors.attachmentgray} />
//         </TouchableOpacity> */}
//       </Row>
//     </>
//   );
// };
export const InputWithIcon = (props: props) => {
  const [visible, setVisible] = React.useState(false);
  const {
    items = [],
    onChangeText,
    onBlur = () => {},
    value,
    style,
    containerStyle,
    id,
    placeholder,
    editable,
    error,
    label,
    isRequired = false,
  } = props;
  return (
    <>
      {label && (
        <Regular label={label} style={styles.labelStyle}>
          {isRequired ? <Regular color={colors.red} label={' *'} /> : null}
        </Regular>
      )}
      <TouchableOpacity
        disabled={editable}
        onPress={() => {
          setVisible(true);
          onBlur();
        }}
        style={[styles.dropDownContainer, containerStyle]}>
        <Medium
          label={
            items?.find(x => x?.id == id)?.title ||
            // items?.find(x => x?.id == id)?.id ||
            items?.find(x => x?.id == id)?.name ||
            placeholder
          }
          color={colors.black}
        />
        <Feather size={25} name={'chevron-down'} color={colors.black} />
      </TouchableOpacity>
      <Regular label={error ? `${t(error)}` : ''} style={styles.errorLabel} />
      <DropdownModal
        onClose={() => setVisible(false)}
        onChangeText={onChangeText}
        value={id}
        visible={visible}
        items={items}
      />
    </>
  );
};
export const InputWithIconNew = (props: props) => {
  const [visible, setVisible] = React.useState(false);
  const {
    items = [],
    onChangeText,
    onBlur = () => {},
    value,
    style,
    containerStyle,
    id,
    placeholder,
    editable,
    error,
    label,
    isRequired = false,
  } = props;
  return (
    <>
      {label && (
        <Regular label={label} style={styles.labelStyle}>
          {isRequired ? <Regular color={colors.red} label={' *'} /> : null}
        </Regular>
      )}
      <TouchableOpacity
        disabled={editable}
        onPress={() => {
          setVisible(true);
          onBlur();
        }}
        style={[styles.dropDownContainer, containerStyle]}>
        <Medium
          label={
            items?.find(x => x?.id == id)?.title ||
            items?.find(x => x?.id == id)?.id ||
            placeholder
          }
          color={colors.black}
        />
        <Feather size={25} name={'chevron-down'} color={colors.black} />
      </TouchableOpacity>
      <Regular label={error ? `${t(error)}` : ''} style={styles.errorLabel} />
      <DropdownModalNew
        onClose={() => setVisible(false)}
        onChangeText={onChangeText}
        value={id}
        visible={visible}
        items={items}
      />
    </>
  );
};
export const InputWithIcon2 = (props: props) => {
  const [visible, setVisible] = React.useState(false);
  const {
    items = [],
    onChangeText,
    onBlur = () => {},
    value,
    style,
    containerStyle,
    id,
    placeholder,
    editable,
    error,
    label,
    isRequired = false,
  } = props;
  const [selectedVehicleType, setSelectedVehicleType] = React.useState(value);
  return (
    <>
      {label && (
        <Regular label={label} style={styles.labelStyle}>
          {isRequired ? <Regular color={colors.red} label={' *'} /> : null}
        </Regular>
      )}
      <TouchableOpacity
        disabled={editable}
        onPress={() => {
          setVisible(true);
          onBlur();
        }}
        style={[styles.dropDownContainer, containerStyle]}>
        <Medium
          label={selectedVehicleType || placeholder}
          color={colors.black}
        />

        <Feather size={25} name={'chevron-down'} color={colors.black} />
      </TouchableOpacity>
      <Regular label={error ? `${t(error)}` : ''} style={styles.errorLabel} />
      <StartOrderDropdownModal
        onClose={() => setVisible(false)}
        onChangeText={selectedId => {
          const selectedType =
            items.find(x => x.id === selectedId)?.vehicle_type || placeholder;
          setSelectedVehicleType(selectedType);
          onChangeText(selectedId);
        }}
        value={id}
        visible={visible}
        items={items || []} // Provide a default empty array
      />
    </>
  );
};
export const InputWithIcon3 = (props: props) => {
  const [visible, setVisible] = React.useState(false);
  const {
    items = [],
    onChangeText,
    onBlur = () => {},
    value,
    label2,
    style,
    containerStyle,
    id,
    placeholder,
    editable,
    error,
    label,
    isRequired = false,
  } = props;
  const [selectedVehicleType, setSelectedVehicleType] = React.useState(value);
  return (
    <>
      {label && (
        <Regular label={label} style={styles.labelStyle}>
          {isRequired ? <Regular color={colors.red} label={' *'} /> : null}
        </Regular>
      )}
      <TouchableOpacity
        disabled={editable}
        onPress={() => {
          setVisible(true);
          onBlur();
        }}
        style={[styles.dropDownContainer, containerStyle]}>
        <Medium label={label2} color={colors.black} />
        {/* <Feather size={25} name={'chevron-down'} color={colors.black} /> */}
      </TouchableOpacity>
      <Regular label={error ? `${t(error)}` : ''} style={styles.errorLabel} />
      <StartOrderDropdownModal
        onClose={() => setVisible(false)}
        onChangeText={selectedId => {
          const selectedType =
            items.find(x => x.id === selectedId)?.vehicle_type || placeholder;
          setSelectedVehicleType(selectedType);
          onChangeText(selectedId);
        }}
        value={id}
        visible={visible}
        items={items || []} // Provide a default empty array
      />
    </>
  );
};
export const PrimaryPhoneInput = (props: props) => {
  const phoneRef = useRef<PhoneInput>(null);
  const {
    onChangeText = t => {},
    getCallingCode = t => {},
    value,
    style,
    label,
    placeholder = 'Enter phone number',
    labelStyle,
    containerStyle,
    secureTextEntry,
    isPassword,
    keyboardType,
    error,
    ref,
    layout = 'first',
    defaultCode = 'PK',
    onBlur,
  } = props;
  return (
    <View>
      <PhoneInput
        ref={phoneRef}
        value={value}
        defaultCode={defaultCode}
        layout={'first'}
        onChangeText={t => {
          onChangeText(t);
          const code = phoneRef.current?.getCallingCode();
          if (code) getCallingCode(code);
        }}
        placeholder={placeholder}
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textContainerStyle}
        textInputStyle={styles.textInputStyle}
        codeTextStyle={styles.codeTextStyle}
      />
      <Regular label={error} style={styles.errorLabel} />
    </View>
  );
};
export const SearchInput = (props: props) => {
  const [secure, setSecure] = useState(true);
  const {
    onChangeText,
    value,
    style,
    label,
    placeholder = t('search here'),
    labelStyle,
    containerStyle,
    secureTextEntry,
    keyboardType,
    error,
    onBlur,
    mtop,
    editable,
    disabledSearch = true,
  } = props;
  return (
    <View style={[styles.searchContainer, containerStyle]}>
      <TouchableOpacity
        disabled={disabledSearch}
        style={styles.searchIcon}
        onPress={() => {}}>
        <Feather size={mvs(22)} name={'search'} color={colors.grey} />
      </TouchableOpacity>
      <TextInput
        editable={editable}
        onBlur={onBlur}
        keyboardType={keyboardType}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={`${colors.grey}`}
        onChangeText={onChangeText}
        style={[styles.searchTextInput, style]}
      />
      <TouchableOpacity
        disabled={disabledSearch}
        style={styles.searchIcon}
        onPress={() => {}}>
        <Image source={menue} style={{height: mvs(15), width: mvs(25)}} />
      </TouchableOpacity>
    </View>
  );
};
export const InputWithIconComplainTypeSelection = (props: props) => {
  const [visible, setVisible] = React.useState(false);
  const {
    items = [],
    onChangeText,
    onBlur = () => {},
    value,
    style,
    containerStyle,
    id,
    editable,
    error,
    label,
    isRequired = false,
    placeholder,
  } = props;
  // console.log("item in dropdown",items)
  return (
    <>
      {label && (
        <Regular label={label} style={styles.labelStyle}>
          {isRequired ? <Regular color={colors.red} label={' *'} /> : null}
        </Regular>
      )}
      <TouchableOpacity
        disabled={editable}
        onPress={() => {
          setVisible(true);
          onBlur();
        }}
        style={[styles.dropDownContainer, containerStyle]}>
        <Medium
          color={colors.placeholder}
          // label={items?.find(x => x?.Leave_Category_Id == id)?.LeaveName || placeholder}
          label={items?.find(x => x?.id == id)?.name || placeholder}
        />
        {/* <>{
              console.log("djg",items)
              // console.log("hello",items?.find(x => x?.Leave_Category_Id == id)?.LeaveName )
        }</>  */}
        <Entypo
          size={25}
          style={{transform: [{rotate: visible ? '90deg' : '0deg'}]}}
          name={'chevron-small-right'}
          color={colors.black}
        />
      </TouchableOpacity>

      <Regular label={error ? `${t(error)}` : ''} style={styles.errorLabel} />
      <DropdownModalComplainTypeSelection
        onClose={() => setVisible(false)}
        onChangeText={onChangeText}
        value={id}
        visible={visible}
        items={items}
      />
    </>
  );
};
export const TextAreaInput = (props: props) => {
  const [secure, setSecure] = useState(true);
  const {language} = useAppSelector(s => s.user);
  const {
    onChangeText,
    value,
    style,
    label,
    placeholder = 'type here',
    labelStyle,
    containerStyle,
    errorStyle,
    secureTextEntry,
    isPassword,
    isCalendar,
    keyboardType,
    error,
    mainContainer,
    editable = true,
    onBlur = () => {},
    onPressIn = () => {},
    isRequired = false,
  } = props;
  return (
    <View style={[mainContainer]}>
      {label && (
        <Regular label={label} style={[styles.labelStyle, labelStyle]}>
          {isRequired ? <Regular color={colors.red} label={' *'} /> : null}
        </Regular>
      )}
      <View style={[styles.areaContainer, containerStyle]}>
        <TextInput
          numberOfLines={4}
          multiline
          editable={editable}
          onBlur={onBlur}
          onPressIn={onPressIn}
          keyboardType={keyboardType}
          secureTextEntry={isPassword && secure}
          value={value}
          placeholderTextColor={`${colors.placeholder}`}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[
            styles.areatextInput,
            style,
            {textAlign: I18nManager.isRTL ? 'right' : 'left'},
          ]}
        />
        {isPassword && (
          <TouchableOpacity
            style={styles.PasswordIcon}
            onPress={() => setSecure(!secure)}>
            <Feather
              size={25}
              name={secure ? 'eye' : 'eye-off'}
              color={colors.black}
            />
          </TouchableOpacity>
        )}
        {isCalendar && (
          <TouchableOpacity
            style={styles.PasswordIcon}
            // onPress={() => setSecure(!secure)}
          >
            <FontAwesome size={20} name={'calendar'} color={colors.black} />
          </TouchableOpacity>
        )}
      </View>
      <Regular
        numberOfLines={2}
        label={error ? error : ''}
        style={[styles.errorLabel, errorStyle]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    borderBottomWidth: mvs(0.7),
    borderColor: colors.bluecolor,
    height: mvs(45),
    // paddingTop: mvs(7),
    borderWidth: mvs(1),
    borderRadius: mvs(20),
    // borderRadius: mvs(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: mvs(10),
    backgroundColor: colors.white,
  },
  commentContainer: {
    alignItems: 'flex-start',
    borderWidth: mvs(0.7),
    // height: mvs(36),
    paddingVertical: mvs(7),
    borderRadius: mvs(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: mvs(10),
    backgroundColor: colors.secondary,
    marginTop: mvs(5),
  },
  areaContainer: {
    borderBottomWidth: mvs(0.7),
    borderColor: colors.primary,
    height: mvs(90),
    // paddingTop: mvs(7),
    borderWidth: mvs(1),
    borderRadius: mvs(10),
    // borderRadius: mvs(10),
    flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingHorizontal: mvs(10),
    backgroundColor: colors.white,
  },
  areatextInput: {
    color: colors.black,
    textAlignVertical: 'top',
    fontSize: mvs(12),
    flex: 1,
    height: '100%',
    // width: mvs(275),
    paddingVertical: mvs(5),
  },
  dropDownContainer: {
    // borderWidth: mvs(0.7),
    height: mvs(50),
    alignItems: 'center',
    marginBottom: mvs(10),
    borderRadius: mvs(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: mvs(10),
    backgroundColor: colors.secondary,
    borderWidth: mvs(3),
    borderColor: colors.primary,
  },
messageContainer: {
  alignItems: 'center', // Changed from 'flex-start'
  borderRadius: mvs(10),
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: '#F6F6F6',
  marginTop: mvs(5),
  flex: 1,
  minHeight: mvs(40), // Minimum height
},
  phoneContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    height: mvs(56),
    borderRadius: mvs(10),
    overflow: 'hidden',
  },
  textContainerStyle: {backgroundColor: colors.white},
textInput: {
  color: colors.black,
  fontSize: mvs(14),
  flex: 1,
  padding: mvs(0),
  maxHeight: mvs(120), // Optional: set a maximum height
  // Remove fixed height
},
  textInputStyle: {
    color: colors.primary,
    height: mvs(56),
    backgroundColor: colors.white,
    margin: 0,
    fontSize: mvs(17),
  },
  codeTextStyle: {
    color: colors.primary,
    fontSize: mvs(17),
  },
  labelStyle: {
    alignSelf: 'flex-start',
    color: colors.primary,
    marginBottom: mvs(3),
    paddingHorizontal: mvs(5),
  },
  PasswordIcon: {
    alignSelf: 'center',
    paddingHorizontal: mvs(5),
  },
  errorLabel: {
    // alignSelf: 'flex-start',
    color: colors.red,
    // backgroundColor: 'red',
    fontSize: mvs(10),
    marginBottom: mvs(5),
    height: mvs(15),

    marginHorizontal: mvs(5),
  },
  searchContainer: {
    height: mvs(52),
    borderRadius: mvs(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: mvs(16.5),
    backgroundColor: colors.white,
    alignItems: 'center',
    // ...colors.shadow,
  },
  searchIcon: {
    // backgroundColor: colors.primary,
    borderRadius: mvs(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchTextInput: {
    color: colors.black,
    textAlignVertical: 'center',
    height: mvs(36),
    fontSize: mvs(14),
    flex: 1,
    paddingHorizontal: mvs(10),
    padding: mvs(0),
  },
  secondaryErrorLabel: {
    alignSelf: 'flex-start',
    color: colors.primary,
    fontSize: mvs(10),
    marginBottom: mvs(10),
    marginHorizontal: mvs(5),
  },
    sendIcon: {
      width: mvs(50),
      height: mvs(52),
      backgroundColor: colors.primary,
      borderRadius: mvs(10),
      marginLeft: mvs(10),
      alignItems: 'center',
      justifyContent: 'center',
    },
});
