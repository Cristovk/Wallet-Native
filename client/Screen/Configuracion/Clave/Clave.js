import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./EstilosClave";
import { Icon } from "react-native-elements";
import { ModificarPassword } from '../../../Redux/User';
import { auth } from "../../../../firebase";
import { black, blue, white, grey } from '../../../Global-Styles/colores2'
import viewStyle from '../../../Global-Styles/ViewContainer'
import botonStyle from '../../../Global-Styles/BotonMediano'

const Clave = ({ cambiar, navigation, oscuro }) => {

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
        .then(() => {
          Alert.alert("contraseña modificada")
        })
    }
  }

  return (
    <View style={oscuro ? styles.generalClaveDark : styles.generalClave}>
      <View style={[{ backgroundColor: oscuro ? grey : white, marginTop: 25 }, viewStyle.container]}>
        <View style={{ marginTop: 25 }}>

          <View style={oscuro ? styles.tituloBlack : styles.titulo}>
            <Text style={styles.subtitulo}>Cambia tu contraseña</Text>
          </View>

          <View style={styles.contraseñas}>
            <TextInput
              placeholder="Contraseña"
              style={oscuro ? styles.inputDark : styles.input}
              secureTextEntry={true}
              onChangeText={(data) => setPassword1(data)}
              maxLength={15}
              placeholderTextColor={black}
            />
            {Err.shortPasswordErr ? (
              <Text style={styles.error}>{Err.shortPasswordErr}</Text>
            ) : null}
            {Err.notNumberPasswordErr ? (
              <Text style={styles.error}>{Err.notNumberPasswordErr}</Text>
            ) : null}

            <TextInput
              placeholder="Repite tu contraseña"
              style={oscuro ? styles.inputDark : styles.input}
              secureTextEntry={true}
              onChangeText={(data) => setPassword2(data)}
              maxLength={15}
              placeholderTextColor={black}
            />

            {Err.matchPasswordErr ? (
              <Text style={styles.error}>{Err.matchPasswordErr}</Text>
            ) : null}
          </View>
          <View style={botonStyle.botonContainer}>
            <TouchableOpacity style={[{ backgroundColor: oscuro ? black : blue }, botonStyle.boton]}>
              <Text style={[{ color: oscuro ? white : white }, botonStyle.texto]} onPress={() => handleSubmit()}>Guardar</Text>
            </TouchableOpacity>
          </View>
          <View style={botonStyle.botonContainer}>
            <TouchableOpacity style={[{ backgroundColor: oscuro ? blue : grey }, botonStyle.boton]}>
              <Text style={[{ color: oscuro ? white : black }, botonStyle.texto]} onPress={() => cambiar(false)}>Volver</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Clave;
