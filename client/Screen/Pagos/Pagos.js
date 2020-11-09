import React from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { ListItem, Icon } from 'react-native-elements'
import { TextInput } from 'react-native-paper'
import style from './pagosEstilos'


const Pagos = ({ navigation }) => {

  return (
    <ScrollView style={{flex:1}}>
      <View style={{ backgroundColor: "#02072F", borderBottomRightRadius: 15, borderBottomLeftRadius: 15, alignItems:'center' }}>
        <View style={style.inputContainer}>
          <TextInput placeholder="Buscar Servicio" style={style.input} />
          <TouchableOpacity
            onPress={() => Alert.alert("buscando")}
            style={{ marginStart: 20 }}
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
          onPress={() => Alert.alert('apretado')}
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
          onPress={() => Alert.alert('apretado')}
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
          onPress={() => Alert.alert('apretado')}
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
          onPress={() => Alert.alert('apretado')}
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
      <ListItem>
        <ListItem.Chevron />
        <ListItem.Content>
          <ListItem.Title>Netflix</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </ScrollView>
  )
}

export default Pagos