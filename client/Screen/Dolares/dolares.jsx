import React, { useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {View, Text, TouchableOpacity, Button, TextInput, Alert} from "react-native"
import {Input} from "react-native-elements"
import {auth, storage} from "../../../firebase"
import axios from "axios"
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import style from "./dolaresStyle"
import { pagoServicio } from "../../Redux/movements";
import DollarChange from './dollarTab'



const Dolares = () => {
    
    const [saldo, setSaldo] = useState({})
    
    const [compra,setCompra] = useState("")
    const [venta, setVenta] = useState("")

    const user = useSelector(store => store.user.user)

    const { primary, bg, secondary, text, dark } = useSelector((store) => store.color);

    const getSaldo = async () => {
        try {
           const data = await storage.collection("Users").doc(auth.currentUser.uid).collection("Wallet").doc(user.cvu).get()
           const query = data.data()
           setSaldo(query)

        } catch (error) {
            console.log(error)
        }
    }

    const getDolarValue = async () => {
        const {data} = await axios.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
        if(data){
            setCompra(data[0].casa.compra)
            setVenta(data[0].casa.venta)
        }else console.log("no paso nada! ")
    }

    useEffect(() => {
        getSaldo();
        getDolarValue();
    },[])
    
    return(
        <View style={[{ backgroundColor: bg }, style.container]} >
            <View style={{marginBottom:70}} >
                <Text style={{color: primary, fontSize: 50,textAlign:"center",marginBottom:10}}>Balance</Text>
                <Text style={{color:primary, fontSize:40, textAlign:"center"}}>USD${saldo.dolares}</Text>
                <View style={{borderBottomColor:primary, borderBottomWidth:1,width: 200}}></View>
                <Text style={{color:primary, fontSize:20,textAlign:"center"}}>ARS ${compra ? parseFloat(saldo.dolares)*parseFloat(compra): 0}</Text>
            </View>
            <View style={[{ backgroundColor: primary }, style.containerTwo]}>
                <DollarChange setSaldo={setSaldo} saldo={saldo}/>
            </View>
        </View>
    )
}

export default Dolares;