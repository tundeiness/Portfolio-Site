/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Main = () => (
  <Row className="flex-column">
    <Col className="main-col" id="About">
      <section id="one">
        <header className="major">
          <h2>
            Ipsum lorem dolor aliquam ante commodo
            <br />
            magna sed accumsan arcu neque.
          </h2>
        </header>
        <p>Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.</p>
        {/* <ul className="actions">
          <li><a href="#" className="button">Learn More</a></li>
        </ul> */}
        <Button variant="light" className="main-button">
          <a href="#" className="button">Learn More</a>
        </Button>
      </section>
    </Col>
    <Col className="border-top" id="next">Section two</Col>
    <Col className="border-bottom">Section three</Col>
    <Col>Footer</Col>
  </Row>
);
export default Main;
