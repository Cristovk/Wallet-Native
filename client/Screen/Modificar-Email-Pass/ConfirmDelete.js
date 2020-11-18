import React, { useEffect, useState } from "react";
import { View, Text,/* Button, */ Alert, TouchableOpacity, Image, ScrollView } from 'react-native'
import styles from './confirmDeleteStyle';
import { TextInput, Button, Title } from 'react-native-paper'
import { Input, ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { auth, storage } from "../../../firebase"
import { userLog, deleteUsuario } from '../../Redux/User'
import { connect } from 'react-redux'


const confirmDelete = ({ navigation, userLog, user }) => {

  const [dni, setDni] = useState("")

  useEffect(() => {
    userLog(auth.currentUser.uid)
  }, [])


  const deleteUser = async () => {
    if (dni === user.dni) {
      deleteUsuario(auth.currentUser.uid)
      Alert.alert("Usuario eliminado Correctamente!")
      navigation.navigate("Login")
    }
    else {
      Alert.alert("Dni incorrecto, intente nuevamente")
    }
  }

  return (
    <ScrollView>
      <View style={styles.containerMayor}>
        <View style={styles.container}>
          <View style={styles.textoContainer}>
            <Text style={styles.texto}>Para Eliminar el usuario, ingrese su dni</Text>
          </View>
          <View style={styles.botoncontainer}>
            <TextInput
              placeholder="Ingrese Dni"
              onChangeText={(data) => setDni(data)}
              style={styles.input}
            />
          </View>
          <View style={styles.botoncontainer}>
            <TouchableOpacity
              onPress={() => deleteUser()}
              style={styles.boton}
            >
              <Text style={styles.textoBoton}>Eliminar Cuenta</Text>
            </TouchableOpacity>
          </View>
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
)(confirmDelete)
