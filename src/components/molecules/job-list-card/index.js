import * as IMG from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import {Row} from 'components/atoms/row';
import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';
import Bold from 'typography/bold-text';

const JobsListCard = ({
  item,
  style,
  onPress = () => {},
  onPressCart = () => {},
}) => {
  return (
    <View style={styles.container}>
      <Row>
        <Bold
          label={item?.title}
          fontSize={mvs(16)}
          numberOfLines={100}
          style={{width: '80%'}}
        />
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}>
          <Image source={IMG.trashblack} style={styles.imglogo} />
        </TouchableOpacity>
      </Row>
      <Row>
        <PrimaryButton
          title={'Disable Alerts'}
          containerStyle={styles.btn}
          textStyle={styles.textStyle}
        />
        <PrimaryButton
          title={'View'}
          containerStyle={styles.btn}
          textStyle={styles.textStyle}
          onPress={onPress}
        />
      </Row>
    </View>
  );
};
export default JobsListCard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.disabled,
    marginBottom: mvs(15),
    borderWidth: mvs(1),
    borderColor: colors.disabled,
    padding: mvs(10),
    borderRadius: mvs(10),
  },
  imglogo: {
    width: mvs(22),
    height: mvs(22),
  },
  row: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '33%',
    gap: mvs(5),
  },
  paramcontainer: {
    marginTop: mvs(15),
    paddingHorizontal: mvs(20),
  },
  btn: {
    marginTop: mvs(25),
    width: '47%',
    height: mvs(43),
    paddingHorizontal: mvs(0),
  },
  textStyle: {
    fontSize: mvs(16),
  },
});
