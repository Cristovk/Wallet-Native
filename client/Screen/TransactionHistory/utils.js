import React from "react";
import { ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Platform, Text } from "react-native";
import * as Print from "expo-print";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export const detalle = (
  fecha,
  monto,
  tipo,
  hacia,
  motivo,
  estado,
  operacion,
  empresa,
  categoria,
  sender,
  receiver,
  desde,
  card
) => {
  const { primary, secondary, bg, text, dark } = useSelector(
    (store) => store.color
  );
  let date = new Date(fecha).toLocaleDateString();
  let time = new Date(fecha).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const Operacion = operacion ? operacion[0].toUpperCase() + operacion.substring(1) : null;
  
    return  (
      <ScrollView>
        <ListItem
      containerStyle={{
        backgroundColor: primary,
        borderBottomColor: dark ? "grey" : secondary,
        borderBottomWidth: 1,
      }}
    >
    <ListItem.Content>
        <ListItem.Title>{"Operacion"}</ListItem.Title>
      </ListItem.Content>
      <Text>{Operacion}</Text>
    </ListItem>
      <ListItem
      containerStyle={{
        backgroundColor: primary,
        borderBottomColor: dark ? "grey" : secondary,
        borderBottomWidth: 1,
      }}
    >
      <ListItem.Content>
        <ListItem.Title>{"Estado"}</ListItem.Title>
      </ListItem.Content>
      <Text>{estado}</Text>
    </ListItem>
   {operacion === "transferencia" ? <View>
   <ListItem
      containerStyle={{
        backgroundColor: primary,
        borderBottomColor: dark ? "grey" : secondary,
        borderBottomWidth: 1,
      }}
    >
      <ListItem.Content>
        <ListItem.Title>{"Motivo"}</ListItem.Title>
      </ListItem.Content>
      <Text>{motivo}</Text>
    </ListItem>
   <ListItem
      containerStyle={{
        backgroundColor: primary,
        borderBottomColor: dark ? "grey" : secondary,
        borderBottomWidth: 1,
      }}
    >
      <ListItem.Content>
        <ListItem.Title>{categoria === "Tentrante" ? "Emisor" : "Receptor"}</ListItem.Title>
      </ListItem.Content>
      <Text>{categoria === "Tentrante" ? sender: receiver}</Text>
    </ListItem> 
    <ListItem
      containerStyle={{
        backgroundColor: primary,
        borderBottomColor: dark ? "grey" : secondary,
        borderBottomWidth: 1,
      }}
    >
      <ListItem.Content>
        <ListItem.Title>{"Cvu"}</ListItem.Title>
      </ListItem.Content>
      <Text>{categoria === "Tentrante" ? desde : hacia}</Text>
    </ListItem> 
   </View> : operacion === "recarga" ?

 <View>
   <ListItem
      containerStyle={{
        backgroundColor: primary,
        borderBottomColor: dark ? "grey" : secondary,
        borderBottomWidth: 1,
      }}
    >
      <ListItem.Content>
        <ListItem.Title>{"Metodo de recarga"}</ListItem.Title>
      </ListItem.Content>
      <Text>{categoria=== "recarga" ? "Recarga presencial": "Recarga con tarjeta de credito"}</Text>
    </ListItem> 
   <ListItem
      containerStyle={{
        backgroundColor: primary,
        borderBottomColor: dark ? "grey" : secondary,
        borderBottomWidth: 1,
      }}
    >
      <ListItem.Content>
        <ListItem.Title>{categoria=== "recarga" ? "Lugar de recarga" : "Tarjeta"}</ListItem.Title>
      </ListItem.Content>
      <Text>{categoria=== "recarga" ? empresa :empresa+" "+card}</Text>
    </ListItem> 
   </View>  : operacion === "servicio" ? <View>
   <ListItem
    containerStyle={{
      backgroundColor: primary,
      borderBottomColor: dark ? "grey" : secondary,
      borderBottomWidth: 1,
    }}
  >
    <ListItem.Content>
      <ListItem.Title>{"Tipo de servicio"}</ListItem.Title>
    </ListItem.Content>
    <Text>{categoria}</Text>
  </ListItem>
   
   </View> : operacion === "compra" ? <View>
   <ListItem
    containerStyle={{
      backgroundColor: primary,
      borderBottomColor: dark ? "grey" : secondary,
      borderBottomWidth: 1,
    }}
  >
    <ListItem.Content>
      <ListItem.Title>{"Lugar de compra"}</ListItem.Title>
    </ListItem.Content>
    <Text>{empresa}</Text>
  </ListItem> 
   </View> : <View>Unexpected error</View>}
      <ListItem
        containerStyle={{
          backgroundColor: primary,
          borderBottomColor: dark ? "grey" : secondary,
          borderBottomWidth: 1,
        }}
      >
      <ListItem.Content>
        <ListItem.Title>{"Fecha"}</ListItem.Title>
      </ListItem.Content>
      <Text>{date}</Text>
    </ListItem>
    <ListItem
      containerStyle={{
        backgroundColor: primary,
        borderBottomColor: dark ? "grey" : secondary,
        borderBottomWidth: 1,
      }}
    >
    <ListItem.Content>
      <ListItem.Title>{"Hora"}</ListItem.Title>
    </ListItem.Content>
    <Text>{time}</Text>
  </ListItem>
  <ListItem
    containerStyle={{
      backgroundColor: primary,
      borderBottomColor: dark ? "grey" : secondary,
      borderBottomWidth: 1,
    }}
  >
  <ListItem.Content>
    <ListItem.Title>{"Monto"}</ListItem.Title>
  </ListItem.Content>
  <Text>{`$ ${monto}`}</Text>
</ListItem>
  </ScrollView>
    )
  }
    
       

