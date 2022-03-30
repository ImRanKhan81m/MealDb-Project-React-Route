import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><h2>Food Gallery</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <CustomLink to={'/home'}>Home</CustomLink>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Category" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Grocery</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Sweets</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Drinks</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Other's Product</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#cart">Cart</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;