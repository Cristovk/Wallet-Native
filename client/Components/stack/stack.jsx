import React, { useState, useEffect } from 'react'
import { Image, TouchableOpacity, StyleSheet, LogBox, View } from 'react-native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack'
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
import Chat from '../../Screen/Chat/Chat';
import Ayuda from '../../Screen/Ayuda/Ayuda';
import Configuracion from '../../Screen/Configuracion/Configuracion';
import Login from '../../Views/Login/login'
import SignUp from '../../Views/Sign-Up/Sign-Up'
import SignUp1 from '../../Views/Sign-Up/SignUp1'
import SignUp2 from '../../Views/Sign-Up/SignUp2'

import Tarjetas from '../card/Tarjetas';
import AddTarjeta from '../card/AddTarjeta';
import MoonCard from '../../Screen/MoonCard/MoonCard.js'

import TransactionHistory from '../../Screen/TransactionHistory/Movimientos'
import Detalle from '../../Screen/TransactionHistory/DetailOfTransaction'
import Recargas from '../../Screen/Recargas/Recargas';
import Verify from "../../Screen/verificacion/verify"
import confirmOrError from "../../Screen/Transferencias/Check"
import Finish from "../../Screen/Transferencias/Finish"
import postScreen from "../../Screen/Transferencias/postScreen"
import Dolares from "../../Screen/Dolares/dolares"

// NAVIGATORS
import { MyTab } from '../tab/tab'
import { MyDrowner } from '../drawer/drawer'
import Transferencias from '../../Screen/Transferencias/transferir';
import Transfers from '../../Screen/Transferencias/Transfers';
import PagoServicios from '../../Screen/Pagos/PagoServicios';
import PagoConfirm from '../../Screen/Pagos/PagoConfirm';
import { userLog } from '../../Redux/User';
import ResetPaswword from '../../Screen/ResetPassword/resetPass';
import ModificaEmail from '../../Screen/Modificar-Email-Pass/ModificaEmail';
import ModificaPassword from '../../Screen/Modificar-Email-Pass/ModificarPassword';
import DeleteUser from '../../Screen/Modificar-Email-Pass/DeleteUser';
import ConfirmDelete from '../../Screen/Modificar-Email-Pass/ConfirmDelete';
import Pin from '../../Views/Login/pin';
import Huella from '../../Views/Login/Huella';
import Splash from '../../Screen/Splash/Splash';
import confirmOrErrorDolar from "../../Screen/Dolares/CheckDolar"
import FinishDolar from "../../Screen/Dolares/FinishDolar"

// Creamos los navegadores
const Stack = createStackNavigator()
const HomeScreenStack = createStackNavigator()


