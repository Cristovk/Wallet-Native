import React,{useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './EstilosUsuario';
import { Icon } from 'react-native-elements';
import Eliminar from './Eliminar';


const Configuracion = ({ navigation,cambiar }) => {

   const [remove,setRemove]=useState(false);

  return (
    <View >
        {!remove &&
        <View>
        <View style={styles.titulo}>
        <Icon
          size={16}
          name="arrow-circle-left"
          type="font-awesome"
          color="#fff"
          onPress={()=>cambiar(false)}
        />
        <Text style={styles.subtitulo}>Eliminar usuario</Text>
        </View>
    
        <View style={styles.itemDatos}>
            <Text style={styles.tituloItem}>Nombre</Text>
            <View style={styles.subItem}>
            <Icon
             size={16}
             name="user"
             type="font-awesome"
              color="#02072f"
           />
             <Text style={styles.dato}>Andrés</Text>
            </View>
        </View>

        <View style={styles.itemDatos}>
            <Text style={styles.tituloItem}>Apellido</Text>
            <View style={styles.subItem}>
            <Icon
             size={16}
             name="user"
             type="font-awesome"
              color="#02072f"
           />
             <Text style={styles.dato}>Sánchez</Text>
            </View>
        </View>

        <View style={styles.itemDatos}>
            <Text style={styles.tituloItem}>DNI</Text>
            <View style={styles.subItem}>
            <Icon
             size={16}
             name="address-card"
             type="font-awesome"
              color="#02072f"
           />
             <Text style={styles.dato}>1070974943</Text>
            </View>
        </View>

        <View style={styles.itemDatos}>
            <Text style={styles.tituloItem}>Cuil</Text>
            <View style={styles.subItem}>
            <Icon
             size={16}
             name="id-card"
             type="font-awesome"
              color="#02072f"
           />
             <Text style={styles.dato}>1233</Text>
            </View>
        </View>

        <View style={styles.itemDatos}>
            <Text style={styles.tituloItem}>Teléfono</Text>
            <View style={styles.subItem}>
            <Icon
             size={16}
             name="phone"
             type="font-awesome"
              color="#02072f"
           />
             <Text style={styles.dato}>+54 3013184491</Text>
            </View>
        </View>

        <View style={styles.itemDatos}>
            <Text style={styles.tituloItem}>Email</Text>
            <View style={styles.subItem}>
            <Icon
             size={16}
             name="envelope"
             type="font-awesome"
              color="#02072f"
           />
             <Text style={styles.dato}>camand10sa@gmail.com</Text>
            </View>
        </View>

        <TouchableOpacity style={styles.btnBorrar}>
            <Text style={styles.textoBtn} onPress={()=>setRemove(true)}>Eliminar usuario</Text>
        </TouchableOpacity> 
        </View>}
      
        
        {remove && <Eliminar cambiar={setRemove} navigation={navigation}/>}   
  

     
    </View>
  )
}

export default Configuracion;