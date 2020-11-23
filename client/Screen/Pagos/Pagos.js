
import React, { useState } from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity, Alert, SectionList, FlatList } from 'react-native'
import { ListItem, } from 'react-native-elements'
import Icon from "react-native-vector-icons/FontAwesome5";
import { TextInput, Title } from 'react-native-paper'
import style from './pagosEstilos'
import { useSelector } from 'react-redux';
import styleView from '../../Global-Styles/ViewContainer'

const Pagos = ({ navigation }) => {

  const [state, setState] = useState(false)
  const [nombre, setNombre] = useState("")
  const { primary, secundary, text, bg, dark } = useSelector(store => store.color)


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
    <ScrollView style={{ flex: 1, backgroundColor: bg }}>

      <View style={[{
        backgroundColor: primary, borderTopRightRadius: 10,
        borderTopLeftRadius: 10, height: 300
      }]}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 15 }}
        >
          {nombres && nombres.map(x =>
            <View key={x} style={{ width: 105, justifyContent: "flex-start", alignItems: "center", marginEnd: 15 }}>
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

        <View >
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