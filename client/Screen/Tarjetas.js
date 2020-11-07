import React from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'


const Tarjetas = (props) => {


  return (
    <ScrollView>
      <View >
        <Text>Tarjetas</Text>
        <Button onPress={() => props.navigation.goBack()} title="Go back home" />
      </View>
    </ScrollView>
  )
}

export default Tarjetas