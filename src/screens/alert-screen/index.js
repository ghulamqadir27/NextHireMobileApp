import * as IMG from 'assets/images';
import { mvs} from 'config/metrices';
import {navigate, resetStack} from 'navigation/navigation-ref';
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
import {useNavigation} from '@react-navigation/native';
import ServiceCard from 'components/molecules/modals/service-card';
import PositiveKeywordCard from 'components/molecules/modals/postiveKeyword-card';
import { ScrollView } from 'react-native';

const AlertScreen = props => {
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);
  const data = [
    {id: 1, label: 'Min. Hourly Rate', value: '$5', img: IMG.dollar2},
    {id: 2, label: 'Min. Hourly Rate', value: '$5', img: IMG.dollar2},
    {id: 3, label: 'Location', value: 'Anywhere', img: IMG.dollar2},
    {id: 4, label: 'Payment method', value: 'Verified', img: IMG.dollar2},
  ];
  const positiveKeyword = [
    {id: 1, keyword: 'flutter'},
    {id: 2, keyword: 'firebase'},
    {id: 3, keyword: 'hybrid app'},
    {id: 4, keyword: 'react'},
    {id: 5, keyword: 'react native'},
    {id: 6, keyword: 'android'},
    {id: 7, keyword: 'react native'},
    {id: 7, keyword: 'flutter'},
  ];
  const negativeKeyword = [
    {id: 1, keyword: 'flutter'},
    {id: 2, keyword: 'firebase'},
    {id: 3, keyword: 'hybrid app'},
    
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1,backgroundColor: colors.white}}>
    <View style={styles.container}>
      <Row style={styles.row}>
        <Bold label={'Custom Alert'} fontSize={18} color={colors.primary} />
        <Row style={{gap: mvs(10)}}>
          <TouchableOpacity>
            <Image source={IMG.user} style={styles.img} />
          </TouchableOpacity>
        </Row>
      </Row>
      <Row style={[styles.row]}>
        <Bold label={'Flutter Job'} fontSize={20} color={colors.black} />
        <Row style={{gap: mvs(10)}}>
          <TouchableOpacity>
            <Image source={IMG.editblack} style={styles.img} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={IMG.trashblack} style={styles.img} />
          </TouchableOpacity>
        </Row>
      </Row>
      <Regular
        label={'You will get alerts whenever a new jib contains keywords you will add here.'       }
        fontSize={15}
        color={colors.light}
        style={{marginTop: mvs(15), paddingHorizontal: mvs(20)}}
        numberOfLines={3}
      />
      <View style={styles.paramcontainer}>
        <Bold label={'Parameters'} fontSize={20} color={colors.black} />
        <View
          style={styles.servicecardContainer}>
          {data.map((item, index) => {
            return (
              <ServiceCard
                onPress={() => {
                  console.log('move to :', item?.moveTo),
                    navigate(item?.moveTo);
                }}
                key={item?.id || index}
                item={item}
              />
            );
          })}
        </View>
      </View>
      <Bold
        label={'Positive Keywords (11/30)'}
        fontSize={20}
        color={colors.black}
        style={[styles.paramcontainer, {marginBottom: mvs(15)}]}
      />
      <View style={[styles.paramcontainer, {marginTop: mvs(8)}]}>
        <Row
          style={styles.keywordsContainer}>
     
          {positiveKeyword.map((item, index) => {
            return (
              <PositiveKeywordCard
                onPress={() => {
                  console.log('move to :', item?.moveTo),
                    navigate(item?.moveTo);
                }}
                key={item?.id || index}
                item={item}
                backgroundColor={colors.lightGreen}
                textColor={colors.green}
              />
            );
          })}
        </Row>
      </View>
      <Bold
        label={'Negative Keywords (11/30)'}
        fontSize={20}
        color={colors.black}
        style={[styles.paramcontainer, {marginBottom: mvs(15)}]}
      />
      <View style={[styles.paramcontainer, {marginTop: mvs(8)}]}>
        <Row
          style={[styles.keywordsContainer,{marginBottom: mvs(20)}]}>
     
          {negativeKeyword.map((item, index) => {
            return (
              <PositiveKeywordCard
                onPress={() => {
                  console.log('move to :', item?.moveTo),
                    navigate(item?.moveTo);
                }}
                key={item?.id || index}
                item={item}
                backgroundColor={colors.lightred}
                textColor={colors.red}
              />
            );
          })}
        </Row>
      </View>
    </View>
    </ScrollView>
  );
};
export default AlertScreen;
