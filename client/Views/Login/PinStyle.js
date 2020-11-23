import { StyleSheet } from 'react-native'
import { darkBlue, white } from '../../Global-Styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    marginBottom: 40,
    alignItems: "center"
  },
  texto: {
    fontSize: 17
  },
  botonContainer: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  containerTwo: {
    borderWidth: 2,
    width: 360,
    height: 300,
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 15
  },
  boton: {
    width: 100,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },

});

export default styles;