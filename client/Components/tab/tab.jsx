import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements'
import Home from '../../Screen/Home/home';
import Transferencias from '../../Screen/transferencias';
import Perfil from '../../Screen/perfil/Perfil';

const Tab = createBottomTabNavigator();

export default function MyTab(){
    
    return(
    <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
  
        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Transferencias') {
          iconName = 'arrow-swap';
        } else if (route.name === 'Perfil'){
          iconName = 'person'
        }
        return <Icon name={iconName} type='fontisto' size={size} color={color} />;
      }
    })}
    tabBarOptions={{
      activeTintColor: '#FC7029',
      inactiveTintColor: 'gray'
    }}
    >
      <Tab.Screen name="Home" component={Home} options={{ title: "Home" ,headerShown:true}} />
      <Tab.Screen name="Transferencias" component={Transferencias} options={{ title: "Transferencias" ,headerShown:true}} />
      <Tab.Screen name="Perfil" component={Perfil} options={{ title: "Perfil" }} />
    </Tab.Navigator>
    )
  }