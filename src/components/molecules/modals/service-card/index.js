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

const ServiceCard = ({
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
    // <View style={styles.bg}>

    <Row key={item.id} style={styles.container}>
      <Image source={item.img} style={styles.rowimg} />
      <View style={{alignItems: 'flex-start',width:'73%'}}>
        <Regular
          label={item.label}
          fontSize={14}
          color={colors.black}
          // style={{marginTop: mvs(10)}}
        />
        <Bold
          numberOfLines={5}
          label={item.value}
          fontSize={16}
          color={colors.primary}
          style={{width:'100%'}}
        />
      </View>
    </Row>
    // </View>
  );
};
export default React.memo(ServiceCard);
const styles = StyleSheet.create({
  row: {alignItems: 'flex-end'},
  container: {
    backgroundColor: colors.blurred,
    // gap: mvs(5),
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: mvs(7),
    paddingHorizontal: mvs(7),
    marginVertical: mvs(15),
    paddingVertical: mvs(7),
    borderRadius: mvs(15),
    width: '48%',
  },
 
 
  rowimg: {borderRadius: mvs(5),
    width: mvs(35),
    height: mvs(35)
  },
});
