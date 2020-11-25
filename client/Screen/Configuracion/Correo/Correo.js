import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import styles from './CorreoEstilos';
import { Icon, ListItem } from 'react-native-elements';
import { auth } from "../../../../firebase";
import { ModificarEmail } from '../../../Redux/User';
import viewStyle from '../../../Global-Styles/ViewContainer'
import botonStyle from '../../../Global-Styles/BotonMediano'
import { black, blue, white, grey } from '../../../Global-Styles/colores2'
import { widthPercentageToDP, heightPercentageToDP } from "react-native-responsive-screen"
import { List } from 'react-native-paper';

const Correo = ({ cambiar, navigation, oscuro }) => {

  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [empty, setEmpty] = useState(false)
  const colorPlaceholer = oscuro ? '#fff' : 'grey';

  function handleSubmit() {
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (!email) {
      return setEmpty(true);
    }
    setEmpty(false);
    if (!emailRegex.test(email)) {
      return setError(true);
    }
    setError(false);
    ModificarEmail(email)
      .then(() => {
        Alert.alert('Email modificado. Enviamos un Email de verificación a tu nuevo correo.')
      })
  }


  return (
    <View style={oscuro ? styles.generalClaveDark : styles.generalClave}>
      <View style={[{ backgroundColor: oscuro ? grey : white, marginTop: 25 }, viewStyle.container]}>
        <View style={{ marginTop: 25 }}>
          <View style={oscuro ? styles.tituloBlack : styles.titulo}>
            <Text style={[{ backgroundColor: oscuro ? grey : white }, styles.subtitulo]}>Cambia tu correo</Text>
          </View>

          <View style={styles.contraseñas}>
            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", width: widthPercentageToDP("100%"), marginTop: 25 }}>
              <Text>Mi Correo:</Text>
              <Text>{auth.currentUser.email}</Text>
            </View>
            <TextInput
              placeholder='Ingrese nuevo correo'
              style={oscuro ? styles.inputDark : styles.input}
              onChangeText={(data) => setEmail(data)}
              placeholderTextColor={black}
            />
            {error && <Text style={styles.error}>El correo ingresado no es valido</Text>}
            {empty && <Text style={styles.error}>Debes ingresar un correo para continuar</Text>}
          </View>

          <View style={[{ marginTop: 20 }, botonStyle.botonContainer]}>
            <TouchableOpacity style={[{ backgroundColor: oscuro ? black : blue }, botonStyle.boton]} onPress={() => handleSubmit()}>
              <Text style={[{ color: oscuro ? white : white }, botonStyle.texto]} >Guardar</Text>
            </TouchableOpacity>
          </View>
          <View style={[{ marginTop: 20 }, botonStyle.botonContainer]}>
            <TouchableOpacity style={[{ backgroundColor: oscuro ? blue : grey }, botonStyle.boton]} onPress={() => cambiar(false)}>
              <Text style={[{ color: oscuro ? white : black }, botonStyle.texto]} >Volver</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </View>
  );
}

export default Correo;