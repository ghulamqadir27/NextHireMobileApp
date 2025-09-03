import OnboardingWalkThrough from 'components/molecules/onboarding-walk-through';
import {colors} from 'config/colors';
import {ONBOARDING_LIST} from 'config/constants';
import React, {useRef} from 'react';
import { View} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles';
import {navigate} from 'navigation/navigation-ref';
import { UTILS } from 'utils';

const Onboarding = props => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = async () => {
    const actualIndex = swiperRef?.current?.state?.index ?? 0;
    if (actualIndex === ONBOARDING_LIST.length - 1) {
      console.log("navigating to SignUp");
      // await UTILS.setItem('hasLaunched', 'true');
      navigate('SignUp');
    } else {
      console.log("scrolling to next slide", actualIndex);
      swiperRef.current.scrollBy(1);
    }
  };
  
  const handleSwipe = (index) => {
    // Prevent manual swiping by resetting to the current index
    swiperRef.current.scrollTo(currentIndex, false);
  };

  return (
      <View style={styles.container}>
        <Swiper
          ref={swiperRef}
          onIndexChanged={index => {
            setCurrentIndex(index);
          }}
          loop={false}
          scrollEnabled={false} // Disable manual screen swiping
          onMomentumScrollEnd={(e, state, context) => {
            // This will be called after a programmatic swipe
          }}
          dot={<View style={[styles.dot, {backgroundColor: colors.gray}]} />}
          activeDot={
            <View
              style={[
                styles.dot,
                {
                  backgroundColor: colors.primary,
                },
              ]}
            />
          }>
          {ONBOARDING_LIST.map((item, index) => (
            <OnboardingWalkThrough
              key={index}
              item={item}
              handleNext={handleNext}
              isLast={index === ONBOARDING_LIST.length - 1}
            />
          ))}
        </Swiper>
      </View>
  );
};

export default Onboarding;