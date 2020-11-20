import AsyncStorage from '@react-native-community/async-storage'
import React, { useState } from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Input } from 'react-native-elements'
import { TextInput } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux'
import style from './PinStyle'


const Pin = ({ navigation }) => {

  const [clave, setClave] = useState("")


  // const cerrar = async () => {
  //   await AsyncStorage.removeItem("Huella")
  //   await AsyncStorage.removeItem("Pin")

  // }
  // cerrar()


  const ingresar = async () => {
    let pin = await AsyncStorage.getItem("Metodo")
    if (pin == JSON.stringify(clave)) {
      navigation.navigate('HomeDrawer')
    } else {
      Alert.alert('Pin incorrecto, Intente nuevamente')
      alert('Pin incorrecto, Intente nuevamente')
    }
  }

  return (

    <View style={style.container} >
      <View style={style.containerTwo} >
        <View style={style.title}>
          <Text style={style.texto}>Ingrese clave de aplicación para continuar</Text>
        </View>
        <Input
          placeholder="Ingrese Clave"
          onChangeText={(text) => setClave(text)}
          autoCompleteType='password'
          secureTextEntry={true}
        />
        <View style={style.botonContainer}>
          <TouchableOpacity
            onPress={() => ingresar()}
            style={style.boton}
          >
            <Text style={style.textBoton}>Ingresar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Pin