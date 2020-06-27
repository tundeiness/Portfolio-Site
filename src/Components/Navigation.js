/* eslint-disable react/prop-types */
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Link } from 'react-router-dom';

const Navigation = ({
  home, about, project, contact,
}) => (
  // <Navbar className="border-bottom" bg="transparent" expand="lg">
  //   <Navbar.Brand>O`tunde</Navbar.Brand>
  //   <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
  //   <Navbar.Collapse id="navbar-toggle">
  //     <Nav className="ml-auto">
  //       <Link className="nav-link" to="/">Home</Link>
  //       <Link className="nav-link" to="/About">About</Link>
  //       <Link className="nav-link" to="/Contact">Contact</Link>
  //       <Link className="nav-link" to="/Projects">Projects</Link>
  //     </Nav>
  //   </Navbar.Collapse>
  // </Navbar>
);

export default Navigation;
