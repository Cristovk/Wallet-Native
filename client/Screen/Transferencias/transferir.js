import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  LogBox,
  Alert,
  ActivityIndicator,
} from "react-native";
import style from "./transferEstilos";
import { Icon, Text, ListItem } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import * as SMS from "expo-sms";
import { auth, storage } from "../../../firebase";
const axios = require("axios");
const Transferencias = ({ navigation }) => {
 
  const [state, setState] = useState(false);
  const [exist, setExist] = useState(false);
  const [receiver, setReceiver] = useState({});
  const [dato, setDato] = useState({
    receivercvu: "",
    senderId: "",
  });
  const [spinner, setSpinner] = useState(false);

  const [incomplete, setIncomplete] = useState(false);

  useEffect(async () => {
    const senderId = await auth.currentUser.uid;
    setDato({ ...dato, senderId: senderId });
  }, []);

  const comprobarCvu = async () => {
    try {
      let respuesta = await axios.post(
        "https://us-central1-henrybankfire.cloudfunctions.net/cvuExist",
        { cvu: dato.receivercvu }
      );
      return respuesta;
    } catch (error) {
      return error;
    }
    
  };

  const handleSubmit = async () => {
    let respuesta = await comprobarCvu();
    console.log("Tengo res", respuesta.data.datos)
   let objeto = respuesta.data.datos;
   console.log('DESDE OBJETO',objeto)
   
      // setReceiver({ ...receiver, receiver: objeto });
      setReceiver(objeto);
      console.log(receiver,'después de setearlo');


      const { receivercvu } = dato;
      if (!receivercvu) {
        return setIncomplete(true);
      }
      setIncomplete(false);
      setSpinner(true);
     
  };
  return (
    <View>
      <View style={style.cvu}>
        <Text style={style.text}>
          CVU
        </Text>
      </View>
      <TextInput
        placeholder="12345678"
        keyboardType="numeric"
        style={style.input}
        onChangeText={(data) => {
           setDato({ ...dato, receivercvu: data });
        }}
      />
      <View style={[style.botonContainer, { marginBottom: 15 }]}>
        {!spinner && (
          <TouchableOpacity
            disabled={dato.receivercvu.length < 8 ? true : false}
            style={style.boton}
            onPress={() => {
              handleSubmit();
          
              setTimeout(() => {
                navigation.navigate("confirmOrError", {
                  receiver,
                  dato:dato
                });
              }, 2000);
                
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Continuar</Text>
          </TouchableOpacity>
        )}

        {spinner && (
          <View style={style.spinner}>
            <ActivityIndicator size="small" color="#fff" />
          </View>
        )}
      </View>
    </View>
  );
};

export default Transferencias;
