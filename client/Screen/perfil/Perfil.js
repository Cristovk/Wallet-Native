import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';
import styles from './estilosPerfil';
import Formulario from './Formulario';

const Perfil = (props) => {

  const data = {
    nombre: 'Andrés Sánchez',
    correo: 'andres@andres.com',
    telefono: '3013184491',
    nacimiento: '23-10-1980',
    dni: '1.070.974.122',
    ocupacion: 'Estudiante'
  }


  return (
    <ScrollView>
      <View style={styles.generalperfil}>
        <View style={styles.generalimagen}>
          <View style={styles.contenedorimagen}>
            <Image style={styles.imagenperfil} source={{ uri: 'https://sistemas.com/termino/wp-content/uploads/Usuario-Icono.jpg' }} />

            <View style={styles.contenedorcamara}>
              <Icon
                size={16}
                name='camera'
                type='font-awesome'
                color='white'
              />
            </View>

          </View>
        </View>

        <Text style={styles.nombreusuario} >Camilo Andrés Sánchez</Text>
        <Text style={styles.titulodatos}>Datos Personales</Text>
        <Formulario data={data} />



        <View style={styles.generalvolver}>

          <TouchableOpacity style={styles.btnvolver} onPress={() => props.navigation.goBack()}>
            <Text style={styles.link}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>

  );
}

export default Perfil;