import * as IMG from 'assets/images';
import {Row} from 'components/atoms/row';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import {mvs} from 'config/metrices';
import {colors} from 'config/colors';
import Bold from 'typography/bold-text';

const PortfolioCard = ({
  item,
  style,
  onPress = () => {},
  onPressCart = () => {},
}) => {
  return (
    <View style={styles.container}>
      <Bold
        label={item?.title}
        fontSize={mvs(16)}
        numberOfLines={3}
        style={{width: '100%'}}
      />
      <Regular
        label={item?.description}
        fontSize={mvs(14)}
        style={{width: '100%', marginVertical: mvs(20)}}
        numberOfLines={200}
      />
      <Row style={styles.row}>
        <View
          style={styles.categorycontainer}>
          <Medium
            label={item?.category}
            fontSize={mvs(14)}
            numberOfLines={100}
            style={{width: '100%'}}
            color={colors.green}
          />
        </View>
        <Row style={{gap: mvs(7)}}>
          <Image
            source={IMG.editblack}
            style={styles.img}
            resizeMode="contain"
          />
          <Image
            source={IMG.trashblack}
            style={styles.img}
            resizeMode="contain"
          />
        </Row>
      </Row>
    </View>
  );
};
export default PortfolioCard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: mvs(20),
    borderRadius: mvs(10),
    paddingHorizontal: mvs(10),
    paddingVertical: mvs(20),
    backgroundColor: colors.reddish,
  },
  row: {
    alignItems: 'center',
  },
  imgStyle: {
    borderRadius: mvs(6),
    height: mvs(35),
    width: mvs(35),
  },
  img: {
    height: mvs(25),
    width: mvs(25),
  },
  categorycontainer:{
    maxWidth: '75%',
    borderWidth: 1,
    borderColor: colors.green,
    borderRadius: mvs(7),
    padding: mvs(5),
    backgroundColor: colors.lightGreen,
  }
});
