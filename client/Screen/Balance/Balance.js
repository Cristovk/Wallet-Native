import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity} from 'react-native'
import style from './BalanceStyles.js'
import {ButtonGroup} from 'react-native-elements'

const Balance = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
 const buttons = ["Mes","Semana","Dia"]
 
 useEffect(()=>{
  if(selectedIndex==0){console.log("apreto Mes")}
  if(selectedIndex==1){console.log("apreto Semana")}
  if(selectedIndex==2){console.log("apreto Dia")}
},[selectedIndex])


  // function onPressMes(){
  //   console.log('funciona LINEA MEs')
  // }
  // function onPressSemana(){
  //   console.log('funciona LINEA Semana')
  // }
  // function onPressDia(){
  //   console.log('funciona LINEA DIA')
  // }

  return (
    <ScrollView>
      <View style={style.balance}>
      <Text style={style.tituloBalance}>Balance General</Text>
        <Text style={style.saldoBalance}>$35.000</Text>
      </View>
      <View>
            {/* <TouchableOpacity style={style.boton} onPress={onPressMes}>
              <Text style={style.letraButton}>Mes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.boton} onPress={onPressSemana}>
              <Text style={style.letraButton}>Semana</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.boton} onPress={onPressDia}>
              <Text style={style.letraButton}>Dia</Text>
            </TouchableOpacity> */}
            <ButtonGroup
            onPress={setSelectedIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            buttonContainerStyle={{backgroundColor: "#ba3f00"}}
            selectedButtonStyle={{backgroundColor:"#FC7029"}}
            textStyle={{color:"black", fontSize: 15}}
            selectedTextStyle={{color:"white"}}
            containerStyle={{height: 50, borderRadius:5, marginTop: 0}}/>
          </View>
      <View style={style.grafico}>
        {/* grafico */}
      </View>
      <View style={style.contenedor}>
          <View style={style.ingresoCont}>
            <Text style={style.letraButton}>Ingresos</Text>
            <Text style={style.ingreso}>+ $5000</Text>
            </View>
          <View style={style.ingresoCont}>
            <Text style={style.letraButton}>Gastos</Text>
            <Text style={style.gasto}>- $3000</Text>
            </View>
      </View>
    </ScrollView>
  )
}

export default Balance