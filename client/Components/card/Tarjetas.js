/* =============================== IMPORTATIONS ============================== */
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { ListItem, Avatar, Icon } from "react-native-elements";
import { styles } from "./estilosTarjetas";
import { darkBlue, orange, grey, white } from "../../Global-Styles/colors";
import { getCards } from "../../Redux/CardActions";
import { CardView } from "react-native-credit-card-input";

/* =============================== STATES ============================== */
const Tarjetas = (props) => {
  const [cards, setCards] = useState([]);
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
    }, 100);
    console.log("Log del response", response);
  };

  useEffect(() => {
    func();
  }, []);

  /* =============================== RENDERING =============================== */
  return (
    <View style={styles.container}>
      <ScrollView>
        {cards && cards ? (
          cards.map((card, index) => (
            <ListItem
              key={index}
              topDivider
              bottomDivider
              style={{ alignItems: "center" }}
            >
              <CardView
                name={card.name}
                focused="number"
                brand={card.type}
                number={card.number}
                expiry={card.expiry}
              />
            </ListItem>
          ))
        ) : (
          <Text>{emptyMessage}</Text>
        )}
      </ScrollView>
      <View style={styles.button}>
        <Button
          onPress={() => props.navigation.navigate("AddTarjeta")}
          title="Añadir Tarjeta"
          color={orange}
        />
        <View style={styles.separator}></View>
        <Button
          onPress={() => props.navigation.goBack()}
          title="Go back home"
          color={darkBlue}
        />
      </View>
    </View>
  );
};
export default Tarjetas;
