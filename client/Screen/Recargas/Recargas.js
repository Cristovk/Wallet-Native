import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './estilosRecargas';
import { Icon } from 'react-native-elements';
import Transferencia from './Transferencia/Transferencia';
import Efectivo from './Efectivo/Efectivo';
import {useSelector} from 'react-redux'

const Perfil = (props) => {
  const [titulos, setTitulos] = useState({ titulo1: true, titulo2: false });
  const [actual, setActual] = useState('transferencia')
  const { titulo1, titulo2 } = titulos;
  const {text, primary, secondary, dark} = useSelector(store => store.color)
  return (
    <ScrollView>
      <View style={styles.encabezado}>
        <View style={styles.subencabezado}>
          <Text style={{...styles.cerrar,color:text}} onPress={() => props.navigation.goBack()}>x</Text>
          <Text style={{...styles.textoencabezado, color:text}}>Cómo cargar</Text>
        </View>

        <View style={{...styles.interrogacion,borderColor:text}}>
          <Icon
            size={18}
            name='question'
            type='font-awesome'
            color={text}
          />
        </View>

      </View>

      <View style={styles.contenedortitulos}>
        <Text 
          style={titulo1 ? {...styles.itemseleccionado,color:dark?secondary:primary,borderColor:dark?secondary:primary} : {...styles.itemtitulos,color:text}} 
          onPress={() => { setTitulos({ titulo1: true, titulo2: false }); setActual('transferencia') }}>Por transferencia</Text>
        <Text 
          style={titulo2 ? {...styles.itemseleccionado,color:dark?secondary:primary,borderColor:dark?secondary:primary} : {...styles.itemtitulos,color:text}} 
          onPress={() => { setTitulos({ titulo1: false, titulo2: true }); setActual('efectivo') }}>En efectivo</Text>
      </View>

      <View style={styles.mainrecarga}>
        {actual === 'transferencia' ? <Transferencia color={{text:text,p:primary,s:secondary,dark:dark}} /> : <Efectivo color={{text:text,p:primary,s:secondary}}/>}
      </View>




      {/* <TouchableOpacity style={styles.btnvolver} onPress={() => props.navigation.goBack()}>
                <Text style={styles.link}>Volver</Text>
            </TouchableOpacity> */}

    </ScrollView>

  );
}

export default Perfil;

