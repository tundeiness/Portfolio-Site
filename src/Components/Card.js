/* eslint-disable react/prop-types */
import React from 'react';

// import Hero from './Hero';
// import Carousel from './Carousel';
import Cardinfo from './Cardinfo';

const Card = ({ item }) => (
  <div>
    <img className="" src={item.imgSrc} alt={item.imgSrc} />
    { item.selected && <Cardinfo title={item.title} Subtitle={item.Subtitle} link={item.link} />}
  </div>
);

export default Card;
