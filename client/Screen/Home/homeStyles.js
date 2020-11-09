import { StyleSheet } from 'react-native'


const style = StyleSheet.create({
  balance: {
    backgroundColor: "#02072F",
    height: 200,
    justifyContent: "center",
    alignItems: "center"
  },
  saldoBalance: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
    marginBottom: 50,
    textDecorationLine: "underline"
  },
  tituloBalance: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 30,
    marginBottom: 10
  },
  gastos: {
    height: 350
  },
  subGastos: {
    height: 60,
    marginBottom: 30
  }
})

export default style;