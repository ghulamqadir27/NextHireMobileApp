import {useIsFocused, useNavigation} from '@react-navigation/native';
import * as IMG from 'assets/images';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {HomeList} from 'config/constants';
import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {
  Image,
  ScrollView,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import styles from './styles';
import {IconButton, PrimaryButton} from 'components/atoms/buttons';
import ServiceCard from 'components/molecules/service-card';
import ImageCarousel from 'components/molecules/image-carousal';
import Entypo from 'react-native-vector-icons/Entypo';

const HomeTab = props => {
    const navigation = useNavigation();
  const images = [
    {id: '1', img: IMG.Square},
    {id: '2', img: IMG.Square},
    {id: '3', img: IMG.Square},
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <Row style={{marginTop: mvs(5), alignItems: 'center'}}>
          <Row style={{gap: mvs(15)}}>
            <Image
              source={IMG.profilepic}
              style={styles.profilepics}
              resizeMode="contain"
            />
            <View>
              <Row style={{justifyContent: 'flex-start', gap: mvs(7)}}>
                <Medium label={'Hey'} fontSize={14} />
                <Image
                  source={IMG.wave}
                  style={styles.wave}
                  resizeMode="contain"
                />
              </Row>
              <Bold label={'Sheraz Ahmad'} fontSize={mvs(18)} />
            </View>
          </Row>

          {/* <Row style={{gap: mvs(10)}}>
            <Image
              source={IMG.message3}
            style={{width: mvs(23), height: mvs(23)}}
              resizeMode="contain"
            />
            <Image
              source={IMG.setting3}
              style={styles.messageicon}
              resizeMode="contain"
            />
            <Image
              source={IMG.usermessage2}
              style={styles.messageicon}
              resizeMode="contain"
            />
          </Row> */}
          <TouchableOpacity onPress={()=>navigation?.toggleDrawer()}>
            <Entypo name="menu" size={30} color="black" />
          </TouchableOpacity>
        </Row>
        <Row style={styles.giftcard}>
          <Image source={IMG.gift} style={styles.giftpic} resizeMode="cover" />
          <View style={{gap: mvs(8)}}>
            <Bold
              label={'Try UpAlerts 3 days for free.'}
              fontSize={mvs(14)}
              color={colors.white}
            />

            <Bold
              label={'Tap to activate premium.'}
              fontSize={mvs(14)}
              color={colors.white}
            />
          </View>
          <Image
            source={IMG.nextArrow}
            style={styles.next}
            resizeMode="cover"
          />
        </Row>
        <Row style={styles.wealthcard}>
          <View style={{gap: mvs(5), width: '75%'}}>
            <Bold
              label={'AI Credit Balance: 0'}
              fontSize={mvs(16)}
              color={colors.black}
            />
            <Regular
              label={'AI  Credits are used for AI Cover Message Reply and AI'}
              fontSize={mvs(14)}
              color={colors.black}
              numberOfLines={3}
            />
            <IconButton
              title={'Add more'}
              img={IMG.greenNext}
              textStyle={{color: colors.green, marginHorizontal: mvs(0)}}
              containerStyle={styles.containerStyle}
              onPress={() => {}}
            />
          </View>
          <Image source={IMG.wealth} style={styles.wealth} resizeMode="cover" />
        </Row>

        <ImageCarousel data={images} />

        <Row style={{marginTop: mvs(20)}}>
          <Bold label={'Tools'} />
          <Regular
            label={'View all'}
            color={colors.green}
            style={{textDecorationLine: 'underline'}}
          />
        </Row>
        <View style={styles.serviceCardContainer}>
          {HomeList.map((item, index) => {
            return (
              <ServiceCard
                onPress={() => {
                  navigate(item?.moveTo);
                }}
                key={item?.id || index}
                backgroundColor={{backgroundColor: colors.red}}
                item={item}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
export default HomeTab;
