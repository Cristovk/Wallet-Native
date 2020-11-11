import React from 'react'
import { View, Text} from 'react-native'
import { Divider ,ListItem, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5'
import {generateInvoice}from './utils'
const DetalleDeTransaccion = ({ route, navigation }) => {
    const {title, amount, icon} = route.params;
    const iconList ={Panaderia:"cookie", Almacen:"shopping-basket",Videojuegos:"gamepad", Entretenimiento:"play-circle", 
                     Transporte:"bus-alt", Gasolinera:"gas-pump", Jet:"fighter-jet", Farmacia:"first-aid", 
                     Servicios:"file-invoice-dollar"}
    return(
        <View>
            <View style={{backgroundColor: "#02072F", height: 150, alignItems:"center"}}>
                <View>
                <Icon name={iconList[icon]} size={50} color="white"  />
                </View>
               <View style={{marginTop:20}}>
                <Text style={{color: "white",fontSize: 20,}}>{`${title}`}</Text>
               </View>
               <View style={{marginTop:5}}>
                <Text style={{color: "white",fontSize: 20}}>{`$${amount}`}</Text>
               </View>
            </View>
            <View>
            <ListItem >   
                <ListItem.Content >
                <ListItem.Title >{"Operacion"}</ListItem.Title>
                </ListItem.Content>
                <Text >{"Compra"}</Text>
            </ListItem>
            <ListItem >   
                <ListItem.Content >
                <ListItem.Title >{"Estado"}</ListItem.Title>
                </ListItem.Content>
                <Text >{"Completada"}</Text>
            </ListItem>
            <ListItem >   
                <ListItem.Content >
                <ListItem.Title >{"Fecha"}</ListItem.Title>
                </ListItem.Content>
                <Text >{"10/11/2020"}</Text>
            </ListItem>
            <ListItem >   
                <ListItem.Content >
                <ListItem.Title >{"Hora"}</ListItem.Title>
                </ListItem.Content>
                <Text >{"15:45 Hs"}</Text>
            </ListItem>
            </View>  
        <View style={{alignItems:"center"}}>
        <Button 
         containerStyle={{borderRadius:30, width:"75%", marginTop:"25%"}}
          onPress={()=> generateInvoice(title, amount, icon)}
            icon={{
                name: "receipt",
                size: 20,
                color: "white"
            }}
           title="Generar recibo"
        />
        </View>
        </View>
    )
  
}

export default DetalleDeTransaccion