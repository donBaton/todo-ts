import React from "react";
import {useSelector} from "react-redux";
import {Task, TaskState} from "../redux/taskReducer";
import {TaskItem} from "./item/TaskItem";
import {MergedState} from "../redux/rootReducer";
import Loader from "./Loader";
import {AppState} from "../redux/loaderReducer";

export const TasksList = () => {
    const tasks =  useSelector<MergedState, TaskState["tasks"]>((state) => state.task.tasks)
    const isLoading =  useSelector<MergedState, AppState["isLoading"]>((state) => state.loader.isLoading)
    const getSortToDos = () => {
        return tasks?.sort((a:Task, b:Task) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((task: Task) => (
            <TaskItem task={task} key={task.id}/>
        ))
    }

    return (
        <div className="row">
            <div>
                {isLoading?<Loader />:getSortToDos()}
            </div>
        </div>
    )
}