import {colors} from 'config/colors';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import Bold from 'typography/bold-text';
import {mvs} from 'config/metrices';
import Regular from 'typography/regular-text';
import { PrimaryButton } from 'components/atoms/buttons';
import { navigate } from 'navigation/navigation-ref';
const MpinScreen = ({navigation}) => {
  const [pin, setPin] = useState('');

  const handlePress = value => {
    if (value === '⌫') {
      setPin(pin.slice(0, -1)); // Remove last digit
    } else if (value === '➡') {
      if (pin.length === 4) {
        Alert.alert('Success', 'MPIN Set Successfully!', [
          {text: 'OK', onPress: () => navigate('Drawer')},
        ]);
      } else {
        Alert.alert('Error', 'Enter a 4-digit MPIN');
      }
    } else if (pin.length < 4) {
      setPin(pin + value);
    }
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Bold
        label={'Create your MPIN'}
        fontSize={mvs(26)}
        style={{alignSelf: 'center'}}
      />
      <Regular
        label={'Create a four-digit passcode to secure your account'}
        fontSize={mvs(16)}
        style={{textAlign: 'center', marginTop: mvs(15)}}
        numberOfLines={3}
      />

      {/* PIN Indicator */}
      <View style={styles.pinIndicator}>
        {[...Array(4)].map((_, index) => (
          <View
            key={index}
            style={[styles.dot, pin.length > index && styles.filledDot]}
          />
        ))}
      </View>
      {/* Set MPIN Button */}
      <PrimaryButton title='Set MPIN' containerStyle={[
          styles.mpinButton,
          pin.length === 4 ? styles.buttonActive : styles.buttonInactive,
        ]} 
        disabled={pin.length !== 4}
        textStyle={styles.buttonText}
        onPress={() => handlePress('➡')}
        />
      {/* Number Pad */}
      <View style={styles.keypad}>
  {[
    ['1', '2', '3', '-'],
    ['4', '5', '6', '⎵'],
    ['7', '8', '9', '⌫'],  // ⎵ represents "Space"
    [',', '0', '.', '➡'],
  ].map((row, rowIndex) => (
    <View key={rowIndex} style={styles.row}>
      {row.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.key,
            item === '-' && styles.dashKey, // Background for dash
            item === '⎵' && styles.dashKey, // Background for dash
            item === '⌫' && styles.spaceKey, // Red for space
            item === '➡' && styles.enterKey, // Blue for enter
          ]}
          onPress={() => handlePress(item)}
          disabled={item === '•' || item === ''}
        >
          <Bold label={item} fontSize={mvs(24)} style={[
            item === '⎵' && styles.spaceKeyText, // White text for space
            item === '➡' && styles.enterKeyText, // White text for enter
            item === '-' && styles.dashKeyText, // White text for enter
            item === '⌫' && styles.enterKeyText, // White text for enter
          ]} color={colors.black} />
        </TouchableOpacity>
      ))}
    </View>
  ))}
</View>

    </View>
  );
};

export default MpinScreen;
