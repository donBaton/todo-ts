import {Task} from "./taskReducer";

export const ADD_TASK = 'TASK/ADD_TASK'
export const COMPLETE_TASK = 'TASK/COMPLETE_TASK'
export const UPDATE_TASK = 'TASK/UPDATE_TASK'
export const DELETE_TASK = 'TASK/DELETE_TASK'
export const FETCH_TASKS = 'TODO/FETCH_TODOS'
export const SHOW_LOADER = 'APP/SHOW_LOADER'
export const HIDE_LOADER = 'APP/HIDE_LOADER'

export interface AddTask {
    type: typeof ADD_TASK
    payload: Task
}
export interface CompleteTask {
    type: typeof COMPLETE_TASK
    id: string
}
export interface UpdateTask {
    type: typeof UPDATE_TASK
    id: string,
    title: string
}
export interface DeleteTask {
    type: typeof DELETE_TASK
    id: string
}
export interface ShowLoader {
    type: typeof SHOW_LOADER
}

export interface HideLoader {
    type: typeof HIDE_LOADER
}

export interface FetchTasks {
    type: typeof FETCH_TASKS,
    tasks: string
}

export type DispatchTypes = FetchTasks | HideLoader | ShowLoader | AddTask | CompleteTask | UpdateTask | DeleteTask