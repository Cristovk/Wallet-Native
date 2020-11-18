import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  balance: {
    backgroundColor: "#02072F",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  saldoBalance: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
    marginBottom: 50,
    //   textDecorationLine: "underline"
  },
  tituloBalance: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 30,
    marginBottom: 10,
  },
  grafico: {
    height: 300,
    flexDirection: "column",
  },
  contenedor: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  letraButton: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
    color: "#02072F",
    textDecorationLine: "underline",
  },
  ingresoCont: {
    borderRadius: 5,
    borderColor: "#02072F",
    borderWidth: 1,
    height: 90,
    width: 150,
    flexDirection: "column",
    justifyContent: "center",
  },
  ingreso: {
    fontSize: 25,
    color: "green",
    alignSelf: "center",
  },
  gasto: {
    fontSize: 25,
    color: "red",
    alignSelf: "center",
  },
});

export default style;