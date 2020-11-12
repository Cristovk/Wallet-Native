import axios from 'axios';
import {auth} from "../../firebase";

// CONSTANTS
const REGISTER_USER = 'REGISTER_USER';
const SAVE_USER_DATA = 'SAVE_USER_DATA';
const GET_DATA = 'GET_DATA'



// STATE
const initialState = {

  user: [],
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
    case GET_DATA:
      return {
        ...state,
        user: action.payload
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

export const getUser = () => async(dispatch) => {
  try {
    const uid = auth.currentUser.uid
      // const user = auth.currentUser;
      console.log('-------------------->', uid)
      const data = await axios.get(`http://localhost:5000/henrybankfire/us-central1/ex/api/user-data/`)
      console.log("data-----------------")
      console.log(data)

    dispatch({
      type:GET_DATA,
      payload: data
    })
    
  } catch (error) {
    console.log(error)
  }
}