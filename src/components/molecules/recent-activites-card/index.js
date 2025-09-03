import * as IMG from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import {Row} from 'components/atoms/row';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import i18n from 'translation';
import Medium from 'typography/medium-text';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';
const RecentActivitiesCard = ({
  item,
  style,
  onPress = () => {},
  onPressCart = () => {},
}) => {
  const {t} = i18n;

  return (
    <View style={styles.container}>
      <Row
        style={{
          alignItems: 'center',
          backgroundColor: colors.white,
          paddingHorizontal: mvs(10),
          borderRadius: mvs(10),
          paddingVertical: mvs(15),
        }}>
        <Image
          source={IMG.activity}
          resizeMode="contain"
          style={styles.imgStyle}
        />
        <Medium
          label={item?.title}
          fontSize={mvs(14)}
          numberOfLines={100}
          style={{width: '60%'}}
        />
        <PrimaryButton title={'View'} containerStyle={styles.btn} />
      </Row>
    </View>
  );
};
export default RecentActivitiesCard;
const styles = StyleSheet.create({
  container: {
    marginBottom: mvs(20),
    flex: 1,
  },
  btn: {
    borderRadius: mvs(10),
    width: '20%',
  },
  imgStyle: {
    borderRadius: mvs(6),
    height: mvs(50),
    width: '15%',
  },
});
