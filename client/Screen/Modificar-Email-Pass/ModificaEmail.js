import React, { useState } from "react";
import { View, Text,/* Button, */ Alert, TouchableOpacity, Image } from 'react-native'
import styles from '../perfil/estilosPerfil';
import { TextInput, Button } from 'react-native-paper'
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { auth } from "../../../firebase"
import { ModificarEmail } from '../../Redux/User'


const ModificaEmail = ({ navigation }) => {

  const [text, setText] = useState({
    email: ""
  })

  const handleChange = (name, value) => {
    setText({
      ...text,
      [name]: value
    })
  }

  function handleSubmit() {
    if (text.email != "") {
      ModificarEmail(text.email)
      Alert.alert('Email modificado. Enviamos un Email de verificación a tu nuevo correo.')
      navigation.navigate('Login')
    }
    else {
      Alert.alert('Debe ingresar su email para continuar')
    }
  }





  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>$ald∞</Text> */}
      <View style={{ width: '90%' }}>
        <View style={styles.grupoform}>
          <Text style={styles.labelinput}>EMAIL</Text>
          <TextInput
            value={auth.currentUser.email}
            style={styles.inputperfil}
          />
          <Text style={styles.padrelapiz}></Text>
        </View>
        <View style={styles.grupoform}>
          <Text style={styles.labelinput}>Nuevo Email</Text>
          <TextInput
            placeholder="Ingrese Email Nuevo"
            style={styles.inputperfil}
            onChangeText={(value) => handleChange('email', value)}
          />
          <Text style={styles.padrelapiz}></Text>
        </View>
        <TouchableOpacity style={styles.btnvolver} onPress={() => handleSubmit()}>
          <Text style={styles.link}>Modificar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ModificaEmail;