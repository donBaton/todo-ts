import React from "react";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {TaskState} from "../redux/taskReducer";
import {fetchTasks, saveTasks} from "../redux/actions";
import {AppState} from "../redux/loaderReducer";
import {MergedState} from "../redux/rootReducer";

export const ControlBar = () => {
    const tasks =  useSelector<MergedState, TaskState["tasks"]>((state) => state.task.tasks)
    const isLoading = useSelector<AppState, AppState["isLoading"]>((state) => state.isLoading)

    const dispatch = useDispatch()

    function save() {
        // @ts-ignore
        dispatch(saveTasks(tasks));
    }

    function load() {
        // @ts-ignore
        dispatch(fetchTasks());
    }

    return (
        <div className='flex-d '>
            <Button onClick={save}
                    className={`btn btn-primary float-end offset-1 ${isLoading && 'disabled'}`}>Save</Button>
            <Button onClick={load} className={`btn btn-secondary float-end ${isLoading && 'disabled'}`}>Load</Button>
        </div>
    )
}