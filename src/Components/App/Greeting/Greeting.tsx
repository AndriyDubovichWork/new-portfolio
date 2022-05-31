import React from 'react';
import style from './Greeting.module.scss';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import BackGround from './../../../assets/imgs/Greeting/banner-background.jpg';
import ForeGround from './../../../assets/imgs/Greeting/banner-foreground.png';
import { Paper, Typography } from '@mui/material';

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
      <Paper className={style.greet}>
        <div className={style.Text}>
          <Typography variant='h1'>Dubovich Andriy</Typography>
          <Typography variant='h3'>Front-End developer</Typography>
        </div>
      </Paper>
    </ParallaxBanner>
  );
};

export default Greeting;
