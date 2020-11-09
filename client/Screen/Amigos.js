import React from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'


const Amigos = ({ navigation }) => {


  return (
    <ScrollView>
      <View >
        <Text>Invitar Amigos</Text>
        <Button onPress={() => navigation.navigate('Home')} title="Go back home" />
      </View>
    </ScrollView>
  )
}

export default Amigos