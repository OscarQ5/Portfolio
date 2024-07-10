import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap'

const NavBar = () => {
    return (
        <Navbar bg="light">
            <Container className="d-flex justify-content-between">
                <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>

                <Link to="/" className="navbar-name">Oscar Quintanilla</Link>

                <Nav>
                    <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                    <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
};

export default NavBar;