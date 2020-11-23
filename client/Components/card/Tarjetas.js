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
import { Icon, Button } from "react-native-elements";
import { styles } from "./estilosTarjetas";
import { getCards, deleteCard } from "../../Redux/CardActions";
import { CardView } from "react-native-credit-card-input";
import { darkBlue } from "../../Global-Styles/colors";
import { LogBox } from "react-native";

/* =============================== STATES ============================== */
const Tarjetas = (props) => {
  // LogBox.ignoreAllLogs();
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
    console.log("RESPONSE", response);
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
    <ScrollView style={styles.container}>
      <View style={[styles.rowButtons]}>
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
    </ScrollView>
  );
};
export default Tarjetas;
