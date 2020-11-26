import React, { useState } from "react";
import {
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import { styles } from "./Sing-Up-Styles";
import { addUser, saveData } from "../../Redux/User";
import { useDispatch } from "react-redux";
import { LogBox } from "react-native";
import { auth, storage } from "../../../firebase.js";

Dimensions.get("window").width;
Dimensions.get("window").height;
/* ======================================= STATE ================================================ */

const SignUp = ({ navigation }) => {
  LogBox.ignoreAllLogs();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [Err, setErr] = useState({
    emptyName: "",
    emptyLastname: "",
    emptyEmail: "",
    invalidEmailFormat: "",
    emailExist: "",
    emptyDay: "",
    invalidDayFormat: "",
    emptyMonth: "",
    invalidMonthFormat: "",
    emptyYear: "",
    invalidYearFormat: "",
  });
  const emailValido = async () => {
    const query = await storage
      .collection("Users")
      .where("email", "==", email)
      .get();
    if (query.empty) {
      return false;
    }
    return true;
  };

  let newDate = new Date(year, month - 1, day);
  let actualYear = new Date().getFullYear();

  const validateForm = async () => {
    setErr({
      emptyName: "",
      emptyLastname: "",
      emptyEmail: "",
      invalidEmailFormat: "",
      emailExist: "",
      emptyDay: "",
      invalidDayFormat: "",
      emptyMonth: "",
      invalidMonthFormat: "",
      emptyYear: "",
      invalidYearFormat: "",
    });
    let emptyName = "";
    let emptyLastname = "";
    let emptyEmail = "";
    let invalidEmailFormat = "";
    let emailExist = "";
    let emptyDay = "";
    let invalidDayFormat = "";
    let emptyMonth = "";
    let invalidMonthFormat = "";
    let emptyYear = "";
    let invalidYearFormat = "";


    if (!name) {
      emptyName = "El campo Nombre(s) es necesario";
    }
    if (!lastname) {
      emptyLastname = "El campo Apellido(s) es necesario";
    }
    if (!email) {
      emptyEmail = "El campo Email es necesario";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      invalidEmailFormat = "Formato de email inválido o ya registrado";


    
    if (!day) {
      emptyDay = "El campo día es necesario";
    } else if (day < 1 || day > 31 || isNaN(day)) {
      invalidDayFormat = "Escoja un número entre 1 y 31";
    } else if (!month) {
      emptyMonth = "El campo Mes es necesario";
    } else if (month < 1 || month > 12 || isNaN(month)) {
      invalidMonthFormat = "Escoja un mes entre 1 y 12";
    } else if (!year) {
      emptyYear = "El campo Año es necesario";
    } else if (year < actualYear - 100 || year > actualYear || isNaN(year)) {
      invalidYearFormat = `Elija un año entre ${
        actualYear - 100
      } y ${actualYear}`;
    }
    if (
      emptyName ||
      emptyLastname ||
      emptyEmail ||
      emailExist ||
      invalidEmailFormat ||
      emptyDay ||
      invalidDayFormat ||
      emptyMonth ||
      invalidMonthFormat ||
      emptyYear ||
      invalidYearFormat
    ) {
      setErr({
        emptyName,
        emptyLastname,
        emptyEmail,
        invalidEmailFormat,
        emailExist,
        emptyDay,
        invalidDayFormat,
        emptyMonth,
        invalidMonthFormat,
        emptyYear,
        invalidYearFormat,
      });
      return false;
    } else return true;
  };

  let info = {
    name: name,
    lastname: lastname,
    birthday: newDate,
  };

  const handleOnPress = async () => {
    const valid = await validateForm();
    if (valid) {
      dispatch(addUser("email", email));
      dispatch(saveData(info));
      navigation.navigate("SignUp1");
    }
  };

  const iconColor = "grey";
  const placeholderColor = "grey";

  return (
    <ScrollView style={styles.container}>
      <View style={styles.centered}>
        <Image
          style={[styles.icon]}
          source={require("../../../assets/sinfondo.png")}
        />
      </View>

      <View style={styles.formGroup}>
        <View style={styles.subgroup}>
          <View style={styles.contIcono}>
            <Icon size={16} name="user" type="font-awesome" color={iconColor} />
          </View>
          <Text style={styles.label}>Nombres</Text>
          <TextInput
            style={[styles.inputs, { paddingLeft: 23 }]}
            onChangeText={(text) => setName(text)}
            value={name}
            placeholder="John"
            placeholderTextColor={placeholderColor}
            textContentType="name"
          />
        </View>
      </View>

      {Err.emptyName ? <Text style={styles.error}>{Err.emptyName}</Text> : null}

      <View style={styles.formGroup}>
        <View style={styles.subgroup}>
          <View style={[styles.contIcono]}>
            <Icon size={16} name="user" type="font-awesome" color={iconColor} />
          </View>
          <Text style={styles.label}>Apellidos</Text>
          <TextInput
            style={[styles.inputs, { paddingLeft: 23 }]}
            onChangeText={(text) => setLastname(text)}
            value={lastname}
            placeholder="Doe"
            placeholderTextColor={placeholderColor}
            textContentType="familyName"
          />
        </View>
      </View>

      {Err.emptyLastname ? (
        <Text style={styles.error}>{Err.emptyLastname}</Text>
      ) : null}

      <View style={styles.formGroup}>
        <View style={styles.subgroup}>
          <View style={styles.contIcono}>
            <Icon
              size={16}
              name="envelope"
              type="font-awesome"
              color={iconColor}
            />
          </View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={[styles.inputs, { paddingLeft: 26 }]}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="johndoe@emailserver.com"
            placeholderTextColor={placeholderColor}
            textContentType="emailAddress"
          />
        </View>
      </View>

      {Err.emptyEmail ? (
        <Text style={styles.error}>{Err.emptyEmail}</Text>
      ) : null}
      {Err.invalidEmailFormat ? (
        <Text style={styles.error}>{Err.invalidEmailFormat}</Text>
      ) : null}
      {Err.emailExist ? (
        <Text style={styles.error}>{Err.emailExist}</Text>
      ) : null}

      <Text style={styles.label}>Cumpleaños</Text>
      <View style={[styles.inputs, styles.cumple]}>
        <TextInput
          placeholder="Día"
          placeholderTextColor={placeholderColor}
          onChangeText={(d) => setDay(d)}
          style={[styles.date]}
          maxLength={2}
        />
        <View style={styles.verticalSeparator}></View>
        <TextInput
          placeholder="Mes"
          placeholderTextColor={placeholderColor}
          onChangeText={(m) => setMonth(m)}
          style={[styles.date]}
          maxLength={2}
        />
        <View style={styles.verticalSeparator}></View>
        <TextInput
          placeholder="Año"
          placeholderTextColor={placeholderColor}
          onChangeText={(y) => setYear(y)}
          style={[styles.date]}
          maxLength={4}
        />
      </View>
      {Err.emptyDay ? <Text style={styles.error}>{Err.emptyDay}</Text> : null}
      {Err.invalidDayFormat ? (
        <Text style={styles.error}>{Err.invalidDayFormat}</Text>
      ) : null}
      {Err.emptyMonth ? (
        <Text style={styles.error}>{Err.emptyMonth}</Text>
      ) : null}
      {Err.invalidMonthFormat ? (
        <Text style={styles.error}>{Err.invalidMonthFormat}</Text>
      ) : null}
      {Err.emptyYear ? <Text style={styles.error}>{Err.emptyYear}</Text> : null}
      {Err.invalidYearFormat ? (
        <Text style={styles.error}>{Err.invalidYearFormat}</Text>
      ) : null}

      <View style={[styles.button, styles.box]}>
        <TouchableOpacity
          style={[styles.btnEnviar, styles.siguiente]}
          onPress={() => handleOnPress()}
        >
          <Text style={styles.textoBtn}>SIGUIENTE</Text>
        </TouchableOpacity>
        <View style={styles.separator}></View>
        <TouchableOpacity
          style={[styles.btnEnviar, styles.anterior]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.textoBtn}>ANTERIOR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default SignUp;
