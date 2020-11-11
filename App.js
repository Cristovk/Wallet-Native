import React from 'react';
import {StatusBar} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { Provider as ProviderPaper } from 'react-native-paper';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import generateStore from './client/Redux/Store/store';

const store = generateStore();




// NAVIGATOR PRINCIPAL
import MyStack from './client/Components/stack/stack';

//con este stack, guardamos todas las pantallas que vamos a mostrar. Con stack.navigation las guardamos y cada stack.screen va a ser una pantalla
//Se muestran en orden. La que primero esta, es la que va a aparecer.
export default function App() {
  return (
    /* para agregar mas pantallas */

    <Provider store={store}>
      <ProviderPaper>
        <NavigationContainer>
           <MyStack />
          <StatusBar barStyle='light-content'/>
    
        </NavigationContainer>
      </ProviderPaper>
    </Provider>
  

  );
}