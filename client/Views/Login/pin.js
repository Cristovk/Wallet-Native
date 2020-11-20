import AsyncStorage from '@react-native-community/async-storage'
import React, { useState } from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { TextInput } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux'


const Pin = ({ navigation }) => {

  const [clave, setClave] = useState("")


  const ingresar = async () => {
    let user = await AsyncStorage.getItem("Pin")
    if (user == JSON.stringify(clave)) {
      navigation.navigate('HomeDrawer')
    } else {
      Alert.alert('Pin incorrecto, Intente nuevamente')
      alert('Pin incorrecto, Intente nuevamente')
    }
  }

  return (
    <ScrollView>
      <View >
        <Text>Ingrese clave de aplicación para continuar</Text>
        <TextInput
          placeholder="Ingrese Clave"
          onChangeText={(text) => setClave(text)}
        />
        <TouchableOpacity
          onPress={() => ingresar()}
        >
          <Text>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Pin