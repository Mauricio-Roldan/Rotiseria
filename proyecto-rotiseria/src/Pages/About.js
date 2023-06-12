import React from 'react';
import "../App.css";
import AboutUs from '../components/AboutUs/AboutUs';
const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <AboutUs />
    </div>
  );
};

export default About;