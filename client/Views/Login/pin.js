import AsyncStorage from '@react-native-community/async-storage'
import React, { useState } from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Input } from 'react-native-elements'
import { TextInput } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux'
import style from './PinStyle'
import styleBoton from '../../Global-Styles/BotonMediano'


const Pin = ({ navigation }) => {

  const [clave, setClave] = useState("")

  const { primary, secondary, text, bg } = useSelector(store => store.color)

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

    <View style={[{ backgroundColor: primary }, style.container]} >
      <View style={[{ borderColor: bg }, style.containerTwo]} >
        <View style={style.title}>
          <Text style={[{ color: bg }, style.texto]}>Ingrese clave de aplicación para continuar</Text>
        </View>
        <Input
          placeholder="Ingrese Clave"
          onChangeText={(text) => setClave(text)}
          autoCompleteType='password'
          secureTextEntry={true}
        />
        <View style={styleBoton.botonContainer}>
          <TouchableOpacity
            onPress={() => ingresar()}
            style={[{ backgroundColor: bg }, styleBoton.boton]}
          >
            <Text style={[{ color: primary }, styleBoton.texto]}>Ingresar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Pin