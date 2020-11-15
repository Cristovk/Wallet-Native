import React from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { ListItem, Icon } from 'react-native-elements'
import { TextInput } from 'react-native-paper'
import style from './pagosEstilos'


const Pagos = ({ navigation }) => {

  const servicios = [
    {
      title: 'Telefono',
      amount: 1200,
      cliente: 2345856895200,
      factura: 256325415
    },
    {
      title: 'Electricidad',
      amount: 600,
      cliente: 2345856895200,
      factura: 589563278
    },
    {
      title: 'Internet',
      amount: 1300,
      cliente: 2345856895200,
      factura: 986532417
    },
    {
      title: 'Agua',
      amount: 450,
      cliente: 2345856895200,
      factura: 256325415
    },
    {
      title: 'Netflix',
      amount: 645,
      cliente: 2345856895200,
      factura: 289532148
    },
    {
      title: 'Youtube Premium',
      amount: 500,
      cliente: 2345856895200,
      factura: 895412367
    },
    {
      title: 'Spotify',
      amount: 645,
      cliente: 2345856895200,
      factura: 796582341
    },
    {
      title: 'Telecentro',
      amount: 645,
      cliente: 2345856895200,
      factura: 256325689
    },
    {
      title: 'Tarjeta de Crédito',
      amount: 645,
      cliente: 2345856895200,
      factura: 256321408
    },
    {
      title: 'Gas',
      amount: 645,
      cliente: 2345856895200,
      factura: 254869200
    },
  ]

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
      <View style={style.opciones}>
        <TouchableOpacity
          onPress={() => navigation.navigate('PagoServicios', {
            title: servicios[0].title,
            amount: servicios[0].amount,
            cliente: servicios[0].cliente,
            factura: servicios[0].factura
          })}
        >
          <Icon
            name="phone"
            type='fontisto'
            size={30}
            color="#02072F"
          />
          <Text>{servicios[0].title} </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('PagoServicios', {
            title: servicios[1].title,
            amount: servicios[1].amount,
            cliente: servicios[1].cliente,
            factura: servicios[1].factura
          })}
        >
          <Icon
            name="lightbulb"
            type='fontisto'
            size={30}
            color="#02072F"
          />
          <Text>{servicios[1].title}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('PagoServicios', {
            title: servicios[2].title,
            amount: servicios[2].amount,
            cliente: servicios[2].cliente,
            factura: servicios[2].factura
          })}
        >
          <Icon
            name="rss"
            type='fontisto'
            size={30}
            color="#02072F"
          />
          <Text>{servicios[2].title} </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('PagoServicios', {
            title: servicios[3].title,
            amount: servicios[3].amount,
            cliente: servicios[3].cliente,
            factura: servicios[3].factura
          })}
        >
          <Icon
            name="blood-drop"
            type='fontisto'
            size={30}
            color="#02072F"
          />
          <Text>{servicios[3].title}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 30 }}>

        <ListItem style={style.listaContenedor}>
          <ListItem.Chevron />
          <ListItem.Content style={style.lista}>
            <ListItem.Title>{servicios[4].title}</ListItem.Title>
            <TouchableOpacity
              onPress={() => navigation.navigate('PagoServicios', {
                title: servicios[4].title,
                amount: servicios[4].amount,
                cliente: servicios[4].cliente,
                factura: servicios[4].factura
              })}
            >
              <Text>Pagar</Text>
            </TouchableOpacity>
          </ListItem.Content>
        </ListItem>

        <ListItem style={style.listaContenedor}>
          <ListItem.Chevron />
          <ListItem.Content style={style.lista}>
            <ListItem.Title>{servicios[5].title} </ListItem.Title>
            <TouchableOpacity
              onPress={() => navigation.navigate('PagoServicios', {
                title: servicios[5].title,
                amount: servicios[5].amount,
                cliente: servicios[5].cliente,
                factura: servicios[5].factura
              })}
            >
              <Text>Pagar</Text>
            </TouchableOpacity>
          </ListItem.Content>
        </ListItem>

        <ListItem style={style.listaContenedor}>
          <ListItem.Chevron />
          <ListItem.Content style={style.lista}>
            <ListItem.Title>{servicios[6].title}</ListItem.Title>
            <TouchableOpacity
              onPress={() => navigation.navigate('PagoServicios', {
                title: servicios[6].title,
                amount: servicios[6].amount,
                cliente: servicios[6].cliente,
                factura: servicios[6].factura
              })}
            >
              <Text>Pagar</Text>
            </TouchableOpacity>
          </ListItem.Content>
        </ListItem>

        <ListItem style={style.listaContenedor}>
          <ListItem.Chevron />
          <ListItem.Content style={style.lista}>
            <ListItem.Title>{servicios[7].title} </ListItem.Title>
            <TouchableOpacity
              onPress={() => navigation.navigate('PagoServicios', {
                title: servicios[7].title,
                amount: servicios[7].amount,
                cliente: servicios[7].cliente,
                factura: servicios[7].factura
              })}
            >
              <Text>Pagar</Text>
            </TouchableOpacity>
          </ListItem.Content>
        </ListItem>


        <ListItem style={style.listaContenedor}>
          <ListItem.Chevron />
          <ListItem.Content style={style.lista}>
            <ListItem.Title>{servicios[8].title} </ListItem.Title>
            <TouchableOpacity
              onPress={() => navigation.navigate('PagoServicios', {
                title: servicios[8].title,
                amount: servicios[8].amount,
                cliente: servicios[8].cliente,
                factura: servicios[8].factura
              })}
            >
              <Text>Pagar</Text>
            </TouchableOpacity>
          </ListItem.Content>
        </ListItem>

        <ListItem style={style.listaContenedor}>
          <ListItem.Chevron />
          <ListItem.Content style={style.lista}>
            <ListItem.Title>{servicios[9].title}</ListItem.Title>
            <TouchableOpacity
              onPress={() => navigation.navigate('PagoServicios', {
                title: servicios[9].title,
                amount: servicios[9].amount,
                cliente: servicios[9].cliente,
                factura: servicios[9].factura
              })}
            >
              <Text>Pagar</Text>
            </TouchableOpacity>
          </ListItem.Content>
        </ListItem>
        <View style={style.qrContainer} >
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
        </View>
      </View>
    </ScrollView>
  )
}

export default Pagos