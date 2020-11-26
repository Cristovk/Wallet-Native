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
  const [actual, setActual] = useState('home');
  const { status } = route.params
  const dispatch = useDispatch()
  const { primary, secondary, text, bg, dark } = useSelector(store => store.color)
  LogBox.ignoreAllLogs()
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
  // console.log('status desde deawer',status)
  return (
    <Drawer.Navigator drawerContent={({ navigation }) => CustomDrawerContent({ navigation, route, primary, secondary, text, bg, dispatch, dark, setActual, actual })} drawerStyle={{ backgroundColor: dark ? bg : primary }}>
      <Drawer.Screen name='HomeScreen' component={homeScreen} initialParams={{ status: status, nombre: setActual }} options={{ headerShown: false }} />
    </Drawer.Navigator>
  )
}

// Esta función nos permite configurar el drawer según lo que queremos mostrar (requerido en la línea 15)
function CustomDrawerContent({ navigation, text, bg, primary, secondary, route, dark, dispatch, setActual, actual }) {

  const cerrar = async () => {
    await AsyncStorage.removeItem('Metodo')
  }



  const setApp = route.params.darker
  const handleLogOut = () => {
    dispatch(deleteAll())
    cerrar()
    Alert.alert('Sesión Cerrada', 'Te esperamos pronto',
      [{ text: 'Ok', onPress: () => navigation.navigate('Splash', { usuario2: false }) }]
    )
  }

  const confirmCerrar = () => {
    Alert.alert('Cerrar Sesión', '¿Estás Seguro?',
      [{ text: 'Si, cerrar', onPress: () => handleLogOut() },
      { text: 'Cancelar', onPress: () => navigation.goBack() }]
    )
  }

  const navegar = (ruta) => {
    navigation.navigate('HomeScreen', { screen: ruta })
    setActual(ruta);
    console.log('estse', actual)
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }}>
      <View>
        <ListItem bottomDivider containerStyle={{ backgroundColor: actual === 'Recargas' ? bg : 'transparent' }} onPress={() => navegar('Recargas')} >
          <Icon name='wallet' type='fontisto' color={dark ? text : actual === 'Recargas' ? '#fff' : bg} />
          <ListItem.Content>
            <ListItem.Title style={{ color: dark ? text : actual === 'Recargas' ? '#fff' : bg }}>Recargar</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </View>
      <View>
        <ListItem bottomDivider containerStyle={{ backgroundColor: actual === 'MoonCard' ? bg : 'transparent' }}
          onPress={() => navegar('MoonCard')}>
          <Icon name='credit-card' type='fontisto' color={dark ? text : actual === 'MoonCard' ? '#fff' : bg} />
          <ListItem.Content>
            <ListItem.Title style={{ color: dark ? text : actual === 'MoonCard' ? '#fff' : bg }}>MoonCard</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider containerStyle={{ backgroundColor: 'transparent' }} onPress={() => navigation.navigate('HomeScreen', { screen: 'Dolares' })} >
          <Icon name='dollar' type='fontisto' color={dark ? text : bg} />
          <ListItem.Content>
            <ListItem.Title style={{ color: dark ? text : bg }}>Dolares</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider containerStyle={{ backgroundColor: actual === 'Tarjetas' ? bg : 'transparent' }}
          onPress={() => navegar('Tarjetas')}>
          <Icon name='wallet' type='fontisto' color={dark ? text : actual === 'Tarjetas' ? '#fff' : bg} />
          <ListItem.Content>
            <ListItem.Title style={{ color: dark ? text : actual === 'Tarjetas' ? '#fff' : bg }}>Tarjetas</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider containerStyle={{ backgroundColor: actual === 'Balance' ? bg : 'transparent' }}
          onPress={() => navegar('Balance')} >
          <Icon name='bar-chart' type='fontisto' color={dark ? text : actual === 'Balance' ? '#fff' : bg} />
          <ListItem.Content>
            <ListItem.Title style={{ color: dark ? text : actual === 'Balance' ? '#fff' : bg }}>Balance</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider containerStyle={{ backgroundColor: actual === 'Movimientos' ? bg : 'transparent' }}
          onPress={() => navegar('Movimientos')} >
          <Icon name='list-2' type='fontisto' color={dark ? text : actual === 'Movimientos' ? '#fff' : bg} />
          <ListItem.Content>
            <ListItem.Title style={{ color: dark ? text : actual === 'Movimientos' ? '#fff' : bg }}>Movimientos</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider containerStyle={{ backgroundColor: actual === 'Pagos' ? bg : 'transparent' }}
          onPress={() => navegar('Pagos')} >
          <Icon name='lightbulb' type='fontisto' color={dark ? text : actual === 'Pagos' ? '#fff' : bg} />
          <ListItem.Content>
            <ListItem.Title style={{ color: dark ? text : actual === 'Pagos' ? '#fff' : bg }}>Servicios</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider containerStyle={{ backgroundColor: actual === 'Amigos' ? bg : 'transparent', color: actual === 'Amigos' && '#fff' }}
          onPress={() => navegar('Amigos')} >
          <Icon name='persons' type='fontisto' color={dark ? text : actual === 'Amigos' ? '#fff' : bg} />
          <ListItem.Content>
            <ListItem.Title style={{ color: dark ? text : actual === 'Amigos' ? '#fff' : bg }}>Contactos</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider containerStyle={{ backgroundColor: actual === 'Ayuda' ? bg : 'transparent', color: actual === 'Ayuda' && '#fff' }}
          onPress={() => navegar('Ayuda')} >
          <Icon name='info' type='fontisto' color={dark ? text : actual === 'Ayuda' ? '#fff' : bg} />
          <ListItem.Content>
            <ListItem.Title style={{ color: dark ? text : actual === 'Ayuda' ? '#fff' : bg }}>Ayuda</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </View>
      <View>
        <ListItem bottomDivider containerStyle={{ backgroundColor: actual === 'Configuracion' ? bg : 'transparent', color: actual === 'Ayuda' && '#fff' }} onPress={() => { navigation.navigate('Configuracion', route); setActual('Configuracion') }}>
          <Icon name='player-settings' type='fontisto' color={dark ? text : actual === 'Configuracion' ? '#fff' : bg} />
          <ListItem.Content>
            <ListItem.Title style={{ color: dark ? text : actual === 'Configuracion' ? '#fff' : bg }}>Configuración</ListItem.Title>
          </ListItem.Content>

        </ListItem>
        <ListItem topDivider containerStyle={{ backgroundColor: 'transparent' }}
          onPress={confirmCerrar}>
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