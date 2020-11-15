/* =============================== IMPORTATIONS ============================== */
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Alert, Modal } from "react-native";
import { ListItem, Avatar, Icon, Button } from "react-native-elements";
import { estilos, styles } from "./estilosTarjetas";
import { darkBlue, orange, grey, white } from "../../Global-Styles/colors";
import { getCards } from "../../Redux/CardActions";
import { CardView } from "react-native-credit-card-input";

/* =============================== STATES ============================== */
const Tarjetas = (props) => {
  const [cards, setCards] = useState([]);
  const [questionModal, setQuestionModal] = useState(false);
  const [deletedModal, setDeletedModal] = useState(false);
  let emptyMessage = "";
  /* =============================== FUNTIONS ============================== */

  let func = async () => {
    let response = await getCards();
    setTimeout(() => {
      if (response) {
        setCards(response);
      } else {
        emptyMessage = "No tenes tarjetas añadidas aun.";
      }
    }, 0);
  };

  useEffect(() => {
    func();
  }, []);

  const onDelete = (id) => {
    setQuestionModal(!questionModal);
    setDeletedModal(!deletedModal);
    //call delete function
  };
  const toggleDModal = () => {
    setDeletedModal(!deletedModal);
    props.navigation.navigate("Tarjetas");
  };

  /* =============================== RENDERING =============================== */
  return (
    <View style={styles.container}>
      <ScrollView>
        {cards && cards ? (
          cards.map((card, index) => {
            console.log("index", index, card.id);
            return (
              <ListItem
                key={index}
                topDivider
                bottomDivider
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <CardView
                  name={card.name}
                  focused="number"
                  brand={card.type}
                  number={card.number}
                  expiry={card.expiry}
                  scale={0.8}
                />
                <Button
                  buttonStyle={estilos.delete}
                  onPress={() => setQuestionModal(!questionModal)}
                  title="X"
                  iconRight={true}
                />
                <View>
                  <Modal visible={questionModal}>
                    <Text style={[styles.title, { marginVertical: 30 }]}>
                      ¿Estas seguro que quieres eliminar esta tarjeta?
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        marginVertical: 15,
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Button
                        onPress={() => setQuestionModal(!questionModal)}
                        title="NO"
                        buttonStyle={[
                          styles.orangeButton,
                          { paddingHorizontal: 35 },
                        ]}
                      />
                      <View style={styles.separator}></View>
                      <Button
                        onPress={() => onDelete(card.id)}
                        buttonStyle={[
                          styles.darkBlueButton,
                          { paddingHorizontal: 35 },
                        ]}
                        title="SI"
                      />
                    </View>
                  </Modal>
                  <Modal visible={deletedModal}>
                    <Text style={[styles.title, { marginVertical: 30 }]}>
                      Su tarjeta ha sido eliminada correctamente!
                    </Text>
                    <Icon
                      name="check"
                      type="fontisto"
                      color="green"
                      size={60}
                    />
                    <Button
                      onPress={() => toggleDModal()}
                      buttonStyle={[
                        styles.darkBlueButton,
                        { marginVertical: 30 },
                      ]}
                      title="OK"
                    />
                  </Modal>
                </View>
              </ListItem>
            );
          })
        ) : (
          <Text>{emptyMessage}</Text>
        )}
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 15,
          justifyContent: "space-evenly",
        }}
      >
        <Button
          onPress={() => props.navigation.navigate("AddTarjeta")}
          title="Añadir Tarjeta"
          buttonStyle={[styles.orangeButton]}
        />
        <View style={styles.separator}></View>
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
