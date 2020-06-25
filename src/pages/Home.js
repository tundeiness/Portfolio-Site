/* eslint-disable react/prop-types */
import React from 'react';
import Hero from '../Components/Hero';
import Carousel from '../Components/Carousel';

const Home = ({ title, subtitle, slug }) => (
  <Hero title={title} subtitle={subtitle} slug={slug} />,
    <Carousel />
);

export default Home;
