import React from 'react';
import MainTab from './MainTab';
import WriteScreen from './WriteScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Write" component={WriteScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
