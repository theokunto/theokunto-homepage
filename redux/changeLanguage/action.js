import { SET_LANGUAGE } from "./actionType"; 

export function setLanguage(payload) {
    return {
        type: SET_LANGUAGE,
        payload
    }
    
}