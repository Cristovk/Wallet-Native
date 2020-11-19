import { StyleSheet } from 'react-native'


const style = StyleSheet.create({
    general:{
        backgroundColor: "#fff",
        height:'140%',
        width:'100%',
        top:0,
        left:0,
        position:'absolute'
    },titulo:{
        backgroundColor:'#02072f',
        flexDirection:'row',
        padding:5,
        alignItems:'center',
        marginBottom:10,
        borderColor:'#fff',
        borderTopWidth:1
        
    },
    subtitulo:{
        color:'#fff',
        marginLeft:15
    },
    itemDatos:{
        padding:5,
        borderBottomColor:'#ccc',
        borderBottomWidth:1
    },
    subItem:{
        flexDirection:'row',
        paddingLeft:10,
        alignItems:'center'
        // padding:5
    },
    tituloItem:{
        fontSize:18,
        marginBottom:5,
        paddingLeft:10,
        color:'#02072f',
    },
    dato:{
        marginLeft:6,
        color:'#02072f',
    },

    btnBorrar:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20
        
    },
    textoBtn:{
        color:'#fff',
        textAlign:'center',
        backgroundColor:'#02072f',
        width:120,
        padding:4,
        borderRadius:3
    }
   

})

export default style;