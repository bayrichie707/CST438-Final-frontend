import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    window.location.href = '/home'; 
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <LinkContainer to="/home">
        <Navbar.Brand>Coin Index</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/home">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/cryptos">
            <Nav.Link>Cryptocurrency List</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/randomCoin">
            <Nav.Link>Random Coin</Nav.Link>
          </LinkContainer>
          {isLoggedIn ? (
            <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
          ) : (
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
