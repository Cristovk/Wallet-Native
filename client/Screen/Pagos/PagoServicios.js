import React, { useState } from "react";
import {
  View,
  ScrollView,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Icon, Text, ListItem } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import style from "./PagoServicioEstilo";
import { pagoServicio } from "../../Redux/movements";
import { auth } from "../../../firebase";
import { orange } from "../../Global-Styles/colors";

const PagoServicios = ({ navigation, route }) => {
  const { title, servicio } = route.params;
  const [loading, setLoading] = useState(false);
  const [precio, setPrecio] = useState("");

  const handleSubmit = async () => {
    setLoading(!loading);
    const id = await auth.currentUser.uid;
    const data = {
      userId: id,
      amount: precio,
      categoria: servicio,
      empresa: title,
      operacion: "servicio",
    };
    pagoServicio(data).then((resp) => {
      setLoading(!loading);
      navigation.navigate("PagoConfirm", {
        title: title,
        amount: precio,
        categoria: servicio,
        operacion: "servicio",
        loading: loading,
      });
    });
  };

  return !loading ? (
    <ScrollView>
      <View style={{ marginTop: 90 }}>
        <View>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content style={style.listaContenedor}>
              <ListItem.Title>Servicio: </ListItem.Title>
              <ListItem.Subtitle>{servicio}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content style={style.listaContenedor}>
              <ListItem.Title>Empresa:</ListItem.Title>
              <ListItem.Subtitle>{title}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content style={style.listaContenedor}>
              <ListItem.Title>Total a Pagar:</ListItem.Title>
              <TextInput
                placeholder="       Monto $"
                value={precio.amount}
                onChangeText={(data) => setPrecio(data)}
                style={{ width: 80 }}
              />
            </ListItem.Content>
          </ListItem>
        </View>
        <View style={style.botonContainer}>
          <TouchableOpacity onPress={handleSubmit} style={style.boton}>
            <Text style={{ fontWeight: "bold", fontSize: 15, marginStart: 10 }}>
              Pagar Servicio
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  ) : (
    <ScrollView>
      <View style={{ marginTop: 90 }}>
        <View>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content style={style.listaContenedor}>
              <ListItem.Title>Servicio: </ListItem.Title>
              <ListItem.Subtitle>{servicio}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content style={style.listaContenedor}>
              <ListItem.Title>Empresa:</ListItem.Title>
              <ListItem.Subtitle>{title}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content style={style.listaContenedor}>
              <ListItem.Title>Total a Pagar:</ListItem.Title>
              <TextInput
                placeholder="       Monto $"
                value={precio.amount}
                onChangeText={(data) => setPrecio(data)}
                style={{ width: 80 }}
              />
            </ListItem.Content>
          </ListItem>
        </View>
        <View style={style.activityIndicator}>
          <ActivityIndicator size="large" color={orange} />
        </View>
      </View>
    </ScrollView>
  );
};

export default PagoServicios;
