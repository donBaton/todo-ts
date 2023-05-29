import React from 'react';
import {TasksInput} from "./components/TasksInput";
import {TasksList} from "./components/TasksList";
import {Counter} from "./components/Counter";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

    return (
        <div className="App container p-2" style={{width: 500}}>
            <TasksInput/>
            <Counter/>
            <TasksList/>
        </div>
    );
}

export default App;
