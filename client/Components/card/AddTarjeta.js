/* =============================== IMPORTATIONS ============================== */
import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Alert, Text, Modal } from "react-native";
import { Button, Icon } from "react-native-elements";
import { styles, estilos } from "./estilosTarjetas";
import { saveTarjetas } from "../../Redux/CardActions";
import { CreditCardInput } from "react-native-credit-card-input";
import { useDispatch } from "react-redux";

/* =============================== STATES ==================================== */
const AddCard = (props) => {
  const [state, setState] = useState({
    data: {},
    validCard: false,
    cards: [],
  });
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  /* =============================== FUNCTIONS ================================= */

  const onChange = (formData) => {
    console.log(JSON.stringify(formData, null, " "));
    setState({
      ...state,
      data: formData.values,
      validCard: formData.valid,
    });
  };
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const continuar = () => {
    toggleOverlay();
    props.navigation.navigate("Tarjetas");
  };
  const addAgain = () => {
    toggleOverlay();
    props.navigation.navigate("AddTarjeta");
  };
  const asociarTarjeta = () => {
    if (state.validCard) {
      // state.cards.length > 0
      //   ? setState({ ...state, cards: [...state.cards, state.data] })
      //   : setState({ ...state, cards: [state.data] });
      // console.log("state.cards", state.cards);
      dispatch(saveTarjetas(state.data));
      toggleOverlay();
    } else {
      Alert.alert(JSON.stringify("Debe llenar todos los campos"));
    }
  };
  /* =============================== RENDERING ================================ */
  return (
    <ScrollView>
      <View style={styles.container}>
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
              onChange={onChange}
            />
          </View>
        </View>
        <View>
          <Button
            onPress={() => asociarTarjeta()}
            title="Asociar Tarjeta"
            buttonStyle={styles.button}
          />
        </View>
        <View>
          <Modal visible={visible}>
            <Text style={[styles.title, { marginTop: 30 }]}>MUY BIEN!</Text>
            <Text style={styles.h3}>
              Su tarjeta ha sido asociada correctamente!
            </Text>
            <Icon name="check" type="fontisto" color="green" size={60} />
            <Text style={styles.h3}>¿Que desea hacer a continuación?</Text>
            <View>
              <Button
                onPress={continuar}
                title="Continuar"
                buttonStyle={[styles.orangeButton]}
              />
              <View style={styles.separator}></View>
              <Button
                onPress={addAgain}
                buttonStyle={[styles.darkBlueButton]}
                title="¿Añadis otra?"
              />
            </View>
          </Modal>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddCard;
