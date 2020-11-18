import React, { useState } from "react";
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

const Login = ({ navigation }) => {
  const disptach = useDispatch();
  const [text, setText] = useState({
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
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

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>$ald∞</Text> */}
      <Image source={require("../../src/logo.png")} />
      <View style={{ width: "90%" }}>
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

        <Input
          secureTextEntry={true}
          autoCompleteType="password"
          label="Password"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          placeholderTextColor="grey"
          placeholder=" Password"
          onChangeText={(value) => handleChange("password", value)}
          defaultValue={text.password}
        />
      </View>
      <View style={styles.button}>
        <Button mode="contained" title="Login" onPress={login} color="darkblue">
          Login
        </Button>
      </View>
      <View style={styles.viewLinks}>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.link}>Recuperar password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.link}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
