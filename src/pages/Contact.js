/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Form from 'react-bootstrap/Form';
import Hero from '../Components/Hero';
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
  }

  render() {
    const { title } = this.props;
    const { name } = this.state;
    return (
      <div>
        <Hero title={title} />
        <Content>
          <Form>
            <Form.Group>
              <Form.Label htmlFor="full-name"> Full Name</Form.Label>
              <Form.Control id="full-name" name="name" type="text" value={name} />
            </Form.Group>
          </Form>
        </Content>
      </div>
    );
  }
}

export default Contact;
