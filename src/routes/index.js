import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ROUTES from './routeNames';
import SCREENS from '../features/screens';
import TabsContainer from './TabsContainer';

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer initialRouteName={ROUTES.PRELOAD}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
          animationTypeForReplace: 'push',
        }}>
        <Stack.Screen name={ROUTES.PRELOAD} component={SCREENS.PRELOAD} />
        <Stack.Screen name={ROUTES.TAB_CONTAINER} component={TabsContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
