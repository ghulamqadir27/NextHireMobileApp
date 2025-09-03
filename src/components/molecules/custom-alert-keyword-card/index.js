import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {StyleSheet} from 'react-native';
import Regular from 'typography/regular-text';

const CustomAlertKeywordCard = ({
  item,
  backgroundColor,
  index,
  style,
  onPress = () => {},
  onPressCart = () => {},
  cross = false,
}) => {
  console.log('item : ', item);
  return (
    <Row
      style={[styles.row, {borderColor: cross ? colors.red : colors.primary}]}>
      <Regular
        label={item}
        fontSize={16}
        color={cross ? colors.red : colors.primary}
      />
    </Row>
  );
};
export default CustomAlertKeywordCard;
const styles = StyleSheet.create({
  row: {
    justifyContent: 'flex-start',
    gap: mvs(7),
    borderWidth: mvs(1),
    borderRadius: mvs(5),
    paddingHorizontal: mvs(8),
        minWidth: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imglogo: {
    width: mvs(17),
    height: mvs(17),
  },
});
