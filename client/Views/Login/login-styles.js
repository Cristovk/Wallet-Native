import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 360,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    text:{
      fontSize:70,
      fontWeight:'600',
      color:'#fc7029'
    },
    input:{
      height:40,
      margin:10,
      width:300,
      padding:10
    },
    button:{
      width:150
    },
    viewLinks:{
      flexDirection:'row',
      justifyContent: 'space-between',
      width: 330
    },
    link:{
      color:'darkblue'
    },/* contentInput:{
      width:200,
      height:50,
      marginBottom: 70,
    } */
  });

export default styles;