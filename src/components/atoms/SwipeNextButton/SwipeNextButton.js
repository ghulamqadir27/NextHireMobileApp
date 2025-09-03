import React, { useRef, useState } from 'react';
import { View, StyleSheet, Animated, PanResponder, Dimensions } from 'react-native';
import { mvs } from 'config/metrices';
import { colors } from 'config/colors';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const RAIL_WIDTH = SCREEN_WIDTH - 60;
const THUMB_WIDTH = 120;

const CustomSwipeButton = ({ onSuccess, isLast }) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const [hoveringArrows, setHoveringArrows] = useState(false);
  const [released, setReleased] = useState(false);

  const threshold = RAIL_WIDTH - THUMB_WIDTH - 5; // When swipe is considered successful
  const arrowHideZone = threshold - 60; // Start hiding arrows here

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,

      onPanResponderMove: (_, gestureState) => {
        let dx = Math.min(Math.max(0, gestureState.dx), threshold + 10);
        translateX.setValue(dx);

        // Show/hide arrows based on position
        setHoveringArrows(dx >= arrowHideZone);
      },

      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx >= threshold) {
          // Swipe completed
          Animated.timing(translateX, {
            toValue: threshold,
            duration: 150,
            useNativeDriver: true,
          }).start(() => {
            setReleased(true);
            onSuccess?.();
            setTimeout(() => {
              translateX.setValue(0);
              setHoveringArrows(false);
              setReleased(false);
            }, 500);
          });
        } else {
          // Reset
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
          }).start(() => {
            setHoveringArrows(false);
          });
        }
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <View style={styles.rail} />
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.thumb,
          {
            transform: [{ translateX }],
          },
        ]}>
        <Medium style={styles.thumbText} label={isLast ? 'Get Started' : 'Next'} />
      </Animated.View>

      {/* Arrows */}
      {!hoveringArrows && !released && (
        <View style={styles.arrows}>
          <Bold style={styles.arrow} label={'›'} />
          <Bold style={[styles.arrow, { color: colors.lightGray }]} label={'›'} />
          <Bold style={[styles.arrow, { color: colors.white }]} label={'›'} />
          <Bold style={[styles.arrow, { color: colors.white }]} label={'›'} />
          
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: mvs(60),
    borderRadius: mvs(30),
    backgroundColor: colors.rail,
    marginTop: mvs(20),
    overflow: 'hidden',
    justifyContent: 'center',
  },
  rail: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: mvs(30),
    backgroundColor: colors.primary,
  },
  thumb: {
    width: THUMB_WIDTH,
    height: mvs(50),
    borderRadius: mvs(25),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginLeft: mvs(6),
  },
  thumbText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: mvs(18),
  },
  arrows: {
    position: 'absolute',
    right: mvs(40),
    flexDirection: 'row',
  },
  arrow: {
    fontSize: mvs(44),
    color: colors.light,
    marginLeft: 2,
    marginTop: mvs(-10),
  },
});

export default CustomSwipeButton;
