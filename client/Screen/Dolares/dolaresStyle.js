import {StyleSheet} from "react-native"
import {heightPercentageToDP} from "react-native-responsive-screen"

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        
      },containerTwo: {
        width: "100%",
        height: heightPercentageToDP("60%"),
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
      },input:{
         width:"30%" 
      },contentInputs:{
        marginTop:20,
         flexDirection:"row", 
         justifyContent:"space-around",
         alignItems:"center"
      },
})

export default style;