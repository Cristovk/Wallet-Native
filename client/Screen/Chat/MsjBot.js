import React,{useState} from 'react';
import { View, Text,StyleSheet } from 'react-native';




const MsjBot = ({mensaje}) => {
    return (  
        <View style={styles.contBot}>
            <Text style={styles.msjBot}>{mensaje}</Text>
            {/* <Text style={styles.msjBot}>Hola. ¿En qué te podemos ayudar hoy?</Text> */}
        </View>
    );
}
 
const styles = StyleSheet.create({
    contBot:{
        flexDirection:'row',
    },
    msjBot:{
      margin:10,
      padding:10,
      backgroundColor:'rgb(209, 209, 209)',
      width:220,
      borderRadius:14,
    },
    
});



export default MsjBot;