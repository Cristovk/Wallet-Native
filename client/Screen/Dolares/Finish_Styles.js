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
  input:{
    marginVertical: 3,
    height: 40,
    width: "50%",
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 10
  },input1:{
    marginVertical: 3,
    height:50,
    width: "60%",
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: "center"
  },
  cvu: {
    alignContent: "center",
    marginTop: 2,
    backgroundColor: "#02072F",
    height: 60,
    alignItems: "center",
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  tituloSaldo: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
    marginBottom: 10,
  },
  saldo: {
    fontWeight: "bold",
    fontSize: 30,
    paddingBottom: 10,
    marginBottom: 10,
  },
  monto: {
    alignContent: "center",
    alignItems: "center",
  },
  text:{
    color: "white",
    marginVertical: 15,
    textAlign: 'center',
    height: 40,
    fontSize: 25
  },
  botonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin:70,
  },
  boton: {  flexDirection:"row",
              borderRadius: 10,
             width: 120,
              marginTop: 10,
              padding: 15,
              justifyContent: "center"
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
  spinner:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'center',
    padding:5
  },
  che:{
    flexDirection: "column",
    justifyContent: "space-between"
  }
  
});

export default style;
