import React from 'react';
import style from './Greeting.module.scss';
import { Parallax } from 'react-scroll-parallax';

const Greeting = () => {
  return (
    <div className={style.greet}>
      <div className={style.Text}>
        <h1>Dubovich Andriy</h1>
        <h3>Front-End developer</h3>
      </div>
    </div>
  );
};

export default Greeting;
