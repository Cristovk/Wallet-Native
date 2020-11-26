import React, { useState, useEffect, useReducer } from "react";
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Text,
} from "react-native";
import style from "./transferEstilos";
import viewStyle from '../../Global-Styles/ViewContainer'
import botonStyle from '../../Global-Styles/BotonMediano'
import { auth, storage } from "../../../firebase";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
const Transferencias = ({ navigation }) => {
  const user = useSelector((store) => store.user);
  const [dato, setDato] = useState({
    receivercvu: "",
    senderId: user.user.id,
    sendercvu: user.user.cvu
  });
  const [error, setError] = useState(false)
  const { primary, secondary, text, bg, dark } = useSelector(store => store.color)

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
    if (dato.receivercvu === dato.sendercvu) {
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
    <ScrollView style={{ backgroundColor: bg }} >

      <View style={[{ backgroundColor: bg }, style.cvu]}>
        <Text style={style.text}>CVU</Text>
      </View>
      <View style={[{ backgroundColor: primary }, viewStyle.container]}>
        <TextInput
          placeholder="El cvu consiste en 22 caracteres numericos"
          keyboardType="numeric"
          style={style.input}
          onChangeText={(data) => setDato({ ...dato, receivercvu: data }, setError(false))}
          value={dato.receivercvu}
          
        />
        <Text>_______________________________________</Text>
        {spinner && (
          <View style={style.spinner}>
            <ActivityIndicator size="small" color={bg} />
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
          <View style={[botonStyle.botonContainer, { marginBottom: 15 }]}>
            <TouchableOpacity
              style={[{ backgroundColor: secondary }, botonStyle.boton]}
              onPress={() => handleSubmit()}
              disabled={dato.receivercvu.length == 22 ? false : true}
            >
              <Text style={{ fontSize: 15, color: text }}>Continuar</Text>
            </TouchableOpacity>

          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Transferencias;
