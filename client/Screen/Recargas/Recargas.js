import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, Button } from 'react-native'
import styles from './estilosRecargas';

const Perfil = (props) => {

    return (
        <ScrollView>
        


        <TouchableOpacity style={styles.btnvolver} onPress={() => props.navigation.goBack()}>
                <Text style={styles.link}>Volver</Text>
        </TouchableOpacity>

        </ScrollView>

    );
}

export default Perfil;

