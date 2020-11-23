const DARK_MODE = 'DARK_MODE'

const initialState = {
  dark: false,
  primary: '#FFFF',
  secondary: '#ccc',
  text: '#000',
  bg: '#1C2383'
}

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_MODE:
      return action.payload
    default:
      return { ...state }
  }
}

export let status = false;

export const darkMode = (dark) => (dispach) => {

  let data = !dark ? {
    dark: true,
    primary: '#ccc',
    secondary: '#1C2383',
    text: '#FFFF',
    bg: '#000'
  } : {
      dark: false,
      primary: '#FFFF',
      secondary: '#ccc',
      text: '#000',
      bg: '#1C2383'
    }

  status = data.dark

  dispach({
    type: DARK_MODE,
    payload: data
  })
}

export default colorReducer;