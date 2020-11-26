import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from "react-native";
import style from "./Check_Styles";
import { Icon, ListItem } from "react-native-elements";
import { useSelector } from "react-redux";
import { widthPercentageToDP, heightPercentageToDP } from "react-native-responsive-screen"
import botonStyle from '../../Global-Styles/BotonMediano'

const confirmOrErrorDolar = ({ navigation, route }) => {
  const { dato, receiver } = route.params;
  const { primary, secondary, text, bg, dark } = useSelector(store => store.color)

  return (
    <ScrollView style={{ backgroundColor: bg }}>
      {receiver ? (
        <View style={{ height: heightPercentageToDP("100%"), backgroundColor: primary, borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: 25 }}>
          <View style={style.tituloContainer}>
            <Text style={style.titulo}>Datos del receptor</Text>
          </View>
          <View style={style.listaContenedor}>
            <ListItem style={[{ borderBottomColor: dark ? "grey" : secondary }, style.lista]} containerStyle={{ backgroundColor: primary }}>
              <ListItem.Content>
                <ListItem.Title>Nombre:</ListItem.Title>
                <ListItem.Subtitle>
                  {receiver.nombre + " " + receiver.apellido}
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem style={[{ borderBottomColor: dark ? "grey" : secondary }, style.lista]} containerStyle={{ backgroundColor: primary }}>
              <ListItem.Content>
                <ListItem.Title>Dni: </ListItem.Title>
                <ListItem.Subtitle>{receiver.dni} </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem style={[{ borderBottomColor: dark ? "grey" : secondary }, style.lista]} containerStyle={{ backgroundColor: primary }}>
              <ListItem.Content style={style.listaPhone1}>
                <ListItem.Title>Telefono: </ListItem.Title>
                <ListItem.Subtitle>{receiver.telefono}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem style={[{ borderBottomColor: dark ? "grey" : secondary }, style.lista]} containerStyle={{ backgroundColor: primary }}>
              <ListItem.Content>
                <ListItem.Title>Cvu: </ListItem.Title>
                <ListItem.Subtitle>{receiver.cvu} </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <View style={[{ marginTop: 20 }, botonStyle.botonContainer]}>
              <TouchableOpacity style={[{ backgroundColor: bg }, botonStyle.boton]} onPress={() => {
                navigation.navigate("FinishDolar", {
                  receiver: receiver,
                  dato: dato,
                });
              }}>
                <Text style={[{ color: primary }, botonStyle.texto]} >Confirmar</Text>
              </TouchableOpacity>
            </View>
            <View style={[{ marginTop: 20 }, botonStyle.botonContainer]}>
              <TouchableOpacity style={[{ backgroundColor: secondary }, botonStyle.boton]} onPress={() => {
                navigation.navigate("Home");
              }}>
                <Text style={[{ color: text }, botonStyle.texto]} >Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
          <View>
            {Alert.alert('No se encontró destinatario')}
          </View>
        )}
    </ScrollView>
  );
};

export default confirmOrErrorDolar;
