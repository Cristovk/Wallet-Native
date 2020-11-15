/* ========================= IMPORTATIONS ======================== */
import db, { auth, storage } from "../../firebase";

/* ========================= CONSTANTS ============================ */
const ADD_CARD = "ADD_CARD";
const GET_CARDS = "GET_CARDS";
const DELETE_CARD = "DELETE_CARD";

/* =========================== STATE =========================== */
const initialState = {
  cards: {
    cvc: "",
    expiry: "",
    name: "",
    number: "",
    type: "",
  },
};
/* ========================== REDUCERS ========================== */
export default function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
      return {};
    case GET_CARDS:
      return {};
    case DELETE_CARD:
      return {};
    default:
      return state;
  }
}
/* =========================== ACTIONS ============================ */
export const saveTarjetas = async (tarjeta) => {
  try {
    const userId = await auth.currentUser.uid;
    storage
      .collection("Users")
      .doc(userId)
      .collection("creditCards")
      .doc()
      .set(tarjeta);
  } catch (error) {
    return error;
  }
};

export const getCards = async () => {
  const userId = await auth.currentUser.uid;
  let ref = storage.collection("Users").doc(userId).collection("creditCards");
  let tarjetas = await ref.get();
  let lista = [];
  for (const tarjeta of tarjetas.docs) {
    let card = await tarjeta.data();
    card.id = tarjeta.id;
    lista.push(card);
    console.log("LAcard", card);
    console.log(tarjeta.id, "=>", tarjeta.data());
  }
  return lista;
};

async function deleteTarjetas() {}
