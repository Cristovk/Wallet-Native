import React from "react";
import { View, Text } from "react-native";
import { ListItem, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { generateInvoice } from "./utils";
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
    desde,
  } = route.params;
  // const Operacion =  operacion[0].toUpperCase() + operacion.substring(1)
  // const Tipo =  tipo[0].toUpperCase() + tipo.substring(1)
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
    recarga: "wallet",
  };
  let date = new Date(fecha).toLocaleDateString();
  let time = new Date(fecha).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return tipo === "Tsaliente" || tipo === "Tentrante" ? (
    <View>
      <View
        style={{
          backgroundColor: "#02072F",
          height: 150,
          alignItems: "center",
        }}
      >
        <View>
          <Icon name={iconList[tipo]} size={50} color="white" />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: "white", fontSize: 20 }}>
            {desde ? `${desde} te envió` : `Le enviaste a ${hacia}`}
          </Text>
        </View>
        <View style={{ marginTop: 5 }}>
          <Text style={{ color: "white", fontSize: 20 }}>{`$ ${monto}`}</Text>
        </View>
      </View>
      <View>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>{"Operacion"}</ListItem.Title>
          </ListItem.Content>
          <Text>{operacion}</Text>
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>{"Estado"}</ListItem.Title>
          </ListItem.Content>
          <Text>{estado}</Text>
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>{"Fecha"}</ListItem.Title>
          </ListItem.Content>
          <Text>{date}</Text>
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>{"Hora"}</ListItem.Title>
          </ListItem.Content>
          <Text>{time}</Text>
        </ListItem>
      </View>
      <View style={{ alignItems: "center" }}>
        <Button
          containerStyle={{ borderRadius: 30, width: "75%", marginTop: "25%" }}
          onPress={() => generateInvoice(title, amount, icon)}
          icon={{
            name: "receipt",
            size: 20,
            color: "white",
          }}
          title="Generar recibo"
        />
      </View>
    </View>
  ) : (
    <View>
      <View
        style={{
          backgroundColor: "#02072F",
          height: 150,
          alignItems: "center",
        }}
      >
        <View>
          <Icon name={iconList[tipo]} size={50} color="white" />
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={{ color: "white", fontSize: 20 }}>{`$${monto}`}</Text>
        </View>
      </View>
      <View>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>{"Operacion"}</ListItem.Title>
          </ListItem.Content>
          <Text>{tipo === "recarga" ? empresa : tipo}</Text>
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>
              {tipo === "recarga" ? "Empresa" : "Categoria"}
            </ListItem.Title>
          </ListItem.Content>
          <Text>{tipo === "recarga" ? empresa : tipo}</Text>
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>{"Estado"}</ListItem.Title>
          </ListItem.Content>
          <Text>{estado}</Text>
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>{"Fecha"}</ListItem.Title>
          </ListItem.Content>
          <Text>{date}</Text>
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>{"Hora"}</ListItem.Title>
          </ListItem.Content>
          <Text>{time}</Text>
        </ListItem>
      </View>
      <View style={{ alignItems: "center" }}>
        <Button
          containerStyle={{ borderRadius: 30, width: "75%", marginTop: "25%" }}
          onPress={() => generateInvoice(title, amount, icon)}
          icon={{
            name: "receipt",
            size: 20,
            color: "white",
          }}
          title="Generar recibo"
        />
      </View>
    </View>
  );
};

export default DetalleDeTransaccion;
