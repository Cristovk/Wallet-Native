import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native'
import styles from './EstilosEliminar';
import { Icon } from 'react-native-elements';
import { auth } from "../../../../firebase";
import { userLog, deleteUsuario } from '../../../Redux/User';
import { connect } from 'react-redux'

const Eliminar = ({ navigation, cambiar, userLog, user, oscuro }) => {


  const [dni, setDni] = useState("");
  const [error, setError] = useState(false);
  const colorPlaceholder = oscuro ? '#fff' : 'grey';

  useEffect(() => {
    userLog(auth.currentUser.uid)
  }, [])


  const cerrar = async () => {
    await AsyncStorage.removeItem('Metodo')
  }


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
    <ScrollView style={styles.general}>

      <View style={styles.titulo}>
        <Icon
          size={16}
          name="arrow-circle-left"
          type="font-awesome"
          color="#fff"
          onPress={() => cambiar(false)}

        />
        <Text style={styles.subtitulo}>Eliminar usuario</Text>
      </View>
      <View style={styles.contCuadro}>
        <View style={oscuro ? styles.cuadroDark : styles.cuadro}>
          <Text style={oscuro ? styles.titEliDark : styles.titEli}>Para eliminar el usuario ingresa el DNI</Text>
          <TextInput
            placeholder='Ingresa el DNI'
            style={oscuro ? styles.inputDark : styles.input}
            onChangeText={(data) => setDni(data)}
            placeholderTextColor={colorPlaceholder}

          />
          {error &&
            <View style={styles.contError}>
              <Text style={styles.error}>Debes ingresar tu DNI para continuar</Text>
            </View>}


          <TouchableOpacity style={styles.btnBorrar} >
            <Text onPress={() => deleteUser()} style={oscuro ? styles.textoBtnDark : styles.textoBtn}>Eliminar cuenta</Text>
          </TouchableOpacity>
        </View>

      </View>

    </ScrollView>
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