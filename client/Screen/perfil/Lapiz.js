import React from 'react'
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const Editar = () => {
    return ( 
        <Icon
                size={12}
                name='pencil'
                type='font-awesome'
                color='#02072f'
                // containerStyle={styles.lapiz}
            />
    );
}

const styles = StyleSheet.create({
    lapiz:{
        right:4,
        width:30,
        zIndex:100
    }
})

export default Editar;