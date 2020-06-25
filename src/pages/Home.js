/* eslint-disable react/prop-types */
import React from 'react';
import Hero from '../Components/Hero';

const Home = ({ title, subtitle, slug }) => (
  <Hero title={title} subtitle={subtitle} slug={slug} />
);

export default Home;
