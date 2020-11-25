import React from "react";
import {
  View,
  Text,
  ScrollView,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import style from "../Transferencias/Check_Styles";
import { Icon, ListItem } from "react-native-elements";
import styles from "../../Views/Login/PinStyle";
import { useSelector } from "react-redux";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";

const PagoConfirm = ({ navigation, route }) => {
  const { primary, secondary, bg, text, dark } = useSelector(
    (store) => store.color
  );

  return (
    <ScrollView style={{ backgroundColor: bg }}>
      <View
        style={{
          height: heightPercentageToDP("100%"),
          backgroundColor: primary,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <View style={style.tituloContainer}>
          <Text style={style.titulo}>Pago Confirmado</Text>
        </View>
        <View style={style.listaContenedor}>
          <ListItem
            containerStyle={{ backgroundColor: primary }}
            style={[
              { borderBottomColor: dark ? "grey" : secondary },
              style.lista,
            ]}
          >
            <ListItem.Chevron color={dark ? bg : secondary} />
            <ListItem.Content>
              <ListItem.Title>Pagado a:</ListItem.Title>
              <ListItem.Subtitle>{route.params.title}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem
            containerStyle={{ backgroundColor: primary }}
            style={[
              { borderBottomColor: dark ? "grey" : secondary },
              style.lista,
            ]}
          >
            <ListItem.Chevron color={dark ? bg : secondary} />
            <ListItem.Content>
              <ListItem.Title>Monto de: </ListItem.Title>
              <ListItem.Subtitle>{route.params.amount} </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem
            containerStyle={{ backgroundColor: primary }}
            style={[
              { borderBottomColor: dark ? "grey" : secondary },
              style.lista,
            ]}
          >
            <ListItem.Chevron color={dark ? bg : secondary} />
            <ListItem.Content>
              <ListItem.Title>Categoría: </ListItem.Title>
              <ListItem.Subtitle>{route.params.categoria}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem
            containerStyle={{ backgroundColor: primary }}
            style={[
              { borderBottomColor: dark ? "grey" : secondary },
              style.lista,
            ]}
          >
            <ListItem.Chevron color={dark ? bg : secondary} />
            <ListItem.Content>
              <ListItem.Title>Operación de tipo: </ListItem.Title>
              <ListItem.Subtitle>{route.params.operacion}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Pagos")}>
          <View style={{ marginBottom: 70 }}>
            <Icon name="check" type="fontisto" color="green" size={70} />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PagoConfirm;
