import React,{useState} from 'react'
import { View, Text, TextInput } from 'react-native';
import Lapiz from './Lapiz';
import styles from './estilosFormulario';


const Formulario = ({data}) => {
    const {nombre,correo,telefono,dni,nacimiento,ocupacion} = data;
    //State que activa los inputs
    const [activos,setActivos]=useState({nombre:true,correo:true,telefono:true,dni:true,nacimiento:true,ocupacion:true });
    //State que guarda los datos del usuario editado.
    const [datos,setDatos]=useState({nombre,correo,telefono,dni,nacimiento,ocupacion})
   
    return (
        <View>
            <View style={styles.grupoform}>
                <Text style={styles.labelinput}>Nombre</Text>
                <TextInput
                    placeholder={nombre}
                    style={styles.inputperfil}
                    disabled={activos.nombre}
                    onChangeText={(data)=>setDatos({...datos,nombre:data})}
                  
                />
              <Text style={styles.padrelapiz} onPress={()=>setActivos({...activos,nombre:false})}><Lapiz /></Text>  
             
            </View>

            <View style={styles.grupoform}>
                <Text style={styles.labelinput} >Correo</Text>
                <TextInput
                    style={styles.inputperfil}
                    placeholder={correo}
                    disabled={activos.correo}
                />
                      <Text style={styles.padrelapiz} onPress={()=>setActivos({...activos,correo:false})}><Lapiz /></Text>   
            </View>

            <View style={styles.grupoform}>
                <Text style={styles.labelinput}>Teléfono</Text>
                <TextInput
                    style={styles.inputperfil}
                    placeholder={telefono}
                    disabled={activos.telefono}
                />
                <Text style={styles.padrelapiz} onPress={()=>setActivos({...activos,telefono:false})}><Lapiz /></Text>   
            </View>

            <View style={styles.grupoform}>
                <Text style={styles.labelinput}>Fecha de Nacimiento</Text>
                <TextInput
    
                    style={styles.inputperfil}
                    placeholder={nacimiento}
                    disabled={activos.nacimiento}
                />
                <Text style={styles.padrelapiz} onPress={()=>setActivos({...activos,nacimiento:false})}><Lapiz /></Text>   
            </View>

            <View style={styles.grupoform}>
                <Text style={styles.labelinput}>DNI</Text>
                <TextInput
                    placeholder='Nombre'
                    style={styles.inputperfil}
                    placeholder={dni}
                    disabled={activos.dni}
                />
                   <Text style={styles.padrelapiz} onPress={()=>setActivos({...activos,dni:false})}><Lapiz /></Text>   
            </View>

            <View style={styles.grupoform}>
                <Text style={styles.labelinput}>Ocupación</Text>
                <TextInput
                    placeholder='Nombre'
                    style={styles.inputperfil}
                    placeholder={ocupacion}
                    disabled={activos.ocupacion}
                />
                    <Text style={styles.padrelapiz} onPress={()=>setActivos({...activos,ocupacion:false})}><Lapiz /></Text>   
            </View>

        </View>
    );
}

export default Formulario;