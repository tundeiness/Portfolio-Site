/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../fontawesome';

const Footer = () => (
  <>
    <Row className="row-footer mt-5 mb-2 pt-5 justify-content-center" id="footer">
      <Col className="footer-inner" lg={12} xs={12}>
        <Button className="footer-button" variant="outline-light">
          <a href="https://twitter.com/tundeiness" className="icon brands fa-twitter">
            <FontAwesomeIcon className="footer-icon" icon={['fab', 'twitter']} style={{ color: 'gray' }} size="lg" />
          </a>
        </Button>
        <Button className="footer-button ml-3" variant="outline-light">
          <a href="https://github.com/tundeiness" className="icon brands fa-github">
            <FontAwesomeIcon className="footer-icon" icon={['fab', 'github']} style={{ color: 'gray' }} size="lg" />
          </a>
        </Button>
        <Button className="footer-button ml-3" variant="outline-light">
          <a href="https://www.linkedin.com/in/tunde-oretade/" className="icon brands fa-linkedin">
            <FontAwesomeIcon className="footer-icon" icon={['fab', 'linkedin']} style={{ color: 'gray' }} size="lg" />
          </a>
        </Button>
        <Button className="footer-button ml-3" variant="outline-light">
          <a href="https://codepen.io/highness" className="icon brands fa-codepen">
            <FontAwesomeIcon className="footer-icon" icon={['fab', 'codepen']} style={{ color: 'gray' }} size="lg" />
          </a>
        </Button>
        {/* <Button className="footer-button ml-3" variant="outline-light">
          <a href="#" className="icon brands fa-angellist">
            <FontAwesomeIcon className="footer-icon" icon={['fab', 'angellist']} style={{ color: 'gray' }} size="lg" />
          </a>
        </Button> */}
        <ul className=" copyright ">
          <li className="d-inline" style={{ marginLeft: '-3em' }}>© 2020 | Tunde Oretade</li>
        </ul>
      </Col>
    </Row>
  </>
);
export default Footer;
