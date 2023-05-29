import React, {ChangeEvent} from "react";
import {useDispatch} from "react-redux";


export const TasksInput = () => {

    const dispatch = useDispatch()

    const addTask = (task: string) => {
        dispatch({type: "ADD_TASK", payload: task})
    }

    const [task, setTask] = React.useState("");

    const updateTask = (event:ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    }

    const onAddTaskClick = () => {
        addTask(task);
        setTask("")
    }

    return (
    <div>
        <input onChange={updateTask} value={task} name="Task" placeholder="Add new task"/>
        <button onClick={onAddTaskClick}>Add new task</button>
    </div>
)
}