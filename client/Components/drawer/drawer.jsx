import React, { useEffect, useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, TouchableOpacity, SafeAreaView, Switch, LogBox, Alert, BackHandler } from 'react-native';
import { Icon, ListItem } from 'react-native-elements'
import { useSelector, useDispatch } from 'react-redux'
import { darkMode } from '../../Redux/Estilos'
import { auth } from "../../../firebase"
import { getContacts, addContact, deleteAll } from "../../Redux/Contacts"
import AsyncStorage from '@react-native-community/async-storage'

// Navigator
import { homeScreen } from '../stack/stack'

// Creamos el navegador
const Drawer = createDrawerNavigator();

// Navegador para listar los componentes de HomeScreen
export function MyDrowner({ navigation, route }) {
  const { status } = route.params
  const dispatch = useDispatch()
  const { primary, secondary, text, bg, dark } = useSelector(store => store.color)
  // LogBox.ignoreAllLogs()
  useEffect(() => {
    if (status) {

      let id = auth.currentUser.uid
      dispatch(addContact(id))
    };
  }, [])


  const user = useSelector(store => store.user.user)

  const save = async () => {
    if (user && user.clave) {
      const asyncStor = await AsyncStorage.getItem('Metodo')
      if (!asyncStor) {
        if (user.metodo === "") {
          const usuario = JSON.stringify(user.clave)
          await AsyncStorage.setItem('Metodo', usuario);
          const clave = await AsyncStorage.getItem('Metodo');
        } else {
          const usuario = user.metodo
          await AsyncStorage.setItem('Metodo', usuario);
        }
      }
    }
  }
  save();
  return (
    <Drawer.Navigator drawerContent={({ navigation }) => CustomDrawerContent({ navigation, route, primary, secondary, text, bg, dispatch, dark })} drawerStyle={{ backgroundColor: dark ? bg : primary }}>
      <Drawer.Screen name='HomeScreen' component={homeScreen} initialParams={{ status: status }} options={{ headerShown: false }} />
    </Drawer.Navigator>
  )
}

// Esta función nos permite configurar el drawer según lo que queremos mostrar (requerido en la línea 15)
export function CustomDrawerContent({ navigation, text, bg, primary, secondary, route, dark, dispatch }) {


  const setApp = route.params.darker
  const handleLogOut = async () => {
    await AsyncStorage.removeItem('Metodo');
  }


  // const confirmCerrar = () => {
  //   Alert.alert('Cerrar Sesión', '¿Estás Seguro?',
  //     [{ text: 'Si, cerrar', onPress: () => handleLogOut() },
  //     { text: 'Cancelar', onPress: () => navigation.goBack() }]
  //   )
  // }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }}>
      <View>
        <ListItem bottomDivider containerStyle={{ backgroundColor: 'transparent' }} onPress={() => navigation.navigate('HomeScreen', { screen: 'Recargas' })} >
          <Icon name='wallet' type='fontisto' color={dark ? text : bg} />
          <ListItem.Content>
            <ListItem.Title style={{ color: dark ? text : bg }}>Recargar</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </View>
      <View>
        <ListItem bottomDivider containerStyle={{ backgroundColor: 'transparent' }}
          onPress={() => navigation.navigate('HomeScreen', { screen: 'Tarjetas' })}>
          <Icon name='credit-card' type='fontisto' color={dark ? text : bg} />
          <ListItem.Content>
            <ListItem.Title style={{ color: dark ? text : bg }}>Tarjetas</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider containerStyle={{ backgroundColor: 'transparent' }}
          onPress={() => navigation.navigate('HomeScreen', { screen: 'Balance' })} >
          <Icon name='bar-chart' type='fontisto' color={dark ? text : bg} />
          <ListItem.Content>
            <ListItem.Title style={{ color: dark ? text : bg }}>Balance</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider containerStyle={{ backgroundColor: 'transparent' }}
          onPress={() => navigation.navigate('HomeScreen', { screen: 'Movimientos' })}>
          <Icon name='list-2' type='fontisto' color={dark ? text : bg} />
          <ListItem.Content>
            <ListItem.Title style={{ color: dark ? text : bg }}>Movimientos</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider containerStyle={{ backgroundColor: 'transparent' }}
          onPress={() => navigation.navigate('HomeScreen', { screen: 'Pagos' })}>
          <Icon name='lightbulb' type='fontisto' color={dark ? text : bg} />
          <ListItem.Content>
            <ListItem.Title style={{ color: dark ? text : bg }}>Servicios</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider containerStyle={{ backgroundColor: 'transparent' }}
          onPress={() => navigation.navigate('HomeScreen', { screen: 'Amigos' })}>
          <Icon name='persons' type='fontisto' color={dark ? text : bg} />
          <ListItem.Content>
            <ListItem.Title style={{ color: dark ? text : bg }}>Contactos</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider containerStyle={{ backgroundColor: 'transparent' }}
          onPress={() => navigation.navigate('HomeScreen', { screen: 'Ayuda' })}>
          <Icon name='info' type='fontisto' color={dark ? text : bg} />
          <ListItem.Content>
            <ListItem.Title style={{ color: dark ? text : bg }}>Ayuda</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </View>
      <View>
        <ListItem bottomDivider containerStyle={{ backgroundColor: 'transparent' }} onPress={() => navigation.navigate('Configuracion', route)}>
          <Icon name='player-settings' type='fontisto' color={dark ? text : bg} />
          <ListItem.Content>
            <ListItem.Title style={{ color: dark ? text : bg }}>Configuración</ListItem.Title>
          </ListItem.Content>

        </ListItem>
        <ListItem topDivider containerStyle={{ backgroundColor: 'transparent' }}
          onPress={handleLogOut}>
          <Icon name='ios-log-out' type='ionicon' color={dark ? text : bg} />
          <ListItem.Content>
            <ListItem.Title style={{ color: dark ? text : bg }}>Cerrar sesión</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </View>

    </SafeAreaView>
  )
}