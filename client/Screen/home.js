import React from 'react'
import { View, Text, ScrollView,StyleSheet} from 'react-native'
import { ListItem} from 'react-native-elements'


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
    </ScrollView>
  )
}

const style = StyleSheet.create({
  
  balance: {
    backgroundColor: "#02072F",
    height: 200,
    justifyContent: "center",
    alignItems: "center"
  },
  saldoBalance: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
    marginBottom: 50,
    textDecorationLine: "underline"
  },
  tituloBalance: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 30,
    marginBottom: 10
  },
  gastos: {
    height: 350
  },
  subGastos: {
    height: 60,
    marginBottom: 30
  }
})

export default Home