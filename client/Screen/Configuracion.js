import React from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'


const Configuracion = ({ navigation }) => {


  return (
    <ScrollView>
      <View >
        <Text>Configuración</Text>
        <Button onPress={() => navigation.navigate('Home')} title="Go back home" />
      </View>
    </ScrollView>
  )
}

export default Configuracion