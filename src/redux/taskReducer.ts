import {Action} from "./actions";

export interface TaskState {
    tasks: string[]
}

const initialState = {
    tasks: []
}

export const taskReducer = (state:TaskState = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_TASK": {
            return {...state, tasks: [...state.tasks, action.payload]}
        }
        default:
            return state
    }
}