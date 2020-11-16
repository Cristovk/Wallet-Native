import React, { useState } from "react";
import { View, Text,/* Button, */ Alert, TouchableOpacity, Image } from 'react-native'
import styles from '../../Views/Login/login-styles'
import { TextInput, Button } from 'react-native-paper'
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { auth } from "../../../firebase"
import { ResetPass } from '../../Redux/User'


const ResetPaswword = ({ navigation }) => {

  const [text, setText] = useState({
    email: "",
    password: ""
  })

  const handleChange = (name, value) => {
    setText({
      ...text,
      [name]: value
    })
  }



  const reset = () => {
    if (text.email != "") {
      ResetPass(text.email)
      Alert.alert('Ya enviamos el email de reset a tu correo. Por favor, Verifica tu casilla de mensaje')
      navigation.navigate('Login')
    }
    else {
      Alert.alert('Debe ingresar su email para continuar')
    }
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>$ald∞</Text> */}
      <Image source={require("../../src/logo.png")} />
      <View>
        <Text style={styles.texto}>
          Ingrese su Email donde enviaremos un correo para poder continuar con el reset de su Password
        </Text>
      </View>
      <View style={{ width: '90%' }}>
        <Input
          textContentType='emailAddress'
          autoCompleteType='email'
          label=' Email'
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          placeholderTextColor='grey'
          placeholder='Email'
          onChangeText={(value) => handleChange('email', value)}
          defaultValue={text.email}
        />
        {text.email === "" ? <Text>Debe ingresar un email para continuar</Text> : <Text></Text>}
      </View>
      <View style={styles.button}>
        <Button
          mode='contained'
          title='Login'
          onPress={reset}
          color='darkblue'
        >
          Enviar
        </Button>
      </View>
    </View>
  )
}

export default ResetPaswword;