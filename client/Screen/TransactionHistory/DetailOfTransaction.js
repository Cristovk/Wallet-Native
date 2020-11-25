import React from "react";
import { View, Text } from "react-native";
import { ListItem, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useSelector } from "react-redux";
import { generateInvoice } from "./utils";
import styleView from "../../Global-Styles/ViewContainer";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native-gesture-handler";
import { TouchableOpacity } from "react-native";
import styleBoton from "../../Global-Styles/BotonGrande";
import { color } from "react-native-reanimated";

const DetalleDeTransaccion = ({ route, navigation }) => {
  const {
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
  } = route.params;
  const oparation = operacion
    ? operacion[0].toUpperCase() + operacion.substring(1)
    : null;
  const type = tipo ? tipo[0].toUpperCase() + tipo.substring(1) : null;
  const iconList = {
    panaderia: "cookie",
    almacen: "shopping-basket",
    videojuegos: "gamepad",
    Entretenimiento: "play-circle",
    transporte: "bus-alt",
    gasolinera: "gas-pump",
    jet: "fighter-jet",
    farmacia: "first-aid",
    Servicio: "file-invoice-dollar",
    Tsaliente: "arrow-circle-up",
    Tentrante: "arrow-circle-down",
    recarga: "wallet",
    Agua: "tint",
    Telefono: "phone",
    Gas: "burn",
    Electricidad: "bolt",
    Internet: "wifi",
  };
  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  let date = new Date(fecha).toLocaleDateString();
  let time = new Date(fecha).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const { primary, secondary, bg, text, dark } = useSelector(
    (store) => store.color
  );

  return(
    <View style={{ backgroundColor: bg }}>
      <View>
        <View
          style={{
            backgroundColor: bg,
            height: 150,
            alignItems: "center",
          }}
        >
          <View>
            <Icon name={iconList[categoria]} size={50} color={primary} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: primary, fontSize: 20 }}>
              {sender ? `${sender} te envió` : `Le enviaste a ${receiver}`}
            </Text>
          </View>
          <View style={{ marginTop: 5 }}>
            <Text style={{ color: primary, fontSize: 20 }}>{`$ ${formatNumber(
              monto
            )}`}</Text>
          </View>
        </View>
        <View
          style={{
            height: heightPercentageToDP("100%"),
            backgroundColor: primary,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            marginTop: 25,
          }}
        >
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
            </ScrollView>
          </View>
          <View
            style={[{ top: heightPercentageToDP("55%") }, styleBoton.container]}
          >
            <TouchableOpacity
              style={[{ backgroundColor: secondary }, styleBoton.boton]}
              onPress={() => generateInvoice( fecha,
                monto,
                tipo,
                hacia,
                motivo,
                estado,
                operacion,
                empresa,
                categoria,
                sender,
                receiver,)}
              icon={{
                name: "receipt",
                size: 20,
                color: text,
              }}
            >
              <Text style={[{ color: text }, styleBoton.texto]}>
                Compartir Recibo
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  ) 
};

export default DetalleDeTransaccion;