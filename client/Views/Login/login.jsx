import React, { useState } from "react";
import { View, Text,/* Button, */ Alert, TouchableOpacity } from 'react-native'
import styles from './login-styles'
import { TextInput, Button } from 'react-native-paper'
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import db from "../../../firebase"

const Login = ({ navigation }) => {

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
  


  const login = () => {
    db.auth().signInWithEmailAndPassword(text.email, text.password)
      .then(res => {
        navigation.navigate('HomeDrawer')
        // Alert.alert(JSON.stringify(res.user[0] && res.user[0].name)
        // )
      })
      .catch(function (error) {

        Alert.alert(
          "Ups!",
          "Email o contraseña son incorrectas",
          [{ text: 'continuar' }]
        )
      })
      // hasta que funcione el back

    // Alert.alert(
    //     "Bienvenido!",
    //     "Serás redirigido a tu perfil.",
    //     [{text:'continuar'}]
    // )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>$ald∞</Text>
      <View style={{width:'90%'}}>
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

        <Input
          secureTextEntry={true}
          autoCompleteType='password'
          label='Password'
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          placeholderTextColor='grey'
          placeholder=' Password'
          onChangeText={(value) => handleChange('password', value)}
          defaultValue={text.password}
        />
      </View>
      <View style={styles.button}>
        <Button
          mode='contained'
          title='Login'
          onPress={login}
          color='darkblue'
        >
          Login
        </Button>
      </View>
      <View style={styles.viewLinks}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.link}>Recuperar password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={styles.link}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login;