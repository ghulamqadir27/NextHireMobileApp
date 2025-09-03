import {CrossModal} from 'assets/icons';
import {PrimaryButton} from 'components/atoms/buttons';
import {ModalWrapper} from 'components/atoms/modal-wrapper';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import React from 'react';
import * as IMG from 'assets/images';

import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Medium from 'typography/medium-text';
import Bold from 'typography/bold-text';

const DropdownModal = ({
  style = {},
  value,
  visible = false,
  onClose = item => {},
  onChangeText,
  items = [],
}) => {
  return (
    <ModalWrapper
      onBackdropPress={() => onClose()}
      onBackButtonPress={() => onClose()}
      visible={visible}
      style={[styles.contentContainerStyle, style]}>
      <View style={styles.container}>
        <View style={styles.header} />
        <TouchableOpacity onPress={() => onClose()} style={styles.cross}>
          <CrossModal height={mvs(25)} width={mvs(25)} />
        </TouchableOpacity>

        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: mvs(20),
            paddingTop: mvs(10),
          }}>
          {/* <TouchableOpacity
            onPress={() => onClose()}
            style={styles.button}> */}
          <Image source={IMG.round} style={styles.imglogo} />
          <Bold
            label={'Your Account Created Successfully'}
            color={colors.black}
            numberOfLines={4}
            style={{fontSize: mvs(20),alignSelf:'center',width:'80%',textAlign:'center'}}
          />

          {/* </TouchableOpacity> */}
          <PrimaryButton
            containerStyle={{
              borderRadius: mvs(50),
              height: mvs(50),
              marginVertical: mvs(25),
            }}
            onPress={() => onClose()}
            title={t('Done')}
          />
        </ScrollView>
      </View>
    </ModalWrapper>
  );
};
export default DropdownModal;
const styles = StyleSheet.create({
  contentContainerStyle: {
    width: '100%',
    backgroundColor: colors.transparent,
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  container: {
    maxHeight: mvs(572),
    minHeight: mvs(200),
    backgroundColor: colors.white,
    paddingTop: mvs(15),
    borderTopRightRadius: mvs(20),
    borderTopLeftRadius: mvs(20),
  },
  header: {
    height: mvs(3),
    borderRadius: mvs(5),
    width: mvs(104),
    alignSelf: 'center',
    backgroundColor: colors.lightGray,
    marginBottom: mvs(20),
  },
  pick: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: mvs(20),
  },
  // button: {
  //   // paddingHorizontal: mvs(30),
  //   marginBottom: mvs(20),
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   // borderBottomWidth: 0.7,
  // },
  cross: {
    padding: mvs(18),
    alignSelf: 'flex-end',
    position: 'absolute',
    // backgroundColor: 'red',
  },
  imglogo:{
    width: mvs(150),
    height: mvs(150),
    marginBottom: mvs(20),
    alignSelf: 'center',
  },
});
