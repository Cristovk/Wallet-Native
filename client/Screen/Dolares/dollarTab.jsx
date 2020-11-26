import React, { useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {View, Text, TouchableOpacity, Button, TextInput, Alert} from "react-native"
import {Input} from "react-native-elements"
import {auth, storage} from "../../../firebase"
import axios from "axios"
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import style from "./dolaresStyle"
import styleBtn from "../../Global-Styles/BotonGrande"
import TransferenciasDolar from './transferirDolar'
import { color } from "react-native-reanimated";

const DollarTab = createBottomTabNavigator()

const DollarChange = (props) => {
    
    const user = useSelector(store => store.user.user)

    const { primary, bg, secondary, text, dark } = useSelector((store) => store.color);
    return(
        <DollarTab.Navigator tabBarOptions={{
            labelStyle:{
                fontSize:30,
                textAlignVertical:"center",
                marginBottom:5,
                height:70,
                paddingTop:20
            },
            activeTintColor: dark ? text : primary,
            inactiveTintColor: dark ? primary : secondary,
            activeBackgroundColor: bg,
            inactiveBackgroundColor: bg
        }}>
            <DollarTab.Screen name='venta' component={CompraVenta} initialParams={props} options={{tabBarLabel:'Comprar'}}/>
            <DollarTab.Screen name='compra' component={CompraVenta}  initialParams={props} options={{tabBarLabel:'Vender'}}/>
            <DollarTab.Screen name='TransfDolar' component={TransferenciasDolar} options={{tabBarLabel: "Transferir"}} />
        </DollarTab.Navigator>
    )
}

const CompraVenta = ({route}) => {
    const compraventa = route.name
    const {setSaldo, saldo} = route.params
    const [saldoHijo, setSaldoHijo] = useState({})
    const [moneda,setMoneda] = useState({
        dolares:"",
        pesos: ""
    })
    const [valor, setValor] = useState("")
    // const [saldo, setSaldo] = useState({})
    const { primary, bg, secondary, text, dark } = useSelector((store) => store.color);
    const user = useSelector(store => store.user.user)

    const handleChange = (value,name) =>{
        console.log("multi",value*valor)
        if(name === 'dolares'){
            console.log("entra en dolares")
            setMoneda({
                dolares : value,
                pesos: value*valor
            })
            console.log(moneda)
        } else {
            console.log("entra en pesos ");
            setMoneda({
                dolares: value/valor,
                pesos: value
            })
        }
    }

    const dollarBuy = () => {
        console.log("saldo", saldo);
        
        if(compraventa === "compra" && Number(saldoHijo.dolares)>= Number(moneda.dolares) ){
             const query = storage.collection("Users").doc(auth.currentUser.uid).collection("Wallet").doc(user.cvu).set({
           saldo: Number(saldoHijo.saldo) + Number(moneda.pesos),
           dolares: Number(saldoHijo.dolares) - Number(moneda.dolares)
         }).then(compra => {
             Alert.alert('Venta exitosa')
            const query1 = storage.collection("Users").doc(auth.currentUser.uid).collection("Wallet").doc(user.cvu).collection("Movimientos").add({
                operacion: "Venta",
                estado: "Completada",
                fecha: Date.now(),
                monto: Number(moneda.pesos),
                dolares: Number(monto.dolares) ,
                categoria: "ventadolar"

             })
             .then(res => {
                
             })
             .catch(err => {
                 console.log("err",err)
             })
             console.log("idddddd", query1)
            })
            getSaldo()
        }else if(compraventa==="venta" && Number(saldoHijo.saldo)>= Number(moneda.pesos) ){
            const query = storage.collection("Users").doc(auth.currentUser.uid).collection("Wallet").doc(user.cvu).set({
                saldo: Number(saldoHijo.saldo) - Number(moneda.pesos),
                dolares: Number(saldoHijo.dolares) + Number(moneda.dolares)
              }).then(venta => {
                  Alert.alert('Compra exitosa')
                  const query1 =  storage.collection("Users").doc(auth.currentUser.uid).collection("Wallet").doc(user.cvu).collection("Movimientos").add({
                    operacion: "Compra",
                    estado: "Completada",
                    fecha: Date.now(),
                    monto: Number(moneda.pesos),
                    dolares: Number(moneda.dolares) ,
                    categoria: "compradolar"
   
                }).then(res => {
                    console.log("res")
                })
                .catch(err => {
                    console.log("err",err)
                })
            })
            getSaldo()
        }else{
            Alert.alert("Saldo insuficiente")
        }
    }

    const getSaldo = async () => {
        try {
           const data = await storage.collection("Users").doc(auth.currentUser.uid).collection("Wallet").doc(user.cvu).get()
           const query = data.data()
           setSaldo(query)
           setSaldoHijo(query)

        } catch (error) {
            console.log(error)
        }
    }

    const getDolarValue = async () => {
        const {data} = await axios.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
        if(data){
            setValor(parseFloat(data[0].casa[compraventa]))
        }else console.log("no paso nada! ")
    }

    useEffect(() =>{
        getDolarValue()
        getSaldo()
    },[])
    
    console.log(route)
    return(
        <View style ={{backgroundColor:bg}}>
        <View style={[{ backgroundColor: primary }, style.containerTwo]}>
            <View style={{marginTop:10,borderBottomColor:bg, borderBottomWidth:8, width:"50%",alignSelf:"center",borderRadius:20}}></View>
            <View style={style.contentInputs} >
                <View style={{width:"40%"}}>
                   <Input style={style.input} name='dolares' placeholder={`USD$ ${moneda.dolares ? moneda.dolares : 1}`} placeholderTextColor='black' value={(moneda.dolares)} onChangeText={(e) =>handleChange(e, "dolares")}/>  
                </View>
                    <Text style={{fontSize:50}}>=</Text>
                <View style={{width:"40%"}}>
                     <Input style={style.input} name='pesos' placeholder={`ARS$ ${moneda.pesos}`} placeholderTextColor='black' value={moneda.pesos} editable={false} onChangeText={(e) =>handleChange(e, "pesos")}/> 
                </View>
                    
            </View>
                <View style={styleBtn.container} >
                    <TouchableOpacity style={[{backgroundColor:secondary},styleBtn.boton]} >
                        <Text style={[dark ? {color:primary} : {color:"black"} ,styleBtn.texto]} onPress={dollarBuy}>Confirmar</Text>
                    </TouchableOpacity>
            </View>
            {/* <View style={styleBtn.container} >
                    <TouchableOpacity style={[{backgroundColor:secondary},styleBtn.boton]} >
                        <Text style={[dark ? {color:primary} : {color:"black"} ,styleBtn.texto]} onPress={}>Transferencias</Text>
                    </TouchableOpacity>
            </View> */}
        </View>
        </View>
    )
}

export default DollarChange


