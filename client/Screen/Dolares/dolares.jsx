import React, { useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {View, Text, TouchableOpacity, Button} from "react-native"
import {Input} from "react-native-elements"
import {auth, storage} from "../../../firebase"
import axios from "axios"
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import style from "./dolaresStyle"



const DollarTab = createBottomTabNavigator()

const Dolares = () => {
    
    const [saldo, setSaldo] = useState(0)
    const [pesos,setPesos] = useState("")
    const [dolares , setDolares] = useState("")
    const [compra,setCompra] = useState("")
    const [venta, setVenta] = useState("")
    const [cambio,setCambio] = useState(false)

    const { primary, bg, secondary, text, dark } = useSelector((store) => store.color);
    
    return(
        <View style={[{ backgroundColor: bg }, style.container]} >
            <View style={{marginBottom:70}} >
                <Text style={{color: primary, fontSize: 50,textAlign:"center",marginBottom:10}}>Saldo</Text>
                <Text style={{color:primary, fontSize:40, textAlign:"center"}}>${saldo}</Text>
                <View style={{borderBottomColor:primary, borderBottomWidth:1,width: 200}}></View>
                <Text  style={{color:primary, fontSize:20,textAlign:"center"}}>ARS ${compra}</Text>
            </View>
            <View style={[{ backgroundColor: primary }, style.containerTwo]}>
                <DollarTab.Navigator tabBarOptions={{
                    labelStyle:{
                        fontSize:30,
                        textAlignVertical:"center",
                        marginBottom:5,
                    },
                    activeTintColor: dark ? text : primary,
                    inactiveTintColor: dark ? primary : secondary,
                    activeBackgroundColor: bg,
                    inactiveBackgroundColor: bg
                }}>
                    <DollarTab.Screen name='compra' component={CompraVenta} options={{tabBarLabel:'Comprar'}}/>
                    <DollarTab.Screen name='venta' component={CompraVenta}  options={{tabBarLabel:'Vender'}}/>
                </DollarTab.Navigator>
            </View>
        </View>
    )
}

const CompraVenta = ({route}) => {
    const compraventa = route.name
    const [value, setValue] = useState("")
    const { primary, bg, secondary, text, dark } = useSelector((store) => store.color);
    const handleChange = () =>{
        console.log('hola')
    }

    const dollarBuy = () => {
        console.log('chau')
    }

    const getDolarValue = async () => {
        const {data} = await axios.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
        if(data){
            setValue(data[0].casa[compraventa])
        }else console.log("no paso nada! ")
    }

    useEffect(() =>{
        getDolarValue()
    },[])
    
    console.log(route)
    return(
        <View style ={{backgroundColor:bg}}>
        <View style={[{ backgroundColor: primary }, style.containerTwo]}>
            <View >
                <Input placeholder= "USD$ 1" /* onChangeText={handleChange} *//>
                    <Text>{value}</Text>
                <Input placeholder='ARS$ 180' /* onChangeText={handleChange} *//>
            </View>
            <Button title='Confirmar' onPress={dollarBuy}/>
        </View>
        </View>
    )
}

export default Dolares;