import React from 'react'
import { ListItem} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {Platform, Text} from 'react-native'
import * as Print from 'expo-print';
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";

/*Esta funcion genera la lista de transacciones (ListItem), re que ni servia con la db*/
export const historial = (lista,{ navigation }) => {
    const iconList ={Panaderia:"cookie", Almacen:"shopping-basket",Videojuegos:"gamepad", Entretenimiento:"play-circle", 
                     Transporte:"bus-alt", Gasolinera:"gas-pump", Jet:"fighter-jet", Farmacia:"first-aid", Servicios:"file-invoice-dollar"}
   return lista.map((item, i) => (
      <ListItem onPress={() => navigation.navigate("Detalle", {
        title: item.title,
        amount: item.amount,
        icon: item.type
      })} key={i} bottomDivider>
        <Icon name={iconList[item.type]} size={30} color="black" />
        <ListItem.Content >
          <ListItem.Title >{item.title}</ListItem.Title>
          <ListItem.Subtitle>{`${item.type}`}</ListItem.Subtitle>
        </ListItem.Content>
         <Text style={{marginRight:3}}>{`$${item.amount}`}</Text>
        <ListItem.Chevron
         name='chevron-right'
         type='font-awesome'
         color="black"/>
        </ListItem>
    ))
}

/*Esta funcion parsea el html*/
const generateHtml =(title, amount, icon) =>{
   return `<!DOCTYPE html>
          <html lang="en">
          <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Recibo de transaccion</title>
            <style>
                body {
                    font-size: 16px;
                    color: rgb(255, 196, 0);
                }
                h1 {
                    text-align: center;
                }
            </style>
          </head>
          <body>
                <h1>Aqui iria el recibo si tuviera uno.jpeg</h1>
          </body>
         </html>`
}

/*Esta funcion genera un recibo en pdf*/
export const generateInvoice = async (title, amount, icon) =>{
  html= generateHtml(title, amount, icon)
  if(html){
    try {
      const { uri } = await Print.printToFileAsync({ html })
      if (Platform.OS === "ios") {
        await Sharing.shareAsync(uri);
      } else {
        const permission = await MediaLibrary.requestPermissionsAsync();
        if (permission.granted) {
          
          await MediaLibrary.createAssetAsync(uri);
          await Sharing.shareAsync(uri);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
  
}


