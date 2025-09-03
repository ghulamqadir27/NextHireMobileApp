import * as IMG from 'assets/images';
import {mvs} from 'config/metrices';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import Bold from 'typography/bold-text';
import styles from './styles';
import {colors} from 'config/colors';
import {Row} from 'components/atoms/row';
import Regular from 'typography/regular-text';
import CustomFlatList from 'components/atoms/custom-flatlist';
import RecentActivitiesCard from 'components/molecules/recent-activites-card';
const RecentactivityScreen = props => {
  const [loading, setLoading] = React.useState(false);
  const activities = [
    {
      id: 0,
      title: 'You have a new message from Admin',
    },
    {
      id: 1,
      title: 'You have a new message from Admin',
    },
    {
      id: 2,
      title:
        'You have a new message from Admin You have a new message from Admin You have a new message from Admin',
    },
    {
      id: 3,
      title:
        'You have a new message from Admin You have a new message from Admin You have a new message from Admin',
    },
  ];

  const renderItem = ({item}) => <RecentActivitiesCard item={item} />;

  return (
    <View style={styles.container}>
      <Row
        style={{
          marginTop: mvs(10),
          padding: mvs(20),
          backgroundColor: colors.white,
        }}>
        <Bold label={'Recent Activity'} fontSize={18} color={colors.black} />
        <Row style={{gap: mvs(15)}}>
          <TouchableOpacity onPress={() => navigate('Setting')}>
            <Image source={IMG.setting3} style={styles.imglogo} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('UserMessage')}>
            <Image source={IMG.usermessage} style={styles.imglogo} />
          </TouchableOpacity>
        </Row>
      </Row>
      <Regular
        label={'10 May,2025, 8:30 PM'}
        fontSize={16}
        color={colors.light}
        style={{marginHorizontal: mvs(20), marginBottom: mvs(10)}}
      />

      <CustomFlatList
        showsVerticalScrollIndicator={false}
        data={activities}
        renderItem={renderItem}
        contentContainerStyle={{
          backgroundColor: colors.blurred,
          padding: mvs(20),
        }}
      />
    </View>
  );
};
export default RecentactivityScreen;
