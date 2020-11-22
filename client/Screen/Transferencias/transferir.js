import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  LogBox,
  Alert,
  ActivityIndicator,
  TextInput,
  Text,
} from "react-native";
import style from "./transferEstilos";
import { auth, storage } from "../../../firebase";
import { transferir } from "../../Redux/movements";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Transferencias = ({ navigation }) => {
  // LogBox.ignoreAllLogs();
  const dispatch = useDispatch();
  const movements = useSelector((store) => store.movementsReducer);
  const saldo = useSelector((store) => store.movementsReducer.saldo);
  const [dato, setDato] = useState({
    receivercvu: "",
    senderId: "",
  });

  useEffect(() => {
    async function setear() {
      const senderId = await auth.currentUser.uid;
      setDato({ ...dato, senderId: senderId });
    }
    setear();
  }, []);

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
        placeholder="12345678"
        keyboardType="numeric"
        style={style.input}
        onChangeText={(data) => setDato({ ...dato, receivercvu: data })}
        value={dato.receivercvu}
      />
      {spinner && (
        <View style={style.spinner}>
          <ActivityIndicator size="small" color="#fff" />
        </View>
      )}
      {!spinner && (
        <View style={[style.botonContainer, { marginBottom: 15 }]}>
          <TouchableOpacity
            style={style.boton}
            onPress={() => handleSubmit()}
            disabled={dato.receivercvu.length < 8 ? true : false}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Continuar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Transferencias;
