import React,{useState} from 'react'
import { View, Text, TextInput } from 'react-native';
import Lapiz from './Lapiz';
import styles from './estilosFormulario';


const Formulario = ({data}) => {
    
    const {nombre,correo,telefono,dni,nacimiento,ocupacion} = data;
    //State que guarda los datos del usuario editado.
    const [datos,setDatos]=useState({nombre,correo,telefono,dni,nacimiento,ocupacion});
    
   
    return (
        <View>
            <View style={styles.grupoform}>
                <Text style={styles.labelinput}>Nombre</Text>
                <TextInput
                    value={datos.nombre}
                    style={styles.inputperfil}
                    onChangeText={(data)=>setDatos({...datos,nombre:data})}
                  
                />
              <Text style={styles.padrelapiz}><Lapiz /></Text>  
             
            </View>

            <View style={styles.grupoform}>
                <Text style={styles.labelinput} >Correo</Text>
                <TextInput
                    value={datos.correo}
                    style={styles.inputperfil}
                    onChangeText={(data)=>setDatos({...datos,correo:data})}
                />
                     <Text style={styles.padrelapiz}><Lapiz /></Text>  
            </View>

            <View style={styles.grupoform}>
                <Text style={styles.labelinput}>Teléfono</Text>
                <TextInput
                    value={datos.telefono}
                    style={styles.inputperfil}
                    onChangeText={(data)=>setDatos({...datos,telefono:data})}
                   
                />
                <Text style={styles.padrelapiz}><Lapiz /></Text>    
            </View>

            <View style={styles.grupoform}>
                <Text style={styles.labelinput}>Fecha de Nacimiento</Text>
                <TextInput
                     value={datos.nacimiento}
                     style={styles.inputperfil}
                     onChangeText={(data)=>setDatos({...datos,nacimiento:data})}
                />
               <Text style={styles.padrelapiz}><Lapiz /></Text>    
            </View>

            <View style={styles.grupoform}>
                <Text style={styles.labelinput}>DNI</Text>
                <TextInput
                    value={datos.dni}
                    style={styles.inputperfil}
                    onChangeText={(data)=>setDatos({...datos,dni:data})}
                />
                 <Text style={styles.padrelapiz}><Lapiz /></Text>    
            </View>

            <View style={styles.grupoform}>
                <Text style={styles.labelinput}>Ocupación</Text>
                <TextInput
                    value={datos.ocupacion}
                    style={styles.inputperfil}
                    onChangeText={(data)=>setDatos({...datos,ocupacion:data})}
                />
                   <Text style={styles.padrelapiz}><Lapiz /></Text>     
            </View>

        </View>
    );
}

export default Formulario;