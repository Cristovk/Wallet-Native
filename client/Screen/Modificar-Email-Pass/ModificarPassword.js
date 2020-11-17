import React, { useState } from "react";
import { View, Text,/* Button, */ Alert, TouchableOpacity, Image } from 'react-native'
import styles from '../perfil/estilosPerfil';
import { TextInput, Button } from 'react-native-paper'
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { auth } from "../../../firebase"
import { darkBlue, orange, grey, white } from "../../Global-Styles/colors"
import { ModificarPassword } from "../../Redux/User";

const ModificaPassword = ({ navigation }) => {

  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [Err, setErr] = useState({
    matchPasswordErr: "",
    shortPasswordErr: "",
    notNumberPasswordErr: "",
    codeErr: "",
  });

  function validateForm() {
    setErr({
      matchPasswordErr: "",
      shortPasswordErr: "",
      notNumberPasswordErr: "",
      codeErr: "",
    });
    let matchPasswordErr = "";
    let shortPasswordErr = "";
    let notNumberPasswordErr = "";
    let codeErr = "";

    if (password1 !== password2) {
      matchPasswordErr = "Las contraseñas no coinciden";
    }
    if (password1.length < 8 || password1.length > 15) {
      shortPasswordErr = "Debe tener entre 8 y 15 caracteres";
    } else if (password1.search(/[0-9]/) == -1) {
      notNumberPasswordErr = "Debe tener al menos un número";
    }
    if (
      matchPasswordErr ||
      shortPasswordErr ||
      codeErr ||
      notNumberPasswordErr
    ) {
      setErr({
        matchPasswordErr,
        shortPasswordErr,
        codeErr,
        notNumberPasswordErr,
      });
      return false;
    } else return true;
  }


  function handleSubmit() {
    const valid = validateForm()
    if (valid) {
      ModificarPassword(password2)
      Alert.alert("contraseña modificada")
      navigation.navigate('Login')
    }
  }





  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>$ald∞</Text> */}
      <View style={{ width: '90%' }}>
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={[styles.inputs]}
          onChangeText={(text) => setPassword1(text)}
          value={password1}
          placeholder="********"
          placeholderTextColor={grey}
          textContentType="password"
          secureTextEntry={true}
        />
        {Err.shortPasswordErr ? (
          <Text style={styles.error}>{Err.shortPasswordErr}</Text>
        ) : null}
        {Err.notNumberPasswordErr ? (
          <Text style={styles.error}>{Err.notNumberPasswordErr}</Text>
        ) : null}
        <Text style={styles.label}>Repite la contraseña</Text>
        <TextInput
          style={[styles.inputs]}
          onChangeText={(text) => setPassword2(text)}
          value={password2}
          placeholder="********"
          placeholderTextColor={grey}
          textContentType="password"
          secureTextEntry={true}
        />
        {Err.matchPasswordErr ? (
          <Text style={styles.error}>{Err.matchPasswordErr}</Text>
        ) : null}
      </View>
      <TouchableOpacity style={styles.btnvolver} onPress={() => handleSubmit()}>
        <Text style={styles.link}>Modificar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ModificaPassword;