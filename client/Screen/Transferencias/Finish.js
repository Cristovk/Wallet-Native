import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { transferir } from "../../Redux/movements";
import { useDispatch, useSelector } from "react-redux";
import { saveSaldo } from "../../Redux/movements";
import style from "./Finish_Styles";
import * as SMS from "expo-sms";
import { CheckBox } from "react-native-elements";

// Check saldo, mandar la wea,

const Finish = ({ navigation, route }) => {
  const { dato, receiver } = route.params;
  const [errormoney, setErrorMoney] = useState(false);
  const [transferencia, setTransferencia] = useState({
    senderId: dato.senderId,
    receivercvu: receiver.cvu,
    amount: "",
    motivo: "",
  });
  const dispatch = useDispatch();
  const movements = useSelector((store) => store.movementsReducer);
  const {text, primary, secondary, dark, bg} = useSelector(store => store.color)
  const user = useSelector((store) => store.user.user);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    saveSaldo();
  }, []);

  const sendSMS = async () => {
    try {
      const isAvailable = await SMS.isAvailableAsync();
      if (isAvailable) {
        const { result } = await SMS.sendSMSAsync(
          [`${receiver.telefono}`],
          `Hola ${receiver.nombre}, ${user.name} ${user.lastName} le ha enviado $ ${transferencia.amount} a traves de MoonBank.\n Motivo: ${transferencia.motivo}.`
        );
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
      receiver: receiver,
      amount: transferencia.amount,
    });
  };

  function formatNumber(num) {
    let number =
      num && num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    return number;
  }
  
  return (
    <View style={{backgroundColor: bg, height:"100%"}}>
      <View style={{ backgroundColor: bg, height: 170,
                    justifyContent: "center",
                    alignItems: "center" }}>
        <Text style={[{ color: primary}, style.tituloSaldo]}>Tu saldo:</Text>
        <Text style={[{ color: primary}, style.saldo]}>${formatNumber(movements.saldo === null ? 0 : movements.saldo)}</Text>
      </View>
    <View style={{ height: 50, borderRadius: 10, backgroundColor: primary, marginBottom: -15 }} >

      </View>
      <View style={{backgroundColor: primary, height:"100%"}}>
      <View>
        <View style={style.monto}>
          <Text style={[style.text, {color: bg}]}>
            Monto a enviar:
          </Text>
        </View>
        
        <TextInput
          placeholder="$0"
          keyboardType="numeric"
          style={[style.input, {borderBottomColor: bg}]}
          onChangeText={(data) =>
            setTransferencia(
              { ...transferencia, amount: data },
              setErrorMoney(false)
            )
          }
        />
      </View>
      <View>
        <View style={style.monto}>
          <Text style={[style.text, {color: bg}]}>
            Motivo:
          </Text>
        </View>
        <TextInput
          placeholder="Te envio este dinero porque..."
          style={[style.input1, {borderBottomColor: bg}]}
          multiline = {true}
          numberOfLines= {2}
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
          title='Quiero notificar por sms a mi amigo'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={checked} 
          containerStyle={{backgroundColor: primary, borderColor: primary}}
          onPress={() => setChecked(!checked)}
        />
        <View style={[style.botonContainer, { marginBottom: 15 }]}>
          <TouchableOpacity
            style={[{
              backgroundColor:secondary,
              color: primary,
            }, style.boton]}
            onPress={() => {
              handleSubmit();
            }}
            disabled={transferencia.amount.length <= 0 ? true : false}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15, color: text}}>Enviar</Text>
           
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
      </View>
  );
};

export default Finish;
