import React, { useState, useEffect } from 'react'
import { Image, TouchableOpacity, StyleSheet, LogBox } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { Icon } from 'react-native-elements'
import db from '../../../firebase'
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { addContact, deleteAll } from '../../Redux/Contacts'
import { profileImage } from './profileImage'
import AsyncStorage from '@react-native-community/async-storage'


// COMPONENTES
import Balance from '../../Screen/Balance/Balance.js';
import Pagos from '../../Screen/Pagos/Pagos';
import Amigos from '../../Screen/Contactos/Amigos';
import Ayuda from '../../Screen/Ayuda'
import Configuracion from '../../Screen/Configuracion/Configuracion';
import Login from '../../Views/Login/login'
import SignUp from '../../Views/Sign-Up/Sign-Up'
import SignUp1 from '../../Views/Sign-Up/SignUp1'
import SignUp2 from '../../Views/Sign-Up/SignUp2'

import Tarjetas from '../card/Tarjetas';
import AddTarjeta from '../card/AddTarjeta';

import TransactionHistory from '../../Screen/TransactionHistory/Movimientos'
import Detalle from '../../Screen/TransactionHistory/DetailOfTransaction'
import Recargas from '../../Screen/Recargas/Recargas';
import Verify from "../../Screen/verificacion/verify"
import TransfConfirm from "../../Screen/Transferencias/TransfConfirmada"


// NAVIGATORS
import { MyTab } from '../tab/tab'
import { MyDrowner } from '../drawer/drawer'
import Transferencias from '../../Screen/Transferencias/transferir';
import Transfers from '../../Screen/Transferencias/Transfers';
import PagoServicios from '../../Screen/Pagos/PagoServicios';
import PagoConfirm from '../../Screen/Pagos/PagoConfirm';
import TransfAmigo from '../../Screen/Contactos/TransfAmigos';
import TransfAmigoConfirm from '../../Screen/Contactos/TransAmConf';
import { userLog } from '../../Redux/User';
import ResetPaswword from '../../Screen/ResetPassword/resetPass';
import ModificaEmail from '../../Screen/Modificar-Email-Pass/ModificaEmail';
import ModificaPassword from '../../Screen/Modificar-Email-Pass/ModificarPassword';
import DeleteUser from '../../Screen/Modificar-Email-Pass/DeleteUser';
import ConfirmDelete from '../../Screen/Modificar-Email-Pass/ConfirmDelete';
import Pin from '../../Views/Login/pin';

// Creamos los navegadores
const Stack = createStackNavigator()
const HomeScreenStack = createStackNavigator()


// Navegador Inicial para ingresar a la wallet (importado en App.js)
export function MyStack(props) {

  const [usuario, setUsuario] = useState(false)

  const storageAsync = async () => {
    const clave = await AsyncStorage.getItem('Pin');
    if (clave != false) {
      setUsuario(true)
    }
    else {
      setUsuario(false)
    }
  }

  console.log(usuario, "USUARIO RARO");

  useEffect(() => {
    storageAsync()
  }, [])


  // LogBox.ignoreAllLogs()
  return (
    <Stack.Navigator>

      {!usuario ? <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} /> : <Stack.Screen name="Pin" component={Pin} options={{ headerShown: false }} />}
      <Stack.Screen name='HomeDrawer' component={MyDrowner} initialParams={props} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ title: "Registro" }} />
      <Stack.Screen name="SignUp1" component={SignUp1} options={{ title: "Registro" }} />
      <Stack.Screen name="SignUp2" component={SignUp2} options={{ title: "Registro" }} />
      <Stack.Screen name="Verify" component={Verify} />
      <Stack.Screen name="ResetPaswword" component={ResetPaswword} options={{ title: "Resetear Password" }} />
    </Stack.Navigator>
  )
}

