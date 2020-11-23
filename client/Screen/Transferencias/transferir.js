import React, { useState, useEffect, useReducer } from "react";
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Text,
} from "react-native";
import style from "./transferEstilos";
import { auth, storage } from "../../../firebase";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
const Transferencias = ({ navigation }) => {
  const user = useSelector((store) => store.user);
  const [dato, setDato] = useState({
    receivercvu: "",
    senderId: user.user.id,
    sendercvu: user.user.cvu
  });
  const [error, setError] = useState(false)
  

  const [spinner, setSpinner] = useState(false);

  const comprobarCvu = async () => {
    try {
      let respuesta = await axios.post(
        "https://us-central1-henrybankfire.cloudfunctions.net/cvuExist",
        { cvu: dato.receivercvu }
      );
      return respuesta;
    } catch {
      return null;
    }
  };

  const handleSubmit = async () => {
    let respuesta = await comprobarCvu();
    if(dato.receivercvu===dato.sendercvu){
      return setError(true)
    }
    setSpinner(true);
   
    setTimeout(() => {
      setSpinner(false);
      setDato({ receivercvu: "", senderId: "" });

      respuesta
        ? navigation.navigate("confirmOrError", {
          receiver: respuesta.data.datos,
          dato: dato,
        })
        : navigation.navigate("confirmOrError", {
          receiver: null,
          dato: dato,
        });
    }, 2000);
  };

  return (
    <View>
      <View style={style.cvu}>
        <Text style={style.text}>CVU</Text>
      </View>
      <TextInput
        placeholder="El cvu consiste en 22 caracteres numericos"
        keyboardType="numeric"
        style={style.input}
        onChangeText={(data) => setDato({ ...dato, receivercvu: data }, setError(false))}
        value={dato.receivercvu}
      />
      {spinner && (
        <View style={style.spinner}>
          <ActivityIndicator size="small" color="#fff" />
        </View>
      )}
       {error && (
        <View style={style.contError}>
          <Text style={style.error}>
          No puedes realizar una transferencia a ti mismo
          </Text>
        </View>
      )}
      {!spinner && (
        <View style={[style.botonContainer, { marginBottom: 15 }]}>
          <TouchableOpacity
            style={style.boton}
            onPress={() => handleSubmit()}
            disabled={dato.receivercvu.length == 22? false: true}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Continuar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Transferencias;
