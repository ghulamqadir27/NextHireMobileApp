import * as IMG from 'assets/images';
import {IconButton, PrimaryButton} from 'components/atoms/buttons';
import {mvs} from 'config/metrices';
import {navigate, resetStack} from 'navigation/navigation-ref';
import React from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  I18nManager,
} from 'react-native';
import {SearchInput} from 'components/atoms/inputs';
import Bold from 'typography/bold-text';
import styles from './styles';
import {colors} from 'config/colors';
import {Row} from 'components/atoms/row';
import Regular from 'typography/regular-text';
import Icon from 'react-native-vector-icons/AntDesign';
import CustomFlatList from 'components/atoms/custom-flatlist';
import JobsListCard from 'components/molecules/job-list-card';
import { useNavigation } from '@react-navigation/native';

const JobsHomeScreen = props => {
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
  ];
  const renderItem = ({item}) => <JobsListCard item={item} />;

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
      <SearchInput
        // placeholder={'Search for jobs'}
        containerStyle={{
          marginTop: mvs(25),
          borderWidth: 1,
          borderColor: colors.primary,
        }}
      />
      <Row
        style={{
          marginTop: mvs(25),
          backgroundColor: colors.disabled,
          borderRadius: mvs(10),
        }}>
        <PrimaryButton
          onPress={() => setSwitchButton(true)}
          title="Keyboard Jobs"
        containerStyle={[styles.buttonStyle,{   backgroundColor: switchButton ? colors.primary : colors.transparent,}]}
          textStyle={{color: switchButton ? colors.white : colors.black}}
        />
        <PrimaryButton
          onPress={() => setSwitchButton(false)}
          title="Category Jobs"
          containerStyle={[styles.buttonStyle,{   backgroundColor: switchButton ? colors.transparent : colors.primary,}]}
          textStyle={{color: switchButton ? colors.black : colors.white}}
        />
      </Row>
          <ScrollView showsVerticalScrollIndicator={false}>      
      <>
        {switchButton ? (
          <View>
            {/* <CustomFlatList
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={renderItem}
            /> */}
            <>
            <Image
              source={IMG.jobHome}
              style={styles.img}
              resizeMode="contain"
            />
            <Bold
              label={'No Custom Keyword Job'}
              color={colors.black}
              fontSize={mvs(20)}
              style={{alignSelf: 'center'}}
            />
            <Regular
              label={'This seems to be like you didn’t subscribe any category'}
              fontSize={mvs(14)}
              color={colors.light}
              numberOfLines={5}
              style={{textAlign: 'center', marginTop: mvs(15)}}
            />
            <IconButton
              title="Add Custom Keywords"
              containerStyle={[styles.containerStyle2]}
              onPress={() => {
                console.log('clicking'), navigate('JobsList');
              }}
            />
          </>
          </View>
        ) : (
          <>
            <Image
              source={IMG.jobHome}
              style={styles.img}
              resizeMode="contain"
            />
            <Bold
              label={'No Categories Found'}
              color={colors.black}
              fontSize={mvs(20)}
              style={{alignSelf: 'center'}}
            />
            <Regular
              label={'This seems to be like you didn’t subscribe any category'}
              fontSize={mvs(14)}
              color={colors.light}
              numberOfLines={5}
              style={{textAlign: 'center', marginTop: mvs(15)}}
            />
            <IconButton
              title="Add now"
              containerStyle={styles.containerStyle}
              img={IMG.nextArrow}
              onPress={() => {
                console.log('clicking'), navigate('JobsList');
              }}
            />
          </>
        )}
      </>
      </ScrollView>
    </View>
  );
};
export default JobsHomeScreen;
