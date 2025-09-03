import * as IMG from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import { mvs} from 'config/metrices';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  I18nManager,
} from 'react-native';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';
import styles from './styles';
import {colors} from 'config/colors';
import {Row} from 'components/atoms/row';
import Regular from 'typography/regular-text';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import { subscriptionList } from 'config/constants';

const SubscriptionScreen = props => {
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);

  return (
    <View style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Row style={{marginTop: mvs(15), alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Icon
            name={I18nManager.isRTL ? 'arrowright' : 'arrowleft'}
            size={mvs(20)}
            color={colors.black}
          />
        </TouchableOpacity>
        <Bold label={'Subscription'} fontSize={18} color={colors.black} />
        <View></View>
      </Row>
      <View style={styles.topcontainer}>
        <Medium
          label={'Subscription Status'}
          fontSize={16}
          color={colors.white}
        />
        <Bold label={'Free User'} fontSize={20} color={colors.white} />
      </View>
      <View style={styles.detailcontainer}>
        <Image source={IMG.star} style={styles.img} />

        <Bold
          label={'Premium'}
          color={colors.primary}
          fontSize={mvs(20)}
          style={{marginTop: mvs(10)}}
        />
        <Regular
          label={'Rs 900 / month'}
          color={colors.black}
          fontSize={mvs(16)}
          style={{marginTop: mvs(5), marginBottom: mvs(30)}}
        />
        {subscriptionList.map((item, index) => (
          <Row
            key={index}
            style={styles.subscriptionlist}>
            <Image
              resizeMode="contain"
              source={IMG.circledtick}
              style={styles.circledtickimg}
            />
            <Medium
              label={item.label}
              color={colors.black}
              fontSize={mvs(16)}
            />
          </Row>
        ))}
        <PrimaryButton
          title="Start 3 Days Free Trial"
          containerStyle={styles.containerStyle}
          onPress={() => navigate('AddCustomAlert')}
        />
        <PrimaryButton
          title="Restore Purchase"
          containerStyle={styles.containerStyle2}
          textStyle={{color: colors.primary}}
        />
      </View>
      <Regular
        label={'*Rs 99/month after the trial. Cancel any time'}
        fontSize={mvs(14)}
        color={colors.light}
        numberOfLines={5}
        style={{textAlign: 'center', marginVertical: mvs(15)}}
      />
      </ScrollView>
    </View>
  );
};
export default SubscriptionScreen;
