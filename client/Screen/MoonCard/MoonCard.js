import React, {useState} from "react"
import {View, Text, Dimensions, TouchableOpacity, Alert, Clipboard, ScrollView } from "react-native"
import CreditCardDisplay from 'react-native-credit-card-display'
import { useSelector } from "react-redux";
import back from './BackCard.png'
import front from './Frontb.png'
import { orange } from "../../Global-Styles/colors";


function MoonCard({props}){
    const {user} = useSelector(store => store.user)
    const {primary,secondary,text,dark,bg} = useSelector(store => store.color)

    const copyToClipboard = () => {
    Clipboard.setString('4242424242424242');
    Alert.alert("Copiado en tu papelera ;)")
  };

    return (
        <ScrollView style={{backgroundColor:bg}}>
        <View style={{backgroundColor: primary,
                        justifyContent: "center",
                        alignItems: "center",}}>
          <Text style={{color: "white",
                        fontWeight: "bold",
                        fontSize: 20,
                        paddingBottom: 30,
                        marginBottom: 10}}>MoonCard</Text>
        </View>
        <View>
           
            <View style={{marginLeft:5, marginTop: 30}}>
            <CreditCardDisplay
            number={"4242 4242 4242 4242"}
            cvc={123}
            expiration="04/21"
            name= {"                       " + user.name.toUpperCase() + " " + user.lastName.toUpperCase()}
            flipped= {true}
            fontSize={20}
            height={250}
            width={(Dimensions.get("window").width)-10}
            frontImage={front}
            backImage={back}
            borderRadius={5}
            />
            </View>
            <View style={{flexDirection: "column",
                        marginTop:50,
                        alignItems: "center"}}>
                <TouchableOpacity onPress={copyToClipboard}
                                style={{alignItems: "center",
                                backgroundColor:orange,
                                width:"50%",
                                height:50,
                                borderRadius: 20}}>
                        <Text style={{padding:15, fontSize: 18}}>Copiar al Portapapeles</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    )
}

export default MoonCard