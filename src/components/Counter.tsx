import React from "react";
import {useSelector} from "react-redux";
import {TaskState} from "../redux/taskReducer";

export const Counter = () => {
    const tasks = useSelector<TaskState, TaskState["tasks"]>((state) => state.tasks)
    return (
        <div>
            <h2>{tasks.length}</h2>
        </div>
    )
}