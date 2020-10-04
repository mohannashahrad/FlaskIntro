import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Task } from './Task';

export const TaskList = () => {

    const { tasks } = useContext(GlobalContext);

    return (
        <>
            <h2>To Do List:</h2>
            <ul id="list" className="list">
                {tasks.map(task => (
                    <Task key={task.id} task = {task}/>
                ))}

            </ul>
        </>
    )
}
