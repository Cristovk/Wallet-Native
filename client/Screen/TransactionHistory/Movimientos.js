import React, { useEffect, useState} from 'react'
import { View, Text, ScrollView,Image, TouchableOpacity, Dimensions } from 'react-native'
import { Icon , ButtonGroup} from 'react-native-elements'
import logo from "../../../assets/index"
import style from "./Movimientos_Styles"
import historial from "./utils"
//import { PieChart} from 'react-native-svg-charts'

const Movimientos = ({ navigation }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [list, setList] = useState([]);
  const buttons = ['Hoy', 'Semana', 'Mes']

  const lista2 = [
    {
      title: 'Netflix',
      icon: 'av-timer',
      amount: 645,
      purchaseId: 1,
      type: "Entretenimiento"
    }
  ]
  const lista1 = [
    {
      title: 'Netflix',
      icon: 'av-timer',
      amount: 645,
      purchaseId: 1,
      type: "Entretenimiento"
    },
    {
      title: 'Medialunas del abuelo',
      icon: 'flight-takeoff',
      amount: 5000,
      purchaseId: 2,
      type: "Almacen"
    }]
  const lista = [
    {
      title: 'Netflix',
      icon: 'av-timer',
      amount: 645,
      purchaseId: 1,
      type: "Entretenimiento"
    },
    {
      title: 'Medialunas del abuelo',
      icon: 'flight-takeoff',
      amount: 5000,
      purchaseId: 2,
      type: "Panaderia"
    },
    {
      title: 'Carga sube',
      icon: 'flight-takeoff',
      amount: 98,
      purchaseId: 3,
      type: "Transporte publico"
    },
    {
      title: 'Super Dia%',
      icon: 'flight-takeoff',
      amount: 789,
      date: "Sun Nov 08 2020 16:49:19 GMT-0300 (hora estándar de Argentina)",
      purchaseId: 4,
      type: "Almacen"
    },
    {
      title: 'Factura Personal',
      icon: 'flight-takeoff',
      amount: 340,
      purchaseId: 5,
      type: "Servicios"
      
    },
    {
      title: 'Riot Points',
      icon: 'flight-takeoff',
      amount: 560,
      purchaseId: 6,
      type: "Videojuegos"
    },
    {
      title: 'Riot Points',
      icon: 'flight-takeoff',
      amount: 560,
      purchaseId: 6,
      type: "Videojuegos"
    },
    {
      title: 'Riot Points',
      icon: 'flight-takeoff',
      amount: 560,
      purchaseId: 6,
      type: "Videojuegos"
    },
    {
      title: 'Riot Points',
      icon: 'flight-takeoff',
      amount: 560,
      purchaseId: 6,
      type: "Videojuegos"
    }
    
  ]

  


  useEffect(()=>{
    setList(lista)
    if(selectedIndex==0){ setList(lista2)}
    if(selectedIndex==1){setList(lista1)}
    if(selectedIndex==2){setList(lista)}
  },[selectedIndex])
  
  return (
   
   <View style={{flex:1}}>
      
      <View style={style.barraSuperior}>
        <TouchableOpacity
          style={style.boton}
          onPress={() => navigation.openDrawer()}
        >

        <Icon
           name="nav-icon-a"
            type='fontisto'
            onPress={() => navigation.openDrawer()}
          />

        </TouchableOpacity>

        <Text style={style.saludo}>Mis Gastos</Text>

        <Image
          source={{ uri: 'https://3.bp.blogspot.com/-Zzvuxxgv-lA/XNselEiCizI/AAAAAAABS5E/HDEhGUaOK_QGvCREWJ0rcFR4bxWlm58XwCLcBGAs/s200/4076.jpg' }}
          style={{ width: 60, height: 60, borderRadius: 50 }}
        />

      </View>

     
      



      <View style={style.opciones}>
        <ButtonGroup
            onPress={setSelectedIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 50}}
        />

      </View>
     
       <ScrollView style={{maxHeight:200}}>{historial(list, { navigation })}</ScrollView> 
      

      <View style={style.barraInferior}>
        <TouchableOpacity
          style={style.boton2}
          onPress={() => navigation.navigate('Transferencias')}
        >
          {/* <Text>Enviar/Recibir</Text> */}
          <Icon name='arrow-swap'
            type='fontisto'
            size={35}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.botonHome}
          onPress={() => navigation.navigate('Home')}
        >
          <Icon
            name="home"
            type='fontisto'
            size={35}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.boton2}
          onPress={() => navigation.navigate('Balance')}
        >
          <Icon
            name="bar-chart"
            type='fontisto'
            size={35}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}



export default Movimientos