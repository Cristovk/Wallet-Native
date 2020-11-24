import React from 'react';
import {View,Text,StyleSheet,Dimensions} from "react-native";
import {Icon} from 'react-native-elements';
import { useSelector } from "react-redux";

const Modelo = ({change,titulo,texto,volver,hide}) => {

  const alto= Dimensions.get('window').height;

  const { primary, secondary,dark,bg,text } = useSelector((store) => store.color);

    return (  
    <View style={[styles.general,{backgroundColor:dark ? bg:secondary}]}>
      <Text style={[styles.accionVolver,{backgroundColor:dark ? primary:secondary,borderBottomColor:dark?bg:'grey'}]} onPress={()=>change('')}>
      <View style={styles.volver}  >
        <Icon
          size={16}
          name="arrow-circle-left"
          type="font-awesome"
          color={dark ? bg : text}
          onPress={()=>{change('');hide()}}
         
        />
        <Text style={[styles.subtitulo,{color:dark ? bg : text}]} >{volver}</Text>
      </View>
      </Text>
      <View style={[styles.menu,{backgroundColor:primary,height:alto}]}>
      <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.parrafo}>{texto}</Text>
      </View>
      
        
      </View>                                                                                                         
    );
}
 
const styles = StyleSheet.create({
    
    general:{
        width:'100%',
        height:'100%',
        position:'absolute',
        top:0,
       left:0,
       zIndex:100
    },
    titulo:{
       color:'#000',
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold',
        marginTop:10
    },
    parrafo:{
        marginTop:10,
        letterSpacing:1,
        lineHeight:18,
        paddingHorizontal:20,
    },
    volver:{
        flexDirection:'row',
        padding:5,
        alignItems:'center',
        
    },
    subtitulo:{
        
        marginLeft:15,
    },
    accionVolver:{
      backgroundColor:'red',
      borderTopColor:'#fff',
      borderTopWidth:1,
    
      borderWidth:1
    },
    menu:{
      position:'absolute',
      width:'100%',
      height:'100%',
     borderTopRightRadius: 10,
     borderTopLeftRadius:10,
     zIndex:7000,
     top:50
    
     
    }
    
    
});

export default Modelo;



