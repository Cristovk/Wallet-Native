import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native'
import styles from './EstilosEliminar';
import { Icon } from 'react-native-elements';
import { auth, storage } from "../../../../firebase";
import { userLog, deleteUsuario } from '../../../Redux/User';
import { connect } from 'react-redux'

const Eliminar = ({ navigation, cambiar, userLog, user }) => {


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
      deleteUsuario(auth.currentUser.uid)
      alert("Usuario eliminado Correctamente!")
      navigation.navigate("Login")
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
        <View style={styles.cuadro}>
          <Text style={styles.titEli}>Para eliminar el usuario ingresa el DNI</Text>
          <TextInput
            placeholder='Ingresa el DNI'
            style={styles.input}
            onChangeText={(data) => setDni(data)}

          />
          {error &&
            <View style={styles.contError}>
              <Text style={styles.error}>Debes ingresar tu DNI para continuar</Text>
            </View>}


          <TouchableOpacity style={styles.btnBorrar} >
            <Text onPress={() => deleteUser()} style={styles.textoBtn}>Eliminar cuenta</Text>
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
// export default Configuracion;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Eliminar)