import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, Text} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


const StartScreen = ({ navigation }) => {
    return (
      <Button
        title="ir a login"
        onPress={() => {
          navigation.navigate('LoginScreen', { name: 'Jane' })
         
        }
        }
      />
    );
  };

export default StartScreen