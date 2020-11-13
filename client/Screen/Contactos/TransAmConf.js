import React from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'
import style from '../Transferencias/estilosConfir'
import { Icon, ListItem } from 'react-native-elements'


const TransfAmigoConfirm = ({ navigation, route }) => {

  const { nombre, banco, cvu, alias, monto, telefono } = route.params

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
              <ListItem.Title>Pagado a:</ListItem.Title>
              <ListItem.Subtitle>{nombre}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content>
              <ListItem.Title>Monto de: </ListItem.Title>
              <ListItem.Subtitle>{monto} </ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content>
              <ListItem.Title>banco: </ListItem.Title>
              <ListItem.Subtitle>{banco}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content>
              <ListItem.Title>alias: </ListItem.Title>
              <ListItem.Subtitle>{alias}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content>
              <ListItem.Title>cvu: </ListItem.Title>
              <ListItem.Subtitle>{cvu}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content>
              <ListItem.Title>telefono: </ListItem.Title>
              <ListItem.Subtitle>{telefono}</ListItem.Subtitle>
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

export default TransfAmigoConfirm