import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ROUTES from './utils/routeNames';
import SCREENS from '../features/screens';
import TabsContainer from './TabsContainer';

const Stack = createStackNavigator();

const AppContainer = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <NavigationContainer initialRouteName={ROUTES.PRELOAD}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
          animationTypeForReplace: 'push',
        }}>
        {isLoading ? (
          <Stack.Screen name={ROUTES.PRELOAD} component={SCREENS.PRELOAD} />
        ) : (
          <Stack.Screen name={ROUTES.HOME} component={TabsContainer} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
