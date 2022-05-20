import React from 'react';
import Slider from 'react-slick';
import style from './WorkExample.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';

const WorkExample = (props: {
  imgs: string[];
  name: string;
  explain: string;
  WebUrl: string;
  gitUrl: string;
}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <Slider {...settings} className={style.WorkExample}>
        {props.imgs.map((img) => {
          return (
            <div className={style.Wraper} key={img}>
              <img src={img} className={style.img} />
              <div className={style.Text}>
                <h1 className={style.title}>{props.name}</h1>
                <h3 className={style.subTitle}>{props.explain}</h3>
                <p className={style.Icons}>
                  <a target='_blank' href={props.gitUrl}>
                    <GitHubIcon
                      sx={{
                        fontSize: '50px',
                        margin: '0 auto',
                        cursor: 'pointer',
                        color: '#fff',
                      }}
                    />
                  </a>
                  <a target='_blank' href={props.WebUrl}>
                    <WebIcon
                      sx={{
                        fontSize: '50px',
                        margin: '0 auto',
                        cursor: 'pointer',
                        color: '#fff',
                      }}
                    />
                  </a>
                </p>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default WorkExample;
