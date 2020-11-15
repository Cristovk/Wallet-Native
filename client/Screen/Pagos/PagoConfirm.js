import React from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'
import style from '../Transferencias/estilosConfir'
import { Icon, ListItem } from 'react-native-elements'


const PagoConfirm = ({ navigation, route }) => {

  console.log(route.params, "soy el dato")

  return (
    <ScrollView>
      <View>
        <View style={style.tituloContainer}>
          <Text style={style.titulo}>Pago Confirmado</Text>
        </View>
        <View style={style.listaContenedor}>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content>
              <ListItem.Title>Pagado a:</ListItem.Title>
              <ListItem.Subtitle>{route.params.title}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content>
              <ListItem.Title>Monto de: </ListItem.Title>
              <ListItem.Subtitle>{route.params.amount} </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content>
              <ListItem.Title>Cliente: </ListItem.Title>
              <ListItem.Subtitle>{route.params.cliente}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content>
              <ListItem.Title>Factura Nro: </ListItem.Title>
              <ListItem.Subtitle>{route.params.factura}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        </View>
        <Icon
          name="check"
          type="fontisto"
          color="green"
          size={60}
        />

      </View>
    </ScrollView>
  )
}

export default PagoConfirm