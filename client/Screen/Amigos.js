import React from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'


const Amigos = (props) => {


  return (
    <ScrollView>
      <View >
        <Text>Invitar Amigos</Text>
        <Button onPress={() => props.navigation.goBack()} title="Go back home" />
      </View>
    </ScrollView>
  )
}

export default Amigos