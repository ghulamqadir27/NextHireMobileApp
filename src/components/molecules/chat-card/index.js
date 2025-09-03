import {mvs} from 'config/metrices';
import React from 'react';
import {Image, ImageBackground, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Regular from 'typography/regular-text';

import {Row} from 'components/atoms/row';
import Bold from 'typography/bold-text';
import * as IMG from 'assets/images';
import Medium from 'typography/medium-text';
import {t} from 'i18next';
import {colors} from 'config/colors';

const ChatCard = ({item, style, onPress, loading}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Row style={styles.InnerContainer}>
        <View style={styles.imageContainer}>
          <Image
            borderRadius={mvs(10)}
            source={
              item?.receiver_image ? {uri: item?.receiver_image} : IMG.Drawerman
            }
            style={styles.backGroundImage}
          />
          {/* <Medium
            label={t('get_movers')}
            fontSize={mvs(7)}
            color={colors.primary}
            style={{marginTop: mvs(5)}}
          /> */}
          {/* <Image source={{uri: item?.image}} style={styles.innerImage} /> */}
        </View>
        <View style={{paddingHorizontal: mvs(10), flex: 1}}>
          <Bold label={item?.receiver_name} />
          <Regular numberOfLines={1} label={item?.receiver_email} color={colors.black}/>
        </View>
        {/* <Regular label={'08:06'} /> */}
      </Row>
    </TouchableOpacity>
  );
};
export default React.memo(ChatCard);
