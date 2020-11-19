import React, { useState } from "react";
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
import { auth } from "../../../firebase";

const Transferencias = ({ navigation }) => {
  const [state, setState] = useState(false);
  const [smsNotification, setSmsNotification] = useState(false);
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState("");
  const [dato, setDato] = useState({
    cvu: "",
    monto: "",
    motivo: "",
    email: "",
  });
  const [Err, setErr] = useState({
    invalidPhoneFormat: "",
    emptyPhone: "",
  });

  (async function () {
    const email = await auth.currentUser.email;
    setUser(email);
  })();
  LogBox.ignoreAllLogs();

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
            dato.monto
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
              onChangeText={(data) => setDato({ ...dato, cvu: data })}
            />
          </ListItem.Content>
        </ListItem>
        <ListItem style={style.lista}>
          <ListItem.Chevron />
          <ListItem.Content style={style.listaContenedor}>
            <ListItem.Title>Monto</ListItem.Title>
            <TextInput
              placeholder="Ingrese Monto"
              style={style.input}
              onChangeText={(data) => setDato({ ...dato, monto: data })}
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
            <ListItem.Title>Email</ListItem.Title>
            {/* <Input placeholder="Ingrese Email"
                style={style.input}
                textContentType='emailAddress'
                onChangeText={(data) => setDato({ ...dato, email: data })} /> */}
            <TextInput
              textContentType="emailAddress"
              autoCompleteType="email"
              /* style={styles.input} */
              leftIcon={{ type: "font-awesome", name: "envelope" }}
              placeholderTextColor="grey"
              placeholder="Ingrese Email"
              onChangeText={(value) => setDato({ ...dato, email: value })}
              defaultValue={dato.email}
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
      <View style={[style.botonContainer, { marginBottom: 15 }]}>
        <TouchableOpacity
          disabled={
            state === false ||
            !dato.cvu ||
            !dato.monto ||
            !dato.motivo ||
            !dato.email
          }
          style={style.boton}
          onPress={() => {
            const valid = validateForm();
            if (valid) {
              state && smsNotification ? sendSMS() : null;
              navigation.navigate("TransfConfirm", {
                state: state,
                sms: smsNotification,
                cvu: dato.cvu,
                monto: dato.monto,
                motivo: dato.motivo,
                email: dato.email,
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
