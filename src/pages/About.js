/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import Hero from '../Components/Hero';
import Content from '../Components/content';

const About = ({ title }) => (
  // <p>You are in the About page!!</p>
  <div>
    <Hero title={title} />
    <Content>
      The best way to consume React-Bootstrap is via the npm package which you can install with npm (or yarn if you prefer).

      If you plan on customizing the Bootstrap Sass files, or don't want to use a CDN for the stylesheet, it may be helpful to install vanilla Bootstrap as well.
    </Content>
  </div>
);

export default About;
