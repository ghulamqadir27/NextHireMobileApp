import AsyncStorage from '@react-native-async-storage/async-storage';
import * as IMG from 'assets/images';
import DrawerHomeCard from 'components/molecules/drawer-home-card';
import DeleteDropdownModal from 'components/molecules/modals/delete-dropdown-modal';
import {colors} from 'config/colors';
import {STORAGEKEYS} from 'config/constants';
import {mvs, width} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {navigate} from 'navigation/navigation-ref';
import React, {useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {getStatusChange, onLogoutPress} from 'services/api/auth-api-actions';
import {setUserInfo} from 'store/reducers/user-reducer';
import Medium from 'typography/medium-text';
import {UTILS} from 'utils';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawerContent = props => {
  const user = useAppSelector(s => s?.user);
  const userInfo = user?.userInfo;
  const dispatch = useAppDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const ChangeStatus = async () => {
    try {
      const newStatus = '0';
      const res = await getStatusChange(newStatus);

      const updatedUserInfo = {...userInfo, online_status: newStatus};

      await AsyncStorage.setItem(
        STORAGEKEYS.user,
        JSON.stringify(updatedUserInfo),
      );
      dispatch(setUserInfo(updatedUserInfo));

      console.log(' resp==========>', res);
    } catch (error) {
      console.log('Error:', UTILS.returnError(error));
      Alert.alert('Error', UTILS.returnError(error));
    }
  };
  const LogoutAccount = async () => {
    Alert.alert('Logout!', 'Are you sure you want to Logout your account?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Logout',
        onPress: async () => {
          if (userInfo) {
            await ChangeStatus();

            dispatch(onLogoutPress());
          } else {
            props?.navigation?.navigate('Login');
          }
        },
      },
    ]);
  };
  const handleDeletePress = () => {
    setIsModalVisible(true); 
  };

  const handleConfirmDelete = () => {
    console.log('Item confirmed for deletion!');
    setIsModalVisible(false); 
  };

  const handleCancelDelete = () => {
    console.log('Deletion cancelled.');
    setIsModalVisible(false); 
  };
  return (
    <View style={styles.drawerContainer}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigate('UserTab')}>
        <View style={styles.drawerheader}>
          <Image
            source={IMG.profilepic}
            style={styles.profilepics}
            resizeMode="contain"
          />
        </View>

        <Medium
          label={'Malik Humair'}
          fontSize={mvs(18)}
          color={colors.black}
          style={{marginTop: mvs(6)}}
        />
      </TouchableOpacity>
      <ScrollView style={styles.scrololstyle}>
        <DrawerHomeCard
          onPress={() => navigate('Recentactivity')}
           icon1={
            <MaterialIcons
              name={'history'}
              size={mvs(25)}
              color={colors.black}
              style={{marginRight: mvs(16)}}
            />
          }
          label1={'Recent activity'}
          containerStyle={styles.helpStyle}
        />

        <DrawerHomeCard
          onPress={() => navigate('Subscription')}
          icon1={
            <MaterialIcons
              name={'subscriptions'}
              size={mvs(25)}
              color={colors.black}
              style={{marginRight: mvs(16)}}
            />
          }
          label1={'Subscription'}
          containerStyle={styles.helpStyle}
          color={colors.red} 
        />

        <DrawerHomeCard
          onPress={() => navigate('UploadDocumentsScreen')}
           icon1={
            <Feather
              name={'settings'}
              size={mvs(25)}
              color={colors.black}
              style={{marginRight: mvs(16)}}
            />
          }
          label1={'Setting'}
          containerStyle={styles.helpStyle}
        />

        <DrawerHomeCard
          onPress={() => handleDeletePress()}
           icon1={
            <FontAwesome5
              name={'trash-alt'}
              size={mvs(25)}
              color={colors.black}
              style={{marginRight: mvs(16)}}
            />
          }
          label1={'Delete Account'}
          containerStyle={styles.helpStyle}
          color={colors.red}
        />
      </ScrollView>

      <DrawerHomeCard
        onPress={() =>
          LogoutAccount()
        }
        icon1={ <MaterialIcons
              name={'logout'}
              size={mvs(25)}
              color={colors.red}
              style={{marginRight: mvs(16)}}
            />}
        label1={'logout'}
        br={8}
        containerStyle={styles.helpStyle}
      />
      <DeleteDropdownModal
        visible={isModalVisible}
        onClose={handleCancelDelete}  
      />
    </View>
  );
};
export default CustomDrawerContent;
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  profilepics: {
    width: mvs(90),
    height: mvs(90),
    borderRadius: mvs(25),
  },
  header: {
    height: mvs(230),
    width: width - 60,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: mvs(1),
    borderColor: colors.border,
  },
  needHelpContainer: {
    backgroundColor: colors.white,
    width: width - 100,
    marginHorizontal: mvs(17),
    borderRadius: mvs(8),
    marginVertical: mvs(8),
    alignItems: 'center',
    ...colors.shadow,
  },
  helpStyle: {margin: mvs(10), width: width - 120, height: mvs(27)},
  drawerlogo: {
    width: mvs(200),
    resizeMode: 'contain',
  },
  drawerheader: {
    height: mvs(100),
    width: mvs(100),
    borderRadius: mvs(50),
    borderWidth: mvs(3),
    borderColor: colors.primary,
    backgroundColor: colors.transparent,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  drawerman: {
    height: '100%',
    width: '100%',
    borderRadius: mvs(50),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  scrololstyle: {
    flexGrow: 1,
    paddingVertical: mvs(10),
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
});
