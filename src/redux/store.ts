import {applyMiddleware, compose, createStore} from 'redux'
import {taskReducer} from "./taskReducer";
import thunk from "redux-thunk";
import {rootReducer} from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
))