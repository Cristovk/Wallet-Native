import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";


const Subitem = ({ texto }) => {

  const { bg, text, primary, secondary, dark } = useSelector((store) => store.color);

  return (
    <View style={[{ backgroundColor: primary }, styles.itemAyuda]}>
      <Text style={styles.textoItem}>{texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  textoItem: {
    color: 'grey',
  },
  itemAyuda: {
    padding: 17,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
});


export default Subitem;



