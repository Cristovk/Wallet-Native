import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import style from "./Finish_Styles";

const postScreen = ({ navigation, route }) => {
  const {receiver, amount} = route.params;
  return (
    <View>
     
        <Text>
            {receiver.nombre +" " + receiver.apellido} recibira sus ${amount} en unos instantes 
        </Text>
        <Text>
          no te preocupes si se demora mas de lo esperado lo tenemos en nuestras manos
        </Text>
       
        <Text>
            Gracias por utilizar moonbank
        </Text>

        <View style={[style.botonContainer, { marginBottom: 15 }]}>
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
  );
};

export default postScreen;
