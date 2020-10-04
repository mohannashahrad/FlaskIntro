import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const TopTask = () => {

    const { tasks } = useContext(GlobalContext);
    const reducer = (prevTop, currentTask) => (1 / prevTop.deadline * prevTop.importance) > (1 / currentTask.deadline * currentTask.importance) ? prevTop : currentTask;
    const topTask = tasks.reduce(reducer);

    return (
        <div style = {topTaskStyle}>
            <h2>What should I do right now?</h2>
            <p>Next up: <span className="topTask">{topTask.text}</span></p>
        </div>
    )
}

const topTaskStyle = {
    textAlign: "center"
}
