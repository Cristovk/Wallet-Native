import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements';
import { useSelector } from "react-redux";
import styleBoton from '../../../Global-Styles/BotonMediano'
import { widthPercentageToDP, heightPercentageToDP } from "react-native-responsive-screen"

const Modelo = ({ change, titulo, texto, volver, hide }) => {

  const alto = Dimensions.get('window').height;

  const { primary, secondary, dark, bg, text } = useSelector((store) => store.color);

  return (
    <View style={[styles.general, { backgroundColor: bg }]}>
      <Text style={{ backgroundColor: bg, flexDirection: "row", justifyContent: "center", alignItems: "center" }} onPress={() => change('')}>
        <View style={styles.volver}  >
          <Text style={[styles.subtitulo, { color: primary }]} >{volver}</Text>
        </View>
      </Text>
      <View style={[styles.menu, { backgroundColor: primary, height: '100%' }]}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.parrafo}>{texto}</Text>
        <View style={[{ height: heightPercentageToDP("55%") }, styleBoton.botonContainer]}>
          <TouchableOpacity
            style={[{ backgroundColor: secondary }, styleBoton.boton]}
            onPress={() => { change(''); hide() }}
          >
            <Text style={[{ color: text }, styleBoton.texto]}>Volver</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  general: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 100
  },
  titulo: {
    color: '#000',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10
  },
  parrafo: {
    marginTop: 30,
    letterSpacing: 1,
    lineHeight: 18,
    paddingHorizontal: 20,
  },
  volver: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    justifyContent: "center",
    textAlign: "center",
    width: widthPercentageToDP("100%")

  },
  subtitulo: {
    fontSize: 19,
    fontWeight: "bold"
  },
  menu: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    zIndex: 7000,
    top: 50


  }


});

export default Modelo;



