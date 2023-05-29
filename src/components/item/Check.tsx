import React from "react";
import {useDispatch} from "react-redux";
import {completeTask} from "../../redux/actions";

interface CheckProps {
    id: string,
    isCompleted: boolean
}
export const Check = (props: CheckProps) => {

    const dispatch = useDispatch()
    const handleChange = () => {
        dispatch(completeTask(props.id))
    }

    return (
        <div>
            <input className="form-check-input" type="checkbox" onChange={handleChange} checked={props.isCompleted}/>
            <div className='w-25 h-25 border-3'/>
        </div>
    );
}