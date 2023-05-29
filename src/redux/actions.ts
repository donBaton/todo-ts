import {Task} from "./taskReducer";

export type Action = { type: "ADD_TASK", payload: Task }

export const addTask = (task: Task): Action => ({
    type: "ADD_TASK",
    payload: task
})