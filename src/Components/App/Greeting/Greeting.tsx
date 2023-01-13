import React from 'react';
import style from './Greeting.module.scss';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import day from './../../../assets/imgs/Greeting/day.jpg';
import nigth from './../../../assets/imgs/Greeting/nigth.jpg';
import ForeGround from './../../../assets/imgs/Greeting/banner-foreground.png';
import { Paper, Typography } from '@mui/material';

const Greeting = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <ParallaxBanner
      layers={[
        {
          image: nigth,
          speed: -60,
        },
        {
          image: ForeGround,
          speed: -25,
        },
      ]}
      className='aspect-[2/1]'
      id='greeting'
    >
      <Paper className={style.greet}>
        <div className={style.Text}>
          <Typography variant='h1' sx={{ color: 'primary.main' }}>
            Dubovich Andriy
          </Typography>
          <Typography variant='h3' sx={{ color: 'primary.main' }}>
            Front-End developer
          </Typography>
        </div>
      </Paper>
    </ParallaxBanner>
  );
};

export default Greeting;
