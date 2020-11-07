import React from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'


const Pagos = (props) => {


  return (
    <ScrollView>
      <View >
        <Text>Pagos</Text>
        <Button onPress={() => props.navigation.goBack()} title="Go back home" />
      </View>
    </ScrollView>
  )
}

export default Pagos