import { ListItem } from "native-base";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import style from "./transferEstilos";
import { ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { FlatList } from "react-native-gesture-handler";

const Transfers = () => {
  return (
    <ScrollView>
      <FlatList></FlatList>
    </ScrollView>
  );
};

export default Transfers;
