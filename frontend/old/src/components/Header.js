import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className = "navBar">
            <h1>Planno</h1>
            <Link style={linkStyle} to="/planno">Home</Link> | <Link style={linkStyle} to="/todo">To Do</Link> | <Link style={linkStyle} to="/calendar">Calendar</Link> | 
            <Link style={linkStyle} to="/notes">Notes</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    padding: '2px'
  }