import { StyleSheet } from 'react-native'
import { white, grey } from '../../Global-Styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: white
  },
  text: {
    fontSize: 70,
    fontWeight: '600',
    color: '#fc7029'
  },
  button: {
    width: 150
  },
  viewLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 330
  },
  link: {
    color: 'darkblue'
  },
  texto: {
    fontSize: 15,
    fontWeight: "bold",
    color: 'darkblue',
  },
  inputs: {
    height: 40,
    borderColor: grey,
    borderWidth: 1,
    borderStyle: "solid",
    marginHorizontal: 35,
    borderWidth: 1,
    paddingLeft: 15,
    borderRadius: 10,
  },
  textoContainer: {
    maxHeight: 20,
    margin: 0,
    width: 250
  }
});

export default styles;