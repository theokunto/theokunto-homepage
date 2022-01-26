import { SET_LANGUAGE } from "./actionType";

const initialState = {
    lang:'id'
}

const changeLangReducer = ( state = initialState, action ) =>{
    const { type, payload } = action
    switch (type) {
        case SET_LANGUAGE:
            return {...state,lang: payload}
        default:
            return state
    }
}

export default changeLangReducer