import React from 'react';
import {NewTaskInput} from "./components/NewTaskInput";

function App() {
    return (
        <>
            <NewTaskInput addTask={alert}/>
            <hr/>
            <ul>
                <li>task</li>
            </ul>
        </>
    );
}

export default App;
