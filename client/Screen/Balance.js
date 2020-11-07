import React from 'react'
import { View, Text, ScrollView, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'


const Balance = (props) => {


  return (
    <ScrollView>
      <View >
        <Text>Balance</Text>
        <Button onPress={() => props.navigation.goBack()} title="Go back home" />
      </View>
    </ScrollView>
  )
}

export default Balance