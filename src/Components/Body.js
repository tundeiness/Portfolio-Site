/* eslint-disable react/prop-types */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Hero from './Hero';
// import Carousel from '../Components/Carousel';

const Body = ({ title, subtitle, slug }) => (
  <Container className="p-0" fluid>
    <Row className="flex-sm-column flex-lg-row justify-content-sm-center">
      <Col xs={12}>1 of 2</Col>
      <Col xs={12}>2 of 2</Col>
    </Row>
  </Container>

);

export default Body;
