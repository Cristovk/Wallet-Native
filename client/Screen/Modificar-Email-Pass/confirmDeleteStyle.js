import { StyleSheet } from 'react-native';
import { grey, darkBlue, white } from '../../Global-Styles/colors';

const styles = StyleSheet.create({
  containerMayor: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    borderColor: darkBlue,
    borderRadius: 10,
    borderWidth: 2,
    width: 350,
    height: 250,
    marginTop: 100
  },
  texto: {
    color: darkBlue,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: "bold"
  },
  textoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30
  },
  boton: {
    backgroundColor: '#02072f',
    width: 120,
    textAlign: 'center',
    padding: 2,
    marginTop: 45,
    borderRadius: 2,
    marginRight: 10,
    borderRadius: 10
  },
  botoncontainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: "center"
  },
  textoBoton: {
    color: white,
    textAlign: "center"
  },
  input: {
    marginTop: 25,
    width: 280,
    height: 45
  }

})

export default styles;