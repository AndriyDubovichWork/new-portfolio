import React from 'react';
import style from './App.module.scss';
import Greeting from './Greeting/Greeting';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <div className={style.App}>
        <Greeting />
      </div>
    </ParallaxProvider>
  );
}

export default App;
