import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTask = () => {

    const { addTask } = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [deadline, setDeadline] = useState(0);
    const [importance, setImportance] = useState(1);

    const onSubmit = e => {
        e.preventDefault();

        const newTask = {
            id: Math.floor(Math.random() * 100000000),
            text,
            deadline: +deadline,
            importance: importance / 100
        }

        addTask(newTask);
    }

    return (
        <>
            <h3>Add new task</h3>
            <form onSubmit = {onSubmit}>
                
                <div className="form-control">
                <label htmlFor="text">To do:</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter task..." />
                </div>
                
                <div className="form-control">
                <label htmlFor="deadline">Deadline: how many days until it needs to be done?</label
                >
                <input type="number" value={deadline} onChange={(e) => setDeadline(e.target.value)} placeholder="1" />
                </div>
                
                <div className="form-control">
                <label htmlFor="importance">Importance, on a scale of 1 to 100:</label>
                <input type="number" value={importance} onChange={(e) => setImportance(e.target.value)} placeholder="1" />
                </div>
                
                <button className="btn">Add task</button>
            </form>
        </>

    )
}
