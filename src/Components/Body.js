/* eslint-disable react/prop-types */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Hero from './Hero';
// import Carousel from '../Components/Carousel';

const Body = ({ title, subtitle, slug }) => (
  <Container className="p-0 cont-color" fluid>
    <Row className="flex-sm-column flex-lg-row ">
      <Col className="px-5 row-col-color-1" border="primary" xs={12} lg={5}>1 of 2</Col>
      <Col className="px-5 row-col-color-2" border="primary" xs={12} lg={7}>2 of 2</Col>
    </Row>
  </Container>

);

export default Body;
