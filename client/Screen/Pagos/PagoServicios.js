import React, { useState } from "react";
import { View, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import { Icon, Text, ListItem } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import style from "./PagoServicioEstilo";
import { pagoServicio } from "../../Redux/movements";
import { auth } from "../../../firebase";
import { useSelector } from "react-redux";
import styleBoton from "../../Global-Styles/BotonGrande";
import viewStyle from "../../Global-Styles/ViewContainer";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";

const PagoServicios = ({ navigation, route }) => {
  const { title, servicio } = route.params;
  const [loading, setLoading] = useState(false);
  const [precio, setPrecio] = useState("");
  const [errormoney, setErrorMoney] = useState(false);
  const { primary, secondary, text, bg, dark } = useSelector(
    (store) => store.color
  );
  const [err, setErr] = useState(false);
  const movements = useSelector((store) => store.movementsReducer);
  const handleSubmit = async () => {
    if (!precio) {
      setErr(true);
    } else {
      if (parseInt(precio) > parseInt(movements.saldo)) {
        setErrorMoney(true);
      } else {
        setLoading(!loading);
        const id = await auth.currentUser.uid;
        const data = {
          userId: id,
          amount: precio,
          categoria: servicio,
          empresa: title,
          operacion: "servicio",
        };
        pagoServicio(data).then((resp) => {
          setLoading(!loading);
          navigation.navigate("PagoConfirm", {
            title: title,
            amount: precio,
            categoria: servicio,
            operacion: "servicio",
            loading: loading,
          });
        });
      }
    }
  };

  return !loading ? (
    <View style={{ backgroundColor: bg }}>
      <View
        style={[
          { backgroundColor: primary, marginTop: 25 },
          viewStyle.container,
        ]}
      >
        <View style={{ marginTop: 25 }}>
          <ListItem
            containerStyle={{ backgroundColor: primary }}
            style={[
              { borderBottomColor: dark ? "grey" : secondary },
              style.lista,
            ]}
          >
            <ListItem.Chevron color={dark ? bg : secondary} />
            <ListItem.Content style={style.listaContenedor}>
              <ListItem.Title>Servicio: </ListItem.Title>
              <View
                style={{
                  width: widthPercentageToDP("25%"),
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Text>{servicio}</Text>
              </View>
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
            <ListItem.Content style={style.listaContenedor}>
              <ListItem.Title>Empresa:</ListItem.Title>
              <View
                style={{
                  width: widthPercentageToDP("25%"),
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Text>{title}</Text>
              </View>
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
            <ListItem.Content style={style.listaContenedor}>
              <ListItem.Title>Total a Pagar:</ListItem.Title>
              <View
                style={{
                  width: widthPercentageToDP("25%"),
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <TextInput
                  placeholder="Monto"
                  keyboardType="numeric"
                  value={precio.amount}
                  onChangeText={(data) => {
                    setPrecio(data), setErrorMoney(false), setErr(false);
                  }}
                  style={{ width: 80 }}
                />
              </View>
            </ListItem.Content>
          </ListItem>
        </View>
        {err ? (
          <View>
            <Text style={{ color: "red" }}>Ingresa el monto a pagar</Text>
          </View>
        ) : errormoney ? (
          <View>
            <Text style={{ color: "red" }}>
              No tienes suficiente saldo para completar la transacción
            </Text>
          </View>
        ) : null}
        <View
          style={[
            { top: heightPercentageToDP("55%"), position: "absolute" },
            styleBoton.container,
          ]}
        >
          <TouchableOpacity
            style={[{ backgroundColor: secondary }, styleBoton.boton]}
            onPress={handleSubmit}
          >
            <Text style={[{ color: text }, styleBoton.texto]}>
              Pagar Servicio
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ) : (
    <View style={{ backgroundColor: bg }}>
      <View
        style={[
          { backgroundColor: primary, marginTop: 25 },
          viewStyle.container,
        ]}
      >
        <View style={{ marginTop: 25 }}>
          <ListItem
            containerStyle={{ backgroundColor: primary }}
            style={[
              { borderBottomColor: dark ? "grey" : secondary },
              style.lista,
            ]}
          >
            <ListItem.Chevron color={dark ? bg : secondary} />
            <ListItem.Content style={style.listaContenedor}>
              <ListItem.Title>Servicio: </ListItem.Title>
              <View
                style={{
                  width: widthPercentageToDP("25%"),
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Text>{servicio}</Text>
              </View>
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
            <ListItem.Content style={style.listaContenedor}>
              <ListItem.Title>Empresa:</ListItem.Title>
              <View
                style={{
                  width: widthPercentageToDP("25%"),
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <Text>{title}</Text>
              </View>
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
            <ListItem.Content style={style.listaContenedor}>
              <ListItem.Title>Total a Pagar:</ListItem.Title>
              <View
                style={{
                  width: widthPercentageToDP("25%"),
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <TextInput
                  placeholder="Monto"
                  value={precio.amount}
                  onChangeText={(data) => setPrecio(data)}
                  style={{ width: 80 }}
                />
              </View>
            </ListItem.Content>
          </ListItem>
        </View>
        <View style={style.activityIndicator}>
          <ActivityIndicator size="large" color={dark ? secondary : bg} />
        </View>
      </View>
    </View>
  );
};

export default PagoServicios;
