/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  BrowserRouter as Router, Route, Link, Switch,
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import logo from './logo.svg';
import './App.css';

import Footer from './Components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'O`tunde',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Projects', path: '/projects' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Welcome!',
        subtitle: 'lorem Ipsum',
        text: 'some text',
      },
      about: {
        title: 'About the creator',
        subtitle: 'lorem Ipsum',
        text: 'some text',
      },
      contact: {
        title: 'Contact the User',
        subtitle: 'lorem Ipsum',
        text: 'some text',
      },
      project: {
        title: 'See my projects',
        subtitle: 'lorem Ipsum',
        text: 'some text',
      },

    };
  }

  render() {
    return (
      // <div className="App">
      //   <p>Hello World</p>
      // </div>
      <Router>
        <Container className="p-0" fluid="true">
          {/* <p>Hello World! </p> */}
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>O`tunde</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/About">About</Link>
                <Link className="nav-link" to="/Contact">Contact</Link>
                <Link className="nav-link" to="/Projects">Projects</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
