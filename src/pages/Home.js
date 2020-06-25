/* eslint-disable react/prop-types */
import React from 'react';
import Hero from '../Components/Hero';
import Carousel from '../Components/Carousel';

const Home = ({ title, subtitle, slug }) => (
  <div>
    <Hero title={title} subtitle={subtitle} slug={slug} />
    <Carousel />
  </div>
);

export default Home;
