import React from "react";
import { ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Platform, Text } from "react-native";
import * as Print from "expo-print";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export const detalle = (
  fecha,
  monto,
  tipo,
  hacia,
  motivo,
  estado,
  operacion,
  empresa,
  categoria,
  sender,
  receiver,
  desde,
  card
) => {
  const { primary, secondary, bg, text, dark } = useSelector(
    (store) => store.color
  );
  let date = new Date(fecha).toLocaleDateString();
  let time = new Date(fecha).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const Operacion = operacion
    ? operacion[0].toUpperCase() + operacion.substring(1)
    : null;
  if (operacion === "recarga") {
    return (
      <View style={{ marginTop: 15 }}>
        <ScrollView>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{"Operacion"}</ListItem.Title>
            </ListItem.Content>
            <Text>{Operacion}</Text>
          </ListItem>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{"Estado"}</ListItem.Title>
            </ListItem.Content>
            <Text>{estado}</Text>
          </ListItem>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{"Metodo de recarga"}</ListItem.Title>
            </ListItem.Content>
            <Text>
              {categoria === "recarga"
                ? "Recarga presencial"
                : "Recarga con tarjeta de credito"}
            </Text>
          </ListItem>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>
                {categoria === "recarga" ? "Lugar de recarga" : "Tarjeta"}
              </ListItem.Title>
            </ListItem.Content>
            <Text>{categoria === "recarga" ? empresa : empresa}</Text>
          </ListItem>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>
                {categoria === "recarga" ? "Lugar de recarga" : "Numero"}
              </ListItem.Title>
            </ListItem.Content>
            <Text>{categoria === "recarga" ? empresa : card}</Text>
          </ListItem>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{"Fecha"}</ListItem.Title>
            </ListItem.Content>
            <Text>{date}</Text>
          </ListItem>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{"Hora"}</ListItem.Title>
            </ListItem.Content>
            <Text>{time}</Text>
          </ListItem>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{"Monto"}</ListItem.Title>
            </ListItem.Content>
            <Text>{`$ ${formatNumber(monto)}`}</Text>
          </ListItem>
        </ScrollView>
      </View>
    );
  }

  if (operacion === "transferencia") {
    return (
      <View style={{ marginTop: 15 }}>
        <ScrollView>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{"Operacion"}</ListItem.Title>
            </ListItem.Content>
            <Text>{Operacion}</Text>
          </ListItem>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{"Estado"}</ListItem.Title>
            </ListItem.Content>
            <Text>{estado}</Text>
          </ListItem>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{"Motivo"}</ListItem.Title>
            </ListItem.Content>
            <Text>{motivo}</Text>
          </ListItem>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>
                {categoria === "Tentrante" ? "Emisor" : "Receptor"}
              </ListItem.Title>
            </ListItem.Content>
            <Text>{categoria === "Tentrante" ? sender : receiver}</Text>
          </ListItem>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{"CVU"}</ListItem.Title>
            </ListItem.Content>
            <Text>{categoria === "Tentrante" ? desde : hacia}</Text>
          </ListItem>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{"Fecha"}</ListItem.Title>
            </ListItem.Content>
            <Text>{date}</Text>
          </ListItem>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{"Hora"}</ListItem.Title>
            </ListItem.Content>
            <Text>{time}</Text>
          </ListItem>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{"Monto"}</ListItem.Title>
            </ListItem.Content>
            <Text>{`$ ${formatNumber(monto)}`}</Text>
          </ListItem>
        </ScrollView>
      </View>
    );
  }
  if (operacion === "compra") {
    return (
      <View style={{ marginTop: 15 }}>
        <ScrollView>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{"Operacion"}</ListItem.Title>
            </ListItem.Content>
            <Text>{Operacion}</Text>
          </ListItem>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{"Estado"}</ListItem.Title>
            </ListItem.Content>
            <Text>{estado}</Text>
          </ListItem>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{"Lugar de compra"}</ListItem.Title>
            </ListItem.Content>
            <Text>{empresa}</Text>
          </ListItem>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{"Fecha"}</ListItem.Title>
            </ListItem.Content>
            <Text>{date}</Text>
          </ListItem>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{"Hora"}</ListItem.Title>
            </ListItem.Content>
            <Text>{time}</Text>
          </ListItem>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{"Monto"}</ListItem.Title>
            </ListItem.Content>
            <Text>{`$ ${formatNumber(monto)}`}</Text>
          </ListItem>
        </ScrollView>
      </View>
    );
  }
  if (operacion === "servicio") {
    return (
      <View style={{ marginTop: 15 }}>
        <ScrollView>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{"Operacion"}</ListItem.Title>
            </ListItem.Content>
            <Text>{Operacion}</Text>
          </ListItem>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{"Tipo de servicio"}</ListItem.Title>
            </ListItem.Content>
            <Text>{categoria}</Text>
          </ListItem>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{"Estado"}</ListItem.Title>
            </ListItem.Content>
            <Text>{estado}</Text>
          </ListItem>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{"Fecha"}</ListItem.Title>
            </ListItem.Content>
            <Text>{date}</Text>
          </ListItem>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{"Hora"}</ListItem.Title>
            </ListItem.Content>
            <Text>{time}</Text>
          </ListItem>
          <ListItem
            containerStyle={{
              backgroundColor: primary,
              borderBottomColor: dark ? "grey" : secondary,
              borderBottomWidth: 1,
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{"Monto"}</ListItem.Title>
            </ListItem.Content>
            <Text>{`$ ${formatNumber(monto)}`}</Text>
          </ListItem>
        </ScrollView>
      </View>
    );
  }
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

{
  /*  <ScrollView>
              <ListItem
                containerStyle={{
                  backgroundColor: primary,
                  borderBottomColor: dark ? "grey" : secondary,
                  borderBottomWidth: 1,
                }}
              >
              <ListItem.Content>
                  <ListItem.Title>{"Operacion"}</ListItem.Title>
                </ListItem.Content>
                <Text>{oparation}</Text>
              </ListItem>
              <ListItem
                containerStyle={{
                  backgroundColor: primary,
                  borderBottomColor: dark ? "grey" : secondary,
                  borderBottomWidth: 1,
                }}
              >
                <ListItem.Content>
                  <ListItem.Title>{"Estado"}</ListItem.Title>
                </ListItem.Content>
                <Text>{estado}</Text>
              </ListItem>
              <ListItem
                containerStyle={{
                  backgroundColor: primary,
                  borderBottomColor: dark ? "grey" : secondary,
                  borderBottomWidth: 1,
                }}
              >
                <ListItem.Content>
                  <ListItem.Title>{"Motivo"}</ListItem.Title>
                </ListItem.Content>
                <Text>{motivo}</Text>
              </ListItem>
              <ListItem
                containerStyle={{
                  backgroundColor: primary,
                  borderBottomColor: dark ? "grey" : secondary,
                  borderBottomWidth: 1,
                }}
              >
                <ListItem.Content>
                  <ListItem.Title>{"Fecha"}</ListItem.Title>
                </ListItem.Content>
                <Text>{date}</Text>
              </ListItem>
              <ListItem
                containerStyle={{
                  backgroundColor: primary,
                  borderBottomColor: dark ? "grey" : secondary,
                  borderBottomWidth: 1,
                }}
              >
                <ListItem.Content>
                  <ListItem.Title>{"Hora"}</ListItem.Title>
                </ListItem.Content>
                <Text>{time}</Text>
              </ListItem>
            </ScrollView> */
}
