/* ========================= IMPORTATIONS ======================== */
import db, { auth, storage } from "../../firebase";
/* ========================= CONSTANTS ============================ */
const ADD_CARD = "ADD_CARD";
const GET_CARDS = "GET_CARDS";
const DELETE_CARD = "DELETE_CARD";

/* =========================== STATE =========================== */
const initialState = {
  cards: [],
};
/* ========================== REDUCERS ========================== */
export default function cardsReducer(state = initialState, action) {
  console.log("Redux", action.payload);
  switch (action.type) {
    // case ADD_CARD:
    //   return {
    //     ...state,
    //     cards: [...cards, action.payload],
    //   };
    case GET_CARDS:
      return {
        cards: [...cards, action.payload],
      };
    case DELETE_CARD:
      return {};
    default:
      return state;
  }
}
/* =========================== ACTIONS ============================ */
export const saveTarjetas = (dispatch) => async (card) => {
  dispatch({
    type: ADD_CARD,
    payload: card,
  });
  try {
    const userId = await auth.currentUser.uid;
    storage
      .collection("Users")
      .doc(userId)
      .collection("creditCards")
      .doc()
      .set(card);
  } catch (error) {
    return error;
  }
};
const dispatchGetCards = (lista) => (dispatch) => {
  dispatch({
    type: GET_CARDS,
    payload: lista,
  });
};
export const getCards = async () => {
  const userId = await auth.currentUser.uid;
  let ref = storage.collection("Users").doc(userId).collection("creditCards");
  let tarjetas = await ref.get();
  let lista = [];
  for (const tarjeta of tarjetas.docs) {
    let cosa = await tarjeta.data();
    lista.push(cosa);
  }
  dispatchGetCards(lista);
  return lista;
};

async function deleteTarjetas() {}
