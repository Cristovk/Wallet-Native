import { storage, auth } from "../../firebase";

// CONSTANTS
const REGISTER_USER = "REGISTER_USER";
const SAVE_USER_DATA = "SAVE_USER_DATA";
const LOGEADO = "LOGEADO";

// STATE
const initialState = {
  userAuth: {
    email: "",
    password: "",
  },
  userData: {
    id: "",
    name: "",
    lastname: "",
    phone: "",
    dni: "",
    cuil: "",
  },
  user: [],
  contacts:[],
};

// REDUCER
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        userAuth: {
          ...state.userAuth,
          [action.payload.name]: action.payload.value,
        },
      };
    case SAVE_USER_DATA:
      let data = action.payload;
      return {
        ...state,
        userData: {
          ...state.userData,
          ...data,
        },
      };
    case LOGEADO:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

// ACTIONS
export const addUser = (name, value) => (dispatch) => {
  try {
    dispatch({
      type: REGISTER_USER,
      payload: {
        name: name,
        value: value,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const saveData = (obj) => (dispatch) => {
  try {
    dispatch({
      type: SAVE_USER_DATA,
      payload: obj,
    });
  } catch (error) {
    console.log(error);
  }
};

export const userLog = () => async (dispatch) => {
  const id = await auth.currentUser.uid;

  const consulta = storage.collection("Users").doc(id); //Con esto consulto en la base de datos para que me traiga el documento segun el id que le estoy pasando
  const doc = await consulta
    .get() // como la respuesta debe ser asincrona, ponemos el await y le damos el metodo get, para que nos traiga esos datos.
    .then((resp) => {
      dispatch({
        type: LOGEADO,
        payload: resp.data(),
      });
    });
};

