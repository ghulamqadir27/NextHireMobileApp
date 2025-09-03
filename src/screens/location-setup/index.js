import Header1x2x from 'components/atoms/headers/header-1x-2x';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import React from 'react';
import {View} from 'react-native';
import i18n from 'translation';
import styles from './styles';
import CustomMap from 'components/atoms/custom-map';
import {Marker} from 'react-native-maps';
import GoogleSearchBar from 'components/atoms/google-auto-place';
const LocationSetup = props => {
  const user = useAppSelector(s => s?.user);
  const userInfo = user?.userInfo;
  const language = user?.language;
  const dispatch = useAppDispatch();
  const {t} = i18n;

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <GoogleSearchBar />
        <CustomMap>
          <Marker
            coordinate={{latitude: 37.78825, longitude: -122.4324}}
            title="Marker Title"
            description="Marker Description"
          />
        </CustomMap>
      </View>
    </View>
  );
};
export default LocationSetup;
