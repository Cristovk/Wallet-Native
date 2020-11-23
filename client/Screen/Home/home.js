/* ====================== IMPORTATIONS ========================= */
import React, { useEffect, useState } from "react";
import { orange } from "../../Global-Styles/colors";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  View,
  Text,
  LogBox,
  ScrollView,
  FlatList,
  ActivityIndicator,
  BackHandler
} from "react-native";
import { ListItem, Button } from "react-native-elements";
import style from "./homeStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  saveAllMovements,
  saveSaldo,
  saveCVU,
  getDayMovements,
} from "../../Redux/movements";
import { useIsFocused } from "@react-navigation/native";
import { auth, storage } from "../../../firebase";

const Home = ({ navigation }) => {
  /* ========================= STATES ============================ */
  const [saldo, setSaldo] = useState(0);
  const CVU = useSelector((store) => store.movementsReducer.CVU);
  const [movements, setMovements] = useState([]);
  const [allMovements, setAllMovements] = useState([]);
  const userId = auth.currentUser.uid;
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const iconList = {
    panaderia: "cookie",
    almacen: "shopping-basket",
    videojuegos: "gamepad",
    entretenimiento: "play-circle",
    transporte: "bus-alt",
    gasolinera: "gas-pump",
    jet: "fighter-jet",
    farmacia: "first-aid",
    servicios: "file-invoice-dollar",
    Tsaliente: "arrow-circle-up",
    Tentrante: "arrow-circle-down",
    recarga: "wallet",
  };


  const { primary, bg, secondary, text } = useSelector(store => store.color)

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
          setSaldo(saldo);
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
          setMovements(movs);
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
    getAllMovements();
    getSomeMovements();
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    }
  }, []);

  useEffect(() => {
    dispatch(saveSaldo(saldo));
    dispatch(saveAllMovements(allMovements));
    dispatch(getDayMovements(allMovements));
  }, [isFocused]);


  function formatNumber(num) {
    let number =
      num && num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    return number;
  }

  const handleBackButtonClick = () => {
    BackHandler.exitApp()
  }



  // const handleOnTest = () => {
  //   test();
  //   console.log("allmovements", allMovements);
  // };

  // LogBox.ignoreAllLogs();

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
        <Text
          style={style.saldoBalance}
          onPress={() => navigation.navigate("Balance")}
        >
          {saldo == 0 ? (
            <ActivityIndicator size="large" color={primary} />
          ) : (
              `$ ${formatNumber(saldo)}`
            )}
        </Text>
      </View>
      <View style= {{height: 50, borderRadius: 10 , backgroundColor: "white",marginBottom:-15 }} >
        <View style={{alignSelf: "center", width: 200, borderStyle: "solid", borderColor: bg, borderWidth:3, marginTop: 10, borderRadius:5  }}></View>
      </View>
      <View style={[{ backgroundColor: primary }, style.background]}>
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
                  backgroundColor: primary
                }}
                style={[{ borderBottomColor: secondary }, style.listaContenedor]}
                onPress={() =>
                  navigation.navigate("Detalle", {
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
                    receiver: item.receiver
                  })
                }
              >
                {item.tipo == "Tsaliente" ? (
                  <Icon name={iconList[item.tipo]} size={30} color="red" />
                ) : (
                    <Icon name={iconList[item.tipo]} size={30} color="green" />
                  )}
                <ListItem.Content >
                  <ListItem.Title>{item.operacion}</ListItem.Title>
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
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
