/* ====================== IMPORTATIONS ========================= */
import React, { useState, useEffect } from "react";
import {
  LogBox,
  View,
  Text,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import style from "./transferEstilos";
import styles from "../Home/homeStyles";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useSelector, useDispatch } from "react-redux";
import { ListItem, Button } from "react-native-elements";
import { auth, storage } from "../../../firebase";
import { saveTransfers } from "../../Redux/movements";
import { darkBlue, white } from "../../Global-Styles/colors";
/* ========================= STATES ============================ */
const Transfers = ({ navigation }) => {
  LogBox.ignoreAllLogs();
  const [transfers, setTransfers] = useState([]);
  const iconList = {
    Tsaliente: "arrow-circle-up",
    Tentrante: "arrow-circle-down",
  };
  const dispatch = useDispatch();
  const userId = useSelector((store) => store.user.user.id);

  /* ======================= FUNCTIONS ========================== */

  const getTransfers = async () => {
    try {
      let CVU;
      const searchCVU = await storage
        .collection("Users")
        .doc(userId)
        .collection("Wallet")
        .get();
      searchCVU.forEach((doc) => {
        CVU = doc.id;
      });
      storage
        .collection("Users")
        .doc(userId)
        .collection("Wallet")
        .doc(CVU)
        .collection("Movimientos")
        .where("operacion", "==", "Transferencia")
        .orderBy("fecha", "desc")
        .onSnapshot((query) => {
          const trans = [];
          let i = 0;
          query.forEach((doc) => {
            trans.push(doc.data());
            trans[i].id = doc.id;
            i++;
          });
          if (trans.length) {
            setTransfers(trans);
          } else {
            setTransfers([null]);
          }
        });
    } catch (error) {
      console.log("Error in transfers", error);
    }
  };
  useEffect(() => {
    getTransfers();
  }, []);

  useEffect(() => {
    dispatch(saveTransfers(transfers));
  }, [transfers]);

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  /* ====================== RENDERING ========================== */
  return (
    <ScrollView>
      <Button
        title="Nueva Transferencia"
        buttonStyle={[
          style.darkBlueButton,
          {
            marginTop: 10,
            padding: 15,
            borderRadius: 8,
            zIndex: 1,
          },
        ]}
        onPress={() => {
          navigation.navigate("Transferir");
        }}
      />
      {transfers.length === 0 ? (
        <View style={{ marginTop: 100 }}>
          <ActivityIndicator size="large" color={darkBlue} />
        </View>
      ) : transfers[0] == null ? (
        <Text
          style={{
            textAlign: "center",
            textAlignVertical: "auto",
            fontSize: 24,
            padding: 25,
            color: white,
          }}
        >
          {
            "Ups!\nAun no tenes transferencias!\nComparti tu CVU para recibirlas\n😉"
          }
        </Text>
      ) : (
        <FlatList
          data={transfers}
          keyExtractor={(transfer) => transfer.id}
          style={{ marginVertical: 15 }}
          renderItem={({ item }) => {
            return (
              <ListItem
                key={item.id}
                style={styles.listaContenedor}
                onPress={() =>
                  navigation.navigate("Detalle", {
                    estado: item.estado,
                    fecha: item.fecha,
                    hacia: item.hacia,
                    id: item.id,
                    monto: item.monto,
                    motivo: item.motivo,
                    tipo: item.tipo,
                    operacion: item.operacion,
                    receiver: item.receiver,
                    sender: item.sender,
                  })
                }
              >
                {item.tipo == "Tsaliente" ||
                item.empresa ||
                item.operacion == "Compra" ? (
                  <Icon name={iconList[item.tipo]} size={30} color="red" />
                ) : (
                  <Icon name={iconList[item.tipo]} size={30} color="green" />
                )}
                <ListItem.Content /* style={style.transfer} */>
                  <ListItem.Title>
                    {item.tipo == "Tsaliente" ? item.receiver : item.sender}
                  </ListItem.Title>
                  <ListItem.Subtitle>
                    {new Date(item.fecha).toLocaleDateString()}
                  </ListItem.Subtitle>
                </ListItem.Content>
                <Text style={{ marginRight: 3 }}>
                  {item.tipo == "Tsaliente"
                    ? `- $ ${formatNumber(item.monto)}`
                    : `$ ${formatNumber(item.monto)}`}
                </Text>
                <ListItem.Chevron
                  name="chevron-right"
                  type="font-awesome"
                  color="black"
                />
              </ListItem>
            );
          }}
        ></FlatList>
      )}
    </ScrollView>
  );
};

export default Transfers;
