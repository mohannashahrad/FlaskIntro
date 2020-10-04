import React, {useState} from 'react'
import { Task } from '../Task';
import { Container, Button, Row, Col } from 'react-bootstrap';

export const MainTask = (props) => {

    var [topTask, setTopTask] = useState([]);

    const tasks = props.tasks;
    const reducer = (prevTop, currentTask) => (1 / prevTop.deadline * prevTop.importance) > (1 / currentTask.deadline * currentTask.importance) ? prevTop : currentTask;
    if (tasks.length > 0) {
        topTask = tasks.reduce(reducer);
    }

    return (
        <Container fluid ="sm" style= {{alignItems: "center"}}>
            <h1>What should I do next?</h1>
            <Task key = {topTask.id} task = {topTask} deleteTask = {props.deleteTask} />
            <Row>
                <Col>
                    <Button type ="submit" style = {{background: "#C55967", border: "none", fontSize: "30px"}}>
                        Procrastinate
                    </Button>
                    {' '}
                    <Button type ="submit" style = {{background: "#C55967", border: "none", fontSize: "30px"}}>
                        Done!
                    </Button>
                </Col>
            </Row>
            <br />
           <h1>What else?</h1>
            {tasks.filter(task => task.id !== topTask.id).map(task => (
                <Task key = {task.id} task = {task} deleteTask = {props.deleteTask} />
            ))}
        </Container>
    )

}
