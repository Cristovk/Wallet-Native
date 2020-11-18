import React, { useEffect, useState } from "react";
import { View, ScrollView, Dimensions } from "react-native";
import { ButtonGroup } from "react-native-elements";
import { historial } from "./utils";
import {
  getDayMovements,
  getWeekMovement,
  getMonthMovements,
} from "../../Redux/movements";
import { useDispatch, useSelector } from "react-redux";

const Movimientos = ({ navigation }) => {
  const windowHeight = Dimensions.get("window").height;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [list, setList] = useState([]);
  const buttons = ["Hoy", "Semana", "Mes"];

  const lista2 = [
    {
      title: "Netflix",
      amount: 645,
      purchaseId: 1,
      type: "Entretenimiento",
    },
  ];
  const lista1 = [
    {
      title: "Netflix",
      amount: 645,
      purchaseId: 1,
      type: "Entretenimiento",
    },
    {
      title: "Medialunas del abuelo",
      amount: 5000,
      purchaseId: 2,
      type: "Panaderia",
    },
    {
      title: "Supermarine Spitfire",
      amount: 100000000,
      purchaseId: 3,
      type: "Jet",
    },
    {
      title: "Curitas",
      amount: 150,
      purchaseId: 4,
      type: "Farmacia",
    },
  ];
  const lista = [
    {
      title: "Netflix",
      amount: 645,
      purchaseId: 1,
      type: "Entretenimiento",
    },
    {
      title: "Medialunas del abuelo",
      amount: 5000,
      purchaseId: 2,
      type: "Panaderia",
    },
    {
      title: "Supermarine Spitfire",
      amount: 100000000,
      purchaseId: 3,
      type: "Jet",
    },
    {
      title: "Curitas",
      amount: 150,
      purchaseId: 4,
      type: "Farmacia",
    },
    {
      title: "Netflix",
      amount: 645,
      purchaseId: 1,
      type: "Entretenimiento",
    },
    {
      title: "Medialunas del abuelo",
      amount: 5000,
      purchaseId: 2,
      type: "Panaderia",
    },
    {
      title: "Carga sube",
      amount: 98,
      purchaseId: 3,
      type: "Transporte",
    },
    {
      title: "Super Dia%",
      amount: 789,
      date: "Sun Nov 08 2020 16:49:19 GMT-0300 (hora estándar de Argentina)",
      purchaseId: 4,
      type: "Almacen",
    },
    {
      title: "Factura Personal",
      amount: 340,
      purchaseId: 5,
      type: "Servicios",
    },
    {
      title: "Riot Points",
      amount: 560,
      purchaseId: 6,
      type: "Videojuegos",
    },
    {
      title: "Riot Points",
      amount: 560,
      purchaseId: 6,
      type: "Videojuegos",
    },
    {
      title: "Shell",
      amount: 7800,
      purchaseId: 6,
      type: "Gasolinera",
    },
    {
      title: "Riot Points",
      amount: 560,
      purchaseId: 6,
      type: "Videojuegos",
    },
    {
      title: "Netflix",
      amount: 645,
      purchaseId: 1,
      type: "Entretenimiento",
    },
    {
      title: "Medialunas del abuelo",
      amount: 5000,
      purchaseId: 2,
      type: "Panaderia",
    },
    {
      title: "Netflix",
      amount: 645,
      purchaseId: 1,
      type: "Entretenimiento",
    },
    {
      title: "Medialunas del abuelo",
      amount: 5000,
      purchaseId: 2,
      type: "Panaderia",
    },
  ];
  const movements = useSelector((store) => store.movementsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDayMovements(movements.allMovements));
    dispatch(getWeekMovement(movements.allMovements));
    dispatch(getMonthMovements(movements.allMovements));
  }, []);

  useEffect(() => {
    if (selectedIndex == 0) {
      setList(movements.dayMovements);
    }
    if (selectedIndex == 1) {
      setList(movements.weekMovements);
    }
    if (selectedIndex == 2) {
      setList(movements.monthMovements);
    }
  }, [selectedIndex]);

  return (
    <View>
      <View>
        <ButtonGroup
          onPress={setSelectedIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 50 }}
        />
      </View>

      <ScrollView style={{ maxHeight: windowHeight }}>
        {historial(list, { navigation })}
      </ScrollView>
    </View>
  );
};

export default Movimientos;
