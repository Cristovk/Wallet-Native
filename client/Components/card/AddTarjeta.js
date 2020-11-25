/* ====================== IMPORTATIONS ========================= */
import React, { useState } from "react";
import { View, ScrollView, Alert, Text, Modal } from "react-native";
import { Button, Icon } from "react-native-elements";
import { styles, estilos } from "./estilosTarjetas";
import { saveTarjetas } from "../../Redux/CardActions";
import { CreditCardInput } from "react-native-credit-card-input";
import { useSelector } from "react-redux";
import style from "../../Screen/Home/homeStyles";

/* ========================= STATES ============================ */
const AddCard = (props) => {
  const [state, setState] = useState({
    data: {},
    validCard: false,
    cards: [],
  });
  const [visible, setVisible] = useState(false);
  const {primary,secondary,text,dark,bg} = useSelector(store => store.color)
  /* ======================= FUNCTIONS ========================== */

  const onChange = (formData) => {
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
    props.navigation.navigate("Tarjetas")
    props.navigation.navigate("AddTarjeta");
  };
  const asociarTarjeta = () => {
    if (state.validCard) {
      saveTarjetas(state.data);
      props.route.params.renderState();
      toggleOverlay();
    } else {
      Alert.alert(JSON.stringify("Debe llenar todos los campos"));
    }
  };
  /* ====================== RENDERING ========================== */
  return (
    <View style={{backgroundColor: bg, height:"100%"}}>
    <View style={{height: 50, borderRadius: 10,backgroundColor: primary, marginBottom: -15,}}></View>
    <ScrollView style={{backgroundColor: primary}}>
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
        <View style={{marginTop: 20}}>
          <Button
            onPress={() => asociarTarjeta()}
            title="Asociar Tarjeta"
            buttonStyle={[styles.blueButton]}
          />
        </View>
        <View style={{height:"100%", flex: 1, justifyContent:"center", alignItems: "center", backgroundColor: bg}}>
          <Modal visible={visible} transparent={true} animationType="slide">
            <View style={{flex: 1, justifyContent:"center", alignItems: "center",marginTop:30}}>
            <View style={[estilos.modalView, {backgroundColor: primary}]}>
            {/* <Text style={[styles.title, { marginTop: 30 }]}>MUY BIEN!</Text> */}
            <Text style={styles.h3}>
              Su tarjeta ha sido asociada correctamente!
            </Text>
            <Icon name="check" type="fontisto" color="green" size={60} />
            <Text style={styles.h3}>¿Que desea hacer a continuación?</Text>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
              <Button
                onPress={continuar}
                title="Continuar"
                buttonStyle={[styles.blueButton]}
              />
              <View style={styles.separator}></View>
              <Button
                onPress={addAgain}
                buttonStyle={[styles.blueButton]}
                title="Añadir otra"
              />
              </View>
            </View>
            </View>
          </Modal>
        </View>
      </View>
    </ScrollView>
    </View>
  );
};

export default AddCard;
