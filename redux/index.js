import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import changeLangReducer from "./changeLanguage/reducer";

const rootReducer = combineReducers({
    changeLangReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
