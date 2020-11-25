/* ========================== IMPORTATIONS ========================== */
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
} from "react-native";
import { LogBox } from "react-native";
import { CardView } from "react-native-credit-card-input";
import { getCards } from "../../../Redux/CardActions";
import { useSelector } from "react-redux";
import styleView from "../../../Global-Styles/ViewContainer";
import { Icon, Button } from "react-native-elements";
import { styles as style } from "../../../Components/card/estilosTarjetas";
import { TextInput } from "react-native-paper";
import styles from "../Transferencia/estilosTransferencia";
import Axios from "axios";
import { auth, storage } from "../../../../firebase";

/* ============================ STATES ============================ */
const Tarjeta = (props) => {
  LogBox.ignoreAllLogs();
  const [questionModal, setQuestionModal] = useState(false);
  const [cards, setCards] = useState([]);
  const [monto, setMonto] = useState(0);
  const [pin, setPin] = useState("");
  const [cardNumber, setCardNumber] = useState(0);
  const [cardType, setCardType] = useState("");
  const [loading, setLoading] = useState(false);
  const [charged, setCharged] = useState(false);
  const { primary, secondary, text, bg, dark } = useSelector(
    (store) => store.color
  );
  let response = [];

  /* ========================== FUNTIONS =========================== */
  let func = async () => {
    response = await getCards();
    response.length ? setCards(response) : setCards([null]);
  };
  const getPin = async () => {
    const ref = await storage
      .collection("Users")
      .doc(auth.currentUser.uid)
      .get();
    const pin = ref.data().pin;
    setPin(pin);
  };
  useEffect(() => {
    func();
    getPin();
  }, []);

  const sendData = () => {
    setLoading(true);
    Axios.post(
      "https://us-central1-henrybankfire.cloudfunctions.net/recargaV2",
      {
        pin: pin,
        amount: monto,
        empresa: cardType,
      }
    )
      .then(() => {
        setLoading(false);
        setCharged(!charged);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };
  /* ========================== RENDERING =========================== */
  return (
    <View style={{ backgroundColor: primary }}>
      <Text
        style={[
          { ...styles.titulotransferencia, color: dark ? bg : text },
          { textAlign: "center", fontSize: 24 },
        ]}
      >
        Elija una tarjeta para recargar
      </Text>
      <View>
        {cards.length === 0 ? (
          <View style={{ marginTop: 30 }}>
            <ActivityIndicator size="large" color={bg} />
          </View>
        ) : cards[0] == null ? (
          <View>
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
          </View>
        ) : (
          <FlatList
            horizontal={true}
            keyExtractor={(card) => card.id}
            data={cards}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={{
                    marginVertical: 15,
                  }}
                  onPress={() => {
                    setCardNumber(item.number);
                    setCardType(item.type);
                    setQuestionModal(!questionModal);
                  }}
                >
                  <CardView
                    name={item.name}
                    focused="number"
                    brand={item.type}
                    number={item.number}
                    expiry={item.expiry}
                    scale={0.9}
                  />
                </TouchableOpacity>
              );
            }}
          ></FlatList>
        )}
      </View>
      <View>
        {charged ? (
          <Modal
            visible={questionModal}
            animationType="fade"
            ModalComponent={Modal}
          >
            <Text
              style={{ marginVertical: 150, fontSize: 60, textAlign: "center" }}
            >
              Recarga exitosa!
            </Text>
            <TouchableOpacity
              onPress={() => {
                setQuestionModal(!questionModal);
                setCharged(!charged);
              }}
            >
              <Icon name="check" type="fontisto" color="green" size={100} />
            </TouchableOpacity>
          </Modal>
        ) : loading === false ? (
          <Modal
            visible={questionModal}
            animationType="fade"
            ModalComponent={Modal}
          >
            <Text style={[style.title, { marginVertical: 30 }]}>
              {`El monto a recargar será debitado de su tarjeta ${
                cardType
                  ? cardType[0].toUpperCase() + cardType.substring(1)
                  : null
              } número ${cardNumber}`}
            </Text>
            <TextInput
              textAlign="center"
              placeholder="$ 1,000,000"
              style={{ marginHorizontal: 35 }}
              onChangeText={($) => setMonto($)}
              keyboardType="numeric"
            />
            <View style={style.rowButtons}>
              <Button
                onPress={() => sendData()}
                title="Recargar"
                disabled={monto === 0}
                buttonStyle={style.orangeButton}
              />
              <Button
                onPress={() => setQuestionModal(!questionModal)}
                title="Volver"
                buttonStyle={style.darkBlueButton}
              />
            </View>
          </Modal>
        ) : loading ? (
          <Modal
            visible={questionModal}
            animationType="fade"
            ModalComponent={Modal}
          >
            <Text style={[style.title, { marginVertical: 30 }]}>
              {`El monto a recargar será debitado de su tarjeta ${
                cardType
                  ? cardType[0].toUpperCase() + cardType.substring(1)
                  : null
              } número ${cardNumber}`}
            </Text>
            <TextInput
              textAlign="center"
              placeholder="$ 1,000,000"
              style={{ marginHorizontal: 35 }}
              onChangeText={($) => setMonto($)}
              keyboardType="numeric"
            />
            <View style={{ marginVertical: 30 }}>
              <ActivityIndicator size="large" color={bg} />
            </View>
          </Modal>
        ) : null}
      </View>
    </View>
  );
};

export default Tarjeta;
