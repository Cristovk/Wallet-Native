import { StyleSheet } from 'react-native'
import { black, blue, white, grey } from '../../../Global-Styles/colores2'

const style = StyleSheet.create({
  generalClave: {
    backgroundColor: blue,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  titulo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: white,

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
  contraseñas: {
    // backgroundColor:'#fff',
    justifyContent: 'center',
    marginTop: 35,
    alignItems: 'center',
    textAlign: 'center'
  },
  input: {
    width: '90%',
    borderBottomColor: grey,
    borderBottomWidth: 1,
    padding: 5,
    marginBottom: 8,
    color: 'grey',
    marginTop: 40,

  },
  btnGuardar: {
    flexDirection: 'row',
    justifyContent: 'center',
    color: '#fff'
  },
  btn: {
    backgroundColor: '#02072f',
    padding: 3,
    marginTop: 35,
    width: 90,
    borderRadius: 3,
    color: "#02072F",
    textAlign: 'center',
    color: '#fff'
  },
  error: {
    backgroundColor: 'red',
    width: '90%',
    color: '#fff',
    padding: 2,
    borderRadius: 2
  },
  //Dark styles
  btnDark: {
    backgroundColor: '#fff',
    padding: 3,
    marginTop: 20,
    width: 90,
    borderRadius: 3,
    color: "#02072f",
    textAlign: 'center',
  },
  generalClaveDark: {
    backgroundColor: black,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  tituloBlack: {
    flexDirection: 'row',
    justifyContent: "center",
    padding: 5,
    alignItems: 'center',
    backgroundColor: grey,

  },
  inputDark: {
    width: '90%',
    borderBottomColor: black,
    borderBottomWidth: 1,
    padding: 5,
    marginBottom: 8,
    color: 'grey',
    marginTop: 40,

  }
});


export default style;