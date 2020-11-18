import React,{useState} from 'react'
import { View, Text, TextInput,TouchableOpacity,Alert} from 'react-native'
import styles from './CorreoEstilos';
import { Icon } from 'react-native-elements';
import { auth } from "../../../../firebase";
import {ModificarEmail} from '../../../Redux/User';


const Correo = ({cambiar,navigation}) => {

    const [email,setEmail]=useState('');
    const [error,setError]=useState(false);
    

    function handleSubmit() {
    if (email !== "") {
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (!emailRegex.test(email)) {
          return setError(true);
        }
       setError(false);
      ModificarEmail(email)
      Alert.alert('Email modificado. Enviamos un Email de verificación a tu nuevo correo.')
      navigation.navigate('Login')
    }
    else {
      Alert.alert('Debe ingresar su email para continuar')
    }
  }


    return (  
        <View style={styles.generalClave}>
            <View style={styles.titulo}>
            <Icon
                size={16}
                name='arrow-circle-left'
                type='font-awesome'
                color='#fff'
                onPress={()=>cambiar(false)}
              />
            <Text style={styles.subtitulo}>Cambia tu correo</Text>
            </View>

        <View style={styles.contraseñas}>
           <TextInput 
           placeholder='Correo' 
           style={styles.input}  
           value={auth.currentUser.email}
          />
           <TextInput 
           placeholder='Nuevo correo'  
           style={styles.input} 
           onChangeText={(data) => setEmail(data)}
           />
           {error &&  <Text style={styles.error}>El correo ingresado no es valido</Text>}
        </View>
        
        <TouchableOpacity style={styles.btnGuardar} onPress={() => handleSubmit()}>
            <Text style={styles.btn}>Guardar</Text>
        </TouchableOpacity>

         

        </View>
    );
}
 
export default Correo;