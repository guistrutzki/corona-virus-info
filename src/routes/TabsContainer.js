import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ROUTES from './routeNames';
import SCREENS from '../features/screens';

const Tab = createBottomTabNavigator();

const TabsContainer = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen />
      <Tab.Screen />
    </Tab.Navigator>
  );
};

export default TabsContainer;
