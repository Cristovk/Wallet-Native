import { StyleSheet } from "react-native";


const style = StyleSheet.create({
  background: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    minHeight: 600
  },
  balance: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  saldoBalance: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
    marginBottom: 20,
    // textDecorationLine: "underline"
  },
  tituloBalance: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
    marginBottom: 10,
  },
  gastos: {
    height: 350,
  },
  subGastos: {
    height: 60,
    marginBottom: 30,
  },
  listaContenedor: {
    marginBottom: 2,
    borderBottomWidth: 1
  },
  lista: {
    marginBottom: 10,

  },
});

export default style;
