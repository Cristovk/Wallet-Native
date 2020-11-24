import { StyleSheet } from 'react-native'
import { darkBlue, white } from '../../Global-Styles/colors';
import {widthPercentageToDP,heightPercentageToDP} from "react-native-responsive-screen"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    
  },
  containerTwo: {
    width:"100%",
    height: heightPercentageToDP("20%"),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  title: {
    marginBottom: 40,
    alignItems: "center"
  },
  texto: {
    fontSize: 17
  },
  botonContainer: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  boton: {
    width: 100,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  contentInput:{
    width: "20%",
  },
  input:{
    textAlign:"center",
    fontSize:30,
    marginTop:30,
  }

});

export default styles;