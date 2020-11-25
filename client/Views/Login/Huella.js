import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import * as LocalAuthentication from "expo-local-authentication";
import styles from "./HuellaStyle";
import { useSelector } from "react-redux";
import { Icon } from "react-native-elements";
import styleBoton from "../../Global-Styles/BotonMediano";

const Huella = ({ navigation }) => {
  const [candado, setCandado] = useState("locked");

  const AuthWithFinger = async () => {
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
      setCandado("unlocked");
      setTimeout(() => {
        navigation.navigate("HomeDrawer");
      }, 1000);
      setTimeout(() => {
        setCandado("locked");
      }, 2000);
    } else {
      Alert.alert("Hubo un error");
    }
  };

  useEffect(() => {
    AuthWithFinger();
  }, []);

  const { primary, secondary, text, bg } = useSelector((store) => store.color);

  const { primary, secondary, text, bg } = useSelector((store) => store.color);

  // const cerrar = async () => {
  //   await AsyncStorage.removeItem("Metodo")
  // }

  // cerrar()

  return (
    <View style={[{ backgroundColor: bg }, styles.container]}>
      <View style={{ marginBottom: 50, alignContent: "center" }}>
        <Icon
          name={candado}
          type="fontisto"
          size={100}
          color={candado === "locked" ? primary : "green"}
        />
      </View>
      <View style={[{ backgroundColor: primary }, styles.containerTwo]}></View>
    </View>
  );
};

export default Huella;
