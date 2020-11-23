import React, { useEffect } from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'
import AsyncStorage from "@react-native-community/async-storage";
import * as LocalAuthentication from 'expo-local-authentication';
import styles from './HuellaStyle'
import { useSelector } from 'react-redux'
import styleBoton from '../../Global-Styles/BotonMediano'


const Huella = ({ navigation }) => {

  const AuthWithFinger = async () => {
    const res = await LocalAuthentication.hasHardwareAsync()
    if (!res) return Alert.alert("Su dispositivo no soporta los metodos de login")

    const autorization = await LocalAuthentication.supportedAuthenticationTypesAsync({})
    if (!autorization) return Alert.alert('No autorizado')

    const huella = await LocalAuthentication.isEnrolledAsync()
    if (!huella) return Alert.alert('No tiene autorizacion')
    const login = await LocalAuthentication.authenticateAsync('Ponga su huella')
    if (login.success) {
      console.log(login)
      // Alert.alert('Usuario encontrado')
      navigation.navigate("HomeDrawer")
    } else {
      Alert.alert('Hubo un error')
    }
  }

  const { primary, secondary, text, bg } = useSelector(store => store.color)


  // const cerrar = async () => {
  //   await AsyncStorage.removeItem("Metodo")
  // }

  // cerrar()


  return (

    <View style={[{ backgroundColor: primary }, styles.container]}>
      <View style={[{ borderColor: bg }, styles.containerTwo]} >
        <View style={styles.title}>
          <Text style={[{ color: bg }, styles.texto]}>Ingrese su huella para continuar</Text>
        </View>
        <View style={styleBoton.botonContainer}>
          <TouchableOpacity
            onPress={AuthWithFinger}
            style={[{ backgroundColor: bg }, styleBoton.boton]}
          >
            <Text style={[{ color: primary }, styleBoton.texto]}>Ingresar Huella</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Huella