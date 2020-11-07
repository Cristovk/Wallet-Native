import React from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './home';
import NotificationsScreen from './menu';

const Balance = (props) => {

  const Drawer = createDrawerNavigator()

  return (
    <ScrollView>
      <View >
        <Button
          onPress={() => props.navigation.navigate('Menu')}
          title="Menu"
        />
      </View>
    </ScrollView>
  )
}

export default Balance