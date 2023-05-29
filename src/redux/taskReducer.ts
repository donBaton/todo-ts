import {Action} from "./actions";

export interface TaskState {
    tasks: Task[]
}

export interface Task {
    id: string
    title: string
    date: Date
    isCompleted: boolean
}

const initialState: TaskState = {
    tasks: []
}

export const taskReducer = (state: TaskState = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_TASK": {
            return {...state, tasks: [...state.tasks, action.payload]}
        }
        default:
            return state
    }
}