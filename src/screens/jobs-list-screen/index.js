import * as IMG from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import {mvs} from 'config/metrices';
import {navigate, resetStack} from 'navigation/navigation-ref';
import React from 'react';
import {TouchableOpacity, View, Image, I18nManager} from 'react-native';
import {SearchInput} from 'components/atoms/inputs';
import Bold from 'typography/bold-text';
import styles from './styles';
import {colors} from 'config/colors';
import {Row} from 'components/atoms/row';
import Icon from 'react-native-vector-icons/AntDesign';
import CustomFlatList from 'components/atoms/custom-flatlist';
import JobsListCard from 'components/molecules/job-list-card';
import {useNavigation} from '@react-navigation/native';

const JobsListScreen = props => {
  const navigation = useNavigation();
  const [switchButton, setSwitchButton] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const data = [
    {
      id: 1,
      title: 'Mobile App Development',
    },
    {
      id: 2,
      title: 'Web Development',
    },
    {
      id: 3,
      title: 'Graphic Design',
    },
    {
      id: 4,
      title: 'Graphic Design',
    },
    {
      id: 5,
      title: 'Graphic Design',
    },
    {
      id: 6,
      title: 'Graphic Design',
    },
  ];
  const renderItem = ({item}) => (
    <JobsListCard
      item={item}
      onPress={() => {
        navigate('Jobs'), console.log('clicking');
      }}
    />
  );

  return (
    <View style={styles.container}>
      <Row style={{marginTop: mvs(15)}}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Icon
            name={I18nManager.isRTL ? 'arrowright' : 'arrowleft'}
            size={mvs(20)}
            color={colors.black}
          />
        </TouchableOpacity>
        <Bold label={'Jobs'} fontSize={18} color={colors.black} />
        <Row style={{gap: mvs(15)}}>
          <TouchableOpacity onPress={() => navigate('Setting')}>
            <Image source={IMG.setting3} style={styles.imglogo} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('UserMessage')}>
            <Image source={IMG.usermessage} style={styles.imglogo} />
          </TouchableOpacity>
        </Row>
      </Row>
      <SearchInput containerStyle={styles.searchContainer} />
      <Row
        style={{
          marginTop: mvs(25),
          backgroundColor: colors.disabled,
          borderRadius: mvs(10),
        }}>
        <PrimaryButton
          onPress={() => setSwitchButton(true)}
          title="Keyboard Jobs"
          containerStyle={[
            styles.categoryButton,
            {
              backgroundColor: !switchButton
                ? colors.transparent
                : colors.primary,
            },
          ]}
          textStyle={{color: switchButton ? colors.white : colors.black}}
        />
        <PrimaryButton
          onPress={() => setSwitchButton(false)}
          title="Category Jobs"
          containerStyle={[
            styles.categoryButton,
            {
              backgroundColor: switchButton
                ? colors.transparent
                : colors.primary,
            },
          ]}
          textStyle={{color: switchButton ? colors.black : colors.white}}
        />
      </Row>
      <View style={{marginTop: mvs(25), marginBottom: mvs(180)}}>
        <CustomFlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};
export default JobsListScreen;
