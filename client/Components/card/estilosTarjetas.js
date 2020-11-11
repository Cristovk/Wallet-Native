import { StyleSheet } from "react-native";
import { darkBlue, orange, grey, white } from "../../Global-Styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  title: {
    fontSize: 24,
    marginHorizontal: 35,
  },
  button: {
    borderRadius: 10,
    color: white,
    marginVertical: 35,
    marginHorizontal: 35,
  },
  separator: {
    borderTopWidth: 1,
    marginVertical: 15,
    borderColor: grey,
  },
});
