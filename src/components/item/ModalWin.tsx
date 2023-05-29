import React, {useState} from "react";
import {Task} from "../../redux/taskReducer";
import {Button, Modal} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {deleteTask, updateTask} from "../../redux/actions";

interface ModalWinProps {
    task: Task,
    modalIsShown: boolean,
    modalHandleClose(): void
}
export const ModalWin = (props: ModalWinProps) => {
    const [taskTitle, setTaskTitle] = useState(props.task.title)
    const [showWarn, setShowWarn] = useState(false)
    const dispatch = useDispatch()
    const save = () => {
        if (taskTitle === null || taskTitle === '') {
            setShowWarn(true)
        } else {
            dispatch(updateTask(props.task.id, taskTitle))
            props.modalHandleClose()
        }
    }
    const del = () => {
        dispatch(deleteTask(props.task.id))
        props.modalHandleClose()
    }

    return (
        <div>
            <Modal show={props.modalIsShown} onHide={props.modalHandleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Task from {`${new Date(props.task.date).toLocaleDateString()} ${new Date(props.task.date).toLocaleTimeString()}`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <textarea className="form-control" id="exampleFormControlTextarea1"
                                  rows={3} onChange={e => setTaskTitle(e.target.value)} defaultValue={taskTitle}/>
                        <div className={`${showWarn ? 'visible' : 'visually-hidden'} text-danger`}>
                            Please add description
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={del}>
                        delete
                    </Button>
                    <Button variant="primary" onClick={save}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}