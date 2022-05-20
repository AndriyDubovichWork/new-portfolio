import React, { useState } from 'react';
import style from './App.module.scss';
import Greeting from './Greeting/Greeting';
import { ParallaxProvider } from 'react-scroll-parallax';
import AboutMe from './AboutMe/AboutMe';
import ReactPageScroller from 'react-page-scroller';
import WorkExamples from './WorkExamples/WorkExamples';
import Contacts from './Contacts/Contacts';
import CVPDF from './CVPDF/CVPDF';

function App() {
  return (
    <ParallaxProvider>
      <div className={style.App}>
        <Greeting />
        <AboutMe />
        <WorkExamples />
        <CVPDF />
        <Contacts />
      </div>
    </ParallaxProvider>
  );
}

export default App;
