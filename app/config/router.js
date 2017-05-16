import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Shows from '../screens/Shows';
import Show from '../screens/Show';
import Settings from '../screens/Settings';

export const ShowStack = StackNavigator({
  Shows: {
    screen: Shows,
    navigationOptions: {
      title: 'All the shows',
    },
  },
  Details: {
    screen: Show,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.toUpperCase()}`,
    }),
  },
});

export const Tabs = TabNavigator({
  Shows: {
    screen: ShowStack,
    navigationOptions: {
      tabBarLabel: 'TV Shows',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
