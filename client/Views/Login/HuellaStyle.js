import { StyleSheet } from 'react-native'
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { darkBlue, white } from '../../Global-Styles/colors';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    
  },
  containerTwo: {
    width: "100%",
    height: heightPercentageToDP("60%"),
    borderTopLeftRadius:15,
    borderTopRightRadius:15
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
    width: 130,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30
  }
});

export default styles;