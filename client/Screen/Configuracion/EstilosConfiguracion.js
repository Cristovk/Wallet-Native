import { StyleSheet } from 'react-native'


const style = StyleSheet.create({

  itemAjustes: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 11,
    borderColor: 'rgb(243, 243, 243)',
    borderWidth: 1
  },
  subitemAjustes: {
    flexDirection: 'row',
  },
  contIcono: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#02072f',
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

    backgroundColor: '#fff',
    height: '100%',

  },
  //Estilos darks
  generalOscuro: {
    backgroundColor: '#02072f',
  },
  contIconoDark: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 30,
    height: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  itemAjustesDark: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 11,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
  },
  nombreSubitemDark: {
    fontWeight: '600',
    fontSize: 17,
    color: '#fff'
  },
  letraOscura: {
    color: '#000',
  },
  letraClara: {
    color: '#fff'
  }

})

export default style;

//camand10sa@gmail.com