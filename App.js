import React, { useEffect, useState } from 'react';
import {StatusBar, LogBox} from 'react-native';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { Provider as ProviderPaper } from 'react-native-paper';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import generateStore from './client/Redux/Store/store'

// NAVIGATOR PRINCIPAL
import {MyStack} from './client/Components/stack/stack';

const store = generateStore();

//con este stack, guardamos todas las pantallas que vamos a mostrar. Con stack.navigation las guardamos y cada stack.screen va a ser una pantalla
//Se muestran en orden. La que primero esta, es la que va a aparecer.
export default function App() {
  const [darker,setDarker] = useState(false)
  useEffect(() => {
    console.log(darker)
  },[darker])
  const MyTheme = {
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      background: darker ? '#02072F' : 'lightgray'
    }
  }

  LogBox.ignoreAllLogs()

  return (
    /* para agregar mas pantallas */
    <Provider store={store}>
      <ProviderPaper>
        <NavigationContainer theme={MyTheme}>
          <MyStack darker={setDarker}/>
          <StatusBar barStyle='light-content'/>
        </NavigationContainer>
      </ProviderPaper>
    </Provider>
  );
}