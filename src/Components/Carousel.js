/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from './Card';

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

  handleCardClick(id) {
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
    return items.map(item => <Card item={item} click={e => this.handleCardClick(item.id, e)} key={item.id} />);
  }

  render() {
    const { items } = this.state;
    return (
      <Container fluid>
        <Row className="justify-content-around">
          {this.makeCards(items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
