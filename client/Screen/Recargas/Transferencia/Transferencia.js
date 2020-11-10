import React from 'react'
import { View, Text, TextInput,TouchableOpacity } from 'react-native'
import styles from './estilosTransferencia';


const Perfil = () => {
   
    return (
         <View >
             <Text style={styles.titulotransferencia}>Desde cualquier cuenta</Text>
             <Text style={styles.parrafo}>Transferís a tu DNI desde una cuenta bancaria o billetera virtual de 07 a 00 hs, y se acredita en el momento.</Text>
             <View style={styles.alerta}>
                 <Text style={styles.textobanco}>Los cajeros automáticos todavía no permiten transferir a un DNI.</Text>
             </View>
             <View style={styles.continputs}>
                 <View style={styles.grupoformulario}>
                     <Text style={styles.label}>CVU</Text>
                     <TextInput style={styles.inputtransferencia} value='0000000984045'/>
                 </View>
             </View>

             <View style={styles.continputs}>
                 <View style={styles.grupoformulario}>
                     <Text style={styles.label}>Alias</Text>
                     <TextInput style={styles.inputtransferencia} value='ANDRES.QUIQUEAPP'/>
                 </View>

             </View>

            <TouchableOpacity style={styles.btncompartir}>
               <Text style={styles.textocompartir}>Compartir mi CVU</Text>
            </TouchableOpacity>
         </View>
    );
}

export default Perfil;
