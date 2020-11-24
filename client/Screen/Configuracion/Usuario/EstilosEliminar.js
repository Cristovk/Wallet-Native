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
    alignItems: 'center',
    justifyContent: "center",
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
  contCuadro: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  cuadro: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 90
  },
  titEli: {
    fontWeight: "600",
    margin: 10,
    color: black
  },
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 30,
    padding: 5,
    backgroundColor: 'transparent',
    color: '#000'
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
  },
  contError: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  error: {
    width: '95%',
    backgroundColor: 'red',
    color: '#fff',
    padding: 2,
    borderRadius: 2
  },//Darkstyles
  textoBtnDark: {
    backgroundColor: '#fff',
    textAlign: 'center',
    color: '#02072f',
    width: 120,
    padding: 4,
    borderRadius: 3
  },
  cuadroDark: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 90
  },
  inputDark: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 30,
    padding: 5,
    backgroundColor: 'transparent',
    color: 'grey'
  },
  titEliDark: {
    fontWeight: "600",
    margin: 10,
    color: black
  },
  generalDark: {
    backgroundColor: black,
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  tituloDark: {
    backgroundColor: grey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    marginBottom: 10,

  },
  subtituloDark: {
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
})

export default style;