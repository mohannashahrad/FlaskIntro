import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Header} from './components/Header';
import {TopTask} from './components/TopTask';
import {TaskList} from './components/TaskList';
import {AddTask} from './components/AddTask';
import {Calendar} from './components/pages/Calendar';
import {Notes} from './components/pages/Notes';
import {About} from './components/pages/About';
import {GlobalProvider} from './context/GlobalState';

import './App.css';

function App() {
  
  return (
    <GlobalProvider>
      <BrowserRouter>
      <div className = "container">
          <Header />

          <Route path="/planno" component = {TopTask} />
          <Route path="/todo" render={(props) => 
              <div>
                  <TaskList />
                  <AddTask />
              </div> 
            } />
          <Route path="/calendar" component = {Calendar} />
          <Route path="/notes" component = {Notes} />
          <Route path="/about" component = {About} />
      </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
