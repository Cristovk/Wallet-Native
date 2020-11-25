import React from "react";
import { StyleSheet } from "react-native";
import { darkBlue, orange, grey, white } from "../../Global-Styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    height:'100%'
 
  },
  icon: {
    width: 180,
    height: 180,
    marginTop: 10,
    marginHorizontal: "auto",
    shadowColor: darkBlue,
  },
  text: {
    fontSize: 26,
    color: orange,
    textAlign: "center",
  },
  inputs: {

    borderWidth: 1,
    borderStyle: "solid",
    marginHorizontal: 35,
    marginVertical: 15,
    borderWidth: 1,
    paddingLeft: 20,
    borderRadius: 6,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    color:'#000'
  },
  orangeButton: {
    borderRadius: 10,
    color: '#000',
    marginHorizontal: 35,
    paddingHorizontal: 15,
    backgroundColor: 'grey',
  
  },
  darkBlueButton: {
    borderRadius: 10,
    color: white,
    marginHorizontal: 35,
    paddingHorizontal: 15,
    backgroundColor: '#1c2383',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 20,

  },
  btnPrueba:{
    backgroundColor:'red'
  },
  centered: {
    justifyContent: "center",
    flexDirection: "row",
  },
  button: {
    color: orange,
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 35,
  },
  date: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 16,
    color: '#000',
  },
  label: {
    marginHorizontal: 40,
    marginTop: 5,
    marginBottom: -10,
    fontSize: 16,
    color:'#000',
    
  },
  separator: {
    borderTopWidth: 1,
    marginVertical: 15,
    borderColor: grey,
  },
  verticalSeparator: {
    borderEndWidth: 1,
    marginHorizontal: 10,
    borderColor: grey,
  },
  error: {
    color: "red",
    marginHorizontal: 40,
    marginTop: -15,
  },
  cumple: {
    marginHorizontal: 35,
    flexDirection: "row",
    justifyContent: "space-evenly",
   
  },
  pin: {
    borderWidth: 1,
    borderColor: '#1c2383',
    marginStart: 35,
    marginTop: 25,
    width: 200,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    
  },
  pinTexto: {
    fontSize: 24,
    color:'#1c2383'
  },
  formGroup:{
   position:'relative',
   width:'100%',
   justifyContent:'center',
  flexDirection:'row',
  marginHorizontal:'auto'
  },
  contIcono:{
  position:'absolute',
  top:46,
  left:42,

  zIndex:10000
  },
  subgroup:{
    width:'100%'
  },

  btnEnviar:{
  
    flexDirection:'row',
    justifyContent:'center',
    padding:10,
    borderRadius:4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 20,
    
  },
  textoBtn:{
    color:'#fff',
    
  },
  siguiente:{
    backgroundColor: '#1c2383',
  },
  anterior:{
    backgroundColor: 'grey',
  }
});
