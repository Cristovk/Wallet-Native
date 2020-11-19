
import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Lapiz from './Lapiz';
import styles from './estilosFormulario';
import styles2 from './estilosPerfil';
import { updateUser } from '../../Redux/User';
import { connect } from 'react-redux'
import { auth, storage } from '../../../firebase';



const Formulario = ({ data, updateUser, navigation }) => {

  // console.log("Data de formulario---------------------------",data)

  const { name, id, phone, dni, cuil, lastName, imagen } = data;
  // console.log("antes de la funcion----------",imagen)
  //State que guarda los datos del usuario editado.
  const [datos, setDatos] = useState({ name, phone, dni, cuil, lastName, imagen });
  // console.log('......datossss',datos)
  function handleSubmit() {

    
    storage.collection('Users').doc(auth.currentUser.uid).set({...datos,imagen})
    .then( res => Alert.alert('Datos actualizados!'))
    .catch(err => console.log(err))
  }

  return (
    <View>
      <View style={styles.grupoform}>
        <Text style={styles.labelinput}>Nombre</Text>
        <TextInput
          placeholder={name}
          style={styles.inputperfil}
          onChangeText={(data) => setDatos({ ...datos, name: data })}
        />
        <Text style={styles.padrelapiz}><Lapiz /></Text>

      </View>

      <View style={styles.grupoform}>
        <Text style={styles.labelinput} >Apellido</Text>
        <TextInput
          placeholder={lastName}
          style={styles.inputperfil}
          onChangeText={(data) => setDatos({ ...datos, lastName: data })}
        />
        <Text style={styles.padrelapiz}><Lapiz /></Text>
      </View>

      <View style={styles.grupoform}>
        <Text style={styles.labelinput}>Teléfono</Text>
        <TextInput
          placeholder={phone}
          style={styles.inputperfil}
          onChangeText={(data) => setDatos({ ...datos, phone: data })}

        />
        <Text style={styles.padrelapiz}><Lapiz /></Text>
      </View>

      {/* <View style={styles.grupoform}>
        <Text style={styles.labelinput}>Cuil</Text>
        <TextInput
          placeholder={cuil}
          style={styles.inputperfil}
          onChangeText={(data) => setDatos({ ...datos, cuil: data })}
        />
        <Text style={styles.padrelapiz}><Lapiz /></Text>
      </View> */}

      <View style={styles.grupoform}>
        <Text style={styles.labelinput}>DNI</Text>
        <TextInput
          value={dni}
          style={styles.inputperfil}
        />
        <Text style={styles.padrelapiz}><Lapiz /></Text>
      </View>

      <View style={styles.grupoform}>
        <Text style={styles.labelinput}>CUIL</Text>
        <TextInput
          placeholder={cuil}
          style={styles.inputperfil}
        />
        <Text style={styles.padrelapiz}><Lapiz /></Text>
      </View>
      <View style={styles.grupoform}>
        <Text style={styles.labelinput}>EMAIL</Text>
        <TextInput
          placeholder={auth.currentUser.email}
          style={styles.inputperfil}
        />
        <Text style={styles.padrelapiz}><Lapiz /></Text>
      </View>
      <View style={styles2.generalvolver}>

        <TouchableOpacity style={styles2.btnvolver} onPress={() => handleSubmit()}>
          <Text style={styles2.link}>Guardar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles2.btnvolver} onPress={() => navigation.navigate('ModificaEmail')}>
          <Text style={styles2.link}>Modificar Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles2.btnvolver} onPress={() => navigation.navigate('ModificaPassword')}>
          <Text style={styles2.link}>Modificar Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles2.btnvolver} onPress={() => navigation.navigate('DeleteUser')}>
          <Text style={styles2.link}>Eliminar Cuenta</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateUser: ({ name, id, lastName, phone, cuil, dni }) => dispatch(updateUser({ name, id, lastName, phone, cuil, dni }))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Formulario)
