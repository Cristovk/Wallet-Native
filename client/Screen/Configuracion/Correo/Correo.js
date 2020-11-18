import React,{useState} from 'react'
import { View, Text, TextInput,TouchableOpacity,Alert} from 'react-native'
import styles from './CorreoEstilos';
import { Icon } from 'react-native-elements';
import { auth } from "../../../../firebase";
import {ModificarEmail} from '../../../Redux/User';


const Correo = ({cambiar,navigation,main}) => {

    const [email,setEmail]=useState('');
    const [error,setError]=useState(false);
    const [empty,setEmpty]=useState(false)
    

    function handleSubmit() {
      const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

      if(!email){
        return setEmpty(true);
      }
      setEmpty(false); 
    if (!emailRegex.test(email)) {
       return setError(true);
   }
       setError(false);
      ModificarEmail(email)
      Alert.alert('Email modificado. Enviamos un Email de verificación a tu nuevo correo.')
      navigation.navigate('Login')
  }


    return (  
        <View style={styles.generalClave}>
            <View style={styles.titulo}>
            <Icon
                size={16}
                name='arrow-circle-left'
                type='font-awesome'
                color='#fff'
                onPress={() =>{ cambiar(false),main(true)}}
              />
            <Text style={styles.subtitulo}>Cambia tu correo</Text>
            </View>

        <View style={styles.contraseñas}>
           <TextInput 
           placeholder='Correo' 
           style={styles.input}  
           value={auth.currentUser.email}
           placeholderTextColor='#fff'
          />
           <TextInput 
           placeholder='Nuevo correo'  
           style={styles.input} 
           onChangeText={(data) => setEmail(data)}
           placeholderTextColor='#fff'
           />
           {error &&  <Text style={styles.error}>El correo ingresado no es valido</Text>}
           {empty &&  <Text style={styles.error}>Debes ingresar un correo para continuar</Text>}
        </View>
        
        <TouchableOpacity style={styles.btnGuardar} onPress={() => handleSubmit()}>
            <Text style={styles.btn}>Guardar</Text>
        </TouchableOpacity>

         

        </View>
    );
}
 
export default Correo;