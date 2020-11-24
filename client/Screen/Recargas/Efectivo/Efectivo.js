import React from 'react'
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux';
import styles from './estilosEfectivo';
import style from '../../Configuracion/Correo/CorreoEstilos'

const Efectivo = ({ color }) => {

  const user = useSelector(store => store.user.user)
  const { primary, secondary, bg, text, dark } = useSelector(store => store.color)
  const handleRapiPago = async () => {
    await Linking.openURL("https://www.rapipago.com.ar/rapipagoWeb/index.php/resultado_sucursales")
  }

  const handlePagoFacil = async () => {
    await Linking.openURL("https://www.e-pagofacil.com/")
  }

  const handleTeleRecargas = async () => {
    await Linking.openURL("http://telerecargas.com.ar/")
  }

  const handleCobroExpress = async () => {
    await Linking.openURL("https://www.cobroexpress.com.ar/Home/DondePagar")
  }

  return (
    <View >
      <Text style={{ ...styles.titulotransferencia, color: color.text }}>Desde cualquier centro de recarga</Text>
      <Text style={styles.parrafo}>Acercate a cualquiera de nuestros puntos de recarga habilitados y decí que vas a recargar tu billetera <Text style={{ fontWeight: "bold" }}>MoonBank</Text> con el siguiente código: </Text>
      <View style={[{ marginTop: 25 }, dark ? style.tituloBlack : style.titulo]}>
        <Text style={[{ backgroundColor: primary }, style.subtitulo]}>{user.pin} </Text>
      </View>
      <View style={{ marginTop: 50 }}>
        <Text style={styles.parrafo}>Conoce los puntos de recarga más cercanos:</Text>
      </View>
      <View style={styles.contenedorimagenes}>
        <TouchableOpacity
          onPress={handleRapiPago}
          style={[{ backgroundColor: primary }, styles.botonImagen]}
        >
          <Image style={styles.imagenpunto} source={require('../../../src/rapipagoSinFondo.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePagoFacil}
          style={[{ backgroundColor: primary }, styles.botonImagen]}
        >
          <Image style={styles.imagenpunto} source={require('../../../src/pagofacillogoSinfondo.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleTeleRecargas}
          style={[{ backgroundColor: primary }, styles.botonImagen]}
        >
          <Image style={styles.imagenpunto} source={require('../../../src/teleRecargasSinFondo.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleCobroExpress}
          style={[{ backgroundColor: primary }, styles.botonImagen]}
        >
          <Image style={styles.imagenpunto} source={require('../../../src/CobroExpressSinFondo.png')} />
        </TouchableOpacity>





      </View>

    </View>
  );
}

export default Efectivo;
