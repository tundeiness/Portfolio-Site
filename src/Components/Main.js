/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../fontawesome';

import Contact from '../pages/Contact';
// import Footer from './Footerx';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      buttonId: 0,
      repositories: [
        {
          id: 1,
          title: 'eBartender',
          imageLink: 'https://user-images.githubusercontent.com/25479050/76782412-8a467600-67b0-11ea-90f4-c6ff1a5975ac.gif',
          description: 'React, Redux, Ruby on Rails, Javascript, Bootstrap, Postgresql, RSpec, Capybara, ',
          liveLink: 'https://gentle-harbor-14657.herokuapp.com/ ',
          github: 'https://github.com/tundeiness/eBartender ',
        },
        {
          id: 2,
          title: 'Bookstore',
          imageLink: 'https://user-images.githubusercontent.com/25479050/73641302-1ae94c80-4670-11ea-8933-ab6e6df2bcbc.gif',
          description: 'React, Redux, Javascript, HTML, CSS',
          liveLink: 'https://react-2020-bookstore.herokuapp.com/ ',
          github: 'https://github.com/tundeiness/Bookstore',
        },
        {
          id: 3,
          title: 'Restaurant',
          imageLink: 'https://user-images.githubusercontent.com/25479050/86515219-58185d00-be0f-11ea-8cd1-abbe05b6efc7.gif',
          description: 'Javascript, Webpack, Bootstrap, HTML, CSS,',
          liveLink: 'https://tundeiness.github.io/Restaurant/ ',
          github: 'https://github.com/tundeiness/Restaurant ',
        },
        {
          id: 4,
          title: 'NewsWeek',
          imageLink: 'https://user-images.githubusercontent.com/25479050/86515524-62d3f180-be11-11ea-8a93-56f6c35e0c55.png',
          description: 'Flex, HTML, CSS',
          liveLink: 'https://tundeiness.github.io/Newsweek-clone/ ',
          github: 'https://github.com/tundeiness/Newsweek-clone/tree/master ',
        },
      ],
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal(event) {
    this.setState({
      show: true,
      buttonId: Number(event.target.id),
    });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    const { show, repositories, buttonId } = this.state;

    const Repo = repositories.map(data => (
      <Col className="project-item mb-4" xs={12} lg="6" key={`${data.id}`}>
        <Card className="project-item-card ">
          <Card.Img variant="top" src={data.imageLink} />
          <Card.Text>{data.title}</Card.Text>
          <Button className="d-inline-block project-button" id={`${data.id}`} key={`${data.id}`} onClick={this.showModal}>View</Button>
        </Card>
      </Col>
    ));

    const filtered = repositories.filter(data => {
      if (data.id === buttonId) {
        return data;
      }
      return null;
    });

    return (
      <>
        <Row className="flex-column">
          <Col className="main-col-one" id="About">
            <section id="one">
              <header className="major">
                <h2>
                  {/* Ipsum lorem dolor aliquam ante commodo
                  <br />
                  magna sed accumsan arcu neque. */}
                  About Me
                </h2>
              </header>
              <p>
                I am a driven, self-starting full-stack web developer, skilled in the use of the following tech stack:
                {' '}
                <strong>Rails, Ruby, React, Redux, Javascript, Postgresql,</strong>
                {' '}
                and
                {' '}
                <strong>MySQL</strong>
                . I love making complex tasks simple.
                I am resourceful and I have a knack for paying attention to detail. I like working in a team, which allows me to grow and learn more.
                <br />
                In the future, I&apos;d like to set up a startup that focuses on providing programming solutions to the geospatial industry.
                When I&apos;m not writing codes, I love playing video games, tinkering with single board computers for IoT automation, and reading.
                <br />
                I&apos;m currently available for hire.

              </p>
              <Button className="main-button bg-transparent">
                <a href="#contact-me" className="button">Contact</a>
              </Button>
            </section>
          </Col>

          <Col className="section-two" id="next">
            <h2>Projects</h2>
            <p>Browse through selections of my projects based on the tech stacks I have used.</p>
            <Row className="flex-lg-wrap justify-content-lg-around">
              {Repo}
              {/* <Col className="project-item" xs={12} lg="6">
                1 of 4
                <Card className="project-item-card">
                  <Card.Img variant="top" src="https://user-images.githubusercontent.com/25479050/85928844-1b48e500-b8a8-11ea-8720-9665d4590d9e.jpg" />
                  <Button className="d-inline-block project-button" onClick={this.showModal}>View</Button>
                  <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and the card&#39;s content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col> */}
              {/* <Col className="project-item" xs={12} lg="6">
                2 of 4
              </Col>
              <Col className="project-item" xs={12} lg="6">
                3 of 4
              </Col>
              <Col className="project-item" xs={12} lg="6">
                4 of 4
              </Col> */}
            </Row>
          </Col>

          <Col className="main-col-three" id="next-form">
            <section id="three">
              {/* <h2>Get In Touch</h2>
        <p>
          Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.
        </p> */}
              <div className="row" id="contact-me">
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
        </Row>
        {filtered.map(data => (
          <Modal size="lg" centered show={show} key={`${data.id}`}>
            <Modal.Header closeButton onClick={this.hideModal}>
              <Modal.Title id="contained-modal-title-vcenter">
                {data.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card>
                <Card.Img variant="top" src={data.imageLink} />
                {/* <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </Card.Text>
                </Card.Body> */}
              </Card>
            </Modal.Body>
            <Modal.Footer className="justify-content-lg-between">
              <Row>
                <Col className="pl-0 modal-button" lg={12}>
                  <Button className="live">
                    <a target="_blank" rel="noreferrer" href={data.liveLink} className="modal-live-button">
                      Live
                    </a>
                  </Button>
                  <Button className="github ml-1">
                    <a target="_blank" rel="noreferrer" href={data.github} className="modal-Github-button">
                      <FontAwesomeIcon className="modal-github-button" icon={['fab', 'github']} size="2.5x" />
                    </a>
                  </Button>
                </Col>
              </Row>
              <Button className="modal-close-button" onClick={this.hideModal}>Close</Button>
            </Modal.Footer>
          </Modal>
        ))}
      </>
    );
  }
}
export default Main;
