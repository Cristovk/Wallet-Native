import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from "react-native-elements";


const MsjUser = ({mensaje}) => {
    return (
        <View style={styles.contUser}>
            <Text style={styles.msjUser}>{mensaje}</Text>
            {/* <Text style={styles.msjUser}>Buenas, vengo por la vacante de trabajo</Text> */}
            <View style={styles.check}>
                <Icon
                    size={12}
                    name='check-circle'
                    type="material"
                    color="#02072f"
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    contUser:{
        flexDirection:'row',
        justifyContent:'flex-end',
        position:'relative',
        paddingRight:5
    },
    check:{
          position:'absolute',
          bottom:12,
          right:1
    },
    msjUser:{
        margin:10,
        padding:10,
        backgroundColor:'rgb(209, 209, 209)',
        backgroundColor: '#02072f',
        width:220,
        borderRadius:13,
        color:'#fff'
    },

});


export default MsjUser;