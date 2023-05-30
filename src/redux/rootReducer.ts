import {combineReducers} from "redux";
import {taskReducer, TaskState} from "./taskReducer";
import {AppState, loaderReducer} from "./loaderReducer";
export interface MergedState {
    task: TaskState,
    loader: AppState
}
export const rootReducer = combineReducers( {
    task: taskReducer,
    loader: loaderReducer
})