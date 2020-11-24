import { StyleSheet } from 'react-native';


const style = StyleSheet.create({
  botonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  boton: {
    width: 120,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  texto: {
    textAlign: "center",
    fontSize: 15
  }
})



export default style;