import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  tituloContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginVertical: 20,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  listaContenedor: {
    marginBottom: 40,
  },
  lista: {
    marginBottom: 10,
  },
  listaPhone1: {
    flexDirection: "column",
  },
  listaPhone2: {
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  boton: {
    marginTop: 10,
    marginHorizontal: "5%",
    backgroundColor: "#FC7029",
    padding: 15,
    borderRadius: 8,
  },
});

export default style;
