import React from 'react'
import { View, Text, TextInput,TouchableOpacity } from 'react-native'
import styles from './estilosTransferencia';


const Transferencia = ({color}) => {
   
    return (
         <View >
             <Text style={{...styles.titulotransferencia,color:color.text}}>Desde cualquier cuenta</Text>
             <Text style={styles.parrafo}>Transferís a tu DNI desde una cuenta bancaria o billetera virtual de 07 a 00 hs, y se acredita en el momento.</Text>
             <View style={styles.alerta}>
                 <Text style={{...styles.textobanco,color:color.text}}>Los cajeros automáticos todavía no permiten transferir a un DNI.</Text>
             </View>
             <View style={styles.continputs}>
                 <View style={styles.grupoformulario}>
                     <Text style={{...styles.label,color:color.dark?color.s:'grey'}}>CVU</Text>
                     <TextInput style={{...styles.inputtransferencia,color:color.dark?color.text:'grey'}} value='0000000984045'/>
                 </View>
             </View>

             <View style={styles.continputs}>
                 <View style={styles.grupoformulario}>
                     <Text style={{...styles.label,color:color.dark?color.s:'grey'}}>Alias</Text>
                     <TextInput style={{...styles.inputtransferencia,color:color.dark?color.text:'grey'}} value='ANDRES.QUIQUEAPP'/>
                 </View>

             </View>

            <TouchableOpacity style={{...styles.btncompartir,borderColor:color.dark?color.s:color.p}}>
               <Text style={{...styles.textocompartir,color:color.dark?color.s:color.p}}>Compartir mi CVU</Text>
            </TouchableOpacity>
         </View>
    );
}

export default Transferencia;
