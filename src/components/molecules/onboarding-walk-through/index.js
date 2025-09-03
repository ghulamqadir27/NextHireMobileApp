import React from 'react';
import FastImage from 'react-native-fast-image';
import {mvs} from 'config/metrices';
import {StyleSheet, View} from 'react-native';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import {colors} from 'config/colors';
import CustomSwipeButton from 'components/atoms/SwipeNextButton/SwipeNextButton';

const OnboardingWalkThrough = ({item, handleNext, isLast}) => {

  return (
    <View style={styles.container}>
      <View style={{marginTop: mvs(20)}}>
        <Bold label={item.title} color={colors.black} fontSize={mvs(28)} />
        <Regular
          label={
            'It is a long established fact that a reader will be distracted by the readable content.'
          }
          color={colors.light}
          fontSize={mvs(14)}
          numberOfLines={3}
          style={{marginTop: mvs(10)}}
        />
        <View style={{marginTop: mvs(10)}}>
          <CustomSwipeButton onSuccess={handleNext} isLast={isLast} />
        </View>
      </View>
      <View style={styles.imgcontainer}>
        <FastImage
          resizeMode="contain"
          source={item.image}
          style={styles.img}
        />
      </View>
    </View>
  );
};

export default OnboardingWalkThrough;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    height: mvs(300),
    width: '100%',
    overflow: 'hidden',
    marginTop: '30%',
  },
  txt_container: {
    alignItems: 'center',
    marginBottom: mvs(10),
    paddingHorizontal: mvs(50),
  },
  imgcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  dot: {
    width: mvs(10),
    height: mvs(10),
    borderRadius: mvs(5),
    marginHorizontal: mvs(5),
  },
});
