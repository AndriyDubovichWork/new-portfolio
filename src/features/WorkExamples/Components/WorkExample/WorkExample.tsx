import React, { useState } from 'react';
import Slider from 'react-slick';
import style from './WorkExample.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import PlaceHolder from '../Loading/Loading';

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
    <div className={`${style.example} ${style.reverse}`}>
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
        <h1 className={style.name}>{name}</h1>
        <h3 className={style.explain}>{explain}</h3>
        <div className={style.Icons}>
          <a target='_blank' href={gitUrl} rel='noreferrer'>
            <GitHubIcon
              sx={{
                fontSize: '50px',
                margin: '0 auto',
                cursor: 'pointer',
                color: '#fff',
              }}
            />
          </a>
          <a target='_blank' href={WebUrl} rel='noreferrer'>
            <WebIcon
              sx={{
                fontSize: '50px',
                margin: '0 auto',
                cursor: 'pointer',
                color: '#fff',
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkExample;
