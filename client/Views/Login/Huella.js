import React, { useEffect } from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'
import AsyncStorage from "@react-native-community/async-storage";
import * as LocalAuthentication from 'expo-local-authentication';
import styles from './HuellaStyle'


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

  // const cerrar = async () => {
  //   await AsyncStorage.removeItem("Metodo")
  // }

  // cerrar()


  return (

    <View style={styles.container}>
      <View style={styles.containerTwo} >
        <View style={styles.title}>
          <Text style={styles.texto}>Ingrese su huella para continuar</Text>
        </View>
        <View style={styles.botonContainer}>
          <TouchableOpacity
            onPress={AuthWithFinger}
            style={styles.boton}
          >
            <Text style={styles.textBoton}>Ingresar Huella</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Huella