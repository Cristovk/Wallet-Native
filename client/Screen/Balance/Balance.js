import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import style from "./BalanceStyles.js";
import { ButtonGroup } from "react-native-elements";
import { LineChart } from "react-native-chart-kit";
import { useDispatch, useSelector } from "react-redux";
import {getWeekMovement} from "../../Redux/movements";
import { filtroSemana , filtroMes,filtroAño ,  last6Months, lastWeek} from "./balanceFunction"

const Balance = ({ navigation }) => {
  const {primary,secondary,text,dark,bg} = useSelector(store => store.color)
  const [selectedIndex, setSelectedIndex] = useState(2);
  const today = new Date(Date.now())
  const aDay = 86400000
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
      setData({
        labels:  last6Months(today),
        datasets: [
          {
            data: filtroAño(today, movements.allMovements),
          },
        ],
      });
    }
    if (selectedIndex == 1) {
      //cuando se apreta mes
      setData({
        labels: ["1-7", "8-14", "15-21", "21-28"],
        datasets: [
          {
            data: filtroMes(today, movements.allMovements)
          }
        ],
      });
    }
    if (selectedIndex == 2) {
      //cuando se apreta semana
      
      setData({
        labels: lastWeek(today),
        datasets: [
          {
            data: filtroSemana(today, movements.weekMovements),
            // color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`
          },
      // {data: [1,2,3,4,2],
      //   color: (opacity = 1) => `rgba(50, 205, 50, ${opacity})`}
        ],
      });
    }
  }, [selectedIndex]); 

  function filtro(objetos){
    let obj ={
    entrante: [],
     saliente: [],
    }
    for(let i = 0; objetos.length; i++){
      
      if(objetos[i].tipo === "Tentrante" || objetos[i].tipo === "recarga"){
        obj.entrante.push(objetos[i].monto)
        obj.saliente.push(0)
      } else {
        obj.saliente.push(objetos[i].monto)
        obj.entrante.push(0)
      }
  }
    return obj
  }

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
          <Text style={style.ingreso}>+ $5000</Text>
        </View>
        <View style={{...style.ingresoCont,borderColor:dark ? secondary : primary}}>
          <Text style={{...style.letraButton,color:dark ? secondary : primary}}>Gastos</Text>
          <Text style={style.gasto}>- $3000</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Balance;
