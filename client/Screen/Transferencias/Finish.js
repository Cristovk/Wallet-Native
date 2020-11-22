import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { transferir } from "../../Redux/movements";
import { useDispatch, useSelector } from "react-redux";
import { saveSaldo } from "../../Redux/movements";
import style from "./Finish_Styles";
// Check saldo, mandar la wea,

const Finish = ({ navigation, route }) => {
  const { datos } = route.params;
  console.log(datos);
  const dispatch = useDispatch();
  const movements = useSelector((store) => store.movementsReducer);
  useEffect(() => {
    dispatch(saveSaldo());
  }, []);
  const [transferencia, setTransferencia] = useState({
    senderId: datos.dato.senderId,
    receivercvu: datos.receiver.cvu,
    amount: "",
    motivo: "",
  });
  const [errormoney, setErrorMoney] = useState(false);
  console.log(transferencia);
  const handleSubmit = async () => {
    const { amount } = transferencia;
    if (parseInt(amount) > parseInt(movements.saldo)) {
      return setErrorMoney(true);
    }
    setErrorMoney(false);
    transferir(transferencia);
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
            setTransferencia({ ...transferencia, amount: data })
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
  );
};

export default Finish;
