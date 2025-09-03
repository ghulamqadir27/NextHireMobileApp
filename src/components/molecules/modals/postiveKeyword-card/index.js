import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {StyleSheet} from 'react-native';
import Regular from 'typography/regular-text';

const PositiveKeywordCard = ({
  item,
  backgroundColor,
  index,
  style,
  onPress = () => {},
  onPressCart = () => {},
  textColor,
}) => {
  console.log('item : ', item);
  return (
    <Row
      key={item.id}
      style={[styles.keywordrow, {backgroundColor}]}>
      <Regular label={item.keyword} fontSize={16} color={textColor} />
    </Row>
  );
};
export default PositiveKeywordCard;
const styles = StyleSheet.create({
  keywordrow: {
    justifyContent: 'flex-start',
    gap: mvs(7),
    borderWidth: mvs(1),
    borderColor: colors.primary,
    borderRadius: mvs(5),
    minWidth: mvs(50),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: mvs(0),
    paddingHorizontal: mvs(6),
  },
});
