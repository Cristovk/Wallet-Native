import React, { useState } from 'react'
import { View, ScrollView, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon, Text, ListItem } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler'
import style from './PagoServicioEstilo'


const PagoServicios = ({ navigation, route }) => {

  const { title, amount, cliente, factura } = route.params

  const [precio, setPrecio] = useState({ amount: amount })

  return (
    <ScrollView>
      <View style={{ marginTop: 90 }}>
        <View>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content style={style.listaContenedor}>
              <ListItem.Title>{title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content style={style.listaContenedor}>
              <ListItem.Title>Total a Pagar:</ListItem.Title>
              <TextInput
                placeholder={"$" + amount}
                value={precio.amount}
                onChangeText={(data) => setPrecio({ ...precio, amount: data })}
                style={{ width: 80 }}
              />
            </ListItem.Content>
          </ListItem >
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content style={style.listaContenedor}>
              <ListItem.Title>Cliente:{cliente}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
          <ListItem style={style.lista}>
            <ListItem.Chevron />
            <ListItem.Content style={style.listaContenedor}>
              <ListItem.Title>Nro Factura:{factura}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        </View>
        <View style={style.botonContainer}>

          <TouchableOpacity
            onPress={() => navigation.navigate('PagoConfirm', {
              title: title,
              amount: precio.amount,
              cliente: cliente,
              factura: factura
            })}
            style={style.boton}
          >
            <Text
              style={{ fontWeight: "bold", fontSize: 15, marginStart: 10 }}
            >Pagar Servicio</Text>
          </TouchableOpacity>
        </View>

      </View>

    </ScrollView>
  )
}

export default PagoServicios;