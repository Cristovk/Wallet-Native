import React from 'react'
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const Editar = () => {
    return ( 
        <Icon
                size='large'
                name='pencil'
                type='font-awesome'
                color='#02072f'
                containerStyle={styles.lapiz}
            />
     );
}

const styles = StyleSheet.create({
  lapiz:{
      right:'4px',
      width:'30px',
      zIndex:100
  }
})
 
export default Editar;