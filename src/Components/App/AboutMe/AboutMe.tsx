import React from 'react';
import style from './AboutMe.module.scss';
import { Parallax } from 'react-scroll-parallax';
import BackWordSlide from '../BackWordSlide/BackWordSlide';

const AboutMe = () => {
  return (
    <BackWordSlide>
      <>About Me</>
      <>Front-End developer who cares about projects quality</>
    </BackWordSlide>
  );
};

export default AboutMe;
