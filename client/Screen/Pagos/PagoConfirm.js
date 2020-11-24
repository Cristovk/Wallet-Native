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
import { widthPercentageToDP, heightPercentageToDP } from "react-native-responsive-screen"

const PagoConfirm = ({ navigation, route }) => {

  const { primary, secondary, bg, text, dark } = useSelector(store => store.color)

  return (
    <ScrollView style={{ backgroundColor: bg }}>
      <View style={style.tituloContainer} >
        <Icon
          name="arrow-left"
          type="fontisto"
          size={30}
          color={primary}
          onPress={() => navigation.navigate("Home")}
        />
        <Text style={[{ color: primary }, style.titulo]}>Confirmación</Text>
      </View>
      <View style={{ height: heightPercentageToDP("100%"), backgroundColor: primary, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
        <View style={style.tituloContainer}>
          <Text style={style.titulo}>Pago Confirmado</Text>
        </View>
        <View style={style.listaContenedor}>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content>
              <ListItem.Title>Pagado a:</ListItem.Title>
              <ListItem.Subtitle>{route.params.title}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content>
              <ListItem.Title>Monto de: </ListItem.Title>
              <ListItem.Subtitle>{route.params.amount} </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content>
              <ListItem.Title>Categoría: </ListItem.Title>
              <ListItem.Subtitle>{route.params.categoria}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content>
              <ListItem.Title>Operación de tipo: </ListItem.Title>
              <ListItem.Subtitle>{route.params.operacion}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </View>
        <View style={{ marginBottom: 70 }}>
          <Icon name="check" type="fontisto" color="green" size={70} />
        </View>
        <View style={styles.botonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.boton}
          >
            <Text style={styles.textBoton}>Volver al home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default PagoConfirm;
