/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => (
  <Row className="flex-column  row-inner">
    <Col xs={12} className=" d-flex justify-content-center">
      <a href="#" className="d-inline-block image-avatar mx-3">
        <img src="https://user-images.githubusercontent.com/25479050/85928866-43384880-b8a8-11ea-89ab-9d42b1ae286d.jpg" alt="avatar name" />
      </a>
    </Col>
    <Col xs={12}>
      <h1>
        <strong>I am Strata</strong>
        , a super simple

        responsive site template freebie

        crafted by
        {' '}
        <a href="http://html5up.net">HTML5 UP</a>

      </h1>
    </Col>
  </Row>
);
export default Header;
