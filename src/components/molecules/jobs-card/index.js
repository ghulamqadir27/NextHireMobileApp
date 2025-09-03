import * as IMG from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import {Row} from 'components/atoms/row';
import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import i18n from 'translation';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';
import {SpecialistLocation} from 'assets/icons';
import Octicons from 'react-native-vector-icons/Octicons';
import Bold from 'typography/bold-text';
import PositiveKeywordCard from '../modals/postiveKeyword-card';
import JobKeywordCard from '../jobs-keyword-card';

const JobsCard = ({
  item,
  style,
  onPress = () => {},
  onPressCart = () => {},
}) => {
const getTimeSincePosted = (postedAt) => {
  const postedDate = new Date(postedAt).getTime(); // UTC ms
  const now = new Date().getTime(); // UTC ms
  const diffInMs = now - postedDate;

  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const hours = Math.floor(diffInMinutes / 60);
  const minutes = diffInMinutes % 60;

  return { hours, minutes };
};
const { hours, minutes } = getTimeSincePosted(item?.postedAt);
console.log(`${hours} hours, ${minutes} minutes ago`);

  return (
    // <View style={styles.container}>
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Row style={{alignItems: 'center'}}>
        <Bold
          label={item?.title}
          fontSize={mvs(16)}
          numberOfLines={100}
          style={{width: '85%'}}
        />
        {item?.isVerified ? (
          <Image source={IMG.verify} style={styles.imglogo} />
        ) : (
          <Octicons name="unverified" size={25} color="gray" />
        )}
      </Row>
      <Row style={{marginVertical: mvs(10)}}>
        <Row style={styles.row}>
          <Image source={IMG.dollar} style={styles.imglogo} />
          <Regular
            label={item?.priceRange}
            fontSize={mvs(14)}
            numberOfLines={100}
            style={{width: '75%'}}
          />
        </Row>
        <Row style={styles.row}>
          <Image source={IMG.location} style={styles.imglogo} />
          <Regular
            label={'Remote'}
            fontSize={mvs(14)}
            numberOfLines={2}
            style={{width: '80%'}}
          />
        </Row>
        <Row style={styles.row}>
          <Image source={IMG.time} style={[styles.imglogo,{marginLeft:mvs(-15)}]} />
          <Regular
            label={hours > 0 ? `${hours} hours ago` : `${minutes} minutes ago`}
            fontSize={mvs(14)}
            numberOfLines={100}
            style={{width: '60%'}}
          />
        </Row>
      </Row>
      <Regular
        label={item?.description}
        fontSize={mvs(14)}
        numberOfLines={3}
        style={{width: '100%'}}
      />
      <View style={[{marginTop: mvs(8)}]}>
        <Row
          style={{
            justifyContent: 'flex-start',
            gap: mvs(15),
            flexWrap: 'wrap',
          }}>
          {item?.tags.map((item, index) => {
            return (
              <JobKeywordCard
                // onPress={() => {
                //   console.log('move to :', item?.moveTo),
                //     navigate(item?.moveTo);
                // }}
                key={item?.id || index}
                item={item}
                backgroundColor={colors.lightGreen}
              />
            );
          })}
        </Row>
      </View>
    </TouchableOpacity>
    // </View>
  );
};
export default JobsCard;
const styles = StyleSheet.create({
  container: {
    marginBottom: mvs(20),
    borderWidth: mvs(1),
    borderColor: colors.border,
    padding: mvs(10),
    borderRadius: mvs(10),
    flex: 1,
  },
  // bg: {
  //   width: '100%',
  //   height: '100%',
  //   justifyContent: 'flex-end',
  // },
  imglogo: {
    width: mvs(22),
    height: mvs(22),
  },
  row: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '40%',
    gap: mvs(5),
  },
  paramcontainer: {
    marginTop: mvs(15),
    paddingHorizontal: mvs(20),
  },
});
