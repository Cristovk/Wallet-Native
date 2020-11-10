import React from 'react'
import { View, Text, Image } from 'react-native'
import { Divider } from 'react-native-elements';

const DetalleDeTransaccion = ({ navigation }) => {
    return(
        <View>
            <View style={{backgroundColor: "#02072F", height: 200, alignItems:"center"}}>
                <View>
                <Image
                 source={{ uri: 'https://3.bp.blogspot.com/-Zzvuxxgv-lA/XNselEiCizI/AAAAAAABS5E/HDEhGUaOK_QGvCREWJ0rcFR4bxWlm58XwCLcBGAs/s200/4076.jpg' }}
                  style={{ width: 60, height: 60, borderRadius: 50 , marginTop:10}}
                 />
                </View>
               <View style={{marginTop:30}}>
                    <Text style={{color: "white",fontWeight: "bold",fontSize: 30,}}>Netflix Inc</Text>
               </View>
               <View style={{marginTop:5}}>
                    <Text style={{color: "white",fontWeight: "bold",fontSize: 35,}}>$560</Text>
               </View>
                
            </View>
            <Divider style={{ backgroundColor: "#FC7029" , height:3}} />
            <View style={{backgroundColor: "#02072F"}}>
                <Text style={{color: "white",fontWeight: "bold",fontSize: 20,}}>Fecha de compra?</Text>
            </View>
            <Divider style={{ backgroundColor: "#FC7029" , height:3}} />
            <View style={{backgroundColor: "#02072F"}}>
                <Text style={{color: "white",fontWeight: "bold",fontSize: 20}}>No se que mas ponerle xD</Text>
            </View>
            <Divider style={{ backgroundColor: "#FC7029" , height:3}} />
        
        
        </View>
    )
  
}

export default DetalleDeTransaccion