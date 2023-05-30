import React from 'react';
import {TasksInput} from "./components/TasksInput";
import {TasksList} from "./components/TasksList";
import {Counter} from "./components/Counter";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ControlBar} from "./components/ControlBar";
function App() {

    return (
        <div className="App container p-2" style={{width: 500}}>
            <TasksInput/>
            <Counter/>
            <TasksList/>
            <ControlBar/>
        </div>
    );
}

export default App;
