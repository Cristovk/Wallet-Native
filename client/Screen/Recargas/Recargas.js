import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './estilosRecargas';
import { Icon } from 'react-native-elements';
import Transferencia from './Transferencia/Transferencia';
import Efectivo from './Efectivo/Efectivo';

const Perfil = (props) => {
  const [titulos, setTitulos] = useState({ titulo1: true, titulo2: false });
  const [actual, setActual] = useState('transferencia')
  const { titulo1, titulo2 } = titulos;

  return (
    <ScrollView>
      <View style={styles.encabezado}>
        <View style={styles.subencabezado}>
          <Text style={styles.cerrar} onPress={() => props.navigation.goBack()}>x</Text>
          <Text style={styles.textoencabezado}>Cómo cargar</Text>
        </View>

        <View style={styles.interrogacion}>
          <Icon
            size={18}
            name='question'
            type='font-awesome'
            color='#02072f'
          />
        </View>

      </View>

      <View style={styles.contenedortitulos}>
        <Text style={titulo1 ? styles.itemseleccionado : styles.itemtitulos} onPress={() => { setTitulos({ titulo1: true, titulo2: false }); setActual('transferencia') }}>Por transferencia</Text>
        <Text style={titulo2 ? styles.itemseleccionado : styles.itemtitulos} onPress={() => { setTitulos({ titulo1: false, titulo2: true }); setActual('efectivo') }}>En efectivo</Text>
      </View>

      <View style={styles.mainrecarga}>
        {actual === 'transferencia' ? <Transferencia /> : <Efectivo />}
      </View>




      {/* <TouchableOpacity style={styles.btnvolver} onPress={() => props.navigation.goBack()}>
                <Text style={styles.link}>Volver</Text>
            </TouchableOpacity> */}

    </ScrollView>

  );
}

export default Perfil;

