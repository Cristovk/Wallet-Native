import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import style from "./Finish_Styles";
import { useSelector } from "react-redux";

const postScreenDolar = ({ navigation, route }) => {
  const {receiver, amount} = route.params;
  const {text, primary, secondary, dark, bg} = useSelector(store => store.color)
  const alto = Dimensions.get("window").height
  return (
    <View style={{backgroundColor: bg, flexDirection: "column", height:alto, justifyContent: "space-around"}}>
    <View style={{backgroundColor: primary, borderRadius: 10}}>
    <View style={{ borderBottomWidth: 1, flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center", height: 50 }}>
 
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Transferencia Completada</Text>
        
        </View>
        <Text style={{fontSize:20, margin: 30}}>
            {receiver.nombre +" " + receiver.apellido} recibira sus us${amount} en unos instantes no te preocupes si se demora mas de lo esperado lo tenemos en nuestras manosGracias por utilizar moonbank
        </Text>

        <View style={{ marginBottom: 15, borderTopWidth: 1, flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center", height: 50 }}>
          <TouchableOpacity
            style={style.boton}
            onPress={() => {
                navigation.navigate("Home")
            }}
           
          >
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Aceptar</Text>
          </TouchableOpacity>
        </View>
        </View>
        <View style={{backgroundColor: bg, borderRadius: 10}}></View>
        </View>
  );
};

export default postScreenDolar;
