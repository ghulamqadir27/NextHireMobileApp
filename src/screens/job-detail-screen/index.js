import * as IMG from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import { mvs } from 'config/metrices';
import React from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  I18nManager,
} from 'react-native';
import Bold from 'typography/bold-text';
import styles from './styles';
import {colors} from 'config/colors';
import {Row} from 'components/atoms/row';
import Regular from 'typography/regular-text';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import CustomAlertKeywordCard from 'components/molecules/custom-alert-keyword-card';
import { getJobById } from 'services/api/auth-api-actions';
import { Loader } from 'components/atoms/loader';

const JobDetailScreen = props => {
  const navigation = useNavigation();
   const { route } = props;
  const { jobId } = route.params;
  console.log("jobId", jobId);
  const [loading, setLoading] = React.useState(false);
  const [job, setJob] = React.useState({});
  const keywords = ['Flutter', 'React', 'Firebase'];
 const getjobs = async () => {
    try {
      setLoading(true);
      const response = await getJobById(jobId);
      setJob(response?.job);
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

  const getTimeSincePosted = (postedAt) => {
  const postedDate = new Date(postedAt).getTime(); // UTC ms
  const now = new Date().getTime(); // UTC ms
  const diffInMs = now - postedDate;
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const hours = Math.floor(diffInMinutes / 60);
  const minutes = diffInMinutes % 60;
  return { hours, minutes };
};
const { hours, minutes } = getTimeSincePosted(job?.postedAt);
console.log(`${hours} hours, ${minutes} minutes ago`);

  const data = [
    {id: 1, label: 'Location', value: 'Remote', img: IMG.location},
    {id: 2, label: 'Budget', value: job?.priceRange, img: IMG.dollar},
    {id: 3, label: 'Posted', value: hours > 0 ? `${hours} hours ago` : `${minutes} minutes ago`, img: IMG.time},
    {id: 4, label: 'Skill', value: job?.experienceLevel, img: IMG.menu},
  ];
  return (
    <View style={styles.container}>
      <Row style={styles.row}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Icon
            name={I18nManager.isRTL ? 'arrowright' : 'arrowleft'}
            size={mvs(20)}
            color={colors.white}
          />
        </TouchableOpacity>
        <Bold label={'Job Details'} fontSize={18} color={colors.white} />
        <TouchableOpacity>
          <Image source={IMG.share} style={styles.img} />
        </TouchableOpacity>
      </Row>
      <View style={styles.innerContainer}>
        <Image source={IMG.jobdetail} style={styles.notiimg} />
        <ScrollView showsVerticalScrollIndicator={false}>
         {loading ? (
  <Loader />
) : (
  <>
          <Bold
            label={job?.title}
            fontSize={18}
            color={colors.black}
            style={{
              textAlign: 'center',
              alignSelf: 'center',
              marginTop: mvs(50),
            }}
            numberOfLines={6}
          />

          <Row style={{marginTop: mvs(10), flexWrap: 'wrap'}}>
            {data.map(item => (
              <Row
                key={item.id}
                style={styles.contentcontainer}>
                <Image source={item.img} style={styles.rowimg} />
                <View>
                  <Regular
                    numberOfLines={5}
                    label={item.label}
                    fontSize={14}
                    color={colors.light}
                    style={{marginTop: mvs(10)}}
                  />
                  <Bold
                    numberOfLines={5}
                    label={item.value}
                    fontSize={16}
                    color={colors.black}
                    style={{textAlign: 'center'}}
                  />
                </View>
              </Row>
            ))}
          </Row>
          <View style={{marginTop: mvs(25), gap: mvs(10)}}>
            <Bold
              numberOfLines={5}
              label={'Job Detail'}
              fontSize={16}
              color={colors.black}
              style={{marginTop: mvs(25)}}
            />
            <Regular
              label={job?.description}              
              numberOfLines={300}
              fontSize={15}
            />
          </View>
          <Bold
            numberOfLines={5}
            label={'Skills'}
            fontSize={16}
            color={colors.black}
            style={{marginTop: mvs(25)}}
          />
            <Row
              style={styles.keywordcontainer}>
              {job?.tags?.map((item, index) => {
                return (
                  <CustomAlertKeywordCard
                    key={item?.id || index}
                    item={item}
                    backgroundColor={colors.red}
                  />
                );
              })}
            </Row>
            </>
                )}
          <PrimaryButton
            title={'Write AI Proposal'}
            containerStyle={{marginTop: mvs(35)}}
          />
          <PrimaryButton
            title={'Apply on Upwork'}
            containerStyle={[styles.containerStyle, {marginBottom: mvs(20)}]}
            textStyle={{color: colors.primary}}
          />
        </ScrollView>
      </View>
    </View>
  );
};
export default JobDetailScreen;
