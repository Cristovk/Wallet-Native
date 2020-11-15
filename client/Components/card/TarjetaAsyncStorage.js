// import AsyncStorage from "@react-native-community/async-storage";
import db, { auth, storage } from "../../../firebase";

// async function saveTarjetas(tarjeta) {
//   try {
//     const userId = await auth.currentUser.uid;
//     const newCard = storage
//       .collection("Users")
//       .doc(userId)
//       .collection("creditCards")
//       .doc()
//       .set(tarjeta);
//     console.log("tarjetasalvada", newCard);
//   } catch (error) {
//     console.log("Error de sintaxis", error);
//     return "Error de sintaxis";
//   }
// }

// const getCards = async () => {
//   const userId = await auth.currentUser.uid;
//   let ref = storage.collection("Users").doc(userId).collection("creditCards");
//   let tarjetas = await ref.get();
//   let lista = [];
//   for (const tarjeta of tarjetas.docs) {
//     let cosa = await tarjeta.data();
//     lista.push(cosa);
//     console.log("LACOSA", cosa);
//     console.log(tarjeta.id, "=>", tarjeta.data());
//   }
//   return lista;
// };

// export { /* saveTarjetas, */ getCards };

// const TARJETA_KEY = "@tarjeta:key";
// async function saveTarjetas(tarjetas) {
//   console.log("saveTarjetas", tarjetas);
//   try {
//     await AsyncStorage.setItem(TARJETA_KEY, JSON.stringify(tarjetas));
//     return JSON.stringify(tarjetas);
//   } catch (error) {
//     console.log("Error de sintaxis");
//     return "Error de sintaxis";
//   }
// }

// async function getTarjetas() {
// try {
// const item = await AsyncStorage.getItem(TARJETA_KEY);
// console.log("AsyncStorage", item);
// return JSON.parse(item);
// } catch (error) {
// console.log("Error de sintaxis", error);
// return null;
// }
// }

// async function deleteTarjetas() {
// try {
// await AsyncStorage.removeItem(TARJETA_KEY);
// const item = await AsyncStorage.getItem(TARJETA_KEY);
// return item == null ? "tarjeta removida" : "tarjeta no removida";
// } catch (error) {
// console.log("Error de sintaxis");
// return null;
// }
// }
