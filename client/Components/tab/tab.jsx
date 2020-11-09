import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements'

// COMPONENTES
import Home from '../../Screen/Home/home';
import Transferencias from '../../Screen/transferencias';
import Perfil from '../../Screen/perfil/Perfil';

// Creamos el navegador
const Tab = createBottomTabNavigator();

// Nos renderiza una tabBar con los componentes principales (logueado)
export default function MyTab(){
    
    return(
    <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({ // Configuración del tabBar
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
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Transferencias" component={Transferencias}/>
      <Tab.Screen name="Perfil" component={Perfil}/>
    </Tab.Navigator>
    )
  }