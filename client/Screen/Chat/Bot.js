import React from 'react';
import { View, ScrollView, Text, TextInput,StyleSheet } from 'react-native';

const Bot = () => {
    return ( 
    <View style={styles.general}>
       <Text>DESDE BOT</Text> 
    </View>
     );
}


const styles = StyleSheet.create({
    general:{
        backgroundColor: "red",
        position:'absolute',
        width:'100%',
        height:'300%',
        flexDirection:'row'
        

    },
  
   
});

 
export default Bot;