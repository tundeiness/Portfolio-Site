/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
import React from 'react';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="mt-5">
        {/* <Container fluid="true">
          <Row className="border-top justify-content-between p-3">
            <Col className="p-0" md={3} sm={12}>O`tunde</Col>
            <Col className="p-0 d-flex justify-content-end" md={3}>Built with love by O`tunde</Col>
          </Row>
        </Container> */}
        <Row className="row-footer" id="footer">
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
      </footer>
    );
  }
}
export default Footer;
