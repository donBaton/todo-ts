import React from "react";
import {useSelector} from "react-redux";
import {TaskState} from "../redux/taskReducer";

export const Counter = () => {
    const tasks = useSelector<TaskState, TaskState["tasks"]>((state) => state.tasks)
    return (
        <div className="row">
            <div className="text-end">{tasks.length} task{tasks.length===1?'':"s"} in total</div>
        </div>
    )
}