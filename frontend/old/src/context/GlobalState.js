import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    tasks: [
        { id: 1, text: 'Finish hackathon project', deadline: 2, importance: 0.50 },
        { id: 2, text: 'CSC236 assignment', deadline: 4, importance: 0.40 },
        { id: 3, text: 'Apply for internship', deadline: 40, importance: 0.90 },
        { id: 4, text: 'Do laundry', deadline: 5, importance: 0.20 },
      ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTask(id) {
        dispatch({
            type: 'DELETE_TASK',
            payload: id
        });
    }

    function addTask(task) {
        dispatch({
            type: 'ADD_TASK',
            payload: task
        });
    }

    return (<GlobalContext.Provider value = {{
        tasks: state.tasks,
        deleteTask,
        addTask
    }}>
        {children}
    </GlobalContext.Provider>)
}