
import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Lapiz from './Lapiz';
import styles from './estilosFormulario';
import styles2 from './estilosPerfil';
import { updateUser } from '../../Redux/User';
import { connect } from 'react-redux'
import { auth, storage } from '../../../firebase';



const Formulario = ({ data, updateUser, navigation, color }) => {

  const { text, primary, secondary, dark } = color
  const { name, phone, dni, cuil, lastName, imagen } = data;
  //State que guarda los datos del usuario editado.
  const [datos, setDatos] = useState({ name, phone, dni, cuil, lastName, imagen });

  function handleSubmit() {

    storage.collection('Users').doc(auth.currentUser.uid).update({ ...datos, imagen })
      .then(res => Alert.alert('Datos actualizados!'))
      .catch(err => console.log(err))
  }

  return (
    <View>
      <View style={styles.grupoform}>
        <Text style={{ ...styles.labelinput, color: dark ? secondary : primary }}>Nombre</Text>
        <TextInput
          placeholder={name}
          placeholderTextColor={dark && 'gray'}
          style={{ ...styles.inputperfil, color: text }}
          onChangeText={(data) => setDatos({ ...datos, name: data })}
        />
        <Text style={styles.padrelapiz}><Lapiz /></Text>

      </View>

      <View style={styles.grupoform}>
        <Text style={{ ...styles.labelinput, color: dark ? secondary : primary }} >Apellido</Text>
        <TextInput
          placeholder={lastName}
          placeholderTextColor={dark && 'gray'}
          style={{ ...styles.inputperfil, color: text }}
          onChangeText={(data) => setDatos({ ...datos, lastName: data })}
        />
        <Text style={styles.padrelapiz}><Lapiz /></Text>
      </View>

      <View style={styles.grupoform}>
        <Text style={{ ...styles.labelinput, color: dark ? secondary : primary }}>Teléfono</Text>
        <TextInput
          placeholder={phone}
          placeholderTextColor={dark && 'gray'}
          style={{ ...styles.inputperfil, color: text }}
          onChangeText={(data) => setDatos({ ...datos, phone: data })}

        />
        <Text style={styles.padrelapiz}><Lapiz /></Text>
      </View>

      {/* <View style={styles.grupoform}>
        <Text style={{...styles.labelinput, color:dark ? secondary: primary}}>Cuil</Text>
        <TextInput
          placeholder={cuil}
          style={{...styles.inputperfil,color:text}}
          onChangeText={(data) => setDatos({ ...datos, cuil: data })}
        />
        <Text style={styles.padrelapiz}><Lapiz /></Text>
      </View> */}

      <View style={styles.grupoform}>
        <Text style={{ ...styles.labelinput, color: dark ? secondary : primary }}>DNI</Text>
        <TextInput
          value={dni}
          style={{ ...styles.inputperfil, color: text }}
        />
        <Text style={styles.padrelapiz}><Lapiz /></Text>
      </View>

      <View style={styles.grupoform}>
        <Text style={{ ...styles.labelinput, color: dark ? secondary : primary }}>CUIL</Text>
        <TextInput
          placeholder={cuil}
          placeholderTextColor={dark && 'gray'}
          style={{ ...styles.inputperfil, color: text }}
        />
        <Text style={styles.padrelapiz}><Lapiz /></Text>
      </View>
      <View style={styles.grupoform}>
        <Text style={{ ...styles.labelinput, color: dark ? secondary : primary }}>EMAIL</Text>
        <TextInput
          placeholder={auth.currentUser.email}
          placeholderTextColor={dark && 'gray'}
          style={{ ...styles.inputperfil, color: text }}
        />
        <Text style={styles.padrelapiz}><Lapiz /></Text>
      </View>
      <View style={styles2.generalvolver}>

        <TouchableOpacity style={{ ...styles2.btnvolver, backgroundColor: dark ? secondary : primary }} onPress={() => handleSubmit()}>
          <Text style={styles2.link}>Guardar</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles2.btnvolver} onPress={() => navigation.navigate('ModificaEmail')}>
          <Text style={styles2.link}>Modificar Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles2.btnvolver} onPress={() => navigation.navigate('ModificaPassword')}>
          <Text style={styles2.link}>Modificar Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles2.btnvolver} onPress={() => navigation.navigate('DeleteUser')}>
          <Text style={styles2.link}>Eliminar Cuenta</Text>
        </TouchableOpacity> */}
      </View>

    </View>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    color: state.color
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
