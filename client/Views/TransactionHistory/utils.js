import React from 'react'
import { ListItem, Icon } from 'react-native-elements'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'
const historial = (lista,{ navigation }) => {

   return lista.map((item, i) => (
      <ListItem onPress={() => navigation.navigate("Detalle", {
        purchaseId: item.purchaseId
      })} key={i} bottomDivider>
        <Icon name={item.icon} />
        <ListItem.Content >
          <ListItem.Title >{item.title}</ListItem.Title>
          <ListItem.Subtitle>{`${item.type}`}</ListItem.Subtitle>
        </ListItem.Content>
      
         <Text style={{marginRight:3}}>{`$${item.amount}`}</Text>
        
        
       
       
        <ListItem.Chevron />
      </ListItem>
    ))
}

export default historial