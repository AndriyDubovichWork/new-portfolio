import React from 'react';
import style from './BackWordSlide.module.scss';
import { Parallax } from 'react-scroll-parallax';
import { Typography, Box } from '@mui/material';

const BackWordSlide = (props: any) => {
  return (
    <Box className={style.greet} sx={{ backgroundColor: 'primary.main' }}>
      {window.screen.width >= 900 ? (
        <Parallax translateX={['-20%', '50%']}>
          <Typography
            className={style.AboutMe}
            sx={{ color: 'text.secondary' }}
          >
            {props.children[0]}
          </Typography>
        </Parallax>
      ) : (
        ''
      )}

      <Box className={style.Text} sx={{ backgroundColor: 'rgba(0,0,0,0)' }}>
        <Typography variant='h4' component='h4' sx={{ color: 'text.primary' }}>
          {props.children[1]}
        </Typography>
      </Box>
    </Box>
  );
};

export default BackWordSlide;
