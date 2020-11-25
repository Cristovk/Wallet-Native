/* =============================== IMPORTATIONS ============================== */
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Modal,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useSelector } from "react-redux";
import { Icon, Button } from "react-native-elements";
import { styles, estilos } from "./estilosTarjetas";
import { getCards, deleteCard } from "../../Redux/CardActions";
import { CardView } from "react-native-credit-card-input";
import { darkBlue } from "../../Global-Styles/colors";
import { LogBox } from "react-native";

/* =============================== STATES ============================== */
const Tarjetas = (props) => {
  LogBox.ignoreAllLogs();
  const [cards, setCards] = useState([]);
  const [questionModal, setQuestionModal] = useState(false);
  const [deletedModal, setDeletedModal] = useState(false);
  const [id, setId] = useState("");
  const [state, setState] = useState({ render: 0 });
  let response = [];
  const {primary,secondary,text,dark,bg} = useSelector(store => store.color)
  /* ============================ FUNTIONS ============================ */
  const onDelete = () => {
    setQuestionModal(!questionModal);
    setDeletedModal(!deletedModal);
    deleteCard(id);
  };
  let func = async () => {
    response = await getCards();
    response.length ? setCards(response) : setCards([null]);
  };
  const toggleDModal = () => {
    setDeletedModal(!deletedModal);
    props.navigation.navigate("Tarjetas");
  };
  useEffect(() => {
    func();
  }, [deletedModal, state]);
  /* ============================ RENDERING ============================= */
  return (
    <View style={{backgroundColor: bg, height:"100%"}}>
        <View style={{height: 50, borderRadius: 10,backgroundColor: primary, marginBottom: -15,}}></View>
    <ScrollView style={[styles.container, {backgroundColor: primary}]}>
      <View style={[styles.rowButtons]}>
        <Button
          onPress={() =>
            props.navigation.navigate("AddTarjeta", {
              renderState: () =>
                setState(({ render }) => ({ render: render + 1 })),
            })
          }
          title="Añadir Tarjeta"
          buttonStyle={[styles.blueButton]}
        />
        <Button
          onPress={() => props.navigation.goBack()}
          title="Go back home"
          buttonStyle={[styles.grayButton, {backgroundColor:!dark ? secondary : bg}]}
        />
      </View>
      {cards.length === 0 ? (
        <ScrollView>
          <View style={{ marginTop: 100 }}>
            <ActivityIndicator size="large" color={darkBlue} />
          </View>
        </ScrollView>
      ) : cards[0] == null ? (
        <ScrollView>
          <Text
            style={{
              textAlign: "center",
              textAlignVertical: "auto",
              fontSize: 24,
              padding: 25,
            }}
          >
            {"Aun no agregaste ninguna tarjeta"}
          </Text>
        </ScrollView>
      ) : (
        <FlatList
          keyExtractor={(card) => card.id}
          data={cards}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity>
                  <CardView
                    name={item.name}
                    focused="number"
                    brand={item.type}
                    number={item.number}
                    expiry={item.expiry}
                    scale={0.8}
                  />
                </TouchableOpacity>
                <Button
                  buttonStyle={{
                    backgroundColor: darkBlue,
                    color: darkBlue,
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    borderRadius: 5,
                    fontWeight: "bold",
                  }}
                  onPress={() => {
                    setId(item.id);
                    setQuestionModal(!questionModal);
                  }}
                  title="X"
                  iconRight={true}
                />
              </View>
            );
          }}
        ></FlatList>
      )}
      <View style={{height:"100%", flex: 1, justifyContent:"center", alignItems: "center"}}>
        <Modal
          visible={questionModal}
          animationType="fade"
          transparent={true}
          ModalComponent={Modal}
        > 
         <View style={{flex: 1, justifyContent:"center", alignItems: "center",marginTop:30}}>
            <View style={[estilos.modalView, {backgroundColor: primary}]}>
          <Text style={[styles.title, { marginVertical: 30 }]}>
            ¿Estas seguro que quieres eliminar esta tarjeta?
          </Text>
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Button
              onPress={() => setQuestionModal(!questionModal)}
              title="NO"
              buttonStyle={styles.blueButton}
            />
            <View style={styles.separator}></View>
            <Button
              onPress={() => onDelete()}
              buttonStyle={styles.blueButton}
              title="SI"
            />
          </View>
          </View>
          </View>
        </Modal>
        <Modal
          visible={deletedModal}
          transparent={true}
          animationType="fade"
          ModalComponent={Modal}
        >
           <View style={{flex: 1, justifyContent:"center", alignItems: "center",marginTop:30}}>
            <View style={[estilos.modalView, {backgroundColor: primary}]}>
          <Text style={[styles.title, { marginVertical: 30 }]}>
            Su tarjeta ha sido eliminada correctamente!
          </Text>
          <Icon name="check" type="fontisto" color="green" size={60} />
          <Button
            onPress={() => toggleDModal()}
            buttonStyle={[styles.blueButton, { marginVertical: 30 }]}
            title="OK"
          />
          </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
    </View>
  );
};
export default Tarjetas;
