import React from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'


const Transferencias = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <Text>Transferencias</Text>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    </ScrollView>
  )
}

export default Transferencias;