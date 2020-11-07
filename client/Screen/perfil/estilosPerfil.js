import { StyleSheet} from 'react-native';



const styles = StyleSheet.create({
    generalperfil:{
     backgroundColor:'#fff',
     height:'100vh'
    },
    contenedorimagen: {
        borderColor: '#ccc',
        borderWidth: '1px',
        width: '100px',
        height: '100px',
        marginTop: '10px',
        marginHorizontal: 'auto',
        borderRadius: '100%',
        position: 'relative'

    },
    imagenperfil: {
        width: '96%',
        height: '96%',
        borderColor: '#ccc',
        borderWidth: '1px',
        position: 'absolute',
        borderRadius: '100%',
        left: 2,
        top: 2
    },
    camara:{
        backgroundColor:'rgba(0,0,0,.7)',
        width:'35px',
        height:'35px',
        paddingTop:'9px',
        fontSize:'1px',
        borderRadius:'100%',
        right:'4px',
        position:'absolute'
    },
    nombreusuario:{
        textAlign:'center',
        fontSize:16,
        margin:10,
        fontWeight:'600',
        color: '#02072f',
    },
    titulodatos:{
        color:'red',
        paddingLeft:'10px',
        fontWeight:'600',
        color: '#02072f',
        marginBottom:'6px',
        marginTop:'15px'
    },
    link:{
        color:'#fff'
    },
    btnvolver:{
        backgroundColor:'#02072f',
        width:'80px',
       marginHorizontal:'auto',
       textAlign:'center',
       padding:'2px',
       marginTop:'5px',
       borderRadius:'2px'
    }
})
export default styles;