import React from 'react';
import {View,Text,StyleSheet,Image,ScrollView} from "react-native";
import {Icon} from 'react-native-elements';


const Tarjeta = ({change,hide}) => {

    return (  
        <ScrollView style={styles.general}>
        <Text style={styles.accionVolver} onPress={()=>change('')}>
        <View style={styles.volver} >
          <Icon
            size={16}
            name="arrow-circle-left"
            type="font-awesome"
            color="#fff"
            onPress={()=>{change('');hide()}}
          />
          <Text style={styles.subtitulo} >Asociar mi tarjeta</Text>
        </View>
        </Text>

        <Text style={styles.parrafo}>1. Escoge en el menu la opción de Tarjetas</Text>
        <View style={styles.contImage}>
        <Image style={styles.imagen} source={require('../../../../assets/ayuda/paso1.jpg')}/>
        </View>

        <Text style={styles.parrafo}>2. Selecciona la opción de añadir tarjeta en la barra inferior</Text>

        <View style={styles.contImage}>
        <Image style={styles.imagen} source={require('../../../../assets/ayuda/paso2.jpg')}/>
        </View>
        <Text style={styles.parrafo}>3. Llena los campos con tus datos</Text>
        <View style={styles.contImage}>
        <Image style={styles.imagen} source={require('../../../../assets/ayuda/paso3.jpg')}/>
        </View>
        <Text style={styles.parrafo}>4. Para finalizar asocia tu tarjeta</Text>
        <View style={styles.contImage}>
        <Image style={styles.imagen} source={require('../../../../assets/ayuda/paso4.jpg')}/>
        </View>
        
        
        </ScrollView>                                                                                                         
    );
}
 
const styles = StyleSheet.create({
    
    general:{
        width:'100%',
        height:'100%',
        backgroundColor:'#fff',
        position:'absolute',
        top:0,
       left:0,
       
    },
    titulo:{
        color:'#02072f',
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold',
        marginTop:10
    },

    volver:{
        flexDirection:'row',
        padding:5,
        alignItems:'center',
        
    },
    subtitulo:{
        color:'#fff',
        marginLeft:15,
    },
    accionVolver:{
      backgroundColor:'red',
      borderColor:'#fff',
      borderTopColor:'#fff',
      backgroundColor:'#02072f',
      borderTopWidth:1,
    },
    parrafo:{
        marginTop:10,
        lineHeight:18,
        paddingHorizontal:20,
    },
    imagen:{
        width:180,
        height:320,
        
    },
    contImage:{
        flexDirection:'row',
        justifyContent:'center',
        marginVertical:10
    }
    
    
});

export default Tarjeta;



