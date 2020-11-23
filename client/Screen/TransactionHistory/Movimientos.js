import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Dimensions,
  Text,
  ActivityIndicator,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ListItem, Button } from "react-native-elements";
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
  LogBox.ignoreAllLogs();
  const windowHeight = Dimensions.get("window").height;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [list, setList] = useState([]);
  const buttons = ["Hoy", "Semana", "Mes"];
  const movements = useSelector((store) => store.movementsReducer);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const { primary, bg, secondary, text, dark } = useSelector(store => store.color)



  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  useEffect(() => {
    dispatch(getDayMovements(movements.allMovements));
    dispatch(getWeekMovement(movements.allMovements));
    dispatch(getMonthMovements(movements.allMovements));
  }, [isFocused, selectedIndex]);

  useEffect(() => {
    if (selectedIndex == 0) {
      movements.length === 0
        ? setList([null])
        : setList(movements.dayMovements);
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
      <View style={[{ backgroundColor: primary, marginTop: 25 }, viewStyle.container]}>
        <View>
          <ButtonGroup
            onPress={setSelectedIndex}
            selectedIndex={selectedIndex}
            buttonContainerStyle={{
              backgroundColor: dark ? bg : secondary, marginRight: 1, shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,

              elevation: 10,
            }}
            buttons={buttons}
            selectedButtonStyle={{ backgroundColor: dark ? secondary : bg }}
            textStyle={{ color: text, fontSize: 15 }}
            selectedTextStyle={{ color: primary }}
            containerStyle={{ height: 50, borderRadius: 5, marginTop: 30 }}
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
