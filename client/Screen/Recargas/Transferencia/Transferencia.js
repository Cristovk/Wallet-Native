import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './estilosTransferencia';
import { useSelector } from 'react-redux'
import botonStyle from '../../../Global-Styles/BotonGrande'
import { heightPercentageToDP } from "react-native-responsive-screen"


const Transferencia = ({ color }) => {
  const { text, primary, secondary, dark, bg } = useSelector(store => store.color)
  const user = useSelector(store => store.user.user)

  return (
    <View style={{ backgroundColor: primary }}>
      <Text style={{ ...styles.titulotransferencia, color: dark ? bg : text }}>Desde cualquier cuenta</Text>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.parrafo}>Transferí a tu cuenta MoonBank desde una cuenta bancaria o billetera virtual de 07 a 00 hs, y se acredita en el momento.</Text>
      </View>
      <View style={styles.alerta}>
        <Text style={{ ...styles.textobanco, color: dark ? bg : text }}>Los cajeros automáticos todavía no permiten transferir a tu cuenta.</Text>
      </View>
      <View style={styles.continputs}>
        <View style={styles.grupoformulario}>
          <Text style={{ ...styles.label, color: dark ? secondary : 'grey' }}>CVU</Text>
          <Text style={{ ...styles.inputtransferencia, color: dark ? bg : 'grey', borderBottomColor: dark ? "grey" : secondary }}>{user.cvu}</Text>
        </View>
      </View>

      <View style={[{ top: heightPercentageToDP("55%") }, botonStyle.container]}>
        <TouchableOpacity style={[{ backgroundColor: secondary }, botonStyle.boton]}>
          <Text style={[{ color: text }, botonStyle.texto]}>Compartir mi CVU</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Transferencia;
