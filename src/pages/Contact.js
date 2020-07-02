/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
// import Hero from '../Components/Hero';
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

    Axios.post('http://localhost:4040/api/email')
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
    // const { title } = this.props;
    const {
      name, email, message, disabled, emailSent,
    } = this.state;
    return (
      <div>
        {/* <Hero title={title} /> */}
        <Content>
          <h2>Get In Touch</h2>
          <p>
            Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.
          </p>
          <Form onSubmit={this.handleSubmit}>
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

            {emailSent === true && <p className="d-inline success-msg">Email sent successfully</p>}

            {emailSent === false && <p className="d-inline err-msg">Email not sent</p>}
          </Form>
        </Content>
      </div>
    );
  }
}

export default Contact;
