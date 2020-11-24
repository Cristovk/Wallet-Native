
import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Lapiz from './Lapiz';
import styles from './estilosFormulario';
import styles2 from './estilosPerfil';
import { updateUser } from '../../Redux/User';
import { connect, useSelector } from 'react-redux'
import { auth, storage } from '../../../firebase';
import styleView from '../../Global-Styles/ViewContainer'
import { ListItem, Icon } from 'react-native-elements';
import styleBoton from '../../Global-Styles/BotonMediano'

const Formulario = ({ data, updateUser, navigation, color }) => {

  const { text, primary, secondary, dark, bg } = useSelector(store => store.color)
  const { name, phone, dni, cuil, lastName, imagen, cvu, email } = data;
  //State que guarda los datos del usuario editado.
  const [datos, setDatos] = useState({ name, phone, dni, cuil, lastName, imagen });

  function handleSubmit() {

    storage.collection('Users').doc(auth.currentUser.uid).update({ ...datos, imagen })
      .then(res => Alert.alert('Datos actualizados!'))
      .catch(err => console.log(err))
  }

  return (


    <View style={[{ backgroundColor: primary, marginTop: 25, }, styleView.container]}>
      <View style={{ marginBottom: 40 }}>
        <ListItem
          containerStyle={{ backgroundColor: primary, borderBottomColor: dark ? "gray" : secondary, borderBottomWidth: 1, borderTopColor: dark ? "gray" : secondary, borderTopWidth: 1 }}
        >
          <ListItem.Chevron
            color={dark ? bg : secondary}
          />
          <ListItem.Content>
            <ListItem.Title>Nombre: </ListItem.Title>
            <ListItem.Subtitle>{name}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{ backgroundColor: primary, borderBottomColor: dark ? "gray" : secondary, borderBottomWidth: 1, }}
        >
          <ListItem.Chevron
            color={dark ? bg : secondary}
          />
          <ListItem.Content>
            <ListItem.Title>Apellido: </ListItem.Title>
            <ListItem.Subtitle>{lastName}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{ backgroundColor: primary, borderBottomColor: dark ? "gray" : secondary, borderBottomWidth: 1 }}
        >
          <ListItem.Chevron
            color={dark ? bg : secondary}
          />
          <ListItem.Content>
            <ListItem.Title>Telefono: </ListItem.Title>
            <TextInput
              placeholder={phone}
              placeholderTextColor={dark && 'gray'}
              style={{ ...styles.inputperfil, color: text }}
              onChangeText={(data) => setDatos({ ...datos, phone: data })}
            />
          </ListItem.Content>
          <Icon
            size={16}
            name='pencil'
            type='font-awesome'
            color={dark ? bg : secondary}
          />
        </ListItem>
        <ListItem
          containerStyle={{ backgroundColor: primary, borderBottomColor: dark ? "gray" : secondary, borderBottomWidth: 1 }}
        >
          <ListItem.Chevron
            color={dark ? bg : secondary}
          />
          <ListItem.Content>
            <ListItem.Title>DNI: </ListItem.Title>
            <ListItem.Subtitle>{dni}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{ backgroundColor: primary, borderBottomColor: dark ? "gray" : secondary, borderBottomWidth: 1 }}
        >
          <ListItem.Chevron
            color={dark ? bg : secondary}
          />
          <ListItem.Content>
            <ListItem.Title>CVU: </ListItem.Title>
            <ListItem.Subtitle>{cvu}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{ backgroundColor: primary, borderBottomColor: dark ? "gray" : secondary, borderBottomWidth: 1 }}
        >
          <ListItem.Chevron
            color={dark ? bg : secondary}
          />
          <ListItem.Content>
            <ListItem.Title>Email: </ListItem.Title>
            <ListItem.Subtitle>{email}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </View>

      <View style={styleBoton.botonContainer}>
        <TouchableOpacity
          onPress={() => handleSubmit()}
          style={[{ backgroundColor: secondary }, styleBoton.boton]}
        >
          <Text style={[{ color: text }, styleBoton.texto]} >Guardar</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.grupoform}>
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
      </View> */}

      {/* <View style={styles.grupoform}>
        <Text style={{...styles.labelinput, color:dark ? secondary: primary}}>Cuil</Text>
        <TextInput
          placeholder={cuil}
          style={{...styles.inputperfil,color:text}}
          onChangeText={(data) => setDatos({ ...datos, cuil: data })}
        />
        <Text style={styles.padrelapiz}><Lapiz /></Text>
      </View> */}

      {/* <View style={styles.grupoform}>
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

         */}
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
