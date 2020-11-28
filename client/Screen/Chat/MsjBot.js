import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon } from "react-native-elements";



const MsjBot = ({ mensaje,hora }) => {
    return (
        <View style={styles.general}>
            <Image style={styles.imagen} source={{ uri: 'https://sistemas.com/termino/wp-content/uploads/Usuario-Icono.jpg' }} />
            
            <View style={styles.contBot}>
           
                <Text style={styles.msjBot}>
                    {mensaje[0].toUpperCase()+mensaje.slice(1)}
            
                    </Text>
                <View style={styles.contIcon}>
                        <Icon
                            size={8}
                            name='done'
                            type="material"
                            color="#fff"
                        />
                        <Icon
                            size={8}
                            name='done'
                            type="material"
                            color="#fff"
                        />
                </View>
               
                <Text style={styles.hora2}>{hora}</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    general: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    contBot: {
        flexDirection: 'row',
        position:'relative',
  
    },
    contIcon: {
        position: 'absolute',
        bottom: 14,
        right: 14,
        flexDirection: 'row'

    },
    imagen: {
        width: 16,
        height: 16,
        borderRadius: 100,
        alignSelf: 'flex-start',
        position: 'relative',
        top: 12,
        left: 5,
        borderColor:'#ccc',
        borderWidth:1

    },
    msjBot: {
        margin: 10,
        padding: 10,
        backgroundColor: 'rgb(209, 209, 209)',
        backgroundColor:'#000',
        width: 220,
        borderRadius: 8,
        position:'relative',
       color:'#fff'
     
    },
 
    hora2:{
        position:'absolute',
        bottom:10,
        left:20,
        color:'#fff',
        fontSize:8,
    }

});



export default MsjBot;