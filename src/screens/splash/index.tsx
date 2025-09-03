import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as IMG from 'assets/images';
import React from 'react';
import {View, Image} from 'react-native';
import RootStackParamList from '../../types/navigation-types/root-stack';
import {useAppDispatch} from 'hooks/use-store';
import styles from './styles';
import {mvs} from 'config/metrices';
import {UTILS} from 'utils';
import {STORAGEKEYS} from 'config/constants';

type props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const Splash = (props: props) => {
  const {navigation} = props;

  React.useEffect(() => {
    (async () => {
      try {
        let screen: any = 'Login';
        const isAppLaunched = await UTILS.getItem('hasLaunched');
        if (isAppLaunched) {
          await UTILS.getItem(STORAGEKEYS.user).then((data: any) => {
            if (data) {
              const user = JSON.parse(data);
              console.log('user', user);
              screen = 'Drawer';
            }
            
          });
        } else {
          await UTILS.setItem('hasLaunched', 'true');
          screen = 'Onboarding';
        }
        setTimeout(() => {
              navigation?.replace(screen);
            }, 7000);
      } catch (error) {}
    })();
  }, []);

  return (
    <View style={{...styles.container}}>
      <Image
        source={IMG.nextHire}
        resizeMode={'contain'}
        style={{width: mvs(320), height: '50%'}}
      />
    </View>
  );
};
export default Splash;
