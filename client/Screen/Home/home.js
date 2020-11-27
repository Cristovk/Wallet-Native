/* ====================== IMPORTATIONS ========================= */
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  View,
  Text,
  LogBox,
  ScrollView,
  FlatList,
  ActivityIndicator,
  BackHandler,
  TouchableOpacity,
} from "react-native";
import { ListItem, Button } from "react-native-elements";
import style from "./homeStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  saveAllMovements,
  saveSaldo,
  saveDolares,
  saveCVU,
  getDayMovements,
} from "../../Redux/movements";
import { useIsFocused } from "@react-navigation/native";
import { auth, storage } from "../../../firebase";
import styleBoton from "../../Global-Styles/BotonGrande";

const Home = ({ navigation }) => {
  /* ========================= STATES ============================ */
  LogBox.ignoreAllLogs();
  const dispatch = useDispatch();
  const [saldo, setSaldo] = useState(0);
  const [dolares,setDolares] = useState(0);
  const [movements, setMovements] = useState([]);
  const [allMovements, setAllMovements] = useState([]);
  const userId = auth.currentUser.uid;
  const isFocused = useIsFocused();
  const iconList = {
    panaderia: "cookie",
    almacen: "shopping-basket",
    videojuegos: "gamepad",
    Entretenimiento: "play-circle",
    transporte: "bus-alt",
    gasolinera: "gas-pump",
    jet: "fighter-jet",
    farmacia: "first-aid",
    servicios: "file-invoice-dollar",
    Tsaliente: "arrow-circle-up",
    Tentrante: "arrow-circle-down",
    recarga: "wallet",
    Agua: "tint",
    Telefono: "phone",
    Gas: "burn",
    Electricidad: "bolt",
    Internet: "wifi",
    Dsaliente: "hand-holding-usd",
    "recarga con tarjeta": "credit-card",
    Dentrante: "hand-holding-usd",
    TDsaliente: "arrow-circle-up",
    TDentrante: "arrow-circle-down",
  };

  const { primary, bg, secondary, text, dark } = useSelector(
    (store) => store.color
  );

  /* ======================= FUNCTIONS ========================== */
  const getSaldo = async () => {
    try {
      let ref = await storage
        .collection("Users")
        .doc(userId)
        .collection("Wallet")
        .onSnapshot((query) => {
          let saldo;
          for (const mov of query.docs) {
            saldo = mov.data().saldo;
          }
          saldo == 0 ? setSaldo(null) : setSaldo(saldo);
        });
    } catch (error) {
      console.log("Error", error);
    }
  };

  const getDolares = async () => {
    try {
      let ref = await storage
        .collection("Users")
        .doc(userId)
        .collection("Wallet")
        .onSnapshot((query) => {
          let dolares;
          for (const mov of query.docs) {
            dolares = mov.data().dolares;
          }
          dolares == 0 ? setDolares(null) : setDolares(dolares);
        });
    } catch (error) {
      console.log("Error", error);
    }
  };

  const getSomeMovements = async () => {
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
      dispatch(saveCVU(CVU));
      storage
        .collection("Users")
        .doc(userId)
        .collection("Wallet")
        .doc(CVU)
        .collection("Movimientos")
        .orderBy("fecha", "desc")
        .limit(10)
        .onSnapshot((query) => {
          const movs = [];
          let i = 0;
          for (const mov of query.docs) {
            movs.push(mov.data());
            movs[i].id = mov.id;
            i++;
          }
          if (movs.length == 0) {
            setMovements([null]);
          } else {
            setMovements(movs);
          }
        });
    } catch (error) {
      console.log("Error", error);
    }
  };

  const getAllMovements = async () => {
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
        .orderBy("fecha", "desc")
        .onSnapshot((query) => {
          const movs = [];
          let i = 0;
          for (const mov of query.docs) {
            movs.push(mov.data());
            movs[i].id = mov.id;
            i++;
          }
          setAllMovements(movs);
        });
    } catch (error) {
      console.log("error", error);
      return error;
    }
  };

  useEffect(() => {
    getSaldo();
    getDolares();
    getAllMovements();
    getSomeMovements();
    BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackButtonClick
      );
    };
  }, []);

  useEffect(() => {
    dispatch(saveSaldo(saldo));
    dispatch(saveDolares(dolares));
    dispatch(saveAllMovements(allMovements));
    dispatch(getDayMovements(allMovements));
  }, [isFocused, allMovements]);

  function formatNumber(num) {
    let number =
      num && num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    return number;
  }

  const handleBackButtonClick = () => {
    BackHandler.exitApp();
  };

  /* ====================== RENDERING ========================== */
  return (
    <View style={{ backgroundColor: bg }}>
      <View style={[{ backgroundColor: bg }, style.balance]}>
        <Text
          style={style.tituloBalance}
          onPress={() => navigation.navigate("Balance")}
        >
          Balance General
        </Text>
        <Text style={style.saldoBalance}>
          {saldo == 0 ? (
            <ActivityIndicator size="large" color={primary} />
          ) : saldo == null ? (
            <View>
              <Text style={style.tituloBalanceCero}>$ 0 </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",

                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: dark ? primary : secondary,
                    height: 20,
                    width: 70,
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  onPress={() => navigation.navigate("Recargas")}>
                  <Text

                    style={{ fontSize: 14, fontWeight: "bold" }}
                  >
                    Recargar
                </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
                `$ ${formatNumber(saldo)}`
              )}
        </Text>
      </View>
      <View
        style={{
          height: 50,
          borderRadius: 10,
          backgroundColor: primary,
          marginBottom: -15,
        }}
      >
        <View
          style={{
            alignSelf: "center",
            width: 200,
            borderStyle: "solid",
            borderColor: bg,
            borderWidth: 3,
            marginTop: 10,
            borderRadius: 5,
          }}
        ></View>
      </View>
      <View style={[{ backgroundColor: primary }, style.background]}>
        {movements.length === 0 ? (
          <View style={{ marginTop: 100 }}>
            <ActivityIndicator size="large" color={bg} />
          </View>
        ) : movements[0] == null ? (
          <Text
            style={{
              textAlign: "center",
              textAlignVertical: "auto",
              fontSize: 24,
              padding: 25,
              color: secondary,
            }}
          >
            {"Acá se listarán tus movimientos cuando los tengas"}
          </Text>
        ) : (
              <ScrollView>
                <FlatList
                  data={movements}
                  keyExtractor={(mov) => mov.id}
                  style={{ marginVertical: 15, backgroundColor: primary }}
                  renderItem={({ item }) => {
                    return (
                      <ListItem
                        key={item.id}
                        containerStyle={{
                          backgroundColor: primary,
                        }}
                        style={[
                          { borderBottomColor: dark ? "grey" : secondary },
                          style.listaContenedor,
                        ]}
                        onPress={() =>
                          item.categoria == 'Dentrante' || item.categoria == 'Dsaliente'
                          ? navigation.navigate('Detalle',{
                            operacion: item.operacion,
                            estado: item.estado,
                            motivo: item.motivo,
                            monto: item.monto,
                            cvu: item.cvu,
                            categoria: item.categoria,
                            sender: item.sender,
                            receiver: item.receiver,
                            fecha: item.fecha,
                            dolares: item.dolares,
                            cotizacion: item.cotizacion
                          })
                          : navigation.navigate("Detalle", {
                            fecha: item.fecha,
                            monto: item.monto,
                            hacia: item.hacia,
                            desde: item.desde,
                            estado: item.estado,
                            tipo: item.tipo,
                            motivo: item.motivo,
                            operacion: item.operacion,
                            estado: item.estado,
                            empresa: item.empresa,
                            sender: item.sender,
                            receiver: item.receiver,
                            categoria: item.categoria,
                            card: item.card
                          })
                        }
                      >
                        {item.categoria == "Tsaliente" ||
                          item.categoria == "Dentrante" ||
                          item.categoria == "TDsaliente" ||
                          item.operacion == "compra" ||
                          item.operacion == "servicios" ||
                          item.operacion == "servicio" ? (
                            <Icon
                              name={iconList[item.categoria]}
                              size={30}
                              color="red"
                            />
                          ) : (
                            <Icon
                              name={iconList[item.categoria]}
                              size={30}
                              color="green"
                            />
                          )}
                        <ListItem.Content>
                          <ListItem.Title>
                            {item.operacion[0].toUpperCase() +
                              item.operacion.substring(1)}
                          </ListItem.Title>
                          <ListItem.Subtitle>
                            {new Date(item.fecha).toLocaleDateString()}
                          </ListItem.Subtitle>
                        </ListItem.Content>
                        <Text style={{ marginRight: 3 }}>
                          {item.categoria == "Tsaliente" ||
                            item.operacion == "compra" ||
                            item.operacion == "servicios" ||
                            item.operacion == "servicio"
                            ? `- $ ${formatNumber(item.monto)}`
                            : item.categoria == "Dentrante"
                            ? `- USD$ ${formatNumber(item.dolares)}`
                            : item.categoria == "Dsaliente"
                            ? `USD$ ${formatNumber(item.dolares)}`
                            : item.categoria == "TDsaliente"
                            ? `- USD$ ${formatNumber(item.monto)}`
                            : item.categoria == "TDentrante"
                            ? `USD$ ${formatNumber(item.monto)}`
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
                <View style={[{ marginBottom: 30 }, styleBoton.container]}>
                  <TouchableOpacity
                    style={[
                      { backgroundColor: secondary, marginBottom: 25 },
                      styleBoton.boton,
                    ]}
                    onPress={() => navigation.navigate("Movimientos")}
                  >
                    <Text style={[{ color: text }, styleBoton.texto]}>
                      Ver todos los Movimientos
                </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            )}
      </View>
    </View>
  );
};

export default Home;
