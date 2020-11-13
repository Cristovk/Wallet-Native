const DARK_MODE = 'DARK_MODE'

const initialState = {
    dark: false,
    primary: '#02072F',
    secondary: '#FC7029',
    text: '#212121',
    bg: '#FFFF'
}

const colorReducer = (state = initialState, action) => {
    switch(action.type){
        case DARK_MODE:
            return action.payload
        default:
            return {...state}
    }
}

export let status = false;

export const darkMode = (dark) => (dispach) => {

    let data = !dark ? {
        dark: true,
        primary: '#02072F',
        secondary: '#FC7029',
        text: '#FFFF',
        bg : '#02072F'
    } : {
        dark: false,
        primary: '#02072F',
        secondary: '#FC7029',
        text: '#212121',
        bg: '#FFFF'
    }

    status = data.dark

    dispach({
        type: DARK_MODE,
        payload: data
    })
}

export default colorReducer;