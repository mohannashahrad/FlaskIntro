import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Task = ({ task }) => {
    const { deleteTask } = useContext(GlobalContext);

    return (
        <li>
            {task.text} <span> ... within {task.deadline} days </span><button 
            onClick = {() => deleteTask(task.id)} className="delete-btn">x</button>
        </li>
    )
}
