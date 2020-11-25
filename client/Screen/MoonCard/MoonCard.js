import React, {useState} from "react"
import {View, Text, Dimensions, TouchableOpacity, Alert, Clipboard, Icon} from "react-native"
import CreditCardDisplay from 'react-native-credit-card-display'
import { useSelector } from "react-redux";
import back from './BackCard.png'
import front from './Frontb.png'
import { CardView } from "react-native-credit-card-input";


function MoonCard({navigation}){
    const {user} = useSelector(store => store.user)
    const {primary,secondary,text,dark,bg} = useSelector(store => store.color)
    const movements = useSelector((store) => store.movementsReducer);

    const copyToClipboard = () => {
    Clipboard.setString('4242424242424242');
    Alert.alert("Copiado en tu papelera ;)")
  };

  function formatNumber(num) {
    let number =
      num && num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    return number;
  }

const alto = Dimensions.get("window").height

    return (
        <View style={{backgroundColor:bg, height: alto}}>
           <View
        style={{
          backgroundColor: bg,
          height: 140,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: primary,  fontWeight: "bold",
                        fontSize: 20,
                        paddingBottom: 10,
                        marginBottom: 10,}}>Saldo en tu Tarjeta:</Text>
        <Text style={{ color: primary, fontWeight: "bold",
                        fontSize: 30,
                        paddingBottom: 10,
                        marginBottom: 10, }}>
          ${formatNumber(movements.saldo === null ? 0 : movements.saldo)}
        </Text>
      </View>
        <View style={{backgroundColor: primary, height: "100%", borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
           
            <View style={{marginLeft:5, marginTop: 50}}>
            <CreditCardDisplay
            number={"4242 4242 4242 4242"}
            cvc={123}
            name= {"                 " + user.name.toUpperCase() + " " + user.lastName.toUpperCase()}
            flipped= {true}
            cardStyles={{}}
            fontSize={23}
            height={250}
            width={(Dimensions.get("window").width)-10}
            frontImage={front}
            backImage={back}
            borderRadius={5}
            />
            {/* <CardView
                        name={user.name.toUpperCase() + " " + user.lastName.toUpperCase()}
                        focused="number"
                        number={"4242 4242 4242 4242"}
                        expiry={"04/21"}
                        scale={1.3}
                        imageFront={front}
                      /> */}
            </View>
            <View style={{flexDirection: "column",
                        marginTop:50,
                        alignItems: "center",}}>
                <TouchableOpacity onPress={copyToClipboard}
                                style={{alignItems: "center",
                                backgroundColor:secondary,
                                width:"50%",
                                height:50,
                                margin: 10,
                                borderRadius: 10}}>
                        <Text style={{padding:15, fontSize: 18, color: text}}>Copiar al Portapapeles</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Recargas")}
                                style={{alignItems: "center",
                                backgroundColor:bg,
                                width:"50%",
                                height:50,
                                margin: 10,
                                borderRadius: 10}}>
                        <Text style={{padding:15, fontSize: 18, color: "white"}}>Recargar</Text>
                </TouchableOpacity>
            </View>
            
        </View>
        </View>
    )
}



export default MoonCard