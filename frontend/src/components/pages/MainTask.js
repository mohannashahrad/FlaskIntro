import React, {useState} from 'react'
import { Task } from '../Task';
import { Container, Button, Row, Col } from 'react-bootstrap';

export const MainTask = (props) => {
    
    const procrastinate = props.procrastinate;
    const deleteTask = props.deleteTask;
    var tasks = props.tasks;
    

    const getUrgency = (task) => {
        return task.importance * task.length * 10 / Math.max(1, task.completion) / Math.max(0.1, task.deadline);
    }

    tasks.sort(function(a, b) {
        return getUrgency(b) - getUrgency(a); 
    });

    var topTask;
    var empty = tasks.length === 0;
    empty ? topTask = {id: 0, text: '', deadline: 0, importance: 0, length: 0, completion: 0} : topTask = tasks[0];
   

    const handleDone = e => {
        e.preventDefault();
        deleteTask(topTask.id);
    }

    const handleProcrastinate = e => {
        e.preventDefault();
        procrastinate();
    }


    return (
        <Container fluid ="sm" style= {{alignItems: "center"}}>
            <h1>What should I do next?</h1>
            <Task task = {topTask} deleteTask = {deleteTask} tasks = {tasks} empty = {empty} range = {0}/>
            <Row>
                <Col>
                    <Button onClick = {handleProcrastinate} type ="submit" style = {{background: "#C55967", border: "none", fontSize: "30px"}}>
                        Procrastinate
                    </Button>
                    {' '}
                    <Button onClick = {handleDone} type ="submit" style = {{background: "#C55967", border: "none", fontSize: "30px"}}>
                        Done!
                    </Button>
                </Col>
            </Row>
            <br />
           <h1>What else?</h1>
            {tasks.filter(task => task.id !== topTask.id).map(task => (
                <Task task = {task} deleteTask = {props.deleteTask} range = {tasks.indexOf(task) / tasks.length}/>
            ))}
        </Container>
    )

}
