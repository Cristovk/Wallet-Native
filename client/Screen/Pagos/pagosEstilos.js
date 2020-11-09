import { StyleSheet } from 'react-native'


const style = StyleSheet.create({
  barraSuperior: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#02072F",
    height: 200,
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
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 25,
  },
  input: {
    width: 300,
    height: 30,
    borderRadius: 10,
  },
  opciones: {
    marginTop: 10,
    marginBottom: 20,
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  wifi: {
    paddingStart: 20
  }
})

export default style;