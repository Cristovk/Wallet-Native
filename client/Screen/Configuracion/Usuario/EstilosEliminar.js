import { StyleSheet } from 'react-native'


const style = StyleSheet.create({
    general:{
        width:'100%',
        top:'0',
        left:'0',
        position:'absolute',
         
      
    },titulo:{
        backgroundColor: "#fc7029",
        flexDirection:'row',
        padding:5,
        alignItems:'center',
        marginBottom:10
    },
    subtitulo:{
        color:'#fff',
        marginLeft:15
    },
    contCuadro:{
        flexDirection:'row',
      justifyContent:'center'
    },
    cuadro:{
        width:'95%',
        borderColor:'#fff',
        borderWidth:1,
        borderRadius:4,
        padding:10,
        textAlign:'center',
        marginTop:130
    },
    titEli:{
        fontWeight:"600",
        margin:10,
        color:'#fff'
    },
    input:{
       borderBottomColor:'#fff',
        borderBottomWidth:1,
        margin:10,
        padding:5,
        backgroundColor:'transparent',
        color:'#fff'
     },
    btnBorrar:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20
        
    },
    textoBtn:{
        color:'#fff',
        textAlign:'center',
        backgroundColor: "#fc7029",
        width:120,
        padding:4,
        borderRadius:3
    },
    contError:{
        justifyContent:'center',
        flexDirection:'row'
    },
    error:{
        width:'95%',
        backgroundColor:'red',
        color:'#fff',
        padding:2,
        borderRadius:2
    }
    
})

export default style;
