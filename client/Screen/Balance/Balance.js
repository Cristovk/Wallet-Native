import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Dimensions, Switch } from "react-native";
import style from "./BalanceStyles.js";
import { ButtonGroup } from "react-native-elements";
import { LineChart } from "react-native-chart-kit";
import { useDispatch, useSelector } from "react-redux";
import {getWeekMovement} from "../../Redux/movements";
import { filtroSemana , filtroMes,filtroAño ,  last6Months, lastWeek} from "./balanceFunction"

const Balance = ({ navigation }) => {
  const {primary,secondary,text,dark,bg} = useSelector(store => store.color)
  const [selectedIndex, setSelectedIndex] = useState(2);
  const [balance, setBalance] = useState(true)
  const [cartel,setCartel]= useState({gastos:0,
                                      ingresos:0})
  const today = new Date(Date.now())
  const [data, setData] = useState({
    labels: ["days"], //la data es lo que se va a mostrat en el grafico
    datasets: [
      {
        data: [0]
      }],
  });
  const buttons = ["Año", "Mes", "Semana"];
  const movements = useSelector((store) => store.movementsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeekMovement(movements.allMovements));
  }, []);

  //que hacer cuando se apreta cada boton
  useEffect(() => {
    if (selectedIndex == 0) {
      //cuando se apreta año
      setCartel({ingresos:  filtroAño(today, movements.allMovements).ingresosTot,
        gastos: filtroAño(today, movements.allMovements).gastosTot})
        if(balance){
          setData({
            labels: last6Months(today),
            datasets:[{ data: filtroAño(today, movements.allMovements).balance,} ] 
          });
        } else {
          setData({
            labels:last6Months(today),
            datasets: [
              {
                data: filtroAño(today, movements.allMovements).gasto,
                color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`
              },
              {data: filtroAño(today, movements.allMovements).ingreso,
                color: (opacity = 1) => `rgba(50, 205, 50, ${opacity})`}
              ],
            }
          )};
    }
    if (selectedIndex == 1) {
      //cuando se apreta mes
      setCartel({ingresos:  filtroMes(today, movements.allMovements).ingresosTot,
        gastos: filtroMes(today, movements.allMovements).gastosTot})
        if(balance){
          setData({
            labels: ["1-7", "8-14", "15-21", "21-28"],
            datasets:[{ data: filtroMes(today, movements.allMovements).balance} ] 
          });
        } else {
          setData({
            labels: ["1-7", "8-14", "15-21", "21-28"],
            datasets: [
              {
                data: filtroMes(today, movements.allMovements).gasto,
                color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`
              },
              {data: filtroMes(today, movements.allMovements).ingreso,
                color: (opacity = 1) => `rgba(50, 205, 50, ${opacity})`}
              ],
            }
          )};
    }
    if (selectedIndex == 2) {
      //cuando se apreta semana
      setCartel({ingresos:  filtroSemana(today, movements.weekMovements).ingresosTot,
      gastos: filtroSemana(today, movements.weekMovements).gastosTot})
      if(balance){
        setData({
          labels: lastWeek(today),
          datasets:[{ data: filtroSemana(today, movements.weekMovements).balance,} ] 
        });
      } else {
        setData({
          labels: lastWeek(today),
          datasets: [
            {
              data: filtroSemana(today, movements.weekMovements).gasto,
              color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`
            },
            {data: filtroSemana(today, movements.weekMovements).ingreso,
              color: (opacity = 1) => `rgba(50, 205, 50, ${opacity})`}
            ],
          }
        )};
    }
  }, [selectedIndex, balance]); 


  const chartConfig = {
    //configuracion para el grafico
    backgroundGradientFrom: bg,
    backgroundGradientTo: bg,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(252, 112, 41, ${opacity})`,
    labelColor: (opacity = 1) => text,
    useShadowColorFromDataset: true
  };
  const saldo = useSelector((store) => store.movementsReducer.saldo);
  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  return (
    <ScrollView style={{backgroundColor:bg}}>
      <View style={style.balance}>
        <Text style={style.tituloBalance}>Balance General</Text>
        <Text style={style.saldoBalance}>{`$ ${formatNumber(saldo)}`}</Text>
      </View>
      <View>
        <ButtonGroup
          onPress={setSelectedIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          buttonContainerStyle={{ backgroundColor: "#ba3f00" }}
          selectedButtonStyle={{ backgroundColor: "#FC7029" }}
          textStyle={{ color: "black", fontSize: 15 }}
          selectedTextStyle={{ color: "white" }}
          containerStyle={{ height: 50, borderRadius: 5, marginTop: 0 }}
        />
      </View>
      <View >
              <Switch
                trackColor={{ false: "green", true: "orange" }}
                thumbColor={"#f4f3f4"}
                value={balance}
                onValueChange={() => {
                  setBalance(!balance);
                  }}
              />
            </View>
      <View style={style.grafico}>
        {/* grafico */}
        <LineChart
          yAxisLabel="$"
          width={Dimensions.get("window").width}
          height={300}
          data={data}
          bezier
          chartConfig={chartConfig}
        ></LineChart>
      </View>
      <View style={style.contenedor}>
        <View style={{...style.ingresoCont,borderColor:dark ? secondary : primary}}>
          <Text style={{...style.letraButton,color:dark ? secondary : primary}}>Ingresos</Text>
          <Text style={style.ingreso}>+ ${cartel.ingresos}</Text>
        </View>
        <View style={{...style.ingresoCont,borderColor:dark ? secondary : primary}}>
          <Text style={{...style.letraButton,color:dark ? secondary : primary}}>Gastos</Text>
                <Text style={style.gasto}>- ${cartel.gastos}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Balance;
