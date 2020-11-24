import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import styles from './estilosRecargas';
import { Icon } from 'react-native-elements';
import Transferencia from './Transferencia/Transferencia';
import Efectivo from './Efectivo/Efectivo';
import { useSelector } from 'react-redux'
import styleView from '../../Global-Styles/ViewContainer'
import { widthPercentageToDP, heightPercentageToDP } from "react-native-responsive-screen"
import botonStyle from '../../Global-Styles/BotonMediano'


const Perfil = (props) => {
  const [titulos, setTitulos] = useState({ titulo1: true, titulo2: false });
  const [actual, setActual] = useState('transferencia')
  const { titulo1, titulo2 } = titulos;
  const { text, primary, secondary, dark, bg } = useSelector(store => store.color)
  return (
    <ScrollView style={{ backgroundColor: bg }}>
      <View style={[{ backgroundColor: primary, marginTop: 25 }, styleView.container]}>

        <View style={styles.encabezado}>
          <View style={styles.subencabezado}>
            <Text style={{ ...styles.cerrar, color: dark ? bg : text }} onPress={() => props.navigation.goBack()}>x</Text>
            <Text style={{ ...styles.textoencabezado, color: dark ? bg : text }}>Cómo cargar</Text>
          </View>

          <View style={{ ...styles.interrogacion, borderColor: dark ? bg : text }}>
            <Icon
              size={18}
              name='question'
              type='font-awesome'
              color={dark ? bg : text}
            />
          </View>

        </View>

        <View style={styles.contenedortitulos}>
          <Text
            style={titulo1 ? { ...styles.itemseleccionado, color: dark ? bg : text, borderColor: dark ? "grey" : secondary } : { ...styles.itemtitulos, color: secondary }}
            onPress={() => { setTitulos({ titulo1: true, titulo2: false }); setActual('transferencia') }}>Por transferencia</Text>
          <Text
            style={titulo2 ? { ...styles.itemseleccionado, color: dark ? bg : text, borderColor: dark ? "grey" : secondary } : { ...styles.itemtitulos, color: secondary }}
            onPress={() => { setTitulos({ titulo1: false, titulo2: true }); setActual('efectivo') }}>En efectivo</Text>
        </View>

        <View style={styles.mainrecarga}>
          {actual === 'transferencia' ? <Transferencia color={{ text: dark ? bg : text, p: primary, s: secondary, dark: dark }} /> : <Efectivo color={{ text: dark ? bg : text, p: primary, s: secondary }} />}
        </View>

      </View>



      {/* <TouchableOpacity style={styles.btnvolver} onPress={() => props.navigation.goBack()}>
                <Text style={styles.link}>Volver</Text>
            </TouchableOpacity> */}

    </ScrollView>

  );
}

export default Perfil;

