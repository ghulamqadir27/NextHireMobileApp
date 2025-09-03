import * as IMG from 'assets/images';
import {IconButton} from 'components/atoms/buttons';
import { mvs} from 'config/metrices';
import {navigate, resetStack} from 'navigation/navigation-ref';
import React from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import Bold from 'typography/bold-text';
import styles from './styles';
import {colors} from 'config/colors';
import {Row} from 'components/atoms/row';
import Regular from 'typography/regular-text';
const CustomAlertScreen = props => {
  const [loading, setLoading] = React.useState(false);

  return (
    <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Row style={{marginTop: mvs(15)}}>
        <Bold label={'Custom Alert'} fontSize={18} color={colors.black} />
        <Row style={{gap: mvs(15)}}>
          <TouchableOpacity onPress={() => navigate('Setting')}>
            <Image source={IMG.setting3} style={styles.imglogo} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('UserMessage')}>
            <Image source={IMG.usermessage} style={styles.usermessage} />
          </TouchableOpacity>
        </Row>
      </Row>
      <View style={{alignSelf:'center'}}>
        <Image source={IMG.customalert} style={styles.img} />
      </View>
      <Bold
        label={'No Custom Alert Yet'}
        color={colors.black}
        fontSize={mvs(18)}
        style={{alignSelf: 'center',marginTop:mvs(20)}}
      />
      <Regular
        label={
          'It seems like you don’t add any custom alert kindly add one and get instant alert of your desire jobs'
        }
        fontSize={mvs(14)}
        color={colors.light}
        numberOfLines={5}
        style={{textAlign:'center',marginTop:mvs(15)}}
      />
      <IconButton
              title="Add now"
              containerStyle={styles.containerStyle}
              img={IMG.nextArrow}
              onPress={() => navigate('Subscription')}
            />
      </ScrollView>
    </View>
  );
};
export default CustomAlertScreen;
