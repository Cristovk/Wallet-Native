import { StyleSheet } from 'react-native'


const style = StyleSheet.create({
    generalClave:{
        backgroundColor: "#02072F",
        position:'absolute',
        width:'100%',
        height:'145%',
        top:0,
        left:0,
    },
    titulo:{
        flexDirection:'row',
        padding:5,
        alignItems:'center',
    },
    subtitulo:{
        color:'#fff',
        marginLeft:15
    },
    contraseñas:{
        // backgroundColor:'#fff',
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
        justifyContent:'center'
    },
    btn:{

        backgroundColor:'#fff',
        padding:3,
        marginTop:20,
        width:90,
        borderRadius:3,
        color: "#02072F",
        textAlign:'center'
    },
    error:{
        backgroundColor:'red',
        width:'90%',
        color:'#fff',
        padding:2,
        borderRadius:2
    },
    
});

export default style;