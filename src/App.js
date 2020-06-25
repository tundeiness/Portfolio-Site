/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './Components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import About from './pages/About';

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
        subtitle: 'Projects that showcases skills',
        slug: 'feel free to check `em out',
      },
      about: {
        title: 'About the creator',
        subtitle: 'lorem Ipsum',
        slug: 'some text',
      },
      contact: {
        title: 'Contact the User',
        subtitle: 'lorem Ipsum',
        slug: 'some text',
      },
      project: {
        title: 'See my projects',
        subtitle: 'lorem Ipsum',
        slug: 'some text',
      },

    };
  }

  render() {
    const {
      home, about, contact, project,
    } = this.state;
    return (
      // <div className="App">
      //   <p>Hello World</p>
      // </div>
      <Router>
        <Container className="p-0" fluid="true">
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
          <Route path="/" exact render={() => <Home title={home.title} subtitle={home.subtitle} slug={home.slug} />} />

          <Route path="/about" exact render={() => <About title={about.title} subtitle={about.subtitle} slug={about.slug} />} />

          <Route path="/projects" exact render={() => <Projects title={project.title} subtitle={project.subtitle} slug={project.slug} />} />

          <Route path="/contact" exact render={() => <Contact title={contact.title} subtitle={contact.subtitle} slug={contact.slug} />} />
          {/* <Route exact path="/" component={Home} /> */}
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
