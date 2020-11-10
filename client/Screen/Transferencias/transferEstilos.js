import { StyleSheet } from 'react-native'


const style = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1
  },
  barraSuperior: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#02072F",
    height: 60,
    alignItems: "center",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15
  },
  icono: {
    backgroundColor: "#FC7029",
    height: 40,
    width: 40,
    marginStart: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  saludo: {
    color: "#FC7029",
    fontWeight: "bold",
    fontSize: 20
  },
  lista: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  input: {
    width: 110
  },
  botonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  boton: {
    marginTop: 40,
    backgroundColor: "#FC7029",
    padding: 15
  }
})

export default style;