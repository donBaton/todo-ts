export type Action = { type: "ADD_TASK", payload: string }

const addTask = (task: string): Action => ({
    type: "ADD_TASK",
    payload: task
})