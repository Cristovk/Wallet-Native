import AsyncStorage from "@react-native-community/async-storage";
import db, { functions, storage } from "../../../firebase";

const TARJETA_KEY = "@tarjeta:key";
// async function saveTarjetas(tarjetas) {
//   console.log("saveTarjetas", tarjetas);
//   try {
//     const newCard = await storage.collection('Users').doc().collection('creditCards').doc();
//     return JSON.stringify(tarjetas);
//   } catch (error) {
//     console.log("Error de sintaxis");
//     return "Error de sintaxis";
//   }
// }
async function saveTarjetas(tarjetas) {
  console.log("saveTarjetas", tarjetas);
  try {
    await AsyncStorage.setItem(TARJETA_KEY, JSON.stringify(tarjetas));
    return JSON.stringify(tarjetas);
  } catch (error) {
    console.log("Error de sintaxis");
    return "Error de sintaxis";
  }
}
async function getTarjetas() {
  try {
    const item = await AsyncStorage.getItem(TARJETA_KEY);
    console.log("AsyncStorage", item);
    return JSON.parse(item);
  } catch (error) {
    console.log("Error de sintaxis");
    return null;
  }
}
async function deleteTarjetas() {
  try {
    await AsyncStorage.removeItem(TARJETA_KEY);
    const item = await AsyncStorage.getItem(TARJETA_KEY);
    return item == null ? "tarjeta removida" : "tarjeta no removida";
  } catch (error) {
    console.log("Error de sintaxis");
    return null;
  }
}

export { saveTarjetas, getTarjetas, deleteTarjetas };
