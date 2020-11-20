/* =============================== IMPORTATIONS ============================== */
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Alert,
  Modal,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ListItem, Icon, Button } from "react-native-elements";
import { estilos, styles } from "./estilosTarjetas";
import { getCards, deleteCard } from "../../Redux/CardActions";
import { CardView } from "react-native-credit-card-input";
// import {  } from "react-native-gesture-handler";
import { darkBlue, orange, grey, white } from "../../Global-Styles/colors";

/* =============================== STATES ============================== */
const Tarjetas = (props) => {
  const [cards, setCards] = useState([]);
  const [questionModal, setQuestionModal] = useState(false);
  const [deletedModal, setDeletedModal] = useState(false);
  const [id, setId] = useState("");
  const [state, setState] = useState({ render: 0 });
  let response = [];
  /* ============================ FUNTIONS ============================ */
  const onDelete = () => {
    setQuestionModal(!questionModal);
    setDeletedModal(!deletedModal);
    deleteCard(id);
  };
  let func = async () => {
    response = await getCards();
    setCards(response);
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
    <View style={styles.container}>
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
      <View>
        <Modal
          visible={questionModal}
          animationType="fade"
          ModalComponent={Modal}
        >
          <Text style={[styles.title, { marginVertical: 30 }]}>
            ¿Estas seguro que quieres eliminar esta tarjeta?
          </Text>
          <View style={styles.rowButtons}>
            <Button
              onPress={() => setQuestionModal(!questionModal)}
              title="NO"
              buttonStyle={styles.orangeButton}
            />
            <View style={styles.separator}></View>
            <Button
              onPress={() => onDelete()}
              buttonStyle={styles.darkBlueButton}
              title="SI"
            />
          </View>
        </Modal>
        <Modal
          visible={deletedModal}
          animationType="fade"
          ModalComponent={Modal}
        >
          <Text style={[styles.title, { marginVertical: 30 }]}>
            Su tarjeta ha sido eliminada correctamente!
          </Text>
          <Icon name="check" type="fontisto" color="green" size={60} />
          <Button
            onPress={() => toggleDModal()}
            buttonStyle={[styles.darkBlueButton, { marginVertical: 30 }]}
            title="OK"
          />
        </Modal>
      </View>
      <View style={styles.rowButtons}>
        <Button
          onPress={() =>
            props.navigation.navigate("AddTarjeta", {
              renderState: () =>
                setState(({ render }) => ({ render: render + 1 })),
            })
          }
          title="Añadir Tarjeta"
          buttonStyle={[styles.orangeButton]}
        />
        <Button
          onPress={() => props.navigation.goBack()}
          title="Go back home"
          buttonStyle={[styles.darkBlueButton]}
        />
      </View>
    </View>
  );
};
export default Tarjetas;
