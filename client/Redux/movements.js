/* ========================= IMPORTATIONS ======================== */
const Axios = require("axios");

/* ========================= CONSTANTS ============================ */
const GET_DAY_MOV = "GET_DAY_MOV";
const GET_WEEK_MOV = "GET_WEEK_MOV";
const GET_MONTH_MOV = "GET_MONTH_MOV";
const SAVE_ALL_MOV = "SAVE_ALL_MOV";
const SAVE_NEW_MOV = "SAVE_NEW_MOV";
const SAVE_SALDO = "SAVE_SALDO";
const SAVE_CVU = "SAVE_CVU";
const SAVE_TRANSFER = "SAVE_TRANSFER";

const today = new Date(Date.now());
const weekInMiliseconds = 604800000;
const monthInMiliseconds = 2592000000;
const weekDifference = today - weekInMiliseconds;
const monthDifference = today - monthInMiliseconds;
/* =========================== STATE =========================== */
const initialState = {
  allMovements: [],
  dayMovements: [],
  weekMovements: [],
  monthMovements: [],
  transfers: [],
  saldo: "",
  CVU: "",
};
/* ========================== REDUCERS ========================== */
export default function movementsReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_NEW_MOV:
      return {
        ...state,
        allMovements: [...state.allMovements, ...action.payload],
      };
    case SAVE_SALDO:
      let saldo = action.payload;
      return {
        ...state,
        saldo: saldo,
      };
    case SAVE_CVU:
      let CVU = action.payload;
      return {
        ...state,
        CVU: CVU,
      };
    case SAVE_TRANSFER:
      return {
        ...state,
        transfers: [...action.payload],
      };
    case SAVE_ALL_MOV:
      return {
        ...state,
        allMovements: [...action.payload],
      };
    case GET_DAY_MOV:
      return {
        ...state,
        dayMovements: [...action.payload],
      };
    case GET_WEEK_MOV:
      return {
        ...state,
        weekMovements: [...action.payload],
      };
    case GET_MONTH_MOV:
      return {
        ...state,
        monthMovements: [...action.payload],
      };
    default:
      return { ...state };
  }
}
/* =========================== ACTIONS ============================ */
export const saveCVU = (CVU) => (dispatch) => {
  dispatch({
    type: SAVE_CVU,
    payload: CVU,
  });
};

export const saveAllMovements = (allMovements) => (dispatch) => {
  dispatch({
    type: SAVE_ALL_MOV,
    payload: allMovements,
  });
};

export const saveSaldo = (saldo) => (dispatch) => {
  dispatch({
    type: SAVE_SALDO,
    payload: saldo,
  });
};

export const getDayMovements = (allMovements) => (dispatch) => {
  const formatingdate = (date) => {
    let hoy = {
      dia: new Date(date).getDate(),
      mes: new Date(date).getMonth() + 1,
      año: new Date(date).getFullYear(),
    };
    return hoy;
  };
  let aujourdui = {
    dia: today.getDate(),
    mes: today.getMonth() + 1,
    año: today.getFullYear(),
  };
  let todayMovements =
    allMovements.length === 0 || allMovements[0] == null
      ? []
      : allMovements.filter(
          (m) =>
            formatingdate(m.fecha).dia === aujourdui.dia &&
            formatingdate(m.fecha).mes === aujourdui.mes &&
            formatingdate(m.fecha).año === aujourdui.año
        );
  dispatch({
    type: GET_DAY_MOV,
    payload: todayMovements,
  });
};

export const getWeekMovement = (allMovements) => (dispatch) => {
  let weekMovements = allMovements.length
    ? allMovements.filter((m) => m.fecha > weekDifference)
    : [];
  dispatch({
    type: GET_WEEK_MOV,
    payload: weekMovements,
  });
};

export const getMonthMovements = (allMovements) => (dispatch) => {
  let monthMovements = allMovements.length
    ? allMovements.filter((m) => m.fecha > monthDifference)
    : [];
  dispatch({
    type: GET_MONTH_MOV,
    payload: monthMovements,
  });
};

export const saveTransfers = (transfers) => (dispatch) => {
  dispatch({
    type: SAVE_TRANSFER,
    payload: transfers,
  });
};

export const transferir = async (data) => {
  return Axios.post(
    "https://us-central1-henrybankfire.cloudfunctions.net/sendMoney",
    data
  )
    .then((x) => x.data)
    .catch((err) => console.log(err));
};

export const pagoServicio = async (data) => {
  return Axios.post(
    "https://us-central1-henrybankfire.cloudfunctions.net/addPurchase",
    data
  )
    .then((x) => x.data)
    .catch((err) => console.log(err));
};

// export const test = async () => {
//   const userId = await auth.currentUser.uid;
//   Axios.post("https://us-central1-henrybankfire.cloudfunctions.net/sendMoney", {
//     amount: 100000,
//     senderId: userId,
//     receivercvu: "23768945",
//     motivo: "demo para diego",
//   })
//     .then((x) => console.log("succes", x.data))
//     .catch((err) => console.log("error", err));
// };
