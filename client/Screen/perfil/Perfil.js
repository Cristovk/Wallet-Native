import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, Button } from 'react-native'
import { Icon } from 'react-native-elements';
import styles from './estilosPerfil';
import Formulario from './Formulario';
import { storage } from '../../../firebase'


const Perfil = (props) => {

  const [data, setData] = useState({
    name: '',
    id: '',
    phone: '',
    lastName: '',
    dni: '',
    cuil: ''
  })



  useEffect(() => {
    storage.collection('Users').onSnapshot(querySnapshot => {

      const users = []

      querySnapshot.docs.forEach(doc => {
        const { name, id, phone, lastName, dni, cuil } = doc.data() //Como necesito guardar esos datos, hago destructuring de la data.
        users.push({ //Lo guardamos principalmente en este array nuevo que creamos.
          name,
          id: id,
          phone,
          lastName,
          dni,
          cuil
        })
      })
      setData({
        name: users[0].name,
        id: users[0].id,
        phone: users[0].phone,
        lastName: users[0].lastName,
        dni: users[0].dni,
        cuil: users[0].cuil,
      })
    })
  }, [])

  console.log(data, "soy la data")


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

        <Text style={styles.nombreusuario} >{data.name} </Text>
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