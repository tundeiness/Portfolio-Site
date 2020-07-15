/* eslint-disable react/prop-types */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Hero from '../Components/Hero';
// import Carousel from '../Components/Carousel';

const Home = ({ title, subtitle, slug }) => (
  // <Container className="p-0" fluid="true"></Container>
  <Row lg={2}>
    <Hero title={title} subtitle={subtitle} slug={slug} />
    {/* <Carousel /> */}
  </Row>
);

export default Home;
