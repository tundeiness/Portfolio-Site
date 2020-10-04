import React from 'react';
import PropTypes from 'prop-types';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hero = ({ title, subtitle, slug }) => (
  <Jumbotron className="bg-transparent jumbotron-fluid p-0">
    <Container fluid>
      <Row className="justify-content-center py-5">
        <Col md={5} sm={12}>
          {title && <p className="display-1 font-weight-bolder">{title}</p>}
          {subtitle && <p className="display-4 font-weight-light">{subtitle}</p>}
          {slug && <p className="lead font-weight-light">{slug}</p>}
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
export default Hero;
