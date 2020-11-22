import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import style from "./Check_Styles";
import { Icon, ListItem } from "react-native-elements";

const confirmOrError = ({ navigation, route }) => {
  const [sms, setSms] = useState(false);
  const datos = route.params;

  return (
    <ScrollView>
      {datos.receiver ? (
        <View>
          <View style={style.tituloContainer}>
            <Text style={style.titulo}>Datos del receptor</Text>
          </View>
          <View style={style.listaContenedor}>
            <ListItem style={style.lista}>
              <ListItem.Content>
                <ListItem.Title>Nombre:</ListItem.Title>
                <ListItem.Subtitle>
                  {datos.receiver.nombre + " " + datos.receiver.apellido}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem style={style.lista}>
              <ListItem.Content>
                <ListItem.Title>Dni: </ListItem.Title>
                <ListItem.Subtitle>{datos.receiver.dni} </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem style={style.lista}>
              <ListItem.Content>
                <ListItem.Title>Telefono: </ListItem.Title>
                <ListItem.Subtitle>
                  {datos.receiver.telefono}{" "}
                </ListItem.Subtitle>
                <ListItem.CheckBox
                  checked={sms}
                  onPress={() => {
                    setSms(!sms);
                  }}
                />
              </ListItem.Content>
            </ListItem>
            <ListItem style={style.lista}>
              <ListItem.Content>
                <ListItem.Title>Cvu: </ListItem.Title>
                <ListItem.Subtitle>{datos.receiver.cvu} </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <View style={[style.botonContainer, { marginBottom: 15 }]}>
              <TouchableOpacity
                style={style.boton}
                onPress={() => {
                  navigation.navigate("Finish", {
                    datos,
                    sms,
                  });
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  Confirmar
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.boton}
                onPress={() => {
                  navigation.navigate("Home");
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  Cancelar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <Text>HEy Alerta de no encontre nada.png</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default confirmOrError;
