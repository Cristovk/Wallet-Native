import { StyleSheet } from 'react-native'


const style = StyleSheet.create({
  barraSuperior: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#02072F",
    height: 200,
    alignItems: "center"
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
  }
})

export default style;