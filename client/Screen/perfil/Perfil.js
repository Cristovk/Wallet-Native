import React,{useState} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, Button } from 'react-native'
import { Icon,Avatar } from 'react-native-elements';
import styles from './estilosPerfil';
import Formulario from './Formulario';
  import * as Permissions from 'expo-permissions';
  import * as ImagePicker from 'expo-image-picker';

const Perfil = (props) => {

    const data = {
        nombre: 'Andrés Sánchez',
        correo: 'andres@andres.com',
        telefono: '3013184491',
        nacimiento: '23-10-1980',
        dni: '1.070.974.122',
        ocupacion: 'Estudiante'
    }
    const [imagen,setImagen]=useState('https://sistemas.com/termino/wp-content/uploads/Usuario-Icono.jpg')
     const changeImage = async ()=>{
        const permisos = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        const resultado = permisos.permissions.cameraRoll.status;

        if(resultado==='denied'){
            alert('no has dado permisos')
        }else{
            const resultado = await ImagePicker.launchImageLibraryAsync({
                allowsEditing:true,
                aspect:[4,3]
            })
            console.log(resultado.uri);
            setImagen(resultado.uri)
            alert('todo bien')
        }
       
     }

    return (
         <ScrollView>
        <View style={styles.generalperfil}>
            <View style={styles.generalimagen}>
                <View style={styles.contenedorimagen}>
                 {/* <Image style={styles.imagenperfil} source={{ uri: 'https://sistemas.com/termino/wp-content/uploads/Usuario-Icono.jpg' }} /> */}
                 <Image style={styles.imagenperfil} source={{ uri: imagen }} />  
                       
                    <View style={styles.contenedorcamara}>
                           <Icon
                            size={16}
                            name='camera'
                            type='font-awesome'
                            color='white'
                            onPress={changeImage}
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

