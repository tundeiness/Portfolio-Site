/* eslint-disable react/prop-types */
import React from 'react';
import Hero from './Hero';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Bookstore',
          Subtitle: 'Where to store books',
          imgSrc: 'growing',
          link: 'https://www.roger.com',
          selected: false,
        },
        {
          id: 1,
          title: 'eBartender',
          Subtitle: 'Select your cocktails',
          imgSrc: 'growing',
          link: 'https://www.rogerdrinkin.com',
          selected: false,
        },
        {
          id: 3,
          title: 'Fakebook-Api',
          Subtitle: 'Where fakes come alive',
          imgSrc: 'growing',
          link: 'https://www.fakeroger.com',
          selected: false,
        },
      ],
    };
  }

  render() {
    return (
      <p>Carousel Works!</p>
    );
  }
}

export default Carousel;
