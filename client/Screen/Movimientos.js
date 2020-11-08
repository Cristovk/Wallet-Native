import React from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'


const Movimientos = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <Text>Movimientos</Text>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    </ScrollView>
  )
}

export default Movimientos;