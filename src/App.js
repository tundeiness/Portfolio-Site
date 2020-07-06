/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import './App.css';

// import Footer from './Components/Footer';
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import Projects from './pages/Projects';
// import About from './pages/About';

// import Header from './Components/Header';
// import Navigation from './Components/Navigation';
import Body from './Components/Body';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid="true">
          <Body />
        </Container>
      </Router>
    );
  }
}

export default App;
