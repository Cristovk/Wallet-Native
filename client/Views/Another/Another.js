import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, Text} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


const Another = ({ navigation }) => {
    return (
      <Button
        title="ir al inicio"
        onPress={() => {
          navigation.navigate('StartScreen')
         
        }
        }
      />
    );
  };

export default Another