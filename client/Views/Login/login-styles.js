import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    height:'100%',
    paddingTop:70,
    
  },
  
  text: {
    fontSize: 70,
    fontWeight: '600',
    color: '#fc7029'
  },
  button: {
    width: 150
  },
  viewLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 330
  },
  link: {
    color: 'darkblue'
  },
  contEye:{
    flexDirection:'row'
  },
  eye:{
    position:'absolute',
    right:5,
    top:8,
    zIndex:100,
    color:'#1c2383' 
  },
  inputEye:{
   width:'80%'
  },
  
  //ESTILOS DE PRUEBA
  
  general:{
 flexDirection:'row',
 justifyContent:'center',
 margin:8,
 width:'100%'
  },
  contInput:{
    flexDirection:'row',
    
    position:'relative',
    width:'80%',
    justifyContent:'center',
    zIndex:1000
  },
  contIcono:{
     position:'absolute',
     top:8,
     left:6
  },
  candado:{
   top:6
  },
  inputPrueba:{
    borderColor:'#fff',
    borderWidth:1,
    padding:6,
    borderRadius:3,
    backgroundColor:'#fff',
    borderColor:'#1c2383',
    borderWidth:1,
    width:'100%',
    paddingLeft:28,

   },
  inicial:{
    position:'absolute',
    top:6,
    left:28,
    color:'#1c2383',
    backgroundColor:'#fff'
  },
  etiqueta:{

    transform: [
      { translateY: -16},
      
    ],
    backgroundColor:'#fff',
    zIndex:100
  
  },
  contBtn:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:20,
    width:'100%'
  },
  btnLogin:{
    width:120,
    height:30,
    padding:5,
    borderRadius:8,
    backgroundColor:'#1c2383',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,

  },
  textoBtn:{
    color:'#fff',
    textAlign:'center'
  },
  textoAyuda:{
    flexDirection:'row',
    marginTop:80,
    justifyContent:'space-between',
    paddingHorizontal:20
  },
  contLogoMoon:{
    height:'30%',
    justifyContent:'center',
    flexDirection:'row'
   },
   logo:{
     width:260,
     height:260,
     borderRadius:100
   },
   menu:{
     height:'70%',
     paddingTop:60,
     borderTopRightRadius:10,
     borderTopLeftRadius:10
   },
   franja:{
     backgroundColor:'#1c2383',
     color:'#fff',
     borderBottomRightRadius:10,
     borderBottomLeftRadius:10,
     textAlign:'center',
     padding:5,
     position:'absolute',
     top:0,
     width:'100%',
     fontSize:18
   }
 
});

export default styles;