/* eslint-disable max-len */

import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import Content from '../Components/content';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
      email: '',
      disabled: false,
      emailSent: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      disabled: true,
      // emailSent: false,
    });
    // https://portfolio-node-back.herokuapp.com/
    // http://localhost:4040/api/email
    Axios.post('https://portfolio-node-back.herokuapp.com/api/email')
      .then(res => {
        if (res.data.success) {
          this.setState({ disabled: false, emailSent: true });
        } else {
          this.setState({ disabled: false, emailSent: false });
        }
      })
      .catch(err => {
        this.setState({ disabled: false, emailSent: false });
        console.log('Error', err);
      });
  }

  render() {
    const {
      name, email, message, disabled, emailSent,
    } = this.state;
    return (
      <div>
        <Content>
          <h2>Get In Touch</h2>
          <p>
            Do you like my work, have a question, want to just say hello, want to work together or you want to hire me? Contact me by filling out the form below or through social sites listed to the left of your screen.
          </p>
          <Form onSubmit={this.handleSubmit} md={8}>
            <Form.Group>
              <Form.Label htmlFor="full-name"> Full-Name</Form.Label>
              <Form.Control id="full-name" name="name" type="text" value={name} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email"> Email</Form.Label>
              <Form.Control id="email" name="email" type="email" value={email} onChange={this.handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="message"> Message</Form.Label>
              <Form.Control id="message" name="message" as="textarea" rows="6" value={message} onChange={this.handleChange} />
            </Form.Group>

            <Button className="d-inline-block main-button bg-transparent" variant="primary" type="submit" disabled={disabled}>
              Send Message
            </Button>

            {emailSent === true && <p className="d-inline success-msg">Message sent successfully</p>}

            {emailSent === false && <p className="d-inline err-msg">Message not sent</p>}
          </Form>
        </Content>
      </div>
    );
  }
}

export default Contact;
