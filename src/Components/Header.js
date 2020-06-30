/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => (
  <>
    <Row className="flex-column  row-inner">
      <Col xs={12} className=" d-flex justify-content-center justify-content-lg-end col-avatar">
        <a href="#" className="d-inline-block image-avatar mx-3">
          <img src="https://user-images.githubusercontent.com/25479050/85928866-43384880-b8a8-11ea-89ab-9d42b1ae286d.jpg" alt="avatar-name" />
        </a>
      </Col>
      <Col className="d-flex justify-content-center   justify-content-sm-center justify-content-md-center justify-content-lg-end" xs={12}>
        <h1 className="d-lg-inline d-xs-inline d-sm-inline">
          <strong>I am Strata</strong>
          , a super simple
          <br />
          <br />
          responsive site template freebie
          <br />
          <br />
          crafted by
          {' '}
          <a href="http://html5up.net">HTML5 UP</a>

        </h1>
      </Col>
    </Row>
    <Row className=" flex-column row-footer" id="footer">
      <Col className="footer-inner" lg={5} xs={12}>
        <ul className="icons">
          <li>
            <a href="#" className="icon brands fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-github">
              <span className="label">Github</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-dribbble">
              <span className="label">Dribbble</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon solid fa-envelope">
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>© Untitled</li>
          <li>
            Design:
            <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </Col>
    </Row>
  </>
);
export default Header;
