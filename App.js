import React from 'react';
import { StyleSheet, Text, TextInput, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './client/Screen/Home/home';
import Transferencias from './client/Screen/transferencias';
import Balance from './client/Screen/Balance';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Movimientos from './client/Screen/Movimientos';
import Tarjetas from './client/Screen/Tarjetas';
import Pagos from './client/Screen/Pagos/Pagos';
import Amigos from './client/Screen/Amigos';
import Ayuda from './client/Screen/Ayuda';
import Configuracion from './client/Screen/Configuracion';
import Perfil from './client/Screen/Perfil/Perfil';
import { Provider as ProviderPaper } from 'react-native-paper'
import Login from './client/Views/Login/login'
import SignIn from './client/Views/Login/login'
import 'react-native-gesture-handler'
import SignUp from './client/Views/Sign-Up/Sign-Up'
import SignUp1 from './client/Views/Sign-Up/SignUp1'
import SignUp2 from './client/Views/Sign-Up/SignUp2'
import { Icon } from 'react-native-elements'


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

const Drawer = createDrawerNavigator();

//con este stack, guardamos todas las pantallas que vamos a mostrar. Con stack.navigation las guardamos y cada stack.screen va a ser una pantalla
//Se muestran en orden. La que primero esta, es la que va a aparecer.


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name="Home" component={MyDrowner} options={{ title: "Home" }} />
      {/* <Stack.Screen name='footer' component={TablaInferior} options={{ title: "Footer" }} /> */}
      <Stack.Screen name="Transferencias" component={Transferencias} options={{ title: "Transferencias" }} />
      <Stack.Screen name="Balance" component={Balance} options={{ title: "Balance" }} />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: "Registro" }}
      />
      <Stack.Screen
        name="SignUp1"
        component={SignUp1}
        options={{ title: "Registro" }}
      />
      <Stack.Screen
        name="SignUp2"
        component={SignUp2}
        options={{ title: "Registro" }}
      />
    </Stack.Navigator>
  )
}

function MyDrowner() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      {/* <Drawer.Screen name="Home" component={Home} options={{ title: "Home" }} /> */}
      <Drawer.Screen name="Home" component={TablaInferior} />

      <Drawer.Screen name="Perfil" component={Perfil} options={{ title: "Perfil" }} />
      <Drawer.Screen name="Transferencias" component={Transferencias} options={{ title: "Transferencias" }} />
      <Drawer.Screen name="Tarjetas" component={Tarjetas} options={{ title: "Tarjetas" }} />
      <Drawer.Screen name="Pagos" component={Pagos} options={{ title: "Pagos" }} />
      <Drawer.Screen name="Balance" component={Balance} options={{ title: "Balance" }} />
      <Drawer.Screen name="Movimientos" component={Movimientos} options={{ title: "Mis Movimientos" }} />
      <Drawer.Screen name="InvitarAmigos" component={Amigos} options={{ title: "Invitar Amigos" }} />
      <Drawer.Screen name="Ayuda" component={Ayuda} options={{ title: "Ayuda" }} />
      <Drawer.Screen name="Configuracion" component={Configuracion} options={{ title: "Configuración" }} />
    </Drawer.Navigator>
  )
}




function TablaInferior() {
  return (
    <Tab.Navigator initialRouteName='Home' >

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
  );
}


export default function App() {

  return (
    /* para agregar mas pantallas */
    <ProviderPaper>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </ProviderPaper>
  );
}