/*Esta funcion genera un recibo en pdf*/
export const generateInvoice = async (date, time,monto,tipo,hacia,motivo,estado,operacion,empresa,categoria,sender,receiver, desde, card) => {
  console.log("En Generate Invoice",categoria)
 
  const cabecera = `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,700&display=swap" rel="stylesheet">
    <style>
      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: "Roboto";
      }
      .recibo{
        padding: 0 30px;
        border: 1px solid #000!important;
        width: 45%;
    
        align-content: center;
      }
      .operacion {
        height: 50px;
        position: relative;
        text-align: center;
        padding: 10px;
        border-bottom: 1px solid #000;
        margin: 0;
      }
      .contenedor {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: row;
      }
     /*  .nose{
        
      } */
      .elcontenedordellogo{
        display: flex;
        justify-content: center;
      }
      .logo {
        left: 40%;
        top: -8px;
        position: absolute;
        width: 75px;
        height: 75px;
      }
      .titulo {
        color: #ccc;
        margin: 10px 0;
      }
      .notitulo{
        margin: 5px 0;
      }
      .operacion2 {
       
        height: 100px;
        display: flex;
        justify-content: center;
        text-align: center;
        border-bottom: 1px solid #000;
        margin: 0;
      }
      .logo2 { 
        position: relative;
        top: -20px;
        border-radius: 100%;
        width: 150px;
        height: 150px;
      }
      .barcode {
        display: flex;
        justify-content: center;
      }
    </style>
  </head>
  <body>
    <div class="contenedor">
      <div class="recibo">
        <div class="operacion2">
          <img class = "logo2" src="https://i.imgur.com/zj4SzQn.png" alt="logo">
        </div>
      <section class="nose">
      
        <p class = "titulo">Operacion</p>
        <p class = "notitulo">${operacion}</p>
          <p class = "titulo">importe</p>
          <p class = "notitulo">$${monto}</p>`
  
          const footer = `<p class = "titulo">Fecha</p>
            <p class = "notitulo">${date}</p>
            <p class = "titulo">Hora</p>
            <p class = "notitulo">${time}</p>
            <p class = "titulo">**S.E.U.O**</p>
            </section>
            <div class="barcode">
              <img class = "code" src="https://i.imgur.com/5QWBbed.png" alt="logo">
            </div>
            </div>
          </div>   
          </body>
          </html>`
  let html 
  if(categoria === "Tentrante"){
    const loquefalta = `<p class="titulo">Origen</p>
    <p class = "notitulo">${sender}</p>
    <p class="titulo">CVU</p>
    <p class = "notitulo">${desde}</p>
    <p class="titulo">Motivo</p>
    <p class = "notitulo">${motivo}</p>
  `
    html= cabecera+loquefalta+footer
  }
  if(categoria === "Tsaliente"){
    const loquefalta = `
    <p class="titulo">Destino</p>
    <p class = "notitulo">${receiver}</p>
    <p class="titulo">CVU</p>
    <p class = "notitulo">${hacia}</p>
    <p class="titulo">Motivo</p>
    <p class = "notitulo">${motivo}</p>
    `
    return  cabecera + loquefalta +footer
  }
  if(categoria === "recarga"){
    const loquefalta = `
    <p class="titulo">Metodo de recarga</p>
    <p class = "notitulo">Recarga presencial</p>
    <p class="titulo">Lugar de recarga</p>
    <p class = "notitulo">${empresa}</p>
    `
    html =  cabecera + loquefalta +footer
  }
  if(categoria === "recarga con tarjeta"){
    const loquefalta = `
    <p class="titulo">Metodo de recarga</p>
    <p class = "notitulo">Recarga con tarjeta</p>
    <p class="titulo">Tarjeta</p>
    <p class = "notitulo">${empresa +""+card}</p>
    `
    html = cabecera + loquefalta +footer
  }
  if(operacion === "compra"){
    const loquefalta = `
    <p class="titulo">Lugar de compra</p>
    <p class = "notitulo">${empresa}</p>
    <p class="titulo">Categoria</p>
    <p class = "notitulo">${categoria}</p>
    `
    html = cabecera + loquefalta +footer
  }
  if(operacion === "servicio"){
    const loquefalta = `
    <p class="titulo">Empresa</p>
    <p class = "notitulo">${empresa}</p>
    <p class="titulo">Tipo de servicio</p>
    <p class = "notitulo">${categoria}</p>
    `
    html = cabecera + loquefalta +footer
  }
  if(categoria === "compradolar"){
    const loquefalta = `
    <p class="titulo">Vendiste</p>
    <p class = "notitulo">${monto}</p>
    <p class="titulo">Obtuvise</p>
    <p class = "notitulo">${dolares}</p>
    `
    html = cabecera + loquefalta +footer
  }
  if(categoria === "ventadolar"){
    const loquefalta = `
    <p class="titulo">Vendiste</p>
    <p class = "notitulo">${dolares}</p>
    <p class="titulo">Obtuviste</p>
    <p class = "notitulo">${monto}</p>
    `
    html = cabecera + loquefalta +footer
  }
  
  if (html) {
    try {
      const { uri } = await Print.printToFileAsync({ html });
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
};