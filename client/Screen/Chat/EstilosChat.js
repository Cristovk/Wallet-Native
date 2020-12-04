import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    general:{
        width:'100%',
        // height:'100%',
        top:0,
        left:0,
        justifyContent:'space-between',
        zIndex:100,
        position:'relative'
        
        
    },
    contMensajes:{
      height:'90%',
      borderTopRightRadius: 10,
      borderTopLeftRadius:10,
      paddingVertical:15,
      position:'relative',
    //   top:30,
      overflow:'hidden',
    },
    scroll:{
      height:300,
      padding:10,
     
    },
    contBot:{
        flexDirection:'row',
    },
    contUser:{
        flexDirection:'row',
        justifyContent:'flex-end',
        position:'relative',
        paddingRight:5
    },
    msjBot:{
      margin:10,
      padding:10,
      backgroundColor:'rgb(209, 209, 209)',
      width:220,
      borderRadius:14,
    },
    check:{
          position:'absolute',
          bottom:12,
          right:1
    },
    msjUser:{
        margin:10,
        padding:10,
        backgroundColor:'rgb(209, 209, 209)',
        backgroundColor: '#02072f',
        width:220,
        borderRadius:13,
        color:'#fff'
    },
    contInput:{
        borderTopColor:'#ccc',
        borderTopWidth:1,
        height:'10%',
        flexDirection:'row',
        alignItems:'center',
        zIndex:100
       
    },
    input:{
        width:'94%',
        paddingLeft:13,
     
        
    },
    imagen:{
        width:120,
        height:200,
        borderRadius:20
    },
    contCam:{
        position:'relative',
        left:2,
        top:0
    },
    contSend:{
        position:'relative',
        right:22
    },
    bienvenida:{
        
    },
    cerrarChat:{
        backgroundColor:'red',
        position:'absolute',
        right:-1,
        width:25,
        height:25,
        top:-1,
        zIndex:4000,
        borderRadius:100,
        paddingTop:4
    },
    contBienvenida:{
     alignItems:'center',
     justifyContent:'center'
    },
    fecha:{
       width:'65%',
        backgroundColor:'#25d366',
        color:'#fff',
        marginHorizontal:'auto',
        textAlign:'center',
        padding:4,
        paddingHorizontal:20,
        borderRadius:2,
        marginBottom:5
    },
    abandonar:{
        backgroundColor:'#ccc'
    }
 
});


export default styles;