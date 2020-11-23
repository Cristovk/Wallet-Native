import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { transferir } from "../../Redux/movements";
import { useDispatch, useSelector } from "react-redux";
import { saveSaldo } from "../../Redux/movements";
import style from "./Finish_Styles";
import * as SMS from "expo-sms";
import { CheckBox} from "react-native-elements";

// Check saldo, mandar la wea,

const Finish = ({ navigation, route }) => {
  const {dato, receiver} = route.params;
  const [errormoney, setErrorMoney] = useState(false);
  const [transferencia, setTransferencia] = useState({
    senderId: dato.senderId,
    receivercvu: receiver.cvu,
    amount: "",
    motivo: "",
  }); 
  const dispatch = useDispatch();
  const movements = useSelector((store) => store.movementsReducer);
  const user = useSelector((store) => store.user.user);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    saveSaldo()
  }, []);

  const sendSMS = async () => {
    try {
      const isAvailable = await SMS.isAvailableAsync();
      if (isAvailable) {
        const { result } = await SMS.sendSMSAsync(
          [`${receiver.telefono}`],
          `Hola ${receiver.nombre}, ${user.name} ${user.lastName} le ha enviado $ ${transferencia.amount} a traves de MoonBank.\n Motivo: ${transferencia.motivo}.`
        );
        console.log("Result", result);
      } else {
        Alert.alert("Su dispositivo no es compatible con esta función");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const handleSubmit = async () => {
    const { amount } = transferencia;
    if (parseInt(amount) > parseInt(movements.saldo)) {
      return setErrorMoney(true);
    }
    
    transferir(transferencia);
    checked ? sendSMS() : null;
    navigation.navigate("postScreen", {
      receiver:receiver,
      amount:transferencia.amount
    })
  };
  
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
          onChangeText={(data) =>
            setTransferencia({ ...transferencia, amount: data }, setErrorMoney(false))
          }
        />
      </View>
      <View>
        <View style={style.monto}>
          <Text h4 style={style.text}>
            Motivo
          </Text>
        </View>
        <TextInput
          placeholder="Enviando desde Moonbank"
          style={style.input1}
          onChangeText={(data) =>
            setTransferencia({ ...transferencia, motivo: data })
          }
        />
      </View>
      {errormoney && (
        <View style={style.contError}>
          <Text style={style.error}>
            No tienes suficiente saldo para completar la transacción
          </Text>
        </View>
      )}
      <View style={style.che}>
      <CheckBox
          center
          title='Notificar por sms'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={checked} 
          onPress={() => setChecked(!checked)}
         />
        <View style={[style.botonContainer, { marginBottom: 15 }]}>
          <TouchableOpacity
            style={style.boton}
            onPress={() => {
              handleSubmit();
            }}
            disabled={transferencia.amount.length <= 0 ? true : false}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Enviar</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
      
  );
};

export default Finish;
