import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./EstilosClave";
import { Icon } from "react-native-elements";
import { ModificarPassword } from '../../../Redux/User';
import { auth } from "../../../../firebase";

const Clave = ({ cambiar, navigation, oscuro }) => {

  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [Err, setErr] = useState({
    matchPasswordErr: "",
    shortPasswordErr: "",
    notNumberPasswordErr: "",
    codeErr: "",
  });
  const colorPlaceholer = oscuro ? '#fff' : 'grey';

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
        .then(() => {
          Alert.alert("contraseña modificada")
        })
    }
  }

  return (
    <View style={oscuro ? styles.generalClaveDark : styles.generalClave}>
      <View style={styles.titulo}>
        <Icon
          size={16}
          name="arrow-circle-left"
          type="font-awesome"
          color="#fff"
          onPress={() => cambiar(false)}
        />
        <Text style={styles.subtitulo}>Cambia tu contraseña</Text>
      </View>

      <View style={styles.contraseñas}>
        <TextInput
          placeholder="Contraseña"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(data) => setPassword1(data)}
          maxLength={15}
          placeholderTextColor={oscuro ? '#fff' : 'grey'}
        />
        {Err.shortPasswordErr ? (
          <Text style={styles.error}>{Err.shortPasswordErr}</Text>
        ) : null}
        {Err.notNumberPasswordErr ? (
          <Text style={styles.error}>{Err.notNumberPasswordErr}</Text>
        ) : null}

        <TextInput
          placeholder="Repite tu contraseña"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(data) => setPassword2(data)}
          maxLength={15}
          placeholderTextColor={colorPlaceholer}
        />

        {Err.matchPasswordErr ? (
          <Text style={styles.error}>{Err.matchPasswordErr}</Text>
        ) : null}
      </View>

      <TouchableOpacity style={styles.btnGuardar}>
        <Text style={oscuro ? styles.btnDark : styles.btn} onPress={() => handleSubmit()}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Clave;
