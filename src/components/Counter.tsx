import React from "react";
import {useSelector} from "react-redux";
import {TaskState} from "../redux/taskReducer";
import {MergedState} from "../redux/rootReducer";

export const Counter = () => {
    const tasks = useSelector<MergedState, TaskState["tasks"]>((state) => state.task.tasks)
    return (
        <div className="row">
            {<div className="text-end">{tasks?.length} task{tasks?.length === 1 ? '' : "s"} in total</div>}
        </div>
    )
}