// Navegador Inicial para ingresar a la wallet (importado en App.js)
export function MyStack(props) {

  const [usuario, setUsuario] = useState(false)
  const [huella, setHuella] = useState(false)

  const storageAsync = async () => {
    const clave = await AsyncStorage.getItem('Metodo')
    if (clave !== null) {
      setUsuario(true)
      if (clave === "huella") {
        setHuella(true)
      }
    }
    else {
      setUsuario(false)
    }
  }

  // const UsarHuella = async () => {
  //   const clave = await AsyncStorage.getItem('Huella') ? JSON.parse(await AsyncStorage.getItem('Huella')) : null;
  //   console.log("claveee", clave);
  //   if (clave === false) {
  //     setHuella(false)
  //   }
  //   else if (clave === true) {
  //     setHuella(true)
  //   }
  // }


  useEffect(() => {
    storageAsync();
    // UsarHuella();
  }, [])

  LogBox.ignoreAllLogs()
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} initialParams={props} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} /> */}
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Huella" component={Huella} options={{ headerShown: false }} />
      <Stack.Screen name="Pin" component={Pin} options={{ headerShown: false }} />
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
function HomeScreen({ userLog, user, route }) {
  const [users, setUsers] = useState([])
  const { primary, secondary, text, bg, dark } = useSelector(store => store.color)
  const dispatch = useDispatch()
  useEffect(() => {
    userLog()
  }, [])

  const handleRefresh = () => {
    dispatch(deleteAll())
    dispatch(addContact(db.auth().currentUser.uid))
  }
  const { nombre } = route.params;



  return (
    <HomeScreenStack.Navigator screenOptions={({ navigation }) => ({ // Personalizamos las cabeceras en general
      headerStyle: {
        backgroundColor: bg,
        borderBottomColor: bg,
      },
      headerBackImage: () => (
        navigation.navigate('Ayuda')
      )
      ,
      headerLeft: () => (

        <View style={{ marginStart: 10 }} >
          <TouchableOpacity
            onPress={() => { navigation.navigate("Home"); nombre('home') }}
          >
            <Icon
              name="arrow-left"
              type="font-awesome"
              size={20}
              color={primary}

            />
          </TouchableOpacity>
        </View>

      )
      ,
      headerTintColor: primary
    })}>
      <HomeScreenStack.Screen name='HomeTab' component={MyTab} options={({ navigation }) => ({ // Personalizamos las cabeceras de los atajos principales
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={style.boton}
          >
            <Icon
              name="ios-menu"
              type='ionicon'
              color={dark ? primary : secondary}
              size={30}
            />
          </TouchableOpacity>),
        title: `Bienvenido ${user && user.name}`,
        headerTitleAlign: 'center',
        headerRight: () => (
          <TouchableOpacity
            onPress={() => { navigation.navigate('Perfil'); console.log(nombre, 'aca') }}
          >
            <Image
              source={{ uri: user.imagen || profileImage }}
              style={{ width: 40, height: 40, borderRadius: 50, marginRight: 10, }}
            />
          </TouchableOpacity>
        )
      })} />
      <HomeScreenStack.Screen name='Tarjetas' component={Tarjetas} options={{ title: 'Tus Tarjetas' }} />
      <HomeScreenStack.Screen name='AddTarjeta' component={AddTarjeta} options={{ title: 'Añadir Tarjeta' }} />
      <HomeScreenStack.Screen name='Movimientos' component={TransactionHistory} options={{ title: 'Mis Movimientos' }} />
      <HomeScreenStack.Screen name='Pagos' component={Pagos} options={{ title: 'Mis Servicios' }} />
      <HomeScreenStack.Screen name='Transferir' component={Transferencias} options={{ title: 'Realizar transferencia' }} />
      <HomeScreenStack.Screen name='Transfers' component={Transfers} options={{ title: 'Transferencias' }} />
      <HomeScreenStack.Screen name='Amigos' component={Amigos} options={{
        title: 'Mis Contactos',
        headerRight: () => (
          <TouchableOpacity onPress={handleRefresh}>
            <Icon name='spinner-refresh' type='fontisto' color={!dark ? secondary : primary} style={{ marginRight: 30 }} />
          </TouchableOpacity>
        ),

      }} />
      <HomeScreenStack.Screen name='Configuracion' component={Configuracion} options={{ title: 'Ajustes' }} />
      <HomeScreenStack.Screen name='Ayuda' component={Ayuda} options={{ title: 'Soporte y Atención' }} />
      <HomeScreenStack.Screen name='Balance' component={Balance} options={{ title: 'Mi Balance' }} />
      <HomeScreenStack.Screen name= 'Dolares' component={Dolares} options={{title:'Dolares'}}/>
      <HomeScreenStack.Screen name='MoonCard' component={MoonCard} options={{ title: "MoonCard" }} />
      <HomeScreenStack.Screen name='Detalle' component={Detalle} options={{ title: 'Detalle de la transaccion' }} />
      <HomeScreenStack.Screen name='Recargas' component={Recargas} options={{ title: 'Recargar' }} />
      <HomeScreenStack.Screen name='confirmOrError' component={confirmOrError} options={{ title: 'Receptor' }} />
      <HomeScreenStack.Screen name='postScreen' component={postScreen} options={{ headerLeft: null, title: null }} />
      <HomeScreenStack.Screen name='Finish' component={Finish} options={{ title: 'Monto' }} />
      <HomeScreenStack.Screen name='PagoServicios' component={PagoServicios} options={{ title: 'Confirmar Pago' }} />
      <HomeScreenStack.Screen name='PagoConfirm' component={PagoConfirm} options={({ navigation }) => ({
        title: "Confirmación", headerLeft: () => (<TouchableOpacity
          onPress={() => navigation.navigate("Home")}
        >
          <View style={{ marginStart: 10 }} >
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Icon
                name="arrow-left"
                type="fontisto"
                size={20}
                color={primary}
              />
            </TouchableOpacity>

          </View>

        </TouchableOpacity>),
      })} />
      <HomeScreenStack.Screen name='ModificaEmail' component={ModificaEmail} options={{ title: 'Modificar Email' }} />
      <HomeScreenStack.Screen name='ModificaPassword' component={ModificaPassword} options={{ title: 'Modificar Password' }} />
      <HomeScreenStack.Screen name='DeleteUser' component={DeleteUser} options={{ title: 'Borrar Usuario' }} />
      <HomeScreenStack.Screen name='ConfirmDelete' component={ConfirmDelete} options={{ title: 'Borrar Usuario' }} />
      <HomeScreenStack.Screen name='Chat' component={Chat} options={{ title: 'Chat ayuda' }} />
      <HomeScreenStack.Screen name='confirmOrErrorTransf' component={confirmOrErrorDolar} options={{ title: 'Receptor' }} />
      <HomeScreenStack.Screen name='FinishDolar' component={FinishDolar} options={{ title: 'Monto' }} />
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