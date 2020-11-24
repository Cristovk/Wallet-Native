import { StyleSheet } from 'react-native';
import {heightPercentageToDP} from "react-native-responsive-screen"


const style = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    //  top: heightPercentageToDP("72%"),
  },
  boton: {
    width: 170,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  texto: {
    textAlign: "center",
    fontSize: 15
  }
})

export default style;