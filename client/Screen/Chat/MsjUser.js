import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { connect } from "react-redux";

const MsjUser = ({ mensaje,hora }) => {

    const { bg } = useSelector((store) => store.color);
    const {user} = useSelector((store) => store.user);
    console.log('user',user)
    const imagen = user.imagen ? user.imagen : 'https://sistemas.com/termino/wp-content/uploads/Usuario-Icono.jpg';

    return (
        <View style={styles.general}>
           <Image style={styles.imagen} source={{ uri: imagen }} /> 
            <View style={styles.contUser}>
                <Text style={[styles.msjUser,{backgroundColor:bg}]}>
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
        justifyContent: 'flex-end',
    },
    contIcon: {
        position: 'absolute',
        bottom: 14,
        right: 18,
        flexDirection: 'row'

    },
    contUser: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        position: 'relative',
        paddingRight: 5
    },
    check: {
        position: 'absolute',
        bottom: 12,
        right: 1
    },
    msjUser: {
        margin: 10,
        padding:10,
        backgroundColor: '#02072f',
        width: 220,
        borderRadius: 8,
        color: '#fff',
        position:'relative',
       
    },
     imagen: {
         width: 16,
         height: 16,
         borderRadius: 100,
         alignSelf: 'flex-start',
         position: 'relative',
         top: 10,
         left: 8,
         borderColor:'#ccc',
         borderWidth:1
     },
     hora:{
        position:'absolute',
        color:'#fff',
        top:30,
        left:12,
        fontSize:8,
        backgroundColor:'blue'
     },
     hora2:{
         position:'absolute',
         bottom:10,
         left:20,
         color:'#fff',
         fontSize:8,
     }
   
 
    

});



export default MsjUser;