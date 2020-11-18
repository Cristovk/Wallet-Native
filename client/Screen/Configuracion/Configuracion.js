import React,{useState} from 'react'
import { View, Text, ScrollView, Button, Switch } from 'react-native'
import styles from './ConfiguracionEstilos';
import { Icon } from 'react-native-elements';
import Clave from './Clave/Clave';
import Correo from './Correo/Correo';

const Configuracion = ({ navigation }) => {

    const [passwordchange,setPasswordChange]=useState(false);
    const [emailchange,setEmailChange]=useState(false);


  return (
    <ScrollView style={styles.general}>
      <View >
        <Text style={styles.titulogeneral}>Configuracion</Text>
        <View style={styles.general}>
            <Text style={styles.titulo}>Tu contraseña</Text>

            <View style={styles.contclave}>
               <Text style={styles.textoclave}>Cambia tu contraseña</Text>
               <Icon
                size={16}
                name='chevron-right'
                type='font-awesome'
                color='#02072F'
                onPress={()=>setPasswordChange(true)}
              />
            </View>

            <Text style={styles.titulo}>Tu Correo</Text>
            <View style={styles.contclave}>
               <Text style={styles.textoclave}>Cambia tu correo</Text>
               <Icon
                size={16}
                name='chevron-right'
                type='font-awesome'
                color='02072F'
                onPress={()=>setEmailChange(true)}
              />
            </View> 

            <Text style={styles.titulo}>Reconocimiento</Text>
            <View style={styles.contclave}>
               <Text style={styles.textoclave}>Voz</Text>
               <Switch />
            </View> 

            <Text style={styles.titulo}>¿Como te quieres loguear?</Text>
            <View style={styles.contclave}>
               <Text style={styles.textoclave}>Huella</Text>
               <Switch />
            </View> 

            <Text style={styles.titulo}>Cuenta</Text>
            <View style={styles.contclave}>
               <Text style={styles.textoclave}>Eliminar cuenta</Text>
               <View style={styles.basura}>
               <Icon
                size={16}
                name='trash'
                type='font-awesome'
                color='#fff'
              />
              </View>

            </View> 

        </View>
      </View>
     {passwordchange && <Clave cambiar={setPasswordChange} navigation={navigation}/>} 
     {emailchange && <Correo cambiar={setEmailChange} navigation={navigation}/>} 
    </ScrollView>
  )
}

export default Configuracion;