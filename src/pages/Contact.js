/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      mesage: '',
      email: '',
      disabled: false,
      emailSent: null,
    };
  }

  render() {
    return (<p>Contact me!!</p>);
  }
}

export default Contact;
