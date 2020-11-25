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

const Splash = ({ navigation, route }) => {
  const [usuario, setUsuario] = useState(false);
  const [huella, setHuella] = useState(false);
  const { primary, secondary, text, bg } = useSelector((store) => store.color);


  return (
    <View style={[{ backgroundColor: primary }, style.container]}>
      <View style={style.logo}>
        <Image source={require("../../src/logo.png")} />
      </View>
      <ActivityIndicator color={bg} size="large" />
    </View>
  );
};

export default Splash;
