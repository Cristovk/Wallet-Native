import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Login from './client/Views/Login/login'
import 'react-native-gesture-handler'
import {Provider as ProviderPaper} from 'react-native-paper'

const Stack = createStackNavigator()

export default function App() {

  return (
    <ProviderPaper>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login}/>
        </Stack.Navigator>
    </NavigationContainer>
    </ProviderPaper>
  );
}
