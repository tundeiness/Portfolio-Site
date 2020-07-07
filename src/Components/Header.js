import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => (
  <>
    <Row className="flex-column  row-inner mb-5 pb-5">
      <Col xs={12} className=" d-flex justify-content-center justify-content-lg-end col-avatar">
        <a className="d-inline-block image-avatar mx-3">
          <img
            src="https://user-images.githubusercontent.com/25479050/86763357-2f76aa00-c03f-11ea-9722-ea02d72429f2.png"
            width={123}
            height={123}
            alt="avatar-name"
          />
        </a>
      </Col>
      <Col className="d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-end header-col" xs={12}>
        <h1 className="d-lg-inline d-xs-inline d-sm-inline header-col-heading">
          <strong>Hi!</strong>
          {' '}
          {' '}
          my name is
          {' '}
          <span className="name"><strong>Tunde Oretade</strong></span>
          {' '}
          <br />
          <br />
          <hr />
          <span className="title">Fullstack Developer  |  Tinkerer</span>
        </h1>
      </Col>
    </Row>

  </>
);
export default Header;
