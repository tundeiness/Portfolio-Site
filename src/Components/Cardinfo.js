/* eslint-disable react/prop-types */
import React from 'react';
import { useSpring, animated } from 'react-spring';
// import Hero from '../Components/Hero';
// import Carousel from '../Components/Carousel';
// import Cardinfo from './Cardinfo';

const Cardinfo = ({ title, Subtitle, link }) => {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div className="gcard-info" style={style}>
      <p className="gcard-title">{title}</p>
      <p className="gcard-sub">{Subtitle}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View</a>
    </animated.div>
  );
};

export default Cardinfo;
