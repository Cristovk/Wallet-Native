import { storage, auth } from "../../firebase";

// CONSTANTS
const REGISTER_USER = "REGISTER_USER";
const SAVE_USER_DATA = "SAVE_USER_DATA";
const LOGEADO = "LOGEADO";
const MODIFICA_USUARIO = "MODIFICA_USUARIO";
const CHANGE_LOGIN_METHOD = "CHANGE_LOGIN_METHOD";

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
    birthday: "",
    email: "",
    phone: "",
    dni: "",
    cuil: "",
    cvu: "",
  },
  user: [],
  security: {
    fingerPrint: false,
    methods: [],
  },
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
    case MODIFICA_USUARIO:
      return {
        ...state,
        user: action.payload,
      };
    case CHANGE_LOGIN_METHOD:
      return {
        ...state,
        security: {
          ...state.security,
          fingerPrint: action.payload,
        },
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
  if (await auth.currentUser) {
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
  }
};

export const updateUser = (data) => (dispatch) => {};

export const ResetPass = async (email) => {
  await auth.sendPasswordResetEmail(email);
};

export const ModificarEmail = async (email) => {
  if (await auth.currentUser) {
    await auth.currentUser
      .updateEmail(email)
      .then(() => {
        auth.currentUser.sendEmailVerification();
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const ModificarPassword = async (password) => {
  if (await auth.currentUser) {
    await auth.currentUser.updatePassword(password);
  }
};

export const deleteUsuario = async (id) => {
  const consulta = storage.collection("Users").doc(id);
  await consulta.delete();
  auth.currentUser.delete();
};

export const changeLoginMethod = (bool) => (dispatch) => {
  dispatch({
    type: CHANGE_LOGIN_METHOD,
    payload: bool,
  });
};
