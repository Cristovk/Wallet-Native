import React from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { ListItem, Icon } from 'react-native-elements'
import { TextInput } from 'react-native-paper'
import style from './pagosEstilos'


const Pagos = ({ navigation }) => {

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
          onPress={() => navigation.navigate('Transferencias')}
        >
          <Icon
            name="phone"
            type='fontisto'
            size={30}
            color="#02072F"
          />
          <Text>Teléfono</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Transferencias')}
        >
          <Icon
            name="lightbulb"
            type='fontisto'
            size={30}
            color="#02072F"
          />
          <Text>Electricidad</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Transferencias')}
        >
          <Icon
            name="rss"
            type='fontisto'
            size={30}
            color="#02072F"
          />
          <Text>Internet</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Transferencias')}
        >
          <Icon
            name="blood-drop"
            type='fontisto'
            size={30}
            color="#02072F"
          />
          <Text>Agua</Text>
        </TouchableOpacity>
      </View>
      <View>

        <ListItem>
          <ListItem.Chevron />
          <ListItem.Content style={style.lista}>
            <ListItem.Title>Netflix</ListItem.Title>
            <TouchableOpacity
              onPress={() => navigation.navigate('Transferencias')}
            >
              <Text>Pagar</Text>
            </TouchableOpacity>
          </ListItem.Content>
        </ListItem>
      </View>
      <View>

        <ListItem>
          <ListItem.Chevron />
          <ListItem.Content style={style.lista}>
            <ListItem.Title>Youtube Premium</ListItem.Title>
            <TouchableOpacity
              onPress={() => navigation.navigate('Transferencias')}
            >
              <Text>Pagar</Text>
            </TouchableOpacity>
          </ListItem.Content>
        </ListItem>
      </View>
      <View>

        <ListItem>
          <ListItem.Chevron />
          <ListItem.Content style={style.lista}>
            <ListItem.Title>Spotify</ListItem.Title>
            <TouchableOpacity
              onPress={() => navigation.navigate('Transferencias')}
            >
              <Text>Pagar</Text>
            </TouchableOpacity>
          </ListItem.Content>
        </ListItem>
      </View>
      <View>

        <ListItem>
          <ListItem.Chevron />
          <ListItem.Content style={style.lista}>
            <ListItem.Title>Telecentro</ListItem.Title>
            <TouchableOpacity
              onPress={() => navigation.navigate('Transferencias')}
            >
              <Text>Pagar</Text>
            </TouchableOpacity>
          </ListItem.Content>
        </ListItem>
      </View>
      <View>

        <ListItem>
          <ListItem.Chevron />
          <ListItem.Content style={style.lista}>
            <ListItem.Title>Tarjeta de Crédito</ListItem.Title>
            <TouchableOpacity
              onPress={() => navigation.navigate('Transferencias')}
            >
              <Text>Pagar</Text>
            </TouchableOpacity>
          </ListItem.Content>
        </ListItem>
      </View>
      <View>

        <ListItem>
          <ListItem.Chevron />
          <ListItem.Content style={style.lista}>
            <ListItem.Title>Gas</ListItem.Title>
            <TouchableOpacity
              onPress={() => navigation.navigate('Transferencias')}
            >
              <Text>Pagar</Text>
            </TouchableOpacity>
          </ListItem.Content>
        </ListItem>
      </View>
      <View style={style.qrContainer} >
        <TouchableOpacity
          onPress={() => Alert.alert('QR')}
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
    </ScrollView>
  )
}

export default Pagos