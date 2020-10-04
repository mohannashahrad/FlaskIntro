import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

export const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" style = {{background: "#453F78"}}>
        <Navbar.Brand href="/planno2" exact style={{fontSize: "50px"}}>
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg>
            Planno
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href={"/planno2/addtodo"} exact>Add Task | </Nav.Link>
             <Nav.Link href="/planno2/cal">Calendar | </Nav.Link>
             <Nav.Link href="/planno2/notes">Notes</Nav.Link>
            </Nav>
            <Nav>
             <Nav.Link href="/planno2/about">About Planno</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}
