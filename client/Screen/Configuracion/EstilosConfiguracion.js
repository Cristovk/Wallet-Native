import { StyleSheet } from 'react-native'
import { black, blue, white, grey } from '../../Global-Styles/colores2'

const style = StyleSheet.create({

  itemAjustes: {
    backgroundColor: white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 11,
    borderColor: grey,
    borderWidth: 1
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

    backgroundColor: white,
    height: '100%',

  },
  //Estilos darks
  generalOscuro: {
    backgroundColor: black,
  },
  contIconoDark: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: grey,
    width: 30,
    height: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  itemAjustesDark: {
    backgroundColor: black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 11,
    borderBottomColor: grey,
    borderBottomWidth: 1,
  },
  nombreSubitemDark: {
    fontWeight: '600',
    fontSize: 17,
    color: grey
  },
  letraOscura: {
    color: black,
  },
  letraClara: {
    color: grey
  }

})

export default style;

//camand10sa@gmail.com