/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => (
  <Row className="flex-column justify-content-center row-inner my-5">
    <Col xs={12}>
      <a href="#" className="d-inline-block image-avatar mx-2">
        <img src="https://user-images.githubusercontent.com/25479050/85928866-43384880-b8a8-11ea-89ab-9d42b1ae286d.jpg" alt="avatar name" />
      </a>
    </Col>
  </Row>
);
export default Header;
