import React from "react";
import {useSelector} from "react-redux";
import {Task, TaskState} from "../redux/taskReducer";
import {TaskItem} from "./item/TaskItem";

export const TasksList = () => {
    const tasks =  useSelector<TaskState, TaskState["tasks"]>((state) => state.tasks)
    const getSortToDos = () => {
        return tasks?.map((task: Task) => (
            <TaskItem task={task} key={task.id}/>
        ))
    }
    return (
        <div className="row">
            <div>
                {getSortToDos()}
            </div>
        </div>
    )
}