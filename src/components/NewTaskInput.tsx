import React, {ChangeEvent} from "react";

interface NewTaskInputProps {
    addTask(task: string): void;
}

export const NewTaskInput: React.FC<NewTaskInputProps> = ({addTask}) => {
    const [task, setTask] = React.useState("");

    const updateTask = (event:ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    }
    const onAddTaskClick = () => {
        addTask(task);
        setTask("")
    }
    return (
    <div>
        <input onChange={updateTask} value={task} name="Task" placeholder="Add new task"/>
        <button onClick={onAddTaskClick}>Add new task</button>
    </div>
)
}