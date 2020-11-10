import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  inputContainer: {
    marginTop: 10,
    alignItems: 'center',
    width: '100%',
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 25,
  },
  input: {
    width: '75%',
    height: 30,
    borderRadius: 10,
    marginStart: 40
  },
  opciones: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  wifi: {
    paddingStart: 20
  },
  qr: {
    backgroundColor: "#FC7029",
    height: 50,
    width: 300,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10

  },
  qrContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    position: "relative"
  },
  lista: {
    flexDirection: "row",
    justifyContent: "space-between",
  }
})

export default style;