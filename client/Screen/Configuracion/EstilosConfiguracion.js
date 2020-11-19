import { StyleSheet } from 'react-native'


const style = StyleSheet.create({

    itemAjustes:{
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:11,
        borderColor:'rgb(243, 243, 243)',
        borderWidth:1
    },
    subitemAjustes:{
        flexDirection:'row',
    },
    contIcono:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#02072f',
        width:30,
        height:30,
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:100,
       
    },
    textoSubitem:{
        marginLeft:10
    },
    nombreSubitem:{
      fontWeight:'600',
      fontSize:17
    },
    flecha:{
        paddingLeft:1,
        paddingTop:2,
        width:22,
        height:22,

    },
    microfono:{
       paddingRight:40
    },
    
    general:{
     
        backgroundColor:'#fff',
        height:'100%',
        
    },
    titulogeneral:{
        color:'#fff',
        textAlign:'center',
        padding:5,
        marginBottom:12
    },
    titulo:{
        backgroundColor:'#fc7029',
        color:'#fff',
        padding:5
    },
    contclave:{
         backgroundColor: "#fff",
        flexDirection:'row',
        justifyContent:'space-between',
        color:'#fff',
        padding:5, 
        borderBottomColor:'#fff',
        borderBottomWidth:1,
        alignItems:'center',
        marginBottom:20
    },
    textoclave:{
        color:'#02072F',
        backgroundColor: "#fff",
    },
    basura:{
      width:30,
      height:30,
      backgroundColor: "#fc7029",
      borderRadius:100,
      paddingTop:7
    },
    contDark:{
        flexDirection:'row',
        justifyContent:'flex-end',
        backgroundColor: '#02072f',
        padding:5,
        alignItems:'center'
    },
    textoDark:{
        color:'#fff',
        marginRight:4
    }

})

export default style;