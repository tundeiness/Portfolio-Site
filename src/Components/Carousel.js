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
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  handleCardClick(id, card) {
    const { items } = this.state;
    const item = [...items];
    item[id].selected = !item[id].selected;
    item.forEach(items => {
      if (items.id !== id) {
        item.selected = false;
      }
    });

    this.setState({ items: item });
  }

  makeCards(items) {
    return items.map(item => <Card item={item} onClick={e => this.handleCardClick(item.id, e)} key={item.id} />);
  }

  render() {
    return (
      <p>Carousel Works!</p>
    );
  }
}

export default Carousel;
