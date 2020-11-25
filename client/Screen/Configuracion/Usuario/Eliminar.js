import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native'
import styles from './EstilosEliminar';
import { Icon } from 'react-native-elements';
import { auth } from "../../../../firebase";
import { userLog, deleteUsuario } from '../../../Redux/User';
import { connect } from 'react-redux'
import viewStyle from '../../../Global-Styles/ViewContainer'
import botonStyle from '../../../Global-Styles/BotonMediano'
import { black, blue, white, grey } from '../../../Global-Styles/colores2'

const Eliminar = ({ navigation, cambiar, userLog, user, oscuro }) => {


  const [dni, setDni] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    userLog(auth.currentUser.uid)
  }, [])


  const deleteUser = async () => {
    if (!dni) {
      return setError(true);
    }
    setError(false);
    if (dni === user.dni) {
      cerrar()
      deleteUsuario(auth.currentUser.uid)
        .then(() => {
          Alert.alert('Usuario eliminado', 'Esperamos vuelvas pronto',
            [{ text: 'Ok', onPress: () => navigation.navigate('Splash', { usuario3: false }) }])
        })
    }
    else {
      Alert.alert("Dni incorrecto, intente nuevamente")
    }

  }

  return (
    <View style={oscuro ? styles.generalDark : styles.general}>
      <View style={[{ backgroundColor: oscuro ? grey : white, marginTop: 25 }, viewStyle.container]}>
        <View style={{ marginTop: 25 }}>
          <View style={oscuro ? styles.tituloDark : styles.titulo}>
            <Text style={styles.subtitulo}>Eliminar usuario</Text>
          </View>
          <View style={styles.contCuadro}>
            <View style={oscuro ? styles.cuadroDark : styles.cuadro}>
              <Text style={oscuro ? styles.titEliDark : styles.titEli}>Para eliminar el usuario ingresa el DNI</Text>
              <TextInput
                placeholder='Ingresa el DNI'
                style={oscuro ? styles.inputDark : styles.input}
                onChangeText={(data) => setDni(data)}
                placeholderTextColor={black}

              />
              {error &&
                <View style={styles.contError}>
                  <Text style={styles.error}>Debes ingresar tu DNI para continuar</Text>
                </View>}

              <View style={botonStyle.botonContainer}>
                <TouchableOpacity style={[{ backgroundColor: oscuro ? black : blue }, botonStyle.boton]}>
                  <Text style={[{ color: oscuro ? white : white }, botonStyle.texto]} onPress={() => deleteUser()}>Guardar</Text>
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
      </View>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userLog: id => dispatch(userLog(id))
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Eliminar)