/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => (
  <>
    <Row className="flex-column  row-inner mb-5 pb-5">
      <Col xs={12} className=" d-flex justify-content-center justify-content-lg-end col-avatar">
        <a href="#" className="d-inline-block image-avatar mx-3">
          <img src="https://user-images.githubusercontent.com/25479050/85928866-43384880-b8a8-11ea-89ab-9d42b1ae286d.jpg" alt="avatar-name" />
        </a>
      </Col>
      <Col className="d-flex justify-content-center   justify-content-sm-center justify-content-md-center justify-content-lg-end" xs={12}>
        <h1 className="d-lg-inline d-xs-inline d-sm-inline">
          <strong>Hi!</strong>
          {' '}
          {' '}
          my name is
          {' '}
          <strong>Tunde Oretade</strong>
          {' '}
          <br />
          <br />
          Developer | Tinkerer
          {/* , a super simple
          <br />
          <br />
          responsive site template freebie
          <br />
          <br />
          crafted by
          {' '}
          <a href="http://html5up.net">HTML5 UP</a> */}
        </h1>
      </Col>
    </Row>

  </>
);
export default Header;
