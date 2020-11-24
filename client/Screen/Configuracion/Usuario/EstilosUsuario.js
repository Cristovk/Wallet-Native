import { StyleSheet } from 'react-native'
import { black, blue, white, grey } from '../../../Global-Styles/colores2'


const style = StyleSheet.create({
  general: {
    backgroundColor: blue,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  titulo: {
    backgroundColor: white,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    marginBottom: 10,

  },
  subtitulo: {
    color: black,
    marginLeft: 15,
    fontSize: 17,
    fontWeight: "bold",
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.27,

    elevation: 3,
    borderRadius: 30

  },
  itemDatos: {
    padding: 5,
    borderBottomColor: grey,
    borderBottomWidth: 1
  },
  subItem: {
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center'
    // padding:5
  },
  tituloItem: {
    fontSize: 18,
    marginBottom: 5,
    paddingLeft: 10,
    color: black,
  },
  dato: {
    marginLeft: 6,
    color: black,
  },

  btnBorrar: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20

  },
  textoBtn: {
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#02072f',
    width: 120,
    padding: 4,
    borderRadius: 3
  },//DarkStyles
  generalDark: {
    backgroundColor: grey,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  tituloItemDark: {
    fontSize: 18,
    marginBottom: 5,
    paddingLeft: 10,
    color: black,
  },
  datoDark: {
    marginLeft: 6,
    color: black,
  },
  itemDatosDark: {
    padding: 5,
    borderBottomColor: "grey",
    borderBottomWidth: 1
  },
  textoBtnDark: {
    color: white,
    textAlign: 'center',
    backgroundColor: blue,
    width: 120,
    padding: 4,
    borderRadius: 3
  },
  tituloDark: {
    backgroundColor: grey,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    marginBottom: 10,

  }


})
//camand10sa@gmail.com

export default style;