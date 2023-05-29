import React, {ChangeEvent} from "react";
import {useDispatch} from "react-redux";
import {addTask} from "../redux/actions";

export const TasksInput = () => {

    const [title, setTask] = React.useState("");

    const dispatch = useDispatch()
    const onAddTaskClick = () => {
        dispatch(addTask({
            id: "23",
            title: title,
            date: new Date(),
            isCompleted: false
        }))
        setTask("")
    }

    const updateTask = (event:ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    }

    return (
    <div>
        <input onChange={updateTask} value={title} name="Task" placeholder="Add new task"/>
        <button onClick={onAddTaskClick}>Add new task</button>
    </div>
)
}