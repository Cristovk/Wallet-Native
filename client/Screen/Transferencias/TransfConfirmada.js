import React from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'
import style from './estilosConfir'
import { Icon, ListItem } from 'react-native-elements'


const TransfConfirm = ({ navigation, route }) => {

  console.log(route.params, "soy el dato")

  if (route.params.state === false) {
    return (
      <View>Necesitas tildar Transferencias para confirmar</View>
    )
  }
  return (
    <ScrollView>
      {/* <View style={style.containerTotal}>
        <View style={style.container}>
          <View style={style.tituloContainer}>
            <Text>Pedido Confirmado</Text>
          </View>
          <View>
            <View style={style.textos}>
              <Text>Enviado a: {route.params.cvu} </Text>
            </View>
            <View style={style.textos}>
              <Text>Monto de: {route.params.monto} </Text>
            </View>
            <View style={style.textos}>
              <Text>En motivo de: {route.params.motivo} </Text>
            </View>
            <View style={style.textos} >
              <Text>El comprobante será enviado al mail: {route.params.email} </Text>
            </View>
          </View>
        </View>
      </View>
      <Icon
        name="check"
        type="fontisto"
        color="green"
        size={60}
      /> */}
      <View>
        <View style={style.tituloContainer}>
          <Text style={style.titulo}>Pedido Confirmado</Text>
        </View>
        <View style={style.listaContenedor}>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content>
              <ListItem.Title>Enviado a:</ListItem.Title>
              <ListItem.Subtitle>{route.params.cvu}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content>
              <ListItem.Title>Monto de: </ListItem.Title>
              <ListItem.Subtitle>{route.params.monto} </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content>
              <ListItem.Title>En motivo de: </ListItem.Title>
              <ListItem.Subtitle>{route.params.motivo}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content>
              <ListItem.Title>El comprobante será enviado al mail: </ListItem.Title>
              <ListItem.Subtitle>{route.params.email}</ListItem.Subtitle>
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

export default TransfConfirm