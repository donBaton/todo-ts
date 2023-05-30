import {Task} from "./taskReducer";
import {
    ADD_TASK,
    COMPLETE_TASK,
    DELETE_TASK,
    DispatchTypes,
    FETCH_TASKS,
    HIDE_LOADER,
    SHOW_LOADER,
    UPDATE_TASK
} from "./types";
import {Dispatch} from "redux";
import Repo from "../repo/Repo";

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

export function fetchTasks() {
    return async (dispatch: Dispatch<DispatchTypes>) => {
        dispatch({
            type: SHOW_LOADER
        })
        dispatch({
            type: FETCH_TASKS,
            tasks: JSON.stringify(await Repo.get('todos'))
        })
        dispatch({
            type: HIDE_LOADER
        })
    }
}

export function saveTasks(tasks: Task[]) {
    return async (dispatch: Dispatch<DispatchTypes>) => {
        dispatch({
            type: SHOW_LOADER
        })
        await Repo.set('todos', tasks)
        dispatch({
            type: HIDE_LOADER
        })
    }
}