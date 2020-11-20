import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, LogBox, BackHandler } from "react-native";
import { ListItem, Button } from "react-native-elements";
import style from "./homeStyles";
import { storage } from '../../../firebase'
import { useDispatch, useSelector } from "react-redux";
import {
  test,
  getAllMovements,
  getSaldo,
  getDayMovements,
} from "../../Redux/movements";
import { useBackButton } from "@react-navigation/native";
const Home = ({ navigation }) => {
  // const {title, amount, icon} = route.params;

  const lista = [
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
      title: "Shell",
      amount: 7800,
      purchaseId: 6,
      type: "Gasolinera",
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

  const dispatch = useDispatch();
  const movements = useSelector((store) => store.movementsReducer);
  useEffect(() => {
    dispatch(getSaldo());
    dispatch(getAllMovements());
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  const handleBackButtonClick = () => {
    BackHandler.exitApp()
  }

  // const handleOnTest = () => {
  //   test();
  //   console.log("allmovements", allMovements);
  // };

  /* LogBox.ignoreAllLogs() */

  return (
    <ScrollView>
      {/* <Button title="GET" onPress={() => handleOnPress()} /> */}
      <View style={style.balance}>
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
          {`$ ${formatNumber(movements.saldo)}`}
        </Text>
      </View>
      {/* <Button
        title="test"
        onPress={() => handleOnTest()}
        buttonStyle={{ backgroundColor: "green", marginTop: 10 }}
      /> */}
      <ListItem
        onPress={() =>
          navigation.navigate("Detalle", {
            title: lista[0].title,
            amount: lista[0].amount,
            icon: lista[0].type,
          })
        }
        style={style.listaContenedor}
      >
        <ListItem.Chevron />
        <ListItem.Content style={style.lista}>
          <ListItem.Title>{lista[0].title} </ListItem.Title>
          <ListItem.Subtitle>${lista[0].amount} </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem
        onPress={() =>
          navigation.navigate("Detalle", {
            title: lista[1].title,
            amount: lista[1].amount,
            icon: lista[1].type,
          })
        }
        style={style.listaContenedor}
      >
        <ListItem.Chevron />
        <ListItem.Content style={style.lista}>
          <ListItem.Title>{lista[1].title} </ListItem.Title>
          <ListItem.Subtitle>${lista[1].amount} </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem
        onPress={() =>
          navigation.navigate("Detalle", {
            title: lista[2].title,
            amount: lista[2].amount,
            icon: lista[2].type,
          })
        }
        style={style.listaContenedor}
      >
        <ListItem.Chevron />
        <ListItem.Content style={style.lista}>
          <ListItem.Title>{lista[2].title}</ListItem.Title>
          <ListItem.Subtitle>${lista[2].amount}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      <ListItem
        onPress={() =>
          navigation.navigate("Detalle", {
            title: lista[3].title,
            amount: lista[3].amount,
            icon: lista[3].type,
          })
        }
        style={style.listaContenedor}
      >
        <ListItem.Chevron />
        <ListItem.Content style={style.lista}>
          <ListItem.Title>{lista[3].title}</ListItem.Title>
          <ListItem.Subtitle>${lista[3].amount}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>

      <View></View>
    </ScrollView>
  );
};

export default Home;
