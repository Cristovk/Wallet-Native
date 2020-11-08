import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { ListItem, Icon } from 'react-native-elements'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './home';
import Balance from './Balance';
import Transferencias from './transferencias'
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

function TablaInferior() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="transferencias"
          component={Transferencias}
        />
        <Tab.Screen
          name="Home"
          component={Home}
        />
        <Tab.Screen
          name='balance'
          component={Balance}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default TablaInferior;