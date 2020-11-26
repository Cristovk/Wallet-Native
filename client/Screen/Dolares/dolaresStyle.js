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
      }
})

export default style;