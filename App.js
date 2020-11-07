import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, Text} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import StartScreen from "./client/Views/Start-Screen/Start-Screen"
import LoginScreen from './client/Views/Sign-In/Sign-In';
import Another from "./client/Views/Another/Another"
const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{ title: 'Bienvenido' }}
        />
        <Stack.Screen
         name="LoginScreen" 
         component={LoginScreen} 
         options={{ title: "Pantalla de login" }}
         />
          <Stack.Screen
         name="AnotherPage" 
         component={Another} 
         options={{ title: "Otra pantalla" }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;