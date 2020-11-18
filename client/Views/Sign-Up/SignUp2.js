import React, { useEffect, useState } from "react";
import {
  TextInput,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { darkBlue, orange, grey, white } from "../../Global-Styles/colors";
import { styles } from "./Sing-Up-Styles";
import { addUser } from "../../Redux/User";
import { useDispatch, useSelector } from "react-redux";

import { auth, storage } from "../../../firebase";

const SignUp2 = ({ navigation }) => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [code, setCode] = useState("");
  const [pin, setPin] = useState("");
  const [hide, setHide] = useState(true);
  const [Err, setErr] = useState({
    matchPasswordErr: "",
    shortPasswordErr: "",
    notNumberPasswordErr: "",
    codeErr: "",
  });

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.userAuth);
  const userData = useSelector((store) => store.user.userData);
  const nameIcon = hide ? "eye-slash" : "eye";

  const handleOnPress = async () => {
    const valid = validateForm();
    if (valid) {
      dispatch(addUser("password", password2));
      try {
        const NewUser = await auth.createUserWithEmailAndPassword(
          user.email,
          password2
        );
        const docRef = storage.collection("Users").doc(NewUser.user.uid);

        await docRef.set({
          id: docRef.id,
          created: Date.now(),
          name: userData.name,
          lastName: userData.lastname,
          birthday: userData.birthday,
          email: user.email,
          phone: userData.phone,
          dni: userData.dni,
          cuil: userData.cuil,
        });
        //se crea Wallet
        const walletRef = storage
          .collection("Users")
          .doc(NewUser.user.uid)
          .collection("Wallet")
          .doc(userData.dni);
        await walletRef.set({
          CVU: userData.dni,
          balance: 0,
        });
        //se le agrega modelo de transactiones inicial

        const TransRef = storage
          .collection("Users")
          .doc(NewUser.user.uid)
          .collection("Wallet")
          .doc(userData.dni)
          .collection("Movimientos")
          .doc();

        await TransRef.set({});

        await NewUser.user.sendEmailVerification();
        Alert.alert(
          "Cuenta creada! Se envio a tu mail un link de verificación"
        );
        navigation.navigate("Login");
      } catch (error) {
        // console.log(error);
      }
    }
  };

  function validateForm() {
    setErr({
      matchPasswordErr: "",
      shortPasswordErr: "",
      notNumberPasswordErr: "",
      codeErr: "",
    });
    let matchPasswordErr = "";
    let shortPasswordErr = "";
    let notNumberPasswordErr = "";
    let codeErr = "";

    if (password1 !== password2) {
      matchPasswordErr = "Las contraseñas no coinciden";
    }
    if (password1.length < 8 || password1.length > 15) {
      shortPasswordErr = "Debe tener entre 8 y 15 caracteres";
    } else if (password1.search(/[0-9]/) == -1) {
      notNumberPasswordErr = "Debe tener al menos un número";
    }
    if (code != pin) {
      codeErr = "Pin Incorrecto, intente nuevamente";
    }
    if (
      matchPasswordErr ||
      shortPasswordErr ||
      codeErr ||
      notNumberPasswordErr
    ) {
      setErr({
        matchPasswordErr,
        shortPasswordErr,
        codeErr,
        notNumberPasswordErr,
      });
      return false;
    } else return true;
  }

  useEffect(() => {
    const min = 1000;
    const max = 10000;
    setPin(Math.floor(Math.random() * (max - min + 1)) + min);
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.centered}>
          <Image
            style={[styles.icon]}
            source={require("../../../assets/icon.png")}
          />
        </View>
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={[styles.inputs]}
          onChangeText={(text) => setPassword1(text)}
          value={password1}
          placeholder="********"
          placeholderTextColor={grey}
          textContentType="password"
          secureTextEntry={hide}
        />
        {Err.shortPasswordErr ? (
          <Text style={styles.error}>{Err.shortPasswordErr}</Text>
        ) : null}
        {Err.notNumberPasswordErr ? (
          <Text style={styles.error}>{Err.notNumberPasswordErr}</Text>
        ) : null}
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.label}>Repite la contraseña</Text>
          <View
            style={{
              position: "absolute",
              top: "220%",
              left: "83%",
              zIndex: 1,
            }}
          >
            <Icon
              size={16}
              name={nameIcon}
              type="font-awesome"
              color="#02072f"
              onPress={() => setHide(!hide)}
            />
          </View>
        </View>
        <TextInput
          style={[styles.inputs]}
          onChangeText={(text) => setPassword2(text)}
          value={password2}
          placeholder="********"
          placeholderTextColor={grey}
          textContentType="password"
          secureTextEntry={hide}
        />
        {Err.matchPasswordErr ? (
          <Text style={styles.error}>{Err.matchPasswordErr}</Text>
        ) : null}
        <Text style={styles.label}>Código de seguridad</Text>
        <View style={styles.pin}>
          <Text style={styles.pinTexto}>{pin}</Text>
        </View>
        <TextInput
          style={[styles.inputs]}
          onChangeText={(text) => setCode(text)}
          value={code}
          placeholder="Ingrese el pin"
          placeholderTextColor={grey}
          textContentType="oneTimeCode"
        />
        {Err.codeErr ? <Text style={styles.error}>{Err.codeErr}</Text> : null}
        <View style={[styles.button, styles.box]}>
          <Button
            title="Anterior"
            color={orange}
            onPress={() => navigation.navigate("SignUp1")}
          />
          <View style={styles.separator}></View>
          <Button
            title="Crear Cuenta"
            color={darkBlue}
            onPress={() => handleOnPress()}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp2;
