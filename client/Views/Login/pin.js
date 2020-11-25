import AsyncStorage from "@react-native-community/async-storage";
import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
  Image,
  TouchableOpacity,
  Alert,
  BackHandler,
} from "react-native";
import { Input, Icon } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import style from "./PinStyle";
import styleBoton from "../../Global-Styles/BotonGrande";

const Pin = ({ navigation }) => {
  const [clave, setClave] = useState({
    pin1: "",
    pin2: "",
    pin3: "",
    pin4: "",
  });

  const pin1 = useRef();
  const pin2 = useRef();
  const pin3 = useRef();
  const pin4 = useRef();

  const [candado, setCandado] = useState("locked");

  const { primary, secondary, text, bg } = useSelector((store) => store.color);

  // const cerrar = async () => {
  //   await AsyncStorage.removeItem("Metodo")
  // }
  // cerrar()

  useEffect(() => {
    if (!clave.pin1) {
      pin1.current.focus();
    } else if (!clave.pin2) {
      pin2.current.focus();
    } else if (!clave.pin3) {
      pin3.current.focus();
    } else if (!clave.pin4) {
      pin4.current.focus();
    } else if (clave.pin4) {
      pin4.current.blur();
      ingresar();
    }
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackButtonClick
      );
    };
  }, [clave]);

  const handleBackButtonClick = () => {
    BackHandler.exitApp();
  };

  const ingresar = async () => {
    let key = clave.pin1 + clave.pin2 + clave.pin3 + clave.pin4;
    let pin = await AsyncStorage.getItem("Metodo");
    if (pin == JSON.stringify(key)) {
      setCandado("unlocked");
      setTimeout(() => {
        navigation.navigate("HomeDrawer", { status: true });
      }, 2000);
      setTimeout(() => {
        setCandado("locked");
        setClave("");
      }, 2000);
    } else {
      setClave("");
      Alert.alert("Pin incorrecto, Intente nuevamente");
      alert("Pin incorrecto, Intente nuevamente");
    }
  };

  // const handleBack = () => {
  //   navigation.navigate('Login')
  // }

  return (
    <View style={[{ backgroundColor: bg }, style.container]}>
      <View style={{ marginBottom: 50, alignContent: "center" }}>
        <Icon
          name={candado}
          type="fontisto"
          size={100}
          color={candado === "locked" ? primary : "green"}
        />
      </View>
      <View style={[{ backgroundColor: primary }, style.containerTwo]}>
        <View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <View style={style.contentInput}>
              <Input
                secureTextEntry={true}
                style={[
                  clave.pin1
                    ? { borderWidth: 1, borderColor: bg, borderRadius: 5 }
                    : "",
                  style.input,
                ]}
                value={clave.pin1}
                maxLength={1}
                ref={pin1}
                keyboardType="numeric"
                onChangeText={(e) => {
                  setClave({ ...clave, pin1: e });
                }}
              />
            </View>
            <View style={style.contentInput}>
              <Input
                secureTextEntry={true}
                style={[
                  clave.pin2
                    ? { borderWidth: 1, borderColor: bg, borderRadius: 5 }
                    : "",
                  style.input,
                ]}
                value={clave.pin2}
                maxLength={1}
                ref={pin2}
                keyboardType="numeric"
                onChangeText={(e) => {
                  setClave({ ...clave, pin2: e });
                }}
              />
            </View>
            <View style={style.contentInput}>
              <Input
                secureTextEntry={true}
                style={[
                  clave.pin3
                    ? { borderWidth: 1, borderColor: bg, borderRadius: 5 }
                    : "",
                  style.input,
                ]}
                value={clave.pin3}
                maxLength={1}
                ref={pin3}
                keyboardType="numeric"
                onChangeText={(e) => {
                  setClave({ ...clave, pin3: e });
                }}
              />
            </View>
            <View style={style.contentInput}>
              <Input
                secureTextEntry={true}
                style={[
                  clave.pin4
                    ? { borderWidth: 1, borderColor: bg, borderRadius: 5 }
                    : "",
                  style.input,
                ]}
                value={clave.pin4}
                maxLength={1}
                ref={pin4}
                keyboardType="numeric"
                onChangeText={(e) => {
                  setClave({ ...clave, pin4: e });
                }}
              />
            </View>
          </View>
        </View>
        {/* <View style={[{alignItems:"center", marginTop:25},styleBoton.botonContainer]}>
        <TouchableOpacity
          onPress={() => handleBack()}
          style={[{ backgroundColor: bg, marginTop:-30 }, styleBoton.boton]}
        >
          <Text style={[{ color: primary }, styleBoton.texto]}>Volver al login</Text>
        </TouchableOpacity>
      </View>  */}
      </View>
    </View>
  );
};

export default Pin;
