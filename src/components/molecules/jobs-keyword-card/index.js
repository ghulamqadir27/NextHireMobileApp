import * as IMG from 'assets/images';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';

const JobKeywordCard = ({
  item,
  backgroundColor,
  index,
  style,
  onPress = () => {},
  onPressCart = () => {},
}) => {
  const {t} = i18n;
  const Icon = item.icon;
  console.log('item : ', item);
  return (
    <Row
      key={item.id}
      style={[styles.keywordrow, {backgroundColor}]}>
      <Regular label={item} fontSize={16} color={colors.green} />
    </Row>
  );
};
export default JobKeywordCard;
const styles = StyleSheet.create({
  keywordrow: {
    justifyContent: 'flex-start',
    gap: mvs(7),
    borderRadius: mvs(5),
    minWidth: mvs(50),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: mvs(2),
    paddingHorizontal: mvs(10),
  },
});
