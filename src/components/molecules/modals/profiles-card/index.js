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
import {SpecialistLocation} from 'assets/icons';
import Entypo from 'react-native-vector-icons/Entypo';
import { mvs } from 'config/metrices';
import { colors } from 'config/colors';

const ProfileCard = ({
  item,
  style,
  onPress = () => {},
  onPressCart = () => {},
}) => {
  const {t} = i18n;

  return (
    <View style={styles.container}>
    <Row style={styles.row}>
        <Image
          source={IMG.upwork}
          resizeMode="contain"
          style={styles.imgStyle}
        />
        <Medium
          label={item?.profile}
          fontSize={mvs(14)}
          numberOfLines={100}
          style={{width:'60%'}}
        />
        
    </Row>
    </View>
  );
};
export default ProfileCard;
const styles = StyleSheet.create({
  container: {
    // height: mvs(50),
    // width: '20%',
    // borderRadius: mvs(15),
    flex: 1,
    marginBottom: mvs(20),
    borderWidth: 1,
    borderColor:colors.primary,
    padding:mvs(10),
    borderRadius:mvs(10),
    // padding: mvs(10),
  },
  row: {
    // height: mvs(50),
    // width: '20%',
    // borderRadius: mvs(15),
    justifyContent: 'flex-start',
    gap: mvs(10),
    alignItems: 'center',
    // padding: mvs(10),
  },
  imgStyle: {
    borderRadius: mvs(6),
    height: mvs(35),

    width: mvs(35),
    // alignSelf: 'center',
  },
});
