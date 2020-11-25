import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  /* Button, */ Alert,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
  TextInput
} from "react-native";
import styles from "./login-styles";
import {  Button } from "react-native-paper";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import db from "../../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, addContact } from "../../Redux/Contacts"
import { userLog } from "../../Redux/User";
import * as LocalAuthentication from 'expo-local-authentication';
import AsyncStorage from "@react-native-community/async-storage";





const Login = ({ navigation }) => {
  const disptach = useDispatch();
  const user = useSelector(store => store.user)
  const [text, setText] = useState({
    email: "",
    password: ""
  });
  const [hide, setHide] = useState(true);
  const nameIcon = hide ? 'eye-slash' : 'eye';
  const security = useState("");
  const {password,email}=text;

  useEffect(() => {
    //AuthWithFinger()
    console.log(user)
  }, [])

  const handleChange = async (name, value) => {
    // const permisosFinger = await Permissions.askAsync(Permissions.USE_FINGERPRINT);
    // const permisosBio = await Permissions.askAsync(Permissions.USE_BIOMETRIC);

    // const resultado = permisos.permissions.USE_FINGERPRINT.status;
    // LocalAuthentication.hasHardwareAsync()
    // .then(res => {
    //   console.log("esto es res--------------------",res)
    // })
    // .catch(err => {
    //   console.log(err)
    // })

    setText({
      ...text,
      [name]: value,
    });
  };

  const login = () => {

    //Loguea usuario
    db.auth()
      .signInWithEmailAndPassword(text.email, text.password)
      .then((res) => {
        //Valida si el mail se verificó
        if (res.user.emailVerified) {
          disptach(userLog());
          navigation.navigate("HomeDrawer", { status: true })
        } else {
          navigation.navigate("Verify");
        }
      })
      .catch(function (error) {
        Alert.alert("Ups!", "Email o contraseña son incorrectas", [
          { text: "continuar" },
        ]);
      });
    // hasta que funcione el back

    // Alert.alert(
    //     "Bienvenido!",
    //     "Serás redirigido a tu perfil.",
    //     [{text:'continuar'}]
    // )
  };

  const traerDatos = async () => {
    let clave = await AsyncStorage.getItem('Pin');
  }

  traerDatos()

  const subirEmail = new Animated.Value(0);
  const subirPassword= new Animated.Value(0);

  const upEmail = (value) => {
    Animated.timing(subirEmail, {
      toValue: value,
      duration: 140,
      easing: Easing.inOut(Easing.ease)
    }).start()
}

const upPassword = (value) => {
  Animated.timing(subirPassword, {
    toValue: value,
    duration: 140,
    easing: Easing.inOut(Easing.ease)
  }).start()
}

  return (
    <View style={styles.container} >
    <Text style={styles.franja}>Bienvenido</Text>

    <View style={styles.contLogoMoon}>
      <View>
      <Image
        style={styles.logo}
        
        source={require('../../../assets/sinfondo.png')}
      />
      </View>
      
    </View>

    <View style={styles.menu}>

    

    <View style={styles.general}>
      <View style={styles.contInput}>
        <View style={styles.contIcono}>
          <Icon
            size={16}
            name="envelope"
            type="font-awesome"
            color="#1c2383"
            onPress={() => changeImage()}
          />
        </View>
        <TextInput 
        style={styles.inputPrueba} 
        onFocus={()=>upEmail(-14)}
        onBlur={()=>{if(!email){upEmail(0)}}} 
        onChangeText={(value) => handleChange("email", value)}
        />
        <Animated.Text
         style={[styles.inicial, { transform: [{ translateY: subirEmail }],color:'#1c2383' }]}
        >
          Email
        </Animated.Text>
    
      </View>
    </View>

    
    <View style={styles.general}>
      <View style={[styles.contInput]}>
        <View style={[styles.contIcono,styles.candado]}>
          <Icon
            size={20}
            name="lock"
            type="font-awesome"
            color="#1c2383"
            onPress={() => changeImage()}
          />
        </View>
        <TextInput 
        style={styles.inputPrueba} 
        secureTextEntry={hide}
        onFocus={() => upPassword(-14)} 
        onBlur={()=>{if(!password){upPassword(0)}}} 
        onChangeText={(value) => handleChange('password', value)}

        />
        <Animated.Text
         style={[styles.inicial, { transform: [{ translateY: subirPassword }],color:'#1c2383' }]}
        >
          Password
        </Animated.Text>

        <View style={styles.eye}>
          <Icon
            size={16}
            secureTextEntry={hide}
            name={nameIcon}
            type="font-awesome"
            color="#1c2383"
            onPress={() => setHide(!hide)}

          />
        </View>
      </View>
    </View>
    <View style={styles.contBtn}>
      <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.textoBtn} onPress={login}>Login</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.textoAyuda}>
    <Text style={{color:'#1c2383'}} onPress={() => navigation.navigate('ResetPaswword')}>Olvidé mi contraseña</Text>
    <Text style={{color:'#1c2383'}} onPress={() => navigation.navigate("SignUp")}>Crear cuenta</Text>
    </View>

    </View>

  </View>
  );
};

export default Login;