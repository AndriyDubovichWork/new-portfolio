import React, { useState } from 'react';
import Slider from 'react-slick';
import style from './WorkExample.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import PlaceHolder from '../Loading/Loading';
import { Box, Typography } from '@mui/material';

const iconStyle = {
  fontSize: '50px',
  margin: '0 auto',
  cursor: 'pointer',
  color: 'text.primary',
  transition: '.75s color',
  '&:hover': {
    color: 'success.main',
  },
};

type workExample = {
  img: string;
  name: string;
  explain: string;
  WebUrl: string;
  gitUrl: string;
  isReverse?: boolean;
};

const WorkExample = ({
  img,
  WebUrl,
  explain,
  gitUrl,
  name,
  isReverse,
}: workExample) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Box
      className={`${style.example} ${isReverse && style.reverse}`}
      sx={{ backgroundColor: 'primary.main' }}
    >
      {!isLoaded && <PlaceHolder />}
      <div className={style.container}>
        <img
          style={isLoaded ? {} : { display: 'none' }}
          src={img}
          className={style.img}
          alt={img}
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      <div className={style.text}>
        <Typography
          variant='h4'
          sx={{ color: 'text.primary' }}
          className={style.name}
        >
          {name}
        </Typography>
        <Typography
          variant='h6'
          sx={{ color: 'text.primary' }}
          className={style.explain}
        >
          {explain}
        </Typography>
        <div className={style.icons}>
          <a target='_blank' href={gitUrl} rel='noreferrer'>
            <GitHubIcon sx={iconStyle} />
          </a>
          <a target='_blank' href={WebUrl} rel='noreferrer'>
            <LanguageIcon sx={iconStyle} />
          </a>
        </div>
      </div>
    </Box>
  );
};

export default WorkExample;
