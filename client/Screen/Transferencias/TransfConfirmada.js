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
      <View>
        <View style={style.tituloContainer}>
          <Text style={style.titulo}>Transferencia Confirmada</Text>
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