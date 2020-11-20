import React from "react";
import { ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Platform, Text } from "react-native";
import * as Print from "expo-print";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";
import { View } from "react-native";

/*Esta funcion genera la lista de transacciones (ListItem), re que ni servia con la db*/
export const historial = (lista, { navigation }) => {
  const iconList = {
    panaderia: "cookie",
    almacen: "shopping-basket",
    videojuegos: "gamepad",
    entretenimiento: "play-circle",
    transporte: "bus-alt",
    gasolinera: "gas-pump",
    jet: "fighter-jet",
    farmacia: "first-aid",
    servicios: "file-invoice-dollar",
    Tsaliente: "arrow-circle-up",
    Tentrante: "arrow-circle-down",
    recarga:  "wallet"
  };
  
  return  (
    lista.map((item, i) => (
      <ListItem
        onPress={() =>
          navigation.navigate("Detalle", {
            fecha: item.fecha,
            monto: item.monto,
            hacia: item.hacia,
            desde: item.desde,
            estado: item.estado,
            tipo: item.tipo,
            motivo: item.motivo,
            operacion: item.operacion,
            estado: item.estado,
            empresa: item.empresa,
            desde: item.desde
          })
        }
        key={i}
        bottomDivider
      >
        <Icon name={iconList[item.tipo]} size={30} color="black" />
        <ListItem.Content>
          <ListItem.Title>{item.empresa ? item.empresa: "Quiquebank"}</ListItem.Title>
          <ListItem.Subtitle>{`${item.tipo === "Tsaliente" || item.tipo ==="Tentrante" ? "transferencia": item.tipo}`}</ListItem.Subtitle>
        </ListItem.Content>
        <Text style={{ marginRight: 3 }}>{`$ ${item.monto}`}</Text>
        <ListItem.Chevron
          name="chevron-right"
          type="font-awesome"
          color="black"
        />
      </ListItem>
    ))
  )
};

/*Esta funcion parsea el html*/
const generateHtml = (title, amount, icon) => {
  return;
  `<!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Recibo de transaccion</title>
        <style>
            body {
                font-size: 16px;
                color: rgb(255, 196, 0);
            }
            h1 {
                text-align: center;
            }
        </style>
      </head>
      <body>
            <h1>Aqui iria el recibo si tuviera uno.jpeg</h1>
      </body>
    </html>`;
};

/*Esta funcion genera un recibo en pdf*/
export const generateInvoice = async (title, amount, icon) => {
  html = generateHtml(title, amount, icon);
  if (html) {
    try {
      const { uri } = await Print.printToFileAsync({ html });
      if (Platform.OS === "ios") {
        await Sharing.shareAsync(uri);
      } else {
        const permission = await MediaLibrary.requestPermissionsAsync();
        if (permission.granted) {
          await MediaLibrary.createAssetAsync(uri);
          await Sharing.shareAsync(uri);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
};
