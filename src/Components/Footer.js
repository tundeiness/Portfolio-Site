/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="mt-5">
        <Container fluid="true">
          <Row className="border-top justify-content-between p-3">
            <Col className="p-0" md={3} sm={12}>O`tunde</Col>
            <Col className="p-0 d-flex justify-content-end" md={3}>Built with love by O`tunde</Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
export default Footer;
