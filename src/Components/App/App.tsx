import React, { useState } from 'react';
import style from './App.module.scss';
import Greeting from './Greeting/Greeting';
import { ParallaxProvider } from 'react-scroll-parallax';
import AboutMe from './AboutMe/AboutMe';
import ReactPageScroller from 'react-page-scroller';
import { ThemeProvider } from '@mui/material/styles';
import WorkExamples from './WorkExamples/WorkExamples';
import Contacts from './Contacts/Contacts';
import CVPDF from './CVPDF/CVPDF';
import PlaceHolder from '../styled/PlaceHolder/PlaceHolder';
import Header from './Header/Header';
import { createTheme } from '@mui/material/styles';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const LightTheme = createTheme({
    palette: {
      primary: {
        main: '#ECECEC',
      },
      text: {
        primary: '#000',
        secondary: '#D4D4D4',
      },
      info: {
        main: '#fff',
      },
    },
  });
  const DarkTheme = createTheme({
    palette: {
      primary: {
        main: '#2D2D2D',
      },
      text: {
        primary: '#fff',
        secondary: '#4E4E4E',
      },
      info: {
        main: '#000',
      },
    },
  });

  return (
    <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
      <ParallaxProvider>
        <div className={style.App}>
          <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
          <Greeting />
          <AboutMe />
          <WorkExamples />
          <CVPDF />
          <Contacts />
        </div>
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default App;
