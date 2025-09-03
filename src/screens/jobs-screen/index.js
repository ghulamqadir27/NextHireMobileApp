import * as IMG from 'assets/images';
import {mvs} from 'config/metrices';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {TouchableOpacity, View, Image, I18nManager} from 'react-native';
import Bold from 'typography/bold-text';
import styles from './styles';
import {colors} from 'config/colors';
import {Row} from 'components/atoms/row';
import Icon from 'react-native-vector-icons/AntDesign';
import CustomFlatList from 'components/atoms/custom-flatlist';
import JobsCard from 'components/molecules/jobs-card';
import {useNavigation} from '@react-navigation/native';
import {getJobsList} from 'services/api/auth-api-actions';
import { Loader } from 'components/atoms/loader';

const JobsScreen = props => {
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);
  // const data = [
  //   {
  //     id: 0,
  //     title: 'Flutter app-Upwork',
  //     price: '$100',
  //     location: 'Lahore',
  //     time: '2 hours ago',
  //     des: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  //     keywords: ['Flutter', 'Dart', 'Firebase'],
  //   },
  //   {
  //     id: 1,
  //     title: 'Flutter app-Amazon',
  //     price: '$200',
  //     location: 'Karachi',
  //     time: '3 hours ago',
  //     des: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  //     keywords: ['Flutter', 'Dart', 'Firebase'],
  //   },
  //   {
  //     id: 2,
  //     title: 'Flutter app-Netflix',
  //     price: '$300',
  //     location: 'Islamabad',
  //     time: '4 hours ago',
  //     des: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  //     keywords: ['Flutter', 'Dart', 'Firebase'],
  //   },
  //   {
  //     id: 3,
  //     title: 'Flutter app-Netflix',
  //     price: '$300',
  //     location: 'Islamabad',
  //     time: '4 hours ago',
  //     des: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  //     keywords: ['Flutter', 'Dart', 'Firebase'],
  //   },
  // ];
  const [JobsList, setJobsList] = React.useState([]);

  const renderItem = ({item}) => (
    <JobsCard
      item={item}
      onPress={() => {
        navigate('JobDetail', { jobId: item?.id });
      }}
    />
  );

  const getjobs = async () => {
    try {
      setLoading(true);
      const response = await getJobsList();
      setJobsList(response?.jobs);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    getjobs();
  }, []);
  return (
    <View style={styles.container}>
      <Row>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Icon
            name={I18nManager.isRTL ? 'arrowright' : 'arrowleft'}
            size={mvs(20)}
            color={colors.black}
          />
        </TouchableOpacity>
        <Bold label={'Jobs'} fontSize={18} color={colors.black} />

        <TouchableOpacity onPress={() => {}}>
          <Image source={IMG.notification2} style={styles.imglogo} />
        </TouchableOpacity>
      </Row>
      {loading ? (
          <Loader />
        ) : (
      <View style={{marginVertical: mvs(35)}}>
        <CustomFlatList
          showsVerticalScrollIndicator={false}
          data={JobsList}
          renderItem={renderItem}
        />
      </View>
      )}
    </View>
  );
};
export default JobsScreen;
