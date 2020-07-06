/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import Body from './Components/Body';

class App extends React.Component {
  render() {
    return (
      <>
        <Container className="p-0" fluid="true">
          <Body />
        </Container>
      </>
    );
  }
}

export default App;
