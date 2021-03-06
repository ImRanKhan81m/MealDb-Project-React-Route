import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar className='navBar shadow-sm' bg="light" expand="lg">
                <Container className='container'>
                    <Navbar.Brand><Link className='header' to={'/'}><h2>Food Gallery</h2></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto items">
                            <CustomLink className='item' to={'/'}>Home</CustomLink>
                            <CustomLink className='item' to={'/shop'}>Shop</CustomLink>
                            <CustomLink className='item' to={'/about'}>About</CustomLink>
                            <CustomLink className='item' to={'/order'}>Order</CustomLink>
                            <CustomLink className='item' to={'/cart'}>Cart<FontAwesomeIcon className='icon' icon={faCartShopping}></FontAwesomeIcon></CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;