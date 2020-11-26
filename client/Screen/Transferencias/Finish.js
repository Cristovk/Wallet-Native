import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import { transferir } from "../../Redux/movements";
import { useDispatch, useSelector } from "react-redux";
import { saveSaldo } from "../../Redux/movements";
import style from "./Finish_Styles";
import * as SMS from "expo-sms";
import { CheckBox } from "react-native-elements";
import * as LocalAuthentication from "expo-local-authentication";
import AsyncStorage from "@react-native-community/async-storage";
import qs from "qs";
import { storage } from "../../../firebase";
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
  const { text, primary, secondary, dark, bg } = useSelector(
    (store) => store.color
  );
  const user = useSelector((store) => store.user.user);
  const [sms, setSms] = useState(false);
  const [wApp, setWApp] = useState(false);
  const [email, setEmail] = useState(false);
  const [to, setTo] = useState("");

  const getReceiverEmail = async () => {
    let email;
    const ref = await storage
      .collection("Users")
      .where("cvu", "==", receiver.cvu)
      .get();
    for (const doc of ref.docs) {
      email = await doc.data().email;
    }
    setTo(email);
  };

  useEffect(() => {
    saveSaldo();
    getReceiverEmail();
  }, []);

  const onWappPress = () => {
    if (sms) {
      setSms(!sms);
    }
    if (email) {
      setEmail(!email);
    }
    setWApp(!wApp);
  };

  const onSmsPress = () => {
    if (wApp) {
      setWApp(!wApp);
    }
    if (email) {
      setEmail(!email);
    }
    setSms(!sms);
  };
  const onEmailPress = () => {
    if (sms) {
      setSms(!sms);
    }
    if (wApp) {
      setWApp(!wApp);
    }
    setEmail(!email);
  };
  const sendSMS = async () => {
    try {
      const isAvailable = await SMS.isAvailableAsync();
      if (isAvailable) {
        const { result } = await SMS.sendSMSAsync(
          [`${receiver.telefono}`],
          `Hola ${receiver.nombre}, ${user.name} ${user.lastName} le ha enviado $ ${transferencia.amount} a traves de MoonBank.\nMotivo: ${transferencia.motivo}.`
        );
      } else {
        Alert.alert("Su dispositivo no es compatible con esta función");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const wAppNotification = async () => {
    await Linking.openURL(
      `https://wa.me/${receiver.telefono}?text=Hola *${receiver.nombre}*, ${user.name} ${user.lastName} le ha enviado $ ${transferencia.amount} a traves de *MoonBank*.\nMotivo: _${transferencia.motivo}._`
    );
  };

  const sendEmail = async () => {
    let url = `mailto:${to}`;
    const query = qs.stringify({
      subject: "Aviso de transferencia",
      body: `Hola ${receiver.nombre}, ${user.name} ${user.lastName} le ha enviado $ ${transferencia.amount} a traves de MoonBank.\nMotivo: ${transferencia.motivo}.`,
    });
    if (query.length) {
      url += `?${query}`;
    }
    const canOpen = await Linking.canOpenURL(url);
    if (!canOpen) {
      throw new Error("Provided URL can not be handled");
    }
    return Linking.openURL(url);
  };

  const AuthWithFinger = async () => {
    const HuellaTrans = await AsyncStorage.getItem("MetodoTrans");
    if (HuellaTrans === "huellaTrans") {
      const res = await LocalAuthentication.hasHardwareAsync();
      if (!res)
        return Alert.alert("Su dispositivo no soporta los metodos de login");
      const autorization = await LocalAuthentication.supportedAuthenticationTypesAsync(
        {}
      );
      if (!autorization) return Alert.alert("No autorizado");
      const huella = await LocalAuthentication.isEnrolledAsync();
      if (!huella) return Alert.alert("No tiene autorizacion");
      const login = await LocalAuthentication.authenticateAsync(
        "Ponga su huella"
      );

      if (login.success) {
        const { amount } = transferencia;
        if (parseInt(amount) > parseInt(movements.saldo)) {
          return setErrorMoney(true);
        }
        transferir(transferencia);
        sms
          ? sendSMS()
          : wApp
          ? wAppNotification()
          : email
          ? sendEmail()
          : null;
        navigation.navigate("postScreen", {
          receiver: receiver,
          amount: transferencia.amount,
        });
      } else {
        Alert.alert("Hubo un error");
      }
    } else {
      const { amount } = transferencia;
      if (parseInt(amount) > parseInt(movements.saldo)) {
        return setErrorMoney(true);
      }
      transferir(transferencia);
      sms ? sendSMS() : wApp ? wAppNotification() : email ? sendEmail() : null;
      navigation.navigate("postScreen", {
        receiver: receiver,
        amount: transferencia.amount,
      });
    }
  };

  const handleSubmit = async () => {
    AuthWithFinger();
  };

  function formatNumber(num) {
    let number =
      num && num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    return number;
  }
  return (
    <ScrollView style={{ backgroundColor: bg, height: "100%" }}>
      <View
        style={{
          backgroundColor: bg,
          height: 170,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={[{ color: primary }, style.tituloSaldo]}>Tu saldo:</Text>
        <Text style={[{ color: primary }, style.saldo]}>
          ${formatNumber(movements.saldo === null ? 0 : movements.saldo)}
        </Text>
      </View>
      <View
        style={{
          height: 50,
          borderRadius: 10,
          backgroundColor: primary,
          marginBottom: -15,
        }}
      ></View>
      <View style={{ backgroundColor: primary, height: "100%" }}>
        <View>
          <View style={style.monto}>
            <Text style={[style.text, { color: bg }]}>Monto a enviar:</Text>
          </View>
          <TextInput
            placeholder="$0"
            keyboardType="numeric"
            style={[style.input, { borderBottomColor: bg }]}
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
            <Text style={[style.text, { color: bg }]}>Motivo:</Text>
          </View>
          <TextInput
            placeholder="Te envio este dinero porque..."
            style={[style.input1, { borderBottomColor: bg }]}
            multiline={true}
            numberOfLines={2}
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
            title="Quiero notificar por sms a mi amigo"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={sms}
            containerStyle={{ backgroundColor: primary, borderColor: primary }}
            onPress={() => onSmsPress()}
          />
          <CheckBox
            center
            title="Quiero notificar por WhatsApp a mi amigo"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={wApp}
            containerStyle={{ backgroundColor: primary, borderColor: primary }}
            onPress={() => onWappPress()}
          />
          <CheckBox
            center
            title="Quiero notificar por Email a mi amigo"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={email}
            containerStyle={{ backgroundColor: primary, borderColor: primary }}
            onPress={() => onEmailPress()}
          />
          {/* {email ? (
            <TextInput
              placeholderTextColor="grey"
              placeholder="johndoe@emailserver.com"
              style={[style.input1, { borderBottomColor: bg }]}
              onChangeText={(data) => setEmailData({ to: data })}
            />
          ) : null} */}
          <View style={[style.botonContainer, { marginBottom: 15 }]}>
            <TouchableOpacity
              style={[
                {
                  backgroundColor: secondary,
                  color: primary,
                },
                style.boton,
              ]}
              onPress={() => {
                handleSubmit();
              }}
              disabled={transferencia.amount.length <= 0 ? true : false}
            >
              <Text style={{ fontWeight: "bold", fontSize: 15, color: text }}>
                Enviar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Finish;
