/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
import React from 'react';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../fontawesome';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {/* <Container fluid="true">
          <Row className="border-top justify-content-between p-3">
            <Col className="p-0" md={3} sm={12}>O`tunde</Col>
            <Col className="p-0 d-flex justify-content-end" md={3}>Built with love by O`tunde</Col>
          </Row>
        </Container> */}
        <Row className="row-footer mt-5 pt-5 justify-content-center" id="footer">
          <Col className="footer-inner" lg={12} xs={12}>
            <Button className="footer-button" variant="outline-light">
              <FontAwesomeIcon className="footer-icon" icon={['fab', 'twitter']} style={{ color: 'gray' }} size="lg" />
            </Button>
            <Button className="footer-button ml-3" variant="outline-light">
              <FontAwesomeIcon className="footer-icon" icon={['fab', 'github']} style={{ color: 'gray' }} size="lg" />
            </Button>
            <Button className="footer-button ml-3" variant="outline-light">
              <FontAwesomeIcon className="footer-icon" icon={['fab', 'linkedin']} style={{ color: 'gray' }} size="lg" />
            </Button>
            <Button className="footer-button ml-3" variant="outline-light">
              <FontAwesomeIcon className="footer-icon" icon={['fab', 'angellist']} style={{ color: 'gray' }} size="lg" />
            </Button>
            {/* <ul className="icons">
              <li>
                <a href="#" className="icon brands fa-twitter">
                  <span className="label">
                    <FontAwesomeIcon icon={['fab', 'twitter']} style={{ color: 'white' }} size="lg" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands fa-github">
                  <span className="label">
                    <FontAwesomeIcon
                      icon={['fab', 'github']}
                      mask={['fas', 'circle']}
                      transform="grow-7 left-1.5 up-2.2"
                      style={{ color: 'white' }}
                      size="2.5x"
                      fixedWidth
                    />

                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands fa-dribbble">
                  <span className="label">
                    <FontAwesomeIcon
                      icon={['fab', 'linkedin']}
                      mask={['fas', 'circle']}
                      transform="grow-7 left-1.5 up-2.2"
                      style={{ color: 'white' }}
                      size="2.5x"
                      fixedWidth
                    />

                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="icon solid fa-envelope">
                  <span className="label">
                    <FontAwesomeIcon
                      icon={['fab', 'angellist']}
                      mask={['fas', 'circle']}
                      transform="grow-7 left-1.5 up-2.2"
                      style={{ color: 'white' }}
                      size="2.5x"
                      fixedWidth
                    />

                  </span>
                </a>
              </li>
            </ul> */}
            <ul className=" copyright ">
              <li className="d-inline" style={{ marginLeft: '-3em' }}>© 2020 | Tunde Oretade</li>
            </ul>
          </Col>
        </Row>
      </>
    );
  }
}
export default Footer;
