import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ROUTES from './utils/routeNames';
import SCREENS from '../features/screens';
import createTabStack from './utils/createTabStack';

const Tab = createBottomTabNavigator();

const TabsContainer = () => {
  return (
    <Tab.Navigator initialRouteName={ROUTES.HOME}>
      <Tab.Screen
        name={ROUTES.HOME}
        component={() =>
          createTabStack({screenName: ROUTES.HOME, component: SCREENS.HOME})
        }
      />
    </Tab.Navigator>
  );
};

export default TabsContainer;
