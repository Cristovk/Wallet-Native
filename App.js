import React from 'react';
import { StyleSheet, Text, TextInput, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './client/Screen/home';
import Transferencias from './client/Screen/transferencias';
import Balance from './client/Screen/Balance';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createStackNavigator()

//con este stack, guardamos todas las pantallas que vamos a mostrar. Con stack.navigation las guardamos y cada stack.screen va a ser una pantalla
//Se muestran en orden. La que primero esta, es la que va a aparecer.


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} options={{ title: "Home" }} />
      <Stack.Screen name="Transferencias" component={Transferencias} options={{ title: "Transferencias" }} />
      <Stack.Screen name="Balance" component={Balance} options={{ title: "Balance" }} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    /* para agregar mas pantallas */
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
