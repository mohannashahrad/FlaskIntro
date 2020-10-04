import React, { useState } from 'react';
import { Form, Container, Row, Col, Button, Popover, OverlayTrigger } from 'react-bootstrap';

export const AddTodo = (props) => {

    const tasks = props.tasks;
    const addTask = props.addTask;

    const [text, setText] = useState('');
    const [deadline, setDeadline] = useState(1);
    const [importance, setImportance] = useState(1);
    const [length, setLength] = useState(1);
    const [completion, setCompletion] = useState(1);

    const successPopover = (
        <Popover id="popover-basic">
          <Popover.Content>
            Task added!
          </Popover.Content>
        </Popover>
      );

    const handleSubmit = e => {
        e.preventDefault();
        const newTask = {
            id: Math.floor(Math.random() * 1000000000),
            text: text,
            deadline: deadline, 
            importance: importance, 
            length: length, 
            completion: completion
        }
        setText('');
        setDeadline(1);
        setImportance(1);
        setLength(1);
        setCompletion(1);
        addTask(tasks, newTask);
        console.log(newTask)
    }

    return (
        <Container fluid="sm">
            <h1>Add to your list:</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Task</Form.Label>
                    <Form.Control id="task" placeholder = "Type a task" value={text} onChange = {e => setText(e.target.value)}/>
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Deadline (days)</Form.Label>
                            <Form.Control id="deadline" placeholder = "How many days?" value={deadline} onChange = {e => setDeadline(e.target.value)}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Importance (%)</Form.Label>
                            <Form.Control id="importance" placeholder = "From 1-100" value={importance} onChange = {e => setImportance(e.target.value)}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Time Estimate (hours)</Form.Label>
                            <Form.Control id="length" placeholder = "How many hours?" value={length} onChange = {e => setLength(e.target.value)}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Completion (%)</Form.Label>
                            <Form.Control id = "completion" placeholder = "What percent is done?" value={completion} onChange = {e => setCompletion(e.target.value)}/>
                        </Form.Group>
                    </Col>
                </Row>
                <br />
                <OverlayTrigger trigger="click" rootClose placement="right" overlay={successPopover}>
                    <Button type ="submit" style = {{background: "#C55967", border: "none", fontSize: "30px"}}>Add task</Button>
                </OverlayTrigger>
            </Form>

        </Container>
    )
}
