import React from 'react';
import style from './Greeting.module.scss';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import BackGround from './../../../assets/imgs/Greeting/banner-background.jpg';
import ForeGround from './../../../assets/imgs/Greeting/banner-foreground.png';

const Greeting = () => {
  return (
    <ParallaxBanner
      layers={[
        {
          image: BackGround,
          speed: -40,
        },
        {
          image: ForeGround,
          speed: -10,
        },
      ]}
      className='aspect-[2/1]'
    >
      <div className={style.greet}>
        <div className={style.Text}>
          <h1>Dubovich Andriy</h1>
          <h3>Front-End developer</h3>
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default Greeting;
