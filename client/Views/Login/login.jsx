import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  /* Button, */ Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./login-styles";
import { TextInput, Button } from "react-native-paper";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import db from "../../../firebase";
import { useDispatch, useSelector } from "react-redux";
import {getContacts, addContact} from "../../Redux/Contacts"
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
  const [hide,setHide]=useState(true);
  const nameIcon= hide ? 'eye-slash':'eye';
  const security = useState("");

  useEffect(() => {
    //AuthWithFinger()
    console.log(user)
  },[])

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
          navigation.navigate("HomeDrawer",{status:true})
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
    console.log(user)
  //  const token = await AsyncStorage.getAllKeys()
  //  console.log("Es el token---------------------------------",token)
  }

   const AuthWithFinger = async () => {
   const res =  await LocalAuthentication.hasHardwareAsync()
   if(!res)return Alert.alert("Su dispositivo no soporta los metodos de login")

   const autorization = await LocalAuthentication.supportedAuthenticationTypesAsync({})
   if(!autorization) return Alert.alert('No autorizado')
   
   const huella = await LocalAuthentication.isEnrolledAsync()
   if(!huella) return Alert.alert('No tiene autorizacion')
   const login = await LocalAuthentication.authenticateAsync('Ponga su huella')
   if(login.success){
     console.log(login)
    // Alert.alert('Usuario encontrado')
    navigation.navigate("HomeDrawer")
   } else {
    Alert.alert('Hubo un error')
   }
  }

  

  return (
    
    <View style={styles.container}>
      
      <Image source={require("../../src/logo.png")} />
      <View style={{ width: '90%' }}>
        <Input
          textContentType="emailAddress"
          autoCompleteType="email"
          label=" Email"
          leftIcon={{ type: "font-awesome", name: "envelope" }}
          placeholderTextColor="grey"
          placeholder="Email"
          onChangeText={(value) => handleChange("email", value)}
          defaultValue={text.email}
        />
        <View style={styles.contEye}>
        <Input
          secureTextEntry={hide}
          autoCompleteType='password'
          label='Password'
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          placeholderTextColor='grey'
          placeholder=' Password'
          onChangeText={(value) => handleChange('password', value)}
          defaultValue={text.password}
        />
        <View style={styles.eye}>
            <Icon
                size={16}
                name={nameIcon}
                type="font-awesome"
                color="#02072f"
                onPress={()=>setHide(!hide)}
               
              />
          </View>

        </View>
      </View>
      <View style={styles.button}>
        <Button mode="contained" title="finger" onPress={AuthWithFinger} color="darkblue">
          Huella
        </Button>
      </View>
      <View style={styles.button}>
        <Button mode="contained" title="Login" onPress={login} color="darkblue">
          Login
        </Button>
      </View>
      <View style={styles.viewLinks}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPaswword')}
        >
          <Text style={styles.link}>Olvidé mi contraseña</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.link}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;


// const AuthWithFinger = () => {
//   LocalAuthentication.hasHardwareAsync()
//   .then((res) => {
//       console.log(res)
//     if(res){
//       LocalAuthentication.supportedAuthenticationTypesAsync({})
//       .then((result) => {
//         console.log(result)
//         if(result){
//           LocalAuthentication.isEnrolledAsync()
//           .then((re) => {
//             console.log(re)
//             LocalAuthentication.authenticateAsync('Ponga su huella')
//             .then((success) => {
//               console.log(success)
//               Alert.alert('Usuario encontrado')
//               navigation.navigate("HomeDrawer")
//             })
//             .catch(err => {
//               Alert.alert("No se encontro la huella ")
//             })
//           })
//           .catch((er) => {
//             console.log(er)
//             Alert.alert('Hubo un error')
//           })
//         }

//       })
//       .catch(err => {
//         console.log(err)
//       })
//     }

//   })
//   .catch((err) => {
//     console.log(err)
//   })

// }