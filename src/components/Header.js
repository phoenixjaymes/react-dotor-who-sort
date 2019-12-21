import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';

const Main = ({ handleNavClick }) => (
  <Navbar bg="light" expand="sm" fixed="top">
    <Container>
      <Navbar.Brand href="#home">DoctorWho Sort</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#link" onClick={() => handleNavClick('all')}>All</Nav.Link>
          <Nav.Link href="#link" onClick={() => handleNavClick('doctors')}>Doctors</Nav.Link>
          <Nav.Link href="#link" onClick={() => handleNavClick('companions')}>Companions</Nav.Link>
          <Nav.Link href="#link" onClick={() => handleNavClick('allies')}>Allies</Nav.Link>
          <Nav.Link href="#link" onClick={() => handleNavClick('villains')}>Villains</Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Container>
  </Navbar>
);

Main.propTypes = {
  handleNavClick: PropTypes.func.isRequired,
};

export default Main;
