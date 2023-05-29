import React from 'react';
import {TasksInput} from "./components/TasksInput";
import {TasksList} from "./components/TasksList";
import {Counter} from "./components/Counter";

function App() {

    return (
        <>
            <TasksInput/>
            <Counter/>
            <TasksList/>
        </>
    );
}

export default App;
