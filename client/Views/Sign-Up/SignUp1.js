import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Image,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { styles } from "./Sing-Up-Styles";
import { darkBlue, orange, grey, white } from "../../Global-Styles/colors";
import { saveData } from "../../Redux/User";
import { useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
const SignUp1 = ({ navigation }) => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");
  const [DNI, setDNI] = useState("");
  // const [CUIL, setCUIL] = useState('');
  const [Err, setErr] = useState({
    invalidPhoneFormat: "",
    emptyPhone: "",
    invalidDNIFormat: "",
    emptyDNI: "",
    // invalidCUILFormat: "",
    // emptyCUIL: "",
  });

  const validateForm = () => {
    setErr({
      invalidPhoneFormat: "",
      emptyPhone: "",
      invalidDNIFormat: "",
      emptyDNI: "",
      // invalidCUILFormat: "",
      // emptyCUIL: "",
    });
    let invalidPhoneFormat = "";
    let emptyPhone = "";
    let invalidDNIFormat = "";
    let emptyDNI = "";
    // let invalidCUILFormat = "";
    // let emptyCUIL = "";

    if (!phone) {
      emptyPhone = "El campo Teléfono es necesario";
    } else if (!/^[+549][0-9]{12,14}$/.test(phone)) {
      invalidPhoneFormat =
        "Formato de correo incorrecto, debe ser del tipo \n +54 9 (11) 2345-6789 sin espacios ni signos.";
    }
    if (!DNI) {
      emptyDNI = "El campo DNI es necesario";
    } else if (!/^[0-9]{8}$/.test(DNI)) {
      invalidDNIFormat = "El DNI debe tener 8 dígitos";
    }
    // if (!CUIL) {
    //   emptyCUIL = 'El campo CUIL es necesario';
    // }
    // else if (!/^[0-9]{11}$/.test(CUIL)) {
    //   invalidCUILFormat = " Debe tener 11 dígitos";
    // }
    if (
      emptyPhone ||
      invalidPhoneFormat ||
      emptyDNI ||
      invalidDNIFormat /* || */
      // emptyCUIL || invalidCUILFormat
    ) {
      setErr({
        emptyPhone,
        invalidPhoneFormat,
        emptyDNI,
        invalidDNIFormat,
        // emptyCUIL /*, invalidCUILFormat*/,
      });
      return false;
    } else return true;
  };

  let info = {
    // cuil:CUIL,
    dni: DNI,
    phone: phone,
  };

  const handleOnPress = () => {
    const valid = validateForm();
    if (valid) {
      dispatch(saveData(info));
      navigation.navigate("SignUp2");
    }
  };

  const alto = Dimensions.get("window").height;

  const iconColor = 'grey';
  const placeholderColor = 'grey';

  return (
    <ScrollView style={{ height: "100%" }}>
      <View style={[styles.container, { height: alto }]}>
        <View style={styles.centered}>
          <Image
            style={[styles.icon]}
            source={require("../../../assets/sinfondo.png")}
          />
        </View>

        <View style={styles.formGroup}>
          <View style={styles.subgroup}>
            <View style={styles.contIcono}>
              <Icon
                size={16}
                name="phone"
                type="font-awesome"
                color={iconColor}
              />
            </View>

            <Text style={styles.label}>Teléfono</Text>
            <TextInput
              style={[styles.inputs, { paddingLeft: 25 }]}
              onChangeText={(text) => setPhone(text)}
              value={phone}
              placeholder="+5491123456789"
              placeholderTextColor={placeholderColor}
              textContentType="telephoneNumber"
            />
          </View>
        </View>
        {Err.emptyPhone ? (
          <Text style={styles.error}>{Err.emptyPhone}</Text>
        ) : null}
        {Err.invalidPhoneFormat ? (
          <Text style={styles.error}>{Err.invalidPhoneFormat}</Text>
        ) : null}
        <View style={styles.formGroup}>
          <View style={styles.subgroup}>
            <View style={styles.contIcono}>
              <Icon
                size={16}
                name="address-card"
                type="font-awesome"
                color={iconColor}
              />
            </View>

            <Text style={styles.label}>DNI</Text>
            <TextInput
              style={[styles.inputs, { paddingLeft: 27 }]}
              onChangeText={(text) => setDNI(text)}
              value={DNI}
              placeholder="12.345.678"
              placeholderTextColor={placeholderColor}
            />
          </View>
        </View>

        {Err.emptyDNI ? <Text style={styles.error}>{Err.emptyDNI}</Text> : null}
        {Err.invalidDNIFormat ? (
          <Text style={styles.error}>{Err.invalidDNIFormat}</Text>
        ) : null}

        <View style={[styles.button, styles.box]}>

          <TouchableOpacity style={[styles.btnEnviar, styles.siguiente]} onPress={() => handleOnPress()}>
            <Text style={styles.textoBtn}>SIGUIENTE</Text>
          </TouchableOpacity>

          <View style={styles.separator}></View>

          <TouchableOpacity style={[styles.btnEnviar, styles.anterior]} onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.textoBtn}>ANTERIOR</Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  );
};
export default SignUp1;
