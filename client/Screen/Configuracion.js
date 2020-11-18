import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from "react-native";
import { ListItem } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { darkMode } from "../Redux/Estilos";

const Configuracion = ({ navigation, route }) => {
  const setApp = route.params.darker;
  const dispatch = useDispatch();
  const dark = useSelector((store) => store.color.dark);

  return (
    <ScrollView>
      <View>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>Modo Oscuro</ListItem.Title>
            <ListItem.Subtitle>Activar el modo oscuro</ListItem.Subtitle>
          </ListItem.Content>
          <Switch
            value={dark}
            onValueChange={() => {
              setApp(!dark);
              dispatch(darkMode(dark));
            }}
          />
        </ListItem>
      </View>
    </ScrollView>
  );
};

export default Configuracion;
