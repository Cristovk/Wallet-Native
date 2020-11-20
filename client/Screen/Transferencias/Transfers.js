/* ====================== IMPORTATIONS ========================= */
import React, { useState, useEffect } from "react";
import { LogBox, View, Text, ScrollView, FlatList } from "react-native";
import style from "./transferEstilos";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useSelector } from "react-redux";
import { ListItem, Button } from "react-native-elements";
import { useIsFocused } from "@react-navigation/native";

/* ========================= STATES ============================ */
const Transfers = ({ navigation }) => {
  const [transfers, setTransfers] = useState([]);
  const iconList = {
    Tsaliente: "arrow-circle-up",
    Tentrante: "arrow-circle-down",
  };
  const isFocused = useIsFocused();

  /* ======================= FUNCTIONS ========================== */
  const allMovements = useSelector(
    (store) => store.movementsReducer.allMovements
  );
  useEffect(() => {
    setTransfers(
      allMovements.filter((mov) => mov.operacion === "Transferencia")
    );
  }, [isFocused]);

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  // LogBox.ignoreAllLogs();
  /* ====================== RENDERING ========================== */
  return (
    <ScrollView>
      <FlatList
        keyExtractor={(transfer) => transfer.id}
        data={transfers}
        ListFooterComponent={
          <Button
            title="Nueva Transferencia"
            buttonStyle={[
              style.darkBlueButton,
              {
                marginTop: 10,
                padding: 15,
                borderRadius: 8,
              },
            ]}
            onPress={() => {
              navigation.navigate("Transferir");
            }}
          />
        }
        renderItem={({ item }) => {
          return (
            <View
              key={item.id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ListItem
                style={style.lista}
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
                <Icon name={iconList[item.tipo]} size={30} color="black" />
                <ListItem.Content style={style.transfer}>
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
            </View>
          );
        }}
      />
    </ScrollView>
  );
};

export default Transfers;
