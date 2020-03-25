import React from 'react';
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'; 
import { Nav, Navbar, NavItem } from "react-bootstrap";

export default function MainNavigation() {
    return (
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse id="responsive-navbar-nav">
           
          <Nav className="justify-content-end">
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
    )

}
 
