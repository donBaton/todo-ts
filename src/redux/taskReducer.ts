import {ADD_TASK, COMPLETE_TASK, DELETE_TASK, DispatchTypes, FETCH_TASKS, UPDATE_TASK} from "./types";

export interface TaskState {
    tasks: Task[]
}

export interface Task {
    id: string
    title: string
    date: Date
    isCompleted: boolean
}

export const initialState: TaskState = {
    tasks: []
}

export const taskReducer = (state: TaskState = initialState, action: DispatchTypes) => {
    switch (action.type) {
        case ADD_TASK:
            return {...state, tasks: [...state.tasks, action.payload]}
        case COMPLETE_TASK:
            return {
                ...state, tasks: state.tasks.map(task => ({
                    ...task,
                    isCompleted: task.id === action.id ? !task.isCompleted : task.isCompleted
                }))
            }
        case UPDATE_TASK:
            return {
                ...state, tasks: state.tasks.map(task => ({
                    ...task,
                    title: task.id === action.id ? action.title : task.title
                }))
            }
        case DELETE_TASK:
            return {...state, tasks: state.tasks.filter(task => task.id !== action.id)}
        case FETCH_TASKS:
            return {tasks: JSON.parse(action.tasks)}
        default:
            return state
    }
}