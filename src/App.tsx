import React from 'react';
import {NewTaskInput} from "./components/NewTaskInput";
import {useDispatch, useSelector} from "react-redux";
import {TaskState} from "./redux/taskReducer"

function App() {
    const tasks = useSelector<TaskState, TaskState["tasks"]>((state) => state.tasks)
    const dispatch = useDispatch()
    const addTask = (task: string) => {
        dispatch({type: "ADD_TASK", payload: task})
    }
    return (
        <>
            <NewTaskInput addTask={addTask}/>
            <hr/>
            <ul>
                {tasks.map((task) => {
                    return <li key={task}>{task}</li>
                })}
            </ul>
        </>
    );
}

export default App;
