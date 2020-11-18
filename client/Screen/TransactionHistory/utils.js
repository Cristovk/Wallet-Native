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
    Panaderia: "cookie",
    Almacen: "shopping-basket",
    Videojuegos: "gamepad",
    Entretenimiento: "play-circle",
    Transporte: "bus-alt",
    Gasolinera: "gas-pump",
    Jet: "fighter-jet",
    Farmacia: "first-aid",
    Servicios: "file-invoice-dollar",
  };
  return lista.length ? (
    lista.map((item, i) => (
      <ListItem
        onPress={() =>
          navigation.navigate("Detalle", {
            fecha: item.fecha,
            monto: item.monto,
            icon: item.icon,
            hacia: item.hacia,
            desde: item.desde,
            estado: item.estado,
            tipo: item.tipo,
            motivo: item.motivo,
          })
        }
        key={i}
        bottomDivider
      >
        <Icon name={iconList[item.icon]} size={30} color="black" />
        <ListItem.Content>
          <ListItem.Title>{item.tipo}</ListItem.Title>
          <ListItem.Subtitle>{`${item.motivo}`}</ListItem.Subtitle>
        </ListItem.Content>
        <Text style={{ marginRight: 3 }}>{`$ ${item.monto}`}</Text>
        <ListItem.Chevron
          name="chevron-right"
          type="font-awesome"
          color="black"
        />
      </ListItem>
    ))
  ) : (
    <View
      style={{
        backgroundColor: "white",
        marginHorizontal: "10%",
        paddingHorizontal: 20,
        borderRadius: 10,
        alignContent: "center",
        marginTop: 100,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          textAlignVertical: "auto",
          fontSize: 24,
        }}
      >
        {
          "Ups!\nAun no tenes movimientos!\n¿Que esperas?\nAnda a comprar!\nTenemos promociones para vos!!"
        }
      </Text>
    </View>
  );
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
