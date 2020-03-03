import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const toolbar = (props) => {
    return (
        <Navbar bg="dark" expand="md" variant="dark" sticky="top">

            <Navbar.Brand href="/home">LOGO</Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/" className="nav-link" exact>Burger Builder</NavLink>
                    <NavLink to="/orders" className="nav-link">Orders</NavLink>
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form> */}
            </Navbar.Collapse>
        </Navbar>
    );

}

export default toolbar;