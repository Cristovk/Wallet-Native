import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    text:{
      fontSize:70,
      fontWeight:'600',
      color:'#fc7029'
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
    }
  });

export default styles;