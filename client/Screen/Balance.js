import React from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'


const Balance = ({ navigation }) => {


  return (
    <ScrollView>
      <View >
        <Text>Balance</Text>
        <Button onPress={() => navigation.navigate('Home')} title="Go back home" />
      </View>
    </ScrollView>
  )
}

export default Balance