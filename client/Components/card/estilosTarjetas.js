import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { darkBlue, orange, grey, white } from "../../Global-Styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:"100%"
  },
  title: {
    fontSize: 24,
    marginHorizontal: 25,
    textAlign: "center",
  },
  button: {
    borderRadius: 10,
    color: white,
    marginVertical: 35,
    marginHorizontal: 35,
  },
  blueButton: {
    borderRadius: 10,
    color: white,
    marginHorizontal: 10,
    backgroundColor: "#1C2383",
    paddingHorizontal: 15,
  },
  grayButton: {
    borderRadius: 10,
    marginHorizontal: 35,
    paddingHorizontal: 15,
  },
  separator: {
    borderTopWidth: 1,
    marginVertical: 15,
    borderColor: grey,
  },
  h3: {
    textAlign: "center",
    fontSize: 18,
    marginVertical: 15,
  },
  rowButtons: {
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "space-between",
    
  },
});
export const estilos = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 60,
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
  buttonRow: {
    flex: 1,
    flexDirection: "row",
  },

  delete: {
    backgroundColor: darkBlue,
    color: darkBlue,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    fontWeight: "bold",
  },
  modalView:{
    margin:20,
    borderRadius: 30,
    borderColor: "black",
    borderWidth: 1, 
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width:0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
});
