import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
  },
  barraSuperior: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#02072F",
    height: 60,
    alignItems: "center",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
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
    fontSize: 20,
  },
  listaContenedor: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  lista: {
    marginBottom: 15,
  },
  input: {
    width: 150,
  },
  botonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  boton: {
    marginTop: 10,
    backgroundColor: "#FC7029",
    padding: 15,
    borderRadius: 8,
  },
  error: {
    color: "red",
    marginHorizontal: 40,
    marginTop: 45,
  },
  phone: {
    backgroundColor: "lightgrey",
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 150,
    paddingVertical: 5,
    fontSize: 22,
  },
});

export default style;
