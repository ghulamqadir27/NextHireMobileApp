import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as SVGS from 'assets/icons/tab-icons';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {useAppSelector} from 'hooks/use-store';
import {Text, TouchableOpacity, View} from 'react-native';
import ActivityScreen from 'screens/activity';
import CustomAlertScreen from 'screens/custom-alert';
import HomeTab from 'screens/home-tab';
import JobsHomeScreen from 'screens/jobs-home-screen';
import JobsScreen from 'screens/jobs-screen';
import PortfolioScreen from 'screens/portfolio-screen';

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', paddingBottom: mvs(10)}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;
        const Icon = SVGS[`${route.name}${isFocused ? 'Active' : ''}`];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              height: mvs(80),
            }}>
            <View
              style={{
                backgroundColor: isFocused ? colors.primary : colors.transparent,
                borderRadius: mvs(50),
                height: mvs(50),
                width: mvs(50),
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: isFocused ? mvs(5) : mvs(-5),
              }}>
              <Icon height={mvs(24)} width={mvs(24)} />
            </View>
            <Text
              style={{
                fontSize: mvs(12),
                color: isFocused ? colors.primary : colors.black,
                marginTop: isFocused ? mvs(5) : 0,
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export const TabBar = () => {
  const Tab = createBottomTabNavigator();
  const {user} = useAppSelector(s => s);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Alert" component={CustomAlertScreen} />
      <Tab.Screen name="Jobs" component={JobsScreen} />
      <Tab.Screen name="Portfolio" component={PortfolioScreen} />
      <Tab.Screen name="Activities" component={ActivityScreen} />
    </Tab.Navigator>
  );
};
