import React, { useEffect, useRef, useState } from 'react';
import { View, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { mvs } from 'config/metrices';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.75;
const SIDE_SPACING = (width - ITEM_WIDTH) / 2.5;

const ImageCarousel = ({ data = [] }) => {
  const carouselRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
      setForceUpdate((prev) => !prev);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleLayout = () => {
    if (carouselRef.current) {
      carouselRef.current.snapToItem(0, false);
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ borderRadius: mvs(10), overflow: 'hidden', marginTop: mvs(15) }}>
      <Image
        source={item.img}
        style={{ width: ITEM_WIDTH, height: mvs(180), borderRadius: mvs(10) }}
        resizeMode="cover"
      />
    </View>
  );

  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      onLayout={handleLayout}
    >
      {isReady && (
        <Carousel
          key={forceUpdate}
          ref={carouselRef}
          data={data}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={ITEM_WIDTH}
          inactiveSlideScale={0.9}
          inactiveSlideOpacity={0.7}
          loop={true}
          autoplay={false}
          enableSnap={true}
          loopClonesPerSide={2}
          snapToAlignment="center"
          pagingEnabled={false}
          decelerationRate="fast"
          contentContainerCustomStyle={{ paddingHorizontal: SIDE_SPACING }}
          slideStyle={{ alignSelf: 'center' }}
        />
      )}
    </View>
  );
};

export default ImageCarousel;
