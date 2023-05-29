import React from "react";
import {Task} from "../../redux/taskReducer";
import {Check} from "./Check";
import {ModalWin} from "./ModalWin";

interface TaskItemProps {
    task: Task,
    key: string
}
export const TaskItem = (props: TaskItemProps) => {

    const [modalIsShown, setModalIsShown] = React.useState(false)
    const handleClose = () => setModalIsShown(false)
    const handleOpen = () => setModalIsShown(true)

    return (
        <div>
            <div className='container mb-4 bg-light p-2 rounded-3'>
                <div className="d-flex fs-4">
                    <Check isCompleted={props.task.isCompleted} id={props.task.id}/>
                    <div onClick={handleOpen}
                         className={`container-fluid offset-1 ${props.task.isCompleted ? `text-decoration-line-through` : ''}`}>{props.task.title}</div>
                </div>
                <div
                    className="text-end">{`${new Date(props.task.date).toLocaleDateString()} ${new Date(props.task.date).toLocaleTimeString()}`}</div>
                <ModalWin task={props.task} modalIsShown={modalIsShown} modalHandleClose={handleClose}/>
            </div>
        </div>
    )
}