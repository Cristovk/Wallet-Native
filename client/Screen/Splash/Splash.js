import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useSelector } from "react-redux";
import style from "./SplashStyle";
import { ActivityIndicator } from "react-native-paper";
import {auth, storage} from "../../../firebase";

const Splash = ({ navigation, route }) => {
  const [usuario, setUsuario] = useState("");
  const [huella, setHuella] = useState("");
  const [clave, setClave] = useState("")

  const { primary, secondary, text, bg } = useSelector((store) => store.color);
  
  const cambiateporfavor = useSelector(store => store.user.cambiar)
  const [cambiate, setCambiate] = useState("")


  const getUsuario = async () => {
    const userId = await auth.currentUser.uid
    try {
      let ref = await storage
        .collection("Users")
        .onSnapshot((query) => {
          var metodo;
          var clave;
          for (const user of query.docs) {
            if(user.data().id === auth.currentUser.uid){
              metodo = user.data().metodo;
              clave = user.data().clave
            }
          }
          metodo === "huella" ? setHuella(metodo) : "";
          setClave(clave)
        });
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    console.log("esto es clave en splash-----", clave)
    console.log("esto es huella en splash-----", huella)
    getUsuario();
    if(huella){
      setTimeout(() => {
        navigation.navigate("Huella")
      })
    }else if(!huella && clave){
      setTimeout(() => {
        navigation.navigate("Pin")
      })
    }else{
      setTimeout(() => {
        navigation.navigate("Login")
      })
    }

  }, [cambiate])

  return (
    <View style={[{ backgroundColor: primary }, style.container]}>
      {console.log("vuelve a entrar a splash")}
      <View style={style.logo}>
        <Image source={require("../../src/logo.png")} />
      </View>
      <ActivityIndicator color={bg} size="large" />
    </View>
  );
};

export default Splash;
