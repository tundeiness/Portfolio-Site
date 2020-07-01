/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Contact from '../pages/Contact';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      repositories: [
        {
          title: 'Welcome!',
          imageLink: 'Projects that showcases skills',
          description: 'feel free to check `em out',
          liveLink: 'Adipisicing magna elit veniam consectetur. Tempor amet laboris id occaecat quis ',
          github: 'Adipisicing magna elit veniam consectetur. Tempor amet laboris id occaecat quis ',
        },
        {
          title: 'Welcome!',
          imageLink: 'Projects that showcases skills',
          description: 'feel free to check `em out',
          liveLink: 'Adipisicing magna elit veniam consectetur. Tempor amet laboris id occaecat quis ',
          github: 'Adipisicing magna elit veniam consectetur. Tempor amet laboris id occaecat quis ',
        },
        {
          title: 'Welcome!',
          imageLink: 'Projects that showcases skills',
          description: 'feel free to check `em out',
          liveLink: 'Adipisicing magna elit veniam consectetur. Tempor amet laboris id occaecat quis ',
          github: 'Adipisicing magna elit veniam consectetur. Tempor amet laboris id occaecat quis ',
        },
        {
          title: 'Welcome!',
          imageLink: 'Projects that showcases skills',
          description: 'feel free to check `em out',
          liveLink: 'Adipisicing magna elit veniam consectetur. Tempor amet laboris id occaecat quis ',
          github: 'Adipisicing magna elit veniam consectetur. Tempor amet laboris id occaecat quis ',
        },
      ],
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    const { show } = this.state;
    return (
      <Row className="flex-column">
        <Col className="main-col-one" id="About">
          <section id="one">
            <header className="major">
              <h2>
                Ipsum lorem dolor aliquam ante commodo
                <br />
                magna sed accumsan arcu neque.
              </h2>
            </header>
            <p>
              Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.
            </p>
            <Button className="main-button">
              <a href="#" className="button">Learn More</a>
            </Button>
          </section>
        </Col>

        <Col className="section-two" id="next">
          <Row className="flex-lg-wrap justify-content-lg-around">
            <Col className="project-item" xs={12} lg="6">
              1 of 4
              <Card className="project-item-card">
                <Card.Img variant="top" src="https://user-images.githubusercontent.com/25479050/85928808-c5743d00-b8a7-11ea-9439-22df26f8e4c4.jpg" />
                <Button className="d-inline-block project-button">View</Button>
                {/* <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and the card&#39;s content.
              </Card.Text>
            </Card.Body> */}
              </Card>
            </Col>
            <Col className="project-item" xs={12} lg="6">
              2 of 4
            </Col>
            <Col className="project-item" xs={12} lg="6">
              3 of 4
            </Col>
            <Col className="project-item" xs={12} lg="6">
              4 of 4
            </Col>
          </Row>
        </Col>

        <Col className="main-col-three" id="next-form">
          <section id="three">
            {/* <h2>Get In Touch</h2>
        <p>
          Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.
        </p> */}
            <div className="row">
              <Contact />
              {/* <div className="col-8 col-12-small">
            <form method="post" action="#">
              <div className="row gtr-uniform gtr-50">
                <div className="col-6 col-12-xsmall">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="col-6 col-12-xsmall">
                  <input type="email" name="email" id="email" placeholder="Email" />
                </div>
                <div className="col-12">
                  <textarea name="message" id="message" placeholder="Message" rows="4" />
                </div>
              </div>
            </form>
            <ul className="actions">
              <li><input type="submit" value="Send Message" /></li>
            </ul>
          </div> */}

              {/* <div className="col-4 col-12-small">
            <ul className="labeled-icons">
              <li>
                <h3 className="icon solid fa-home"><span className="label">Address</span></h3>
                1234 Somewhere Rd.
                <br />
                Nashville, TN 00000
                <br />
                United States
              </li>
              <li>
                <h3 className="icon solid fa-mobile-alt">
                  <span className="label">Phone</span>
                </h3>
                000-000-0000
              </li>
              <li>
                <h3 className="icon solid fa-envelope">
                  <span className="label">Email</span>
                </h3>
                <a href="#">hello@untitled.tld</a>
              </li>
            </ul>
          </div> */}
            </div>
          </section>
        </Col>
        <Col>Footer</Col>
      </Row>
    );
  }
}
export default Main;
