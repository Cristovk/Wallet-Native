import {  StyleSheet} from 'react-native'

const style = StyleSheet.create({
    barraSuperior: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#02072F",
      height: 90,
      alignItems: "center"
    },
    boton: {
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
    },
    barraInferior: {
      flexDirection: "row",
      justifyContent: "space-around",
      backgroundColor: "#FC7029",
      height: 79,
      width: "100%",
      marginBottom: 0,
    },
    boton2: {
      marginTop: 15,
      backgroundColor: "#FC7029",
      justifyContent: "center",
      alignItems: "center",
      height: 50,
      width: 55,
      borderRadius: 10,
    },
    botonHome: {
      borderTopColor: "#FC7029",
      backgroundColor: "#FC7029",
      justifyContent: "center",
      alignItems: "center",
      height: 50,
      width: 50,
      borderRadius: 50,
      marginTop: 12
    }
  })

export default style
