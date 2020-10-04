import React, {useState} from 'react';
import {Header} from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {AddTodo} from './components/pages/AddTodo';
import {Calendar} from './components/pages/Calendar';
import {Notes} from './components/pages/Notes';
import {About} from './components/pages/About';
import {MainTask} from './components/pages/MainTask';

import './App.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, text: 'Finish hackathon project', deadline: 2, importance: 50, length: 5, completion: 50 },
    { id: 2, text: 'CSC236 assignment', deadline: 4, importance: 40, length: 5, completion: 0  },
    { id: 3, text: 'Apply for internship', deadline: 40, importance: 10, length: 2, completion: 0  },
    { id: 4, text: 'Do laundry', deadline: 0, importance: 5, length: 1, completion: 99  }
  ]);

  const addTask = (tasks, newTask) => {
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => {
    setTasks([...tasks.filter(task => task.id !== id)]);
  }

  return (
    <Container style={{maxWidth: "100%"}} className = "App">
      <Header />
        <Router>
            <Route exact path = "/" render={(routeProps) =>
              <MainTask {...routeProps} tasks = {tasks} deleteTask = {deleteTask} />
            } />
            <Route path = "/addtodo" render={(routeProps) =>
              <AddTodo {...routeProps} tasks = {tasks} addTask = {addTask} />
            } />
            <Route path = "/cal" component={Calendar} />
            <Route path = "/notes" component={Notes} />
            <Route path = "/about" component={About} />


        </Router>
      </Container>
  );
}

export default App;
