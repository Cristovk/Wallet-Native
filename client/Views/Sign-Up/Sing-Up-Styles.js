import React from "react";
import { StyleSheet } from "react-native";
import { darkBlue, orange, grey, white } from "../../Global-Styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  icon: {
    width: 100,
    height: 100,
    marginTop: 50,
    marginHorizontal: "auto",
    shadowColor: darkBlue,
  },
  text: {
    fontSize: 26,
    color: orange,
    textAlign: "center",
  },
  inputs: {
    height: 40,
    borderColor: grey,
    borderWidth: 1,
    borderStyle: "solid",
    marginHorizontal: 35,
    marginVertical: 15,
    borderWidth: 1,
    paddingLeft: 15,
    borderRadius: 10,
  },
  orangeButton: {
    borderRadius: 10,
    color: white,
    marginHorizontal: 35,
    backgroundColor: orange,
    paddingHorizontal: 15,
  },
  darkBlueButton: {
    borderRadius: 10,
    color: white,
    marginHorizontal: 35,
    backgroundColor: darkBlue,
    paddingHorizontal: 15,
  },
  centered: {
    justifyContent: "center",
    flexDirection: "row",
  },
  button: {
    color: orange,
    borderRadius: 10,
    marginVertical: 35,
    marginHorizontal: 35,
  },
  date: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 18,
  },
  label: {
    marginHorizontal: 40,
    marginTop: 5,
    marginBottom: -10,
    fontSize: 20,
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
    height: 60,
  },
  pin: {
    borderWidth: 1,
    borderColor: grey,
    marginStart: 35,
    marginTop: 25,
    width: 200,
    height: 40,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  pinTexto: {
    fontSize: 32
  }
});
