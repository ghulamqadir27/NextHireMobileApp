import Header1x2x from 'components/atoms/headers/header-1x-2x';
import {Loader} from 'components/atoms/loader';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import moment from 'moment';
import React, {useEffect} from 'react';
import {Alert, FlatList, Image, View} from 'react-native';
import i18n from 'translation';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import styles from './styles';
import {EmptyList} from 'components/atoms/empty-list';
import CustomFlatList from 'components/atoms/custom-flatlist';
import {NOTIFICATION_LIST} from 'config/constants';
import * as IMG from 'assets/images';
import {onReadNotification} from 'services/api/auth-api-actions';
import {UTILS} from 'utils';

const Notifications = props => {
  const dispatch = useAppDispatch();
  const {userInfo, notifications} = useAppSelector(s => s.user);
  console.log('skks', notifications);
  const {t} = i18n;
  const [loading, setLoading] = React.useState(false);
  
  const readNotifications = async () => {
    try {
      const unreadNoti = notifications
        ?.filter(x => x?.is_read == '0')
        ?.map(x => x?.id);
      console.log('unreadNoti==>', unreadNoti);
      if (!unreadNoti?.length) return;
      await onReadNotification(unreadNoti);
    } catch (error) {
      console.log('error in read notification', UTILS.returnError(error));
      Alert.alert('error', UTILS.returnError(error));
    }
  };

  React.useEffect(() => {
    readNotifications();
  }, []);
  const renderAppointmentItem = ({item, index}) => (
    <View
      key={index}
      style={[
        styles.rendercontainer,
        {
          backgroundColor:
            item?.is_read == '1' ? colors.white : colors?.blueHalf,
        },
      ]}>
      <View
        style={{
          alignSelf: 'flex-end',
        }}>
        <Image
          source={IMG.notificationIcon}
          resizeMode="cover"
          style={{width: mvs(25), height: mvs(25)}}
        />
      </View>
      <Row style={{justifyContent: 'flex-start'}}>
        <View style={styles.titleandtextview}>
          <Row>
            <Medium label={item?.title} color={colors.black} />
          </Row>
          <Regular label={item?.text} numberOfLines={3} color={colors.placeholder} />
        </View>
      </Row>
      <Regular
        label={moment(item?.created_at).format('DD MMM, YYYY  hh:mm a')}
        style={{alignSelf: 'flex-end'}}
        fontSize={mvs(12)}
        color={colors.primary}
      />
    </View>
  );
  const itemSeparatorComponent = () => {
    return <View style={{paddingVertical: mvs(5)}}></View>;
  };
  return (
    <View style={styles.container}>
      <Header1x2x title={t('notifications')} />
      {loading ? (
        <Loader />
      ) : (
        <CustomFlatList
          // emptyList={<EmptyList label={t('no_notification')} />}
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
          data={notifications}
          renderItem={renderAppointmentItem}
          ItemSeparatorComponent={itemSeparatorComponent()}
          keyExtractor={(_, index) => index?.toString()}
        />
      )}
    </View>
  );
};
export default Notifications;
