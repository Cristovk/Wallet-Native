import React from "react";
import { View, Text } from "react-native";
import { ListItem, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useSelector } from "react-redux";
import { generateInvoice, detalle} from "./utils";
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
  const { primary, secondary, bg, text, dark } = useSelector(
    (store) => store.color
  );
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
    desde,
    card
  } = route.params;
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
    "recarga con tarjeta": "credit-card",
  };
  
  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
 

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
                <Text style={{ color: primary, fontSize: 20 }}>{
                operacion === "transferencia" ?(categoria === "Tentrante" ? `${sender} te envió` : `Le enviaste a ${receiver}`):
                operacion === "recarga" ?(categoria === "recarga" ? `Recargaste en ${empresa}` : `Recargaste usando ${empresa}`):
                operacion === "servicio" ? (`Pagaste a ${empresa}`) :
                operacion ==="compra" ? (`Compraste en ${empresa}`): 
                `Exploto todo :D`
               }</Text>
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
         {detalle(fecha,monto,tipo,hacia,motivo,estado,operacion,empresa,categoria,sender,receiver,desde, card)}
                           
          <View
            style={[{ top: heightPercentageToDP("55%") }, styleBoton.container]}
          >
            <TouchableOpacity
              style={[{ backgroundColor: secondary }, styleBoton.boton]}
              onPress={() => generateInvoice( )}
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
