import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  LogBox,
  Alert,
} from "react-native";
import style from "./transferEstilos";
import { Icon, Text, ListItem } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import * as SMS from "expo-sms";
import { styles } from "../../Views/Sign-Up/Sing-Up-Styles";
import { auth, storage } from "../../../firebase";
import { transferir } from "../../Redux/movements";
import { useDispatch, useSelector } from "react-redux";
import { getSaldo } from "../../Redux/movements";

const Transferencias = ({ navigation }) => {
  // LogBox.ignoreAllLogs();

  const dispatch = useDispatch();
  const movements = useSelector((store) => store.movementsReducer);
  useEffect(() => {
    dispatch(getSaldo());
  }, []);
  const [state, setState] = useState(false);
  const [smsNotification, setSmsNotification] = useState(false);
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState("");
  const [dato, setDato] = useState({
    receivercvu: "",
    amount: "",
    motivo: "",
  });
  const [Err, setErr] = useState({
    invalidPhoneFormat: "",
    emptyPhone: "",
  });
  const [incomplete, setIncomplete] = useState(false);
  const [errorcvu, setErrorCvu] = useState(false);
  const [errormoney, setErrorMoney] = useState(false);

  (async function () {
    const email = await auth.currentUser.email;
    setUser(email);
  })();

  const comprobarCvu = async () => {
    const query = await storage
      .collection("Directions")
      .doc("Cvu")
      .collection("listaDeCvu")
      .doc(dato.receivercvu.toString())
      .get();
    let resultado = query.data();
    console.log("dato", dato.receivercvu);
    console.log("Resultado", resultado);

    return resultado ? resultado.userId : null;
  };
  const handleSubmit = async () => {
    const { receivercvu, amount, motivo } = dato;
    if (!receivercvu || !amount || !motivo) {
      return setIncomplete(true);
    }
    setIncomplete(false);
    const rcvu = await comprobarCvu();
    if (!rcvu) {
      return setErrorCvu(true);
    }
    setErrorCvu(false);
    if (parseInt(amount) > parseInt(movements.saldo)) {
      return setErrorMoney(true);
    }
    setErrorMoney(false);

    const id = await auth.currentUser.uid;
    const data = { receivercvu, amount, motivo, senderId: id };
    transferir(data);
    Alert.alert("Transacción exitosa");
  };

  const validateForm = () => {
    setErr({
      invalidPhoneFormat: "",
      emptyPhone: "",
    });
    let invalidPhoneFormat = "";
    let emptyPhone = "";
    if (!phone) {
      emptyPhone = "El campo Teléfono es necesario";
    } else if (!/^[+549][0-9]{12,14}$/.test(phone)) {
      invalidPhoneFormat =
        "El formato de correo debe ser +54 9 11 2345-6789 sin espacios ni signos.";
    }
    if (emptyPhone || invalidPhoneFormat) {
      setErr({
        emptyPhone,
        invalidPhoneFormat,
      });
      return false;
    } else return true;
  };
  const sendSMS = async () => {
    try {
      const isAvailable = await SMS.isAvailableAsync();
      if (isAvailable) {
        const { result } = await SMS.sendSMSAsync(
          [`${phone}`],
          `${user.replace(/@.*$/, "")} le ha enviado $ ${
            dato.amount
          } a traves de QuiqueBank`
        );
        console.log("Result", result);
      } else {
        Alert.alert("Su dispositivo no es compatible con esta función");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <ScrollView>
      <View style={style.barraSuperior}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Icon name="arrow-swap" type="fontisto" size={30} color="white" />
          </TouchableOpacity>
        </View>
        <Text h4 h4Style={{ color: "white", paddingEnd: 100 }}>
          Transferir
        </Text>
      </View>
      <View style={{ marginTop: 40 }}>
        <ListItem style={style.lista}>
          <ListItem.Chevron />
          <ListItem.Content style={style.listaContenedor}>
            <ListItem.Title>Transferir</ListItem.Title>
            <ListItem.CheckBox
              checked={state}
              onPress={() => setState(!state)}
            />
          </ListItem.Content>
        </ListItem>
        <ListItem style={style.lista}>
          <ListItem.Chevron />
          <ListItem.Content style={style.listaContenedor}>
            <ListItem.Title>CVU o Cuenta</ListItem.Title>
            <TextInput
              placeholder="cvu/cuenta"
              style={style.input}
              onChangeText={(data) => setDato({ ...dato, receivercvu: data })}
            />
          </ListItem.Content>
        </ListItem>
        <ListItem style={style.lista}>
          <ListItem.Chevron />
          <ListItem.Content style={style.listaContenedor}>
            <ListItem.Title>Monto</ListItem.Title>
            <TextInput
              placeholder="Ingrese Monto"
              keyboardType="numeric"
              style={style.input}
              onChangeText={(data) => setDato({ ...dato, amount: data })}
            />
          </ListItem.Content>
        </ListItem>
        <ListItem style={style.lista}>
          <ListItem.Chevron />
          <ListItem.Content style={style.listaContenedor}>
            <ListItem.Title>Motivo</ListItem.Title>
            <TextInput
              placeholder="Ingrese Motivo"
              style={style.input}
              onChangeText={(data) => setDato({ ...dato, motivo: data })}
            />
          </ListItem.Content>
        </ListItem>

        <ListItem style={style.lista}>
          <ListItem.Chevron />
          <ListItem.Content style={style.listaContenedor}>
            <ListItem.Title>Notificar por SMS</ListItem.Title>
            <ListItem.CheckBox
              checked={smsNotification}
              onPress={() => setSmsNotification(!smsNotification)}
            />
          </ListItem.Content>
        </ListItem>
        {smsNotification ? (
          <ListItem>
            <ListItem.Chevron />
            <TextInput
              style={styles.phone}
              placeholder="+54 9 11 23456789"
              placeholderTextColor="lightgrey"
              onChangeText={(text) => setPhone(text)}
              value={phone}
            />
          </ListItem>
        ) : null}
        {smsNotification && Err.emptyPhone ? (
          <View>
            <Text style={styles.error}>{Err.emptyPhone}</Text>
          </View>
        ) : null}
        {smsNotification && Err.invalidPhoneFormat ? (
          <View>
            <Text style={styles.error}>{Err.invalidPhoneFormat}</Text>
          </View>
        ) : null}
      </View>
      {incomplete && (
        <View style={style.contError}>
          <Text style={style.error}>Todos los campos son obligatorios</Text>
        </View>
      )}
      {errorcvu && (
        <View style={style.contError}>
          <Text style={style.error}>
            El número de cuenta al que deseas enviar no existe
          </Text>
        </View>
      )}
      {errormoney && (
        <View style={style.contError}>
          <Text style={style.error}>
            No tienes suficiente saldo paa completar la transacción
          </Text>
        </View>
      )}

      <View style={[style.botonContainer, { marginBottom: 15 }]}>
        <TouchableOpacity
          style={style.boton}
          onPress={() => {
            handleSubmit();

            const valid = validateForm();
            if (valid) {
              state && smsNotification ? sendSMS() : null;
              navigation.navigate("TransfConfirm", {
                state: state,
                sms: smsNotification,
                cvu: dato.receivercvu,
                monto: dato.amount,
                motivo: dato.motivo,
              });
            }
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            Confirmar Transferencia
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Transferencias;
