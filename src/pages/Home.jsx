import React from 'react';
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation';

const Home = () => {
  return (
    <div className="home-section">
      <div className='home-content'>
        <div className='home-intro'>
          <h1>Hello,</h1>
          <TypeAnimation 
            sequence={[
              "I'm Yashwanth Raju",
              1500,
              "I'm a MERN Stack Developer",
              1000,
              "I'm a Tech Enthusiast",
              1000,
              "I'm a Coding Mentor",
              5000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '3em',color:"white" ,display: 'inline-block' }}
            repeat={Infinity}
          />
          <p>Fueled by curiosity and a passion for web technologies, 
            I transform ideas into seamless user experiences. With a focus on full-stack development,
            I am dedicated to crafting modern web solutions that prioritize performance and innovation.</p>
        </div>
        <img src='/images/main.png' />
      </div>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/yashwanth-raju-sarikonda" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
        <a href="https://github.com/YashwanthRaju7" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
        <a href="https://www.youtube.com/@ytcodes" target="_blank" rel="noopener noreferrer"><FaYoutube size={30} /></a>
      </div>
    </div>
  );
};

export default Home;
