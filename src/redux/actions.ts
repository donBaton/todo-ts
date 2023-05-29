import {Task} from "./taskReducer";
import {ADD_TASK, COMPLETE_TASK, DELETE_TASK, UPDATE_TASK} from "./types";

export type Action = {
    type: string,
    payload?: Task,
    id?: string,
    title?: string
}

export function addTask(task: Task) {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export function completeTask(id: string) {
    return {
        type: COMPLETE_TASK,
        id: id
    }
}
export function updateTask(id: string, title: string) {
    return {
        type: UPDATE_TASK,
        id: id,
        title: title
    }
}

export function deleteTask(id: string) {
    return {
        type: DELETE_TASK,
        id: id
    }
}
