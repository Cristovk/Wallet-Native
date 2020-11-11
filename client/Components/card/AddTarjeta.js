/* =============================== IMPORTATIONS ============================== */
import React, { useEffect, useState } from "react";
import { View, ScrollView, Button, StyleSheet, Alert } from "react-native";
import { styles } from "./estilosTarjetas";
import { darkBlue, orange, grey, white } from "../../Global-Styles/colors";
import { saveTarjetas } from "./TarjetaAsyncStorage";
import { CreditCardInput } from "react-native-credit-card-input";

/* =============================== STATES ==================================== */
const AddCard = (props) => {
  const [state, setState] = useState({
    data: {},
    validCard: false,
    cards: [],
  });
  /* =============================== FUNCTIONS ================================= */
  const onFocus = (field) => console.log("focus", field);
  const onChange = (formData) => {
    console.log(JSON.stringify(formData, null, " "));
    setState({
      ...state,
      data: formData.values,
      validCard: formData.valid,
    });
  };
  const asociarTarjeta = () => {
    if (state.validCard) {
      state.cards.length > 0
        ? setState({ ...state, cards: [...state.cards, state.data] })
        : setState({ ...state, cards: [state.data] });
      saveTarjetas(state.cards)
        .then((res) => {
          Alert.alert("MUY BIEN", "Su tarjeta ha sido asociada correctamente", [
            { text: "continuar" },
          ]);
          setTimeout(() => {
            console.log("Tarjetas", JSON.parse(res));
          }, 100);
          return res;
        })
        .then((res) => {});
    } else {
      Alert.alert(JSON.stringify("Debe llenar todos los campos"));
    }
  };
  /* =============================== RENDERING ================================ */
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <Text style={styles.title}>Tarjeta QuiqueBank</Text> */}
        <View style={{ flex: 1, alignItems: "center" }}>
          <View style={{ width: "100%", height: "30%", marginTop: 60 }}>
            <CreditCardInput
              autoFocus
              requiresName
              requiresCVC
              cardScale={1.2}
              allowScroll={true}
              labelStyle={estilos.label}
              inputStyle={estilos.input}
              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}
              placeholders={{
                number: "1234 5678 1234 5678",
                name: "NOMBRE COMPLETO",
                expiry: "MM/YY",
                cvc: "CVC",
              }}
              labels={{
                number: "NÚMERO TARJETA",
                expiry: "EXPIRA",
                name: "NOMBRE COMPLETO",
                cvc: "CVC/CCV",
              }}
              onFocus={onFocus}
              onChange={onChange}
            />
          </View>
        </View>
        <ScrollView style={styles.button}>
          <Button
            onPress={() => asociarTarjeta()}
            title="Asociar Tarjeta"
            color={orange}
          />
        </ScrollView>
      </View>
    </ScrollView>
  );
};
const estilos = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 60,
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
});

export default AddCard;