// Navegador que se encarga de darle cabeceras a los componentes y renderizarlos (importado en drawer.jsx)
function HomeScreen({ userLog, user, status }) {
  const [users, setUsers] = useState([])
  const { primary, secondary, text, bg } = useSelector(store => store.color)
  const dispatch = useDispatch()
  useEffect(() => {
    userLog()
  }, [])

  const handleRefresh = () => {
    dispatch(deleteAll())
    dispatch(addContact(db.auth().currentUser.uid))
  }

  return (
    <HomeScreenStack.Navigator screenOptions={{ // Personalizamos las cabeceras en general
      headerStyle: {
        backgroundColor: primary
      },
      headerTintColor: secondary
    }}>
      <HomeScreenStack.Screen name='HomeTab' initialParams={status} component={MyTab} options={({ navigation }) => ({ // Personalizamos las cabeceras de los atajos principales
        headerLeft: () => (
          <TouchableOpacity
            style={style.boton}
            onPress={() => navigation.openDrawer()}
          >
            <Icon
              name="ios-menu"
              type='ionicon'
            />
          </TouchableOpacity>),
        title: `Bienvenido ${user && user.name}`,
        headerTitleAlign: 'center',
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Perfil')}
          >
            <Image
              source={{ uri: user.imagen || profileImage }}
              style={{ width: 50, height: 50, borderRadius: 50, marginRight: 10 }}
            />
          </TouchableOpacity>
        )
      })} />
      <HomeScreenStack.Screen name='Tarjetas' component={Tarjetas} options={{ title: 'Tus Tarjetas' }} />
      <HomeScreenStack.Screen name='AddTarjeta' component={AddTarjeta} options={{ title: 'Añadir Tarjeta' }} />
      <HomeScreenStack.Screen name='Movimientos' component={TransactionHistory} options={{ title: 'Mis Movimientos' }} />
      <HomeScreenStack.Screen name='Pagos' component={Pagos} options={{ title: 'Mis Servicios' }} />
      <HomeScreenStack.Screen name='Transferir' component={Transferencias} options={{ title: 'Transferir' }} />
      <HomeScreenStack.Screen name='Transfers' component={Transfers} options={{ title: 'Transferencias' }} />
      <HomeScreenStack.Screen name='Amigos' component={Amigos} options={{
        title: 'Mis Contactos',
        headerRight: () => (
          <TouchableOpacity onPress={handleRefresh}>
            <Icon name='spinner-refresh' type='fontisto' color={secondary} style={{ marginRight: 30 }} />
          </TouchableOpacity>
        )
      }} />
      <HomeScreenStack.Screen name='Configuracion' component={Configuracion} options={{ title: 'Ajustes' }} />
      <HomeScreenStack.Screen name='Ayuda' component={Ayuda} options={{ title: 'Soporte y Atención' }} />
      <HomeScreenStack.Screen name='Balance' component={Balance} options={{ title: 'Mi Balance' }} />
      <HomeScreenStack.Screen name='Detalle' component={Detalle} options={{ title: 'Detalle de la transaccion' }} />
      <HomeScreenStack.Screen name='Recargas' component={Recargas} options={{ title: 'Recargar' }} />
      <HomeScreenStack.Screen name='TransfConfirm' component={TransfConfirm} options={{ title: 'Confirmar' }} />
      <HomeScreenStack.Screen name='PagoServicios' component={PagoServicios} options={{ title: 'Confirmar Pago' }} />
      <HomeScreenStack.Screen name='PagoConfirm' component={PagoConfirm} options={{ title: 'Pago Confirmado' }} />
      <HomeScreenStack.Screen name='TransfAmigo' component={TransfAmigo} options={{ title: 'Transferir a Contacto' }} />
      <HomeScreenStack.Screen name='TransfAmigoConfirm' component={TransfAmigoConfirm} options={{ title: 'Transferencia Confrimada' }} />
      <HomeScreenStack.Screen name='ModificaEmail' component={ModificaEmail} options={{ title: 'Modificar Email' }} />
      <HomeScreenStack.Screen name='ModificaPassword' component={ModificaPassword} options={{ title: 'Modificar Password' }} />
      <HomeScreenStack.Screen name='DeleteUser' component={DeleteUser} options={{ title: 'Borrar Usuario' }} />
      <HomeScreenStack.Screen name='ConfirmDelete' component={ConfirmDelete} options={{ title: 'Borrar Usuario' }} />

    </HomeScreenStack.Navigator >
  )
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userLog: id => dispatch(userLog(id))
  }
}

export const homeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)


const style = StyleSheet.create({
  boton: {
    backgroundColor: "#FC7029",
    height: 25,
    width: 25,
    marginStart: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  scroll: {
    marginLeft: 5,
    justifyContent: 'space-between'
  }
})
