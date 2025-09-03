// In App.js in a new project
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from 'config/colors';
import * as React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LoginScreen from 'screens/login-screen';
import Notifications from 'screens/notifications';
import Onboarding from 'screens/on-boarding';
import Splash from 'screens/splash';
import {horizontalAnimation} from '../utils';
import DrawerNavigation from './drawer-navigation/drawer-navigation';
import UserTab from 'screens/user-tab';
import SignUpScreen from 'screens/sign-up-screen';
import MpinScreen from 'screens/mpin-screen';
import CustomAlertScreen from 'screens/custom-alert';
import SubscriptionScreen from 'screens/subscription';
import AddCustomAlertScreen from 'screens/add-custom-alert-screen';
import CustomAlertScreen2 from 'screens/custome-alert-screen';
import AlertScreen from 'screens/alert-screen';
import ActivityScreen from 'screens/activity';
import RecentactivityScreen from 'screens/recent-activity';
import ProfileScreen from 'screens/profile-screen';
import PortfolioScreen from 'screens/portfolio-screen';
import AddPortfolioScreen from 'screens/add-portfolio-screen';
import JobsHomeScreen from 'screens/jobs-home-screen';
import JobsScreen from 'screens/jobs-screen';
import JobDetailScreen from 'screens/job-detail-screen';
import AiMentorScreen from 'screens/ai-mentor-screen';
import ChatScreen from 'screens/ai-mentor-chat-screen';
import JobsListScreen from 'screens/jobs-list-screen';
import ForgotPasswordScreen from 'screens/forgot-password';
import ResetPasswordScreen from 'screens/reset-password';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 0, backgroundColor: colors.primary}} />
      <StatusBar
        translucent={false}
        backgroundColor={colors.white}
        barStyle={'dark-content'}
      />
      <Stack.Navigator
         initialRouteName="Splash"
        // initialRouteName="UserTab"
      //  initialRouteName="Drawer"
        screenOptions={horizontalAnimation}>
        <Stack.Group>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="UserTab" component={UserTab} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
          <Stack.Screen name="Mpin" component={MpinScreen} />
          <Stack.Screen name="CustomAlert" component={CustomAlertScreen} />
          <Stack.Screen name="Subscription" component={SubscriptionScreen} />
          <Stack.Screen name="AddCustomAlert" component={AddCustomAlertScreen} />
          <Stack.Screen name="CustomAlert2" component={CustomAlertScreen2} />
          <Stack.Screen name="AlertScreen" component={AlertScreen} />
          <Stack.Screen name="Activity" component={ActivityScreen} />
          <Stack.Screen name="Recentactivity" component={RecentactivityScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Portfolio" component={PortfolioScreen} />
          <Stack.Screen name="AddPortfolio" component={AddPortfolioScreen} />
          <Stack.Screen name="JobsHome" component={JobsHomeScreen} />
          <Stack.Screen name="JobsList" component={JobsListScreen} />
          <Stack.Screen name="Jobs" component={JobsScreen} />
          <Stack.Screen name="JobDetail" component={JobDetailScreen} />
          <Stack.Screen name="AiMentor" component={AiMentorScreen} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
          <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Group>
        <Stack.Group>
        </Stack.Group>
        <Stack.Screen name="Drawer" component={DrawerNavigation} />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
