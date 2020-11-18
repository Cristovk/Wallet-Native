import { StyleSheet } from 'react-native'


const style = StyleSheet.create({
    generalClave:{
        // backgroundColor: "#02072F",
        position:'absolute',
        width:'100%',
        top:0,
        left:0,
    },
    titulo:{
        flexDirection:'row',
        padding:5,
        alignItems:'center',
        backgroundColor: "#fc7029",
    },
    subtitulo:{
        color:'#fff',
        marginLeft:15
    },
    contraseñas:{
 
        justifyContent:'center',
        marginTop:20,
        alignItems:'center',
        textAlign:'center'
    },
    input:{
        width:'90%',
        borderBottomColor:'#fff',
        borderBottomWidth:1,
        padding:5,
        marginBottom:8,
        color:'#fff'
    },
    btnGuardar:{
        flexDirection:'row',
        justifyContent:'center',
        color:'#fff'
    },
    btn:{
        backgroundColor: "#fc7029",
        padding:3,
        marginTop:20,
        width:90,
        borderRadius:3,
        color: "#02072F",
        textAlign:'center',
        color:'#fff'
    },
    error:{
        width:'90%',
        backgroundColor:'red',
        color:'#fff',
        padding:2,
        borderRadius:2
    }

})

export default style;