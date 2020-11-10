import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'
import { firebases } from '../../../firebase'
import style from './homeStyles'

const Home = () => {





  return (
    <ScrollView >

      <View style={style.balance}>
        <Text style={style.tituloBalance}>Balance General</Text>
        <Text style={style.saldoBalance}>$35.000</Text>
      </View>
      <ListItem>
        <ListItem.Chevron />
        <ListItem.Content>
          <ListItem.Title>Netflix</ListItem.Title>
          <ListItem.Subtitle>Gasto</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>

      <View>
      </View>
    </ScrollView>
  )
}


export default Home