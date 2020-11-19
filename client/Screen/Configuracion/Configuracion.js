import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './EstilosConfiguracion';
import { Icon } from 'react-native-elements';
import Clave from './Clave/Clave';
import Correo from './Correo/Correo';
import Usuario from './Usuario/Usuario';
import { useDispatch, useSelector } from 'react-redux'
import { darkMode } from '../../Redux/Estilos';
import { auth } from "../../../firebase";
import { set } from 'lodash';
import { Switch } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { changeLoginMethod } from "../../Redux/User"


const Configuracion = ({ navigation, route }) => {

  console.log(route)
  const setApp = route.params.params.darker
  const dispatch = useDispatch()
  const dark = useSelector(store => store.color.dark)
  const fingerPrint = useSelector(store => store.user.security)

  const [passwordchange, setPasswordChange] = useState(false);
  const [emailchange, setEmailChange] = useState(false);
  const [deleteuser, setDeleteUser] = useState(false);
  const [main, setMain] = useState(true);
  const [switchConfig, setSwitchConfig] = useState(fingerPrint.fingerPrint);

  const mostrar = () => {
    setDeleteUser(true);
    setMain(false);
  }

  const handleLoginSecurity = async () => {
    dispatch(changeLoginMethod(switchConfig))
    if (switchConfig) {
      await AsyncStorage.setItem("method", "true")
      await AsyncStorage.setItem("token", JSON.stringify(auth.currentUser.getIdToken()))
    } else {
      await AsyncStorage.removeItem("method")
    }
  }

  return (
    <ScrollView style={styles.general}>

      {main &&
        <View >
          {console.log("---------------------------------------",switchConfig)}
          <View style={styles.contDark}>
            <Text style={styles.textoDark}>DarkMode</Text>
            <Switch value={dark} onValueChange={() => { setApp(!dark); dispatch(darkMode(dark)) }} />
          </View>

          <View style={styles.general}>
            <Text style={styles.titulo}>Tu contraseña</Text>
            <View style={styles.contclave}>
              <Text style={styles.textoclave}>Cambia tu contraseña</Text>
              <Icon
                size={16}
                name='chevron-right'
                type='font-awesome'
                color='#fc7029'
                onPress={() => { setPasswordChange(true); setMain(false) }}
              />
            </View>

            <Text style={styles.titulo}>Tu Correo</Text>
            <View style={styles.contclave}>
              <Text style={styles.textoclave}>Cambia tu correo</Text>
              <Icon
                size={16}
                name='chevron-right'
                type='font-awesome'
                color='#fc7029'
                onPress={() => { setEmailChange(true); setMain(false) }}
              />
            </View>

            <Text style={styles.titulo}>Reconocimiento</Text>
            <View style={styles.contclave}>
              <Text style={styles.textoclave}>Voz</Text>
              <Switch />
            </View>

            <Text style={styles.titulo}>¿Como te quieres loguear?</Text>
            <View style={styles.contclave}>
              <Text style={styles.textoclave}>Huella</Text>
              <Switch value={switchConfig} onValueChange={() =>{setSwitchConfig(!switchConfig) ;handleLoginSecurity()}} />
            </View>

            <Text style={styles.titulo}>Cuenta</Text>
            <View style={styles.contclave}>
              <Text style={styles.textoclave} >Eliminar cuenta</Text>
              <View style={styles.basura}>
                <Icon
                  size={16}
                  name='trash'
                  type='font-awesome'
                  color='#fff'
                  onPress={mostrar}
                />
              </View>

            </View>

          </View>
        </View>}
      {passwordchange && <Clave main={setMain} cambiar={setPasswordChange} navigation={navigation} />}
      {emailchange && <Correo main={setMain} cambiar={setEmailChange} navigation={navigation} />}
      {deleteuser && <Usuario main={setMain} cambiar={setDeleteUser} navigation={navigation} />}
    </ScrollView>
  )
}

export default Configuracion;