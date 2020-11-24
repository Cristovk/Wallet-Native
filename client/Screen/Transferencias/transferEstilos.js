import { StyleSheet } from "react-native";
import { darkBlue, orange, grey, white } from "../../Global-Styles/colors";

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
  input: {
    marginVertical: 3,
    height: 40,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: "center",
    marginTop: 40
  },
  cvu: {
    alignContent: "center",
    marginTop: 2,
    height: 60,
    alignItems: "center",
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  monto: {
    alignContent: "center",
    marginTop: 2,
    backgroundColor: "#02072F",
    height: 60,
    alignItems: "center",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  text: {
    color: "white",
    marginVertical: 15,
    textAlign: 'center',
    height: 40,
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
  contError: {
    flexDirection: "row",
    justifyContent: "center",
  },
  error: {
    backgroundColor: "red",
    color: "#fff",
    width: "95%",
    padding: 2,
    borderRadius: 2,
    textAlign: "center",
  },
  transfer: {
    flexDirection: "column",
  },
  darkBlueButton: {
    borderRadius: 10,
    color: white,
    marginHorizontal: 35,
    backgroundColor: orange,
    paddingHorizontal: 15,
  },
  spinner: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5
  }
});

export default style;
