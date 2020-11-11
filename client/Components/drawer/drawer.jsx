import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, TouchableOpacity, SafeAreaView} from 'react-native';
import { Icon, ListItem } from 'react-native-elements'
import {useSelector} from 'react-redux'

// Navigator
import {HomeScreen} from '../stack/stack'

// Creamos el navegador
const Drawer = createDrawerNavigator();

// Navegador para listar los componentes de HomeScreen
export default function MyDrowner(props){
    console.log(props)
    const darker = props.route.params
    const {primary,secondary,text,bg} = useSelector(store => store.color)

    return(
      <Drawer.Navigator drawerContent={(props)=> CustomDrawerContent({...props,text,bg})} drawerStyle={{backgroundColor:bg}}>
        <Drawer.Screen name='HomeScreen' component={HomeScreen} initialParams={darker} options={{headerShown:false}}/>
      </Drawer.Navigator>
    )
}

// Esta función nos permite configurar el drawer según lo que queremos mostrar (requerido en la línea 15)
function CustomDrawerContent({navigation,text,bg}){
    console.log(text)
    return(
        <SafeAreaView style={{flex:1,justifyContent:'space-between'}}>
            <View>
                <ListItem bottomDivider containerStyle={{backgroundColor:'transparent'}}
                    onPress={()=>navigation.navigate('HomeScreen',{screen:'Tarjetas'})}>
                    <Icon name='credit-card' type='fontisto' color={text}/>
                    <ListItem.Content>
                        <ListItem.Title style={{color:text}}>Tarjetas</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron/>
                </ListItem>
                <ListItem bottomDivider containerStyle={{backgroundColor:'transparent'}} 
                    onPress={()=>navigation.navigate('HomeScreen',{screen:'Balance'})} >
                    <Icon name='bar-chart' type='fontisto' color={text}/>
                    <ListItem.Content>
                        <ListItem.Title style={{color:text}}>Balance</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron/>
                </ListItem>
                <ListItem bottomDivider containerStyle={{backgroundColor:'transparent'}} 
                    onPress={()=>navigation.navigate('HomeScreen',{screen:'Movimientos'})}>
                    <Icon name='list-2' type='fontisto' color={text}/>
                    <ListItem.Content>
                        <ListItem.Title style={{color:text}}>Movimientos</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron/>
                </ListItem>
                <ListItem bottomDivider containerStyle={{backgroundColor:'transparent'}} 
                    onPress={()=>navigation.navigate('HomeScreen',{screen:'Pagos'})}>
                    <Icon name='lightbulb' type='fontisto' color={text}/>
                    <ListItem.Content>
                        <ListItem.Title style={{color:text}}>Servicios</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron/>
                </ListItem>
                <ListItem bottomDivider containerStyle={{backgroundColor:'transparent'}} 
                    onPress={()=>navigation.navigate('HomeScreen',{screen:'Amigos'})}>
                    <Icon name='persons' type='fontisto' color={text}/>
                    <ListItem.Content>
                        <ListItem.Title style={{color:text}}>Contactos</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron/>
                </ListItem>
                <ListItem bottomDivider containerStyle={{backgroundColor:'transparent'}} 
                    onPress={()=>navigation.navigate('HomeScreen',{screen:'Configuracion'})}>
                    <Icon name='player-settings' type='fontisto' color={text}/>
                    <ListItem.Content>
                        <ListItem.Title style={{color:text}}>Configuración</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron/>
                </ListItem>
                <ListItem bottomDivider containerStyle={{backgroundColor:'transparent'}} 
                    onPress={()=>navigation.navigate('HomeScreen',{screen:'Ayuda'})}>
                    <Icon name='info' type='fontisto' color={text}/>
                    <ListItem.Content>
                        <ListItem.Title style={{color:text}}>Ayuda</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron/>
                </ListItem>
            </View>
            <View>
                <ListItem topDivider containerStyle={{backgroundColor:'transparent'}} 
                    onPress={()=>navigation.navigate('Login')}>
                    <Icon name='ios-log-out' type='ionicon' color={text}/>
                    <ListItem.Content>
                        <ListItem.Title style={{color:text}}>Cerrar sesión</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron/>
                </ListItem>
            </View>
        </SafeAreaView>
    )
}