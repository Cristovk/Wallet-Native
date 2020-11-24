
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  generaltransferencia: {
    backgroundColor: 'red',
    height: '100%'
  },
  parrafo: {
    color: 'grey'
  },
  contenedorimagenes: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",

  },
  titulotransferencia: {
    color: '#02072f',
    fontSize: 17,
    color: 'grey',
    fontWeight: 'bold',
    marginBottom: 14,
    marginTop: 10
  },
  imagenpunto: {
    width: 170,
    height: 40,
    margin: 6,
    borderRadius: 15
  },
  botonImagen: {
    alignItems: "center",
    width: 170,
    height: 60,
    margin: 6,
    marginTop: 50,
    borderColor: "grey",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.27,

    elevation: 3,
    borderRadius: 30
  }

})
export default styles;