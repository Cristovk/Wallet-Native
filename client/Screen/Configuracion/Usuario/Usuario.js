import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import styles from './EstilosUsuario';
import { Icon } from 'react-native-elements';
import Eliminar from './Eliminar';

import { userLog } from '../../../Redux/User';
import { connect } from 'react-redux'
import viewStyle from '../../../Global-Styles/ViewContainer'
import botonStyle from '../../../Global-Styles/BotonMediano'
import { black, blue, white, grey } from '../../../Global-Styles/colores2'

const Configuracion = (props) => {

  const { navigation, cambiar, oscuro } = props
  const [remove, setRemove] = useState(false);
  const { phone, name, lastName, dni, cvu, email } = props.user;



  return (
    <View style={oscuro ? styles.generalDark : styles.general}>
      <View style={[{ backgroundColor: oscuro ? grey : white, marginTop: 25 }, viewStyle.container]}>
        <View style={{ marginTop: 25 }}>
          <View>
            <View style={oscuro ? styles.tituloDark : styles.titulo}>
              <Text style={[{ backgroundColor: oscuro ? grey : white }, styles.subtitulo]}>Eliminar usuario</Text>
            </View>

            <View style={oscuro ? styles.itemDatosDark : styles.itemDatos}>
              <Text style={oscuro ? styles.tituloItemDark : styles.tituloItem}>Nombre</Text>
              <View style={styles.subItem}>
                <Icon
                  size={16}
                  name="user"
                  type="font-awesome"
                  color={black}
                />
                <Text style={oscuro ? styles.datoDark : styles.dato}>{name}</Text>
              </View>
            </View>

            <View style={oscuro ? styles.itemDatosDark : styles.itemDatos}>
              <Text style={oscuro ? styles.tituloItemDark : styles.tituloItem}>Apellido</Text>
              <View style={styles.subItem}>
                <Icon
                  size={16}
                  name="user"
                  type="font-awesome"
                  color={black}
                />
                <Text style={oscuro ? styles.datoDark : styles.dato}>{lastName}</Text>
              </View>
            </View>

            <View style={oscuro ? styles.itemDatosDark : styles.itemDatos}>
              <Text style={oscuro ? styles.tituloItemDark : styles.tituloItem}>DNI</Text>
              <View style={styles.subItem}>
                <Icon
                  size={16}
                  name="address-card"
                  type="font-awesome"
                  color={black}
                />
                <Text style={oscuro ? styles.datoDark : styles.dato}>{dni}</Text>
              </View>
            </View>

            <View style={oscuro ? styles.itemDatosDark : styles.itemDatos}>
              <Text style={oscuro ? styles.tituloItemDark : styles.tituloItem}>Cvu</Text>
              <View style={styles.subItem}>
                <Icon
                  size={16}
                  name="id-card"
                  type="font-awesome"
                  color={black}
                />
                <Text style={oscuro ? styles.datoDark : styles.dato}>{cvu}</Text>
              </View>
            </View>

            <View style={oscuro ? styles.itemDatosDark : styles.itemDatos}>
              <Text style={oscuro ? styles.tituloItemDark : styles.tituloItem}>Teléfono</Text>
              <View style={styles.subItem}>
                <Icon
                  size={16}
                  name="phone"
                  type="font-awesome"
                  color={black}
                />
                <Text style={oscuro ? styles.datoDark : styles.dato}>{phone}</Text>
              </View>
            </View>

            <View style={oscuro ? styles.itemDatosDark : styles.itemDatos}>
              <Text style={oscuro ? styles.tituloItemDark : styles.tituloItem}>Email</Text>
              <View style={styles.subItem}>
                <Icon
                  size={16}
                  name="envelope"
                  type="font-awesome"
                  color={black}
                />
                <Text style={oscuro ? styles.datoDark : styles.dato}>{email}</Text>
              </View>
            </View>
            <View style={botonStyle.botonContainer}>
              <TouchableOpacity style={[{ backgroundColor: oscuro ? black : blue }, botonStyle.boton]} onPress={() => setRemove(true)}>
                <Text style={[{ color: oscuro ? white : white }, botonStyle.texto]} >Eliminar usuario</Text>
              </TouchableOpacity>
            </View>
            <View style={botonStyle.botonContainer}>
              <TouchableOpacity style={[{ backgroundColor: oscuro ? blue : grey }, botonStyle.boton]} onPress={() => cambiar(false)}>
                <Text style={[{ color: oscuro ? white : black }, botonStyle.texto]}>Volver</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {remove && <Eliminar cambiar={setRemove} navigation={navigation} oscuro={oscuro} />}



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
)(Configuracion)

// export default Configuracion;