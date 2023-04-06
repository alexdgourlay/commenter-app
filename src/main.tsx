import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from './screens';
import Home from './screens/home';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, StyleSheet, View} from 'react-native';
import {IconButton} from './components/atoms';
import Web from './screens/web';

export type MainNavParamList = {
  [Routes.Home]: undefined;
  [Routes.Web]: undefined;
};

const tabIconNames: Record<Routes, string> = {
  Home: 'home',
  Web: 'compass',
};

const Tab = createBottomTabNavigator<MainNavParamList>();

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: () => <IconButton icon={tabIconNames[route.name]} />,
            tabBarShowLabel: false,
          })}>
          <Tab.Screen name={Routes.Home} component={Home} />
          <Tab.Screen
            name={Routes.Web}
            component={Web}
            options={{headerShown: false}}
          />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  main: {
    flex: 1,
  },
});

export default Main;
