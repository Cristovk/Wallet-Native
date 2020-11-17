import React, { useEffect, useState } from "react";
import { View, Text,/* Button, */ Alert, TouchableOpacity, Image, ScrollView } from 'react-native'
import styles from './DeleteUserStyle';
import { TextInput, Button, Title } from 'react-native-paper'
import { Input, ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { auth } from "../../../firebase"
import { ModificarEmail, userLog } from '../../Redux/User'
import { connect } from 'react-redux'


const DeleteUser = ({ navigation, userLog, user }) => {


  useEffect(() => {
    userLog(auth.currentUser.uid)
  }, [])

  const [text, setText] = useState({
    email: ""
  })

  const handleChange = (name, value) => {
    setText({
      ...text,
      [name]: value
    })
  }

  function handleSubmit() {
    if (text.email != "") {
      ModificarEmail(text.email)
      Alert.alert('Email modificado. Enviamos un Email de verificación a tu nuevo correo.')
      navigation.navigate('Login')
    }
    else {
      Alert.alert('Debe ingresar su email para continuar')
    }
  }





  return (
    <ScrollView >
      <View>
        <ListItem>
          <ListItem.Chevron />
          <ListItem.Content>
            <Title>Nombre:</Title>
            <ListItem.Subtitle>{user.name} </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Chevron />
          <ListItem.Content>
            <Title>Apellid:</Title>
            <ListItem.Subtitle>{user.lastName} </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Chevron />
          <ListItem.Content>
            <Title>Dni:</Title>
            <ListItem.Subtitle>{user.dni} </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Chevron />
          <ListItem.Content>
            <Title>Cuil:</Title>
            <ListItem.Subtitle>{user.cuil} </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Chevron />
          <ListItem.Content>
            <Title>Teléfono:</Title>
            <ListItem.Subtitle>{user.phone} </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Chevron />
          <ListItem.Content>
            <Title>Email:</Title>
            <ListItem.Subtitle>{auth.currentUser.email} </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </View>
      <View style={styles.botoncontainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ConfirmDelete')}
          style={styles.boton}

        >
          <Text
            style={styles.texto}
          >Eliminar Cuenta</Text>
        </TouchableOpacity>

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
)(DeleteUser)
