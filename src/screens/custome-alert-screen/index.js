import * as IMG from 'assets/images';
import { mvs} from 'config/metrices';
import {navigate, resetStack} from 'navigation/navigation-ref';
import React, {useState} from 'react';
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
import DeleteDropdownModal from 'components/molecules/modals/delete-dropdown-modal';
import CustomAlertKeywordCard from 'components/molecules/custom-alert-keyword-card';
const CustomAlertScreen2 = props => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const data = [
    {id: 1, label: 'Min. Hourly Rate', value: '$5', img: IMG.dollar},
    {id: 2, label: 'Min. Hourly Rate', value: '$5', img: IMG.dollar},
    {id: 3, label: 'Location', value: 'Anywhere', img: IMG.location},
    {id: 4, label: 'Payment method', value: 'Verified', img: IMG.verifygreen},
  ];
  const keywords = ['Flutter', 'Dart', 'Firebase'];

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
        <Bold label={'Custom Alert'} fontSize={18} color={colors.white} />
        <Row style={{gap: mvs(10)}}>
          <TouchableOpacity>
            <Image source={IMG.edit} style={styles.img} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image source={IMG.whitetrash} style={styles.trashimg} />
          </TouchableOpacity>
        </Row>
      </Row>
      <View
        style={styles.contentContainer}>
        <Image source={IMG.circlednoti} style={styles.notiimg} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity style={styles.title} onPress={()=>{navigate("AlertScreen")}}>
            <Bold label={'Flutter Job'} fontSize={18} color={colors.black} />
          </TouchableOpacity>
          <Regular
            numberOfLines={5}
            label={
              'You will get alerts whenever a new jib contains keywords you will add here.'
            }
            fontSize={14}
            color={colors.light}
            style={{textAlign: 'center', marginTop: mvs(10)}}
          />
          <Row style={{marginTop: mvs(10), flexWrap: 'wrap'}}>
            {data.map(item => (
              <Row
                key={item.id}
                style={styles.keywordrow}>
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
          <Bold
            numberOfLines={5}
            label={'Positive Keywords (11/30)'}
            fontSize={16}
            color={colors.black}
            style={{marginTop: mvs(35)}}
          />
          <View>
            <Row
              style={styles.keywordContainer}>
              {keywords.map((item, index) => {
                return (
                  <CustomAlertKeywordCard
                    key={item?.id || index}
                    item={item}
                    backgroundColor={colors.lightGreen}
                  />
                );
              })}
            </Row>
          </View>
          <Bold
            numberOfLines={5}
            label={'Negative Keywords (11/30)'}
            fontSize={16}
            color={colors.black}
            style={{marginTop: mvs(20)}}
          />
          <View>
            <Row
              style={styles.keywordContainer}>
              {keywords.map((item, index) => {
                return (
                  <CustomAlertKeywordCard
                    key={item?.id || index}
                    item={item}
                    backgroundColor={colors.lightGreen}
                    cross={true}
                  />
                );
              })}
            </Row>
          </View>
        </ScrollView>
      </View>
      <DeleteDropdownModal
        visible={modalVisible}
        // value={selectedValue}
        onClose={() => setModalVisible(false)}
        onChangeText={() => {
          setModalVisible(false);
        }}
      />
    </View>
  );
};
export default CustomAlertScreen2;
