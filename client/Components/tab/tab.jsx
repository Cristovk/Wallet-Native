import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import { useSelector } from 'react-redux'
import { LogBox } from 'react-native'

// COMPONENTES
import Home from '../../Screen/Home/home';
import Transfers from '../../Screen/Transferencias/Transfers';
import Perfil from '../../Screen/perfil/Perfil';

// Creamos el navegador
const Tab = createBottomTabNavigator();

// Nos renderiza una tabBar con los componentes principales (logueado)
export function MyTab() {

  const { primary, secondary, text, bg, dark } = useSelector(store => store.color)
  LogBox.ignoreAllLogs()
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({ // Configuración del tabBar
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Transferencias') {
          iconName = 'arrow-swap';
        } else if (route.name === 'Perfil') {
          iconName = 'person'
        }
        return <Icon name={iconName} type='fontisto' size={size} color={color} />;
      }
    })}
      tabBarOptions={{
        activeTintColor: dark ? text : primary,
        inactiveTintColor: dark ? primary : secondary,
        activeBackgroundColor: bg,
        inactiveBackgroundColor: bg
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Transferencias" component={Transfers} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  )
}