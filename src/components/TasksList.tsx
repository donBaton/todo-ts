import React from "react";
import {useSelector} from "react-redux";
import {TaskState} from "../redux/taskReducer";

export const TasksList = () => {
    const tasks =  useSelector<TaskState, TaskState["tasks"]>((state) => state.tasks)
    return (
        <div>
            <ul>
                {tasks.map((task) => {
                    return <li key={task.id}>{task.title}</li>
                })}
            </ul>
        </div>
    )
}