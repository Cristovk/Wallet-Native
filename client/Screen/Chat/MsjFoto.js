import React from 'react';
import { View, Image, StyleSheet } from 'react-native';



const MsjFoto = ({url}) => {
    return (
    <View style={styles.contUser}> 
        <Image style={styles.imagen} source={{ uri: url }} /> 
    </View>
    );
}

const styles = StyleSheet.create({
    imagen:{
        width:120,
        height:200,
        borderRadius:20
    },
    contUser:{
        flexDirection:'row',
        justifyContent:'flex-end',
        position:'relative',
        paddingRight:5
    },
});

export default MsjFoto;