import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import style from "./Finish_Styles";
// Check saldo, mandar la wea, 

const Finish = ({ navigation, route }) => {
    const {receivercvu, senderId} = route.params
    const [transfer, setTranser] = useState({
        receivercvu: receivercvu,
        senderId: senderId,
        amount: "",
        motivo: ""
      });

  return (
    <View>
    <View>
        <View style={style.monto}>
        <Text h4 style={style.text}>
            Monto
        </Text>
        </View>
        <TextInput
        placeholder="$0"
        keyboardType="numeric"
        style={style.input}
    />
    </View>
    <View>
        <View style={style.monto}>
        <Text h4 style={style.text}>
           Motivo
        </Text>
        </View>
        <TextInput //Calla boca filho da putinha
        placeholder="Enviando desde Moonbank"
        style={style.input1}
    />
    </View>
  <View style={[style.botonContainer, { marginBottom: 15 }]}>
             
                <TouchableOpacity
                  style={style.boton}
                >
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Enviar</Text>
          </TouchableOpacity>
          </View>
   </View>
  );
};

export default Finish;
