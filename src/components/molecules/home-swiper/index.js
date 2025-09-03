import {colors} from 'config/colors';
import {mvs, width} from 'config/metrices';
import {t} from 'i18next';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Medium from 'typography/medium-text';
import CustomSwiper from 'components/atoms/swiper';
import {PrimaryButton} from 'components/atoms/buttons';
import {SLIDES_LIST} from 'config/constants';
import FastImage from 'react-native-fast-image';
const HomeSwiper = ({item}) => {
  return (
    <View style={styles.container}>
      <CustomSwiper>
        {item?.map((item, index) => (
          <View key={index} style={styles.slide}>
            <FastImage
              source={{
                uri: item?.pic,
              }}
              style={styles.sliderImage}
            />
            {/* <View
              style={{
                position: 'absolute',
                bottom: mvs(30),
                width: '100%',
                paddingHorizontal: mvs(20),
              }}>
              <Medium
                label={item?.desc}
                color={colors.white}
                fontSize={mvs(10)}
                numberOfLines={2}
                style={{textAlign: 'center'}}
              />
              <PrimaryButton
                title={t('book_now')}
                containerStyle={{
                  alignSelf: 'center',
                  marginTop: mvs(10),
                  width: mvs(100),
                  height: mvs(30),
                  borderRadius: mvs(30),
                }}
                textStyle={{fontSize: mvs(12)}}
              />
            </View> */}
          </View>
        ))}
      </CustomSwiper>
    </View>
  );
};
export default HomeSwiper;
const styles = StyleSheet.create({
  container: {
    height: mvs(220),
    // marginHorizontal: mvs(20),
    marginTop: mvs(60),
  },
  sliderImage: {
    width: '90%',
    // width: width - mvs(40),
    height: mvs(180),
    borderRadius: mvs(10),
    resizeMode: 'contain',
  },
  dotStyle: {marginBottom: -mvs(40)},
  activeDotStyle: {marginBottom: -mvs(40), backgroundColor: colors.primary},
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
