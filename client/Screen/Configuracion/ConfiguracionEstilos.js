import { StyleSheet } from 'react-native'


const style = StyleSheet.create({
    general:{
        backgroundColor: "#02072F",
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
      backgroundColor: "#02072F",
    //   backgroundColor:'rgba(0,0,0,.7)',
      borderRadius:100,
      paddingTop:7
    }

})

export default style;