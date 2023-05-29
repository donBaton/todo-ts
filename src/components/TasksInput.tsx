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

    const handleKeyDown = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            onAddTaskClick()
        }
    }

    return (
    <div className="contriner">
        <div className="row">
            <h3>Add new task:</h3>
        </div>
        <div className="row">
            <input
                className="form-control"
                type="text"
                value={title}
                onChange={updateTask}
                onKeyDown={handleKeyDown}
                name="Task"
                placeholder="Add new task"/>
        </div>
        <div className="row py-3">
            <button className="btn btn-primary" onClick={onAddTaskClick}>Add new task</button>
        </div>
    </div>
)
}