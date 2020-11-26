import React, { useEffect, useState } from "react";
import {
  TextInput,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { darkBlue, orange, grey, white } from "../../Global-Styles/colors";
import { styles } from "./Sing-Up-Styles";
import { addUser } from "../../Redux/User";
import { useDispatch, useSelector } from "react-redux";
import { Input } from 'react-native-elements'

import { auth, storage } from "../../../firebase";
import Clave from "../../Screen/Configuracion/Clave/Clave";

const SignUp2 = ({ navigation }) => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [code, setCode] = useState("");
  const [pin, setPin] = useState("");
  const [clave, setClave] = useState("")
  const [hide1, setHide1] = useState(true);
  const [hide2, setHide2] = useState(true);
  const [Err, setErr] = useState({
    matchPasswordErr: "",
    shortPasswordErr: "",
    notNumberPasswordErr: "",
    codeErr: "",
    claveErr: ""
  });

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.userAuth);
  const userData = useSelector((store) => store.user.userData);
  const nameIcon = hide1 ? "eye-slash" : "eye";
  const nameIcon2 = hide2 ? "eye-slash" : "eye";

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
        const generatePin = () => {
          const number = new Date().getTime()
          return number.toString()
        }
        const pinRecarga = generatePin()
        const elCvu = "" + 202005051 + pinRecarga
        const metodo = ""
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
          pin: pinRecarga,
          cvu: elCvu,
          clave: clave,
          metodo: metodo

        });
        //se crea Wallet

        const walletRef = storage.collection('Users').doc(NewUser.user.uid).collection('Wallet').doc(elCvu);
        const cvu = storage.collection('Directions').doc('Cvu').collection('listaDeCvu').doc(elCvu);
        const carga = storage.collection('Directions').doc('Pin').collection('listaDePin').doc(pinRecarga);
        await cvu.set({
          userId: NewUser.user.uid,
        });
        await carga.set({
          userId: NewUser.user.uid,
        });
        await walletRef.set({
          saldo: 0,
          dolares:0,
        });
        //se le agrega modelo de transactiones inicial

        const TransRef = storage
          .collection("Users")
          .doc(NewUser.user.uid)
          .collection("Wallet")
          .doc(elCvu)
          .collection("Movimientos")
          .doc();

        await TransRef.set({});

        await NewUser.user.sendEmailVerification()
        Alert.alert(
          "Cuenta creada! Se envio a tu mail un link de verificación"
        );
        navigation.navigate("Login");

      } catch (error) {
        console.log(error);
      }
    }
  };

  function validateForm() {
    setErr({
      matchPasswordErr: "",
      shortPasswordErr: "",
      notNumberPasswordErr: "",
      codeErr: "",
      claveErr: ""
    });
    let matchPasswordErr = "";
    let shortPasswordErr = "";
    let notNumberPasswordErr = "";
    let codeErr = "";
    let claveErr = ""

    if (password1 !== password2) {
      matchPasswordErr = "Las contraseñas no coinciden";
    }
    if (password1.length < 8 || password1.length > 15) {
      shortPasswordErr = "Debe tener entre 8 y 15 caracteres";
    } else if (password1.search(/[0-9]/) == -1) {
      notNumberPasswordErr = "Debe tener al menos un número";
    }
    // if (code != pin) {
    //   codeErr = "Pin Incorrecto, intente nuevamente";
    // }
    if (clave.length > 4) {
      claveErr = "La clave tiene mas de 4 digitos o contiene letras"
    }
    if (
      matchPasswordErr ||
      shortPasswordErr ||
      codeErr ||
      notNumberPasswordErr ||
      claveErr
    ) {
      setErr({
        matchPasswordErr,
        shortPasswordErr,
        codeErr,
        notNumberPasswordErr,
        claveErr
      });
      return false;
    } else return true;
  }

  useEffect(() => {
    const min = 1000;
    const max = 10000;
    setPin(Math.floor(Math.random() * (max - min + 1)) + min);
  }, []);

  const iconColor = 'grey';
  const placeholderColor = 'grey';

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.centered}>
          <Image
            style={[styles.icon]}
            source={require("../../../assets/sinfondo.png")}
          />
        </View>


        <View style={styles.formGroup}>
          <View style={styles.subgroup}>

            <View style={styles.contIcono}>
              <Icon size={16} name="lock" type="font-awesome" color={iconColor} />
            </View>
            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              style={[styles.inputs]}
              onChangeText={(text) => setPassword1(text)}
              value={password1}
              placeholder="********"
              placeholderTextColor={placeholderColor}
              textContentType="password"
              secureTextEntry={hide1}
              autoCompleteType='off'
            />
            <View style={styles.eye}>
              <Icon
                size={16}
                name={nameIcon}
                type="font-awesome"
                color={iconColor}
                onPress={() => setHide1(!hide1)}

              />
            </View>
          </View>
        </View>



        {Err.shortPasswordErr ? (
          <Text style={styles.error}>{Err.shortPasswordErr}</Text>
        ) : null}
        {Err.notNumberPasswordErr ? (
          <Text style={styles.error}>{Err.notNumberPasswordErr}</Text>
        ) : null}
        {Err.matchPasswordErr ? (
          <Text style={styles.error}>{Err.matchPasswordErr}</Text>
        ) : null}

        <View style={styles.formGroup}>
          <View style={styles.subgroup}>

            <View style={styles.contIcono}>
              <Icon size={16} name="lock" type="font-awesome" color={iconColor} />
            </View>
            <Text style={styles.label}>Repite la contraseña</Text>
            <TextInput
              style={[styles.inputs]}
              onChangeText={(text) => setPassword2(text)}
              value={password2}
              placeholder="********"
              placeholderTextColor={placeholderColor}
              textContentType="password"
              secureTextEntry={hide2}
              autoCompleteType='off'
            />
            <View style={styles.eye}>
              <Icon
                size={16}
                name={nameIcon2}
                type="font-awesome"
                color={iconColor}
                onPress={() => setHide2(!hide2)}
              />
            </View>
          </View>


        </View>


        <View style={styles.formGroup}>
          <View style={styles.subgroup}>

            <View style={[styles.contIcono, { top: 50 }]}>
              <Icon size={20} name="slack" type="fontisto" color={iconColor} />
            </View>
            <Text style={styles.label}>Código de verificación</Text>
            <TextInput
              style={[styles.inputs, { paddingLeft: 34, fontSize: 26, width: 120 }]}
              value={JSON.stringify(pin)}
              placeholderTextColor={placeholderColor}
              textContentType="oneTimeCode"
            />
          </View>
        </View>


        {/* <View style={styles.formGroup}>
          <View style={styles.subgroup}>

        <View style={styles.contIcono}>
            <Icon size={16} name="slack" type="fontisto" color="#1c2383" />
        </View>
        <Text style={styles.label}>Código de verificación</Text>
          <TextInput
            style={[styles.inputs,{paddingLeft:24}]}
            value={pin}
            placeholderTextColor='#1c2383'
            placeholderTextColor='grey'
            textContentType="oneTimeCode"
          />
        </View>
        </View> */}


        <View style={styles.formGroup}>
          <View style={styles.subgroup}>

            <View style={styles.contIcono}>
              <Icon size={16} name="slack" type="font-awesome" color={iconColor} />
            </View>
            <Text style={styles.label}>Ingrese el código</Text>
            <TextInput
              style={[styles.inputs, { paddingLeft: 26 }]}
              onChangeText={(text) => setCode(text)}
              value={code}
              placeholder="-- -- -- --"
              placeholderTextColor={placeholderColor}
              textContentType="oneTimeCode"
              keyboardType='numeric'
            />
          </View>
        </View>

        {Err.codeErr ? <Text style={styles.error}>{Err.codeErr}</Text> : null}

        <View style={styles.formGroup}>
          <View style={styles.subgroup}>

            <View style={styles.contIcono}>
              <Icon size={16} name="key" type="font-awesome" color={iconColor} />
            </View>
            <Text style={styles.label}>Clave de Aplicación</Text>
            <TextInput
              style={[styles.inputs, { paddingLeft: 26 }]}
              onChangeText={(text) => setClave(text)}
              value={clave}
              placeholder="-- -- -- --"
              placeholderTextColor={placeholderColor}
              textContentType="oneTimeCode"
            />
          </View>
        </View>

        {Err.claveErr ? <Text style={styles.error}>{Err.claveErr}</Text> : null}


        <View style={[styles.button, styles.box]}>

          <TouchableOpacity style={[styles.btnEnviar, styles.siguiente]} onPress={() => handleOnPress()}>
            <Text style={styles.textoBtn}>CREAR CUENTA</Text>
          </TouchableOpacity>

          <View style={styles.separator}></View>

          <TouchableOpacity style={[styles.btnEnviar, styles.anterior]} onPress={() => navigation.navigate("SignUp1")}>
            <Text style={styles.textoBtn}>ANTERIOR</Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp2;
