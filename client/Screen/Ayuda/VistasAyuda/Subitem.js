import React from 'react';
import {View,Text,StyleSheet} from "react-native";


const Subitem = ({texto}) => {
    return (  
    <View style={styles.itemAyuda}>
        <Text style={styles.textoItem}>{texto}</Text>
    </View>                                                                                                         
    );
}
 
const styles = StyleSheet.create({
    
    textoItem:{
        color:'grey',
    },
    itemAyuda:{
        padding:17,
        flexDirection:'row',
        alignItems:'center',
        width:'100%'
    },
});


export default Subitem;



