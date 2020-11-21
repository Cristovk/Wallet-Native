import React, { useEffect } from 'react'
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
  /* LogBox.ignoreAllLogs() */
  useEffect(() => {
    if (status) {

      let id = auth.currentUser.uid
      dispatch(addContact(id))
    };
  }, [])

  const user = useSelector(store => store.user.user)

  console.log(JSON.stringify(user.clave), "usuario");
  console.log(JSON.stringify(user.metodo), "Metodo");

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
    <Drawer.Navigator drawerContent={({ navigation }) => CustomDrawerContent({ navigation, route, primary, secondary, text, bg, dispatch, dark })} drawerStyle={{ backgroundColor: bg }}>
      <Drawer.Screen name='HomeScreen' component={homeScreen} initialParams={{ status: status }} options={{ headerShown: false }} />
    </Drawer.Navigator>
  )
}

// Esta función nos permite configurar el drawer según lo que queremos mostrar (requerido en la línea 15)
function CustomDrawerContent({ navigation, text, bg, primary, secondary, route, dark, dispatch }) {

  const cerrar = async () => {
    await AsyncStorage.removeItem('Metodo')
  }



  const setApp = route.params.darker
  const handleLogOut = () => {
    dispatch(deleteAll())
    auth.signOut()
      .then(resp => {
        cerrar()
      })
      .catch(err => {
        console.log(err);
      })
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
  // LogBox.ignoreAllLogs()

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }}>
      <View>
        <ListItem bottomDivider containerStyle={{ backgroundColor: 'transparent' }} onPress={() => navigation.navigate('HomeScreen', { screen: 'Recargas' })} >
          <Icon name='ios-log-out' type='ionicon' color={dark ? secondary : primary} />
          <ListItem.Content>
            <ListItem.Title style={{ color: text }}>Recargar</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </View>
      <View>
        <ListItem bottomDivider containerStyle={{ backgroundColor: 'transparent' }}
          onPress={() => navigation.navigate('HomeScreen', { screen: 'Tarjetas' })}>
          <Icon name='credit-card' type='fontisto' color={dark ? secondary : primary} />
          <ListItem.Content>
            <ListItem.Title style={{ color: text }}>Tarjetas</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider containerStyle={{ backgroundColor: 'transparent' }}
          onPress={() => navigation.navigate('HomeScreen', { screen: 'Balance' })} >
          <Icon name='bar-chart' type='fontisto' color={dark ? secondary : primary} />
          <ListItem.Content>
            <ListItem.Title style={{ color: text }}>Balance</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider containerStyle={{ backgroundColor: 'transparent' }}
          onPress={() => navigation.navigate('HomeScreen', { screen: 'Movimientos' })}>
          <Icon name='list-2' type='fontisto' color={dark ? secondary : primary} />
          <ListItem.Content>
            <ListItem.Title style={{ color: text }}>Movimientos</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider containerStyle={{ backgroundColor: 'transparent' }}
          onPress={() => navigation.navigate('HomeScreen', { screen: 'Pagos' })}>
          <Icon name='lightbulb' type='fontisto' color={dark ? secondary : primary} />
          <ListItem.Content>
            <ListItem.Title style={{ color: text }}>Servicios</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider containerStyle={{ backgroundColor: 'transparent' }}
          onPress={() => navigation.navigate('HomeScreen', { screen: 'Amigos' })}>
          <Icon name='persons' type='fontisto' color={dark ? secondary : primary} />
          <ListItem.Content>
            <ListItem.Title style={{ color: text }}>Contactos</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem bottomDivider containerStyle={{ backgroundColor: 'transparent' }}
          onPress={() => navigation.navigate('HomeScreen', { screen: 'Ayuda' })}>
          <Icon name='info' type='fontisto' color={dark ? secondary : primary} />
          <ListItem.Content>
            <ListItem.Title style={{ color: text }}>Ayuda</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </View>
      <View>
        <ListItem bottomDivider containerStyle={{ backgroundColor: 'transparent' }} onPress={() => navigation.navigate('Configuracion', route)}>
          <Icon name='player-settings' type='fontisto' color={dark ? secondary : primary} />
          <ListItem.Content>
            <ListItem.Title style={{ color: text }}>Configuración</ListItem.Title>
          </ListItem.Content>

        </ListItem>
        <ListItem topDivider containerStyle={{ backgroundColor: 'transparent' }}
          onPress={confirmCerrar}>
          <Icon name='ios-log-out' type='ionicon' color={dark ? secondary : primary} />
          <ListItem.Content>
            <ListItem.Title style={{ color: text }}>Cerrar sesión</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </View>
    </SafeAreaView>
  )
}