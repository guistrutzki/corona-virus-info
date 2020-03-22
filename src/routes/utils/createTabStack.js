import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const createTabStack = ({screenName, component}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screenName} component={component} />
    </Stack.Navigator>
  );
};

export default createTabStack;
