import { StyleSheet } from 'react-native'


const style = StyleSheet.create({
    generalClave:{
        width:'100%',
        height:'100%',
        top:0,
        left:0,
        
        
    },
    generalView:{
        borderTopRightRadius: 10,
        borderTopLeftRadius:10,
        width:'100%',
        height:'100%',
        marginTop:25
        
       
       
    },
    busqueda:{
        flexDirection:'row',
        alignItems:'center',
        padding:20,
        borderTopColor:'#fff',
        borderTopWidth:1,
        justifyContent:'center',
        borderTopRightRadius: 10,
        borderTopLeftRadius:10
    },
    textoItem:{
        color:'#02072f',
    },
    lupa:{
      position:'relative',
      left:16,
    zIndex:100
    },
    input:{
         borderBottomWidth:1,
         borderBottomColor:'#fff',
         width:'90%',
         padding:5,
         color:'#fff',
         paddingLeft:22
        
    },
   
    itemAyuda:{
        padding:17,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:1
    },
    
    contBtn:{
      flexDirection:'row',
      justifyContent:'center',
      width:'100%',
      marginTop:30
    },
    btn:{
        backgroundColor:'#02072f',
        width:160,
        margin:'auto',
        padding:5,
        borderRadius:4,
    },
    textoBtn:{
        color:'#fff',
        textAlign:'center'
    },
    padre:{
        width:'100%',
        borderBottomWidth:1
    }
});


export default style;