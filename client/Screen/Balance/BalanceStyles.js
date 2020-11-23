import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  balance: {
    justifyContent: "center",
    alignItems: "center",
  },
  saldoBalance: {
    fontWeight: "bold",
    fontSize: 40,
    marginBottom: 50,
    //   textDecorationLine: "underline"
  },
  tituloBalance: {
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
    textDecorationLine: "underline",
  },
  ingresoCont: {
    borderRadius: 5,
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
