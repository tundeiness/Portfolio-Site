/* eslint-disable react/prop-types */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Hero from './Hero';
// import Carousel from '../Components/Carousel';
import Header from './Header';
import Main from './Main';

const Body = ({ title, subtitle, slug }) => (
  <Container className="p-0 cont-color" fluid>
    <Row className="flex-sm-column flex-lg-row cont-row ">
      <Col className="px-5 row-col-color-1" xs={12} lg={5}>
        <Header className="header" />
      </Col>
      <Col className="px-5 row-col-color-2" xs={12} lg={7}>
        <Main />
      </Col>
    </Row>
  </Container>

);

export default Body;
