import { StyleSheet } from 'react-native'
import { black, blue, white, grey } from '../../Global-Styles/colores2'

const style = StyleSheet.create({

  itemAjustes: {
    marginTop: 15,
    backgroundColor: white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 11,
    borderBottomColor: grey,
    borderBottomWidth: 1,
  },
  subitemAjustes: {
    flexDirection: 'row',
  },
  contIcono: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: blue,
    width: 30,
    height: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  textoSubitem: {
    marginLeft: 10
  },
  nombreSubitem: {
    fontWeight: '600',
    fontSize: 17
  },
  flecha: {
    paddingLeft: 1,
    paddingTop: 2,
    width: 22,
    height: 22,

  },
  microfono: {
    paddingRight: 40
  },

  general: {

    backgroundColor: blue,
    height: '100%',

  },
  //Estilos darks
  generalOscuro: {
    backgroundColor: black,
  },
  contIconoDark: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: black,
    width: 30,
    height: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  itemAjustesDark: {
    marginTop: 15,
    backgroundColor: grey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 11,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  nombreSubitemDark: {
    fontWeight: '600',
    fontSize: 17,
    color: black
  },
  letraOscura: {
    color: black,
  },
  letraClara: {
    color: black
  }

})

export default style;

//camand10sa@gmail.com