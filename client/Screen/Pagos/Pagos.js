
import React, { useState } from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity, Alert, SectionList, FlatList } from 'react-native'
import { ListItem, } from 'react-native-elements'
import Icon from "react-native-vector-icons/FontAwesome5";
import { TextInput, Title } from 'react-native-paper'
import style from './pagosEstilos'


const Pagos = ({ navigation }) => {

  const [state, setState] = useState(false)
  const [nombre, setNombre] = useState("")

  const iconList = {

    Entretenimiento: "play-circle",
    Agua: "tint",
    Telefono: "phone",
    Gas: "burn",
    Electricidad: "bolt",
    Internet: "wifi"
  };


  const servicios = {
    Entretenimiento: ['Telecentro', 'Spotify', 'Netflix', 'Cablevisión', 'DirecTV', 'Youtube Premium'],
    Electricidad: ['Edenor', 'Edesur'],
    Internet: ['Movistar', 'Telecentro', 'Fibertel', 'Claro', 'Iplan'],
    Telefono: ['Movistar', 'Claro', 'Personal', 'Tuenti'],
    Agua: ["Aysa"],
    Gas: ['Metrogas'],
  }


  const nombres = Object.keys(servicios)

  function cambioEstado(x) {
    setState(true);
    setNombre(x)
  }



  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#02072F", borderBottomRightRadius: 15, borderBottomLeftRadius: 15, alignItems: 'center' }}>
        <View style={style.inputContainer}>
          <TextInput placeholder="Buscar Servicio" style={style.input} />
          <TouchableOpacity
            onPress={() => Alert.alert('buscando')}
            style={{ marginStart: 10 }}
          >
            <Icon
              name="search"
              type='fontisto'
              size={30}
              color="#FC7029"
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 15 }}
      >
        {nombres && nombres.map(x =>
          <View key={x} style={{ width: 105, justifyContent: "center", alignItems: "center", marginEnd: 15 }}>
            <TouchableOpacity
              style={{ justifyContent: "center", alignItems: "center" }}
              onPress={() => cambioEstado(x)}
            >
              <Icon
                name={iconList[x]}
                size={30}
                color="#02072F"
              />
              <Text>{x} </Text>
            </TouchableOpacity>
          </View>
        )
        }
      </ScrollView>

      <View style={{ marginTop: 50 }}>
        {state && nombres && servicios[nombre].map(x =>
          <ListItem key={x} style={style.listaContenedor}>
            <ListItem.Chevron />
            <ListItem.Content style={style.lista}>
              <ListItem.Title>{x}</ListItem.Title>
              <TouchableOpacity
                onPress={() => navigation.navigate('PagoServicios', {
                  title: x,
                  servicio: nombre
                })}
              >
                <Text>Pagar</Text>
              </TouchableOpacity>
            </ListItem.Content>
          </ListItem>
        )}
      </View>
      {/* <View style={style.qrContainer} >
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={style.qr}
          >
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Escanear QR</Text>
            <Icon
              name="qrcode"
              type="fontisto"
              size={30}
            />
          </TouchableOpacity>
        </View> */}
      {/* </View> */}
    </ScrollView>
  )
}

export default Pagos