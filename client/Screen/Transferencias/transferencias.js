import React, { useState } from 'react'
import { View, ScrollView, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'
import style from './transferEstilos'
import { Icon, Text, ListItem } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler'


const Transferencias = ({ navigation }) => {
  const [state, setState] = useState(false)

  return (
    <ScrollView>
      <View style={style.barraSuperior}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
          >
            <Icon
              name="arrow-swap"
              type="fontisto"
              size={30}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <Text h4
          h4Style={{ color: "white", paddingEnd: 100 }}
        >Transferir</Text>
      </View>
      <View>
      </View>
      <View style={{ marginTop: 30 }}>
        <ListItem>
          <ListItem.Chevron />
          <ListItem.Content style={style.lista}>
            <ListItem.Title>Transferir</ListItem.Title>
            <ListItem.CheckBox checked={state} onPress={() => setState(!state)} />
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Chevron />
          <ListItem.Content style={style.lista}>
            <ListItem.Title>CVU o Cuenta</ListItem.Title>
            <TextInput placeholder="cvu/cuenta" style={style.input} />
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Chevron />
          <ListItem.Content style={style.lista}>
            <ListItem.Title>Monto</ListItem.Title>
            <TextInput placeholder="Ingrese Monto" style={style.input} />
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Chevron />
          <ListItem.Content style={style.lista}>
            <ListItem.Title>Motivo</ListItem.Title>
            <TextInput placeholder="Ingrese Motivo" style={style.input} />
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Chevron />
          <ListItem.Content style={style.lista}>
            <ListItem.Title>Email</ListItem.Title>
            <TextInput placeholder="Ingrese Email" style={style.input} />
          </ListItem.Content>
        </ListItem>
      </View>
      <View style={style.botonContainer}>
        <TouchableOpacity
          style={style.boton}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Confirmar Transferencia</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Transferencias;