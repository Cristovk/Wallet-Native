import React, { useEffect, useState } from "react";
import { View, ScrollView, Dimensions, Text } from "react-native";
import { ButtonGroup } from "react-native-elements";
import { historial } from "./utils";
import {
  getDayMovements,
  getWeekMovement,
  getMonthMovements,
} from "../../Redux/movements";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import viewStyle from '../../Global-Styles/ViewContainer'


const Movimientos = ({ navigation }) => {
  const windowHeight = Dimensions.get("window").height;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [list, setList] = useState([]);
  const buttons = ["Hoy", "Semana", "Mes"];
  const movements = useSelector((store) => store.movementsReducer);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const { primary, bg, secondary, text } = useSelector(store => store.color)


  useEffect(() => {
    dispatch(getDayMovements(movements.allMovements));
    dispatch(getWeekMovement(movements.allMovements));
    dispatch(getMonthMovements(movements.allMovements));
  }, [isFocused, selectedIndex]);

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
  }, [selectedIndex, isFocused, movements]);

  return (
    <ScrollView style={{ backgroundColor: bg }}>
      <View style={[{ backgroundColor: primary }, viewStyle.container]}>
        <View>
          <ButtonGroup
            onPress={setSelectedIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{ height: 50, backgroundColor: primary, borderColor: secondary }}
          />
        </View>
        {list.length ? (
          <ScrollView style={{ maxHeight: windowHeight }}>
            {historial(list, { navigation }, primary)}
          </ScrollView>
        ) : (
            <View
              style={{
                backgroundColor: primary,
                marginHorizontal: "10%",
                paddingHorizontal: 20,
                borderRadius: 10,
                alignContent: "center",
                marginTop: 100,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  textAlignVertical: "auto",
                  fontSize: 24,
                }}
              >
                {
                  "Ups!\nAun no tenes movimientos!\n¿Que esperas?\nAnda a comprar!\nTenemos promociones para vos!!"
                }
              </Text>
            </View>
          )}
      </View>
    </ScrollView>
  );
};

export default Movimientos;
