import React, { useState } from 'react'
import { View, ScrollView, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon, Text, ListItem } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler'
import style from '../Pagos/PagoServicioEstilo'


const TransfAmigo = ({ navigation, route }) => {

  const { name, banco, alias, cvu, telefono } = route.params

  const [precio, setPrecio] = useState({ amount: "" })

  return (
    <ScrollView>
      <View style={{ marginTop: 90 }}>
        <View>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content style={style.listaContenedor}>
              <ListItem.Title>Transferir a :</ListItem.Title>
              <ListItem.Subtitle>  {name}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content style={style.listaContenedor}>
              <ListItem.Title>Total a Transferir:</ListItem.Title>
              <TextInput
                placeholder="ingrese monto"
                value={precio.amount}
                onChangeText={(data) => setPrecio({ ...precio, amount: data })}
                style={{ width: 80 }}
              />
            </ListItem.Content>
          </ListItem >
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content style={style.listaContenedor}>
              <ListItem.Title>Banco:</ListItem.Title>
              <ListItem.Subtitle>{banco}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content style={style.listaContenedor}>
              <ListItem.Title>CVU:</ListItem.Title>
              <ListItem.Subtitle>{cvu}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content style={style.listaContenedor}>
              <ListItem.Title>Alias: </ListItem.Title>
              <ListItem.Subtitle>{alias}</ListItem.Subtitle>

            </ListItem.Content>
          </ListItem>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content style={style.listaContenedor}>
              <ListItem.Title>Teléfono:</ListItem.Title>
              <ListItem.Subtitle> {telefono} </ListItem.Subtitle>

            </ListItem.Content>
          </ListItem>
        </View>
        <View style={style.botonContainer}>

          <TouchableOpacity
            onPress={() => navigation.navigate('TransfAmigoConfirm', {
              nombre: name,
              banco: banco,
              cvu: cvu,
              monto: precio.amount,
              alias: alias,
              telefono: telefono,
            })}
            style={style.boton}
            disabled={!precio.amount}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 15, marginStart: 25 }}
            >Transferir</Text>
          </TouchableOpacity>
        </View>

      </View>

    </ScrollView>
  )
}

export default TransfAmigo;