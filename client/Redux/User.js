// CONSTANTS
const REGISTER_USER = 'REGISTER_USER';
const SAVE_USER_DATA = 'SAVE_USER_DATA';


// STATE
const initialState = {
  userAuth: {
    email: "",
    password: ""
  },
  userData: {
    id: "",
    name: '',
    birthday: '',
    lastname: '',
    phone: '',
    dni: '',
    cuil: '',
  }
} 

// REDUCER
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        userAuth: {
          ...state.userAuth, 
          [action.payload.name]: action.payload.value
        }
      }
    case SAVE_USER_DATA:

      let data = action.payload
      return {
        ...state,
        userData:{
          ...state.userData,
          ...data
        }
      }
    default:
      return {
        ...state
      }
  }
}

// ACTIONS
export const addUser = ( name, value) => (dispatch) => {
  try {
    dispatch({
      type: REGISTER_USER,
      payload: {
        name:name,
        value:value
      }
    })
  }
  catch(error){
    console.log(error);
  }
}

export const saveData = (obj) => (dispatch) => {
  
  try { 
    dispatch({
      type: SAVE_USER_DATA,
      payload: obj
    })
  }
  catch(error){
    console.log(error);
  }
}