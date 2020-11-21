import React, { useEffect } from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'
import AsyncStorage from "@react-native-community/async-storage";
import * as LocalAuthentication from 'expo-local-authentication';


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
    <ScrollView>
      <View>
        <TouchableOpacity
          onPress={AuthWithFinger}
        >
          <Text>Huella</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  )
}

export default Huella