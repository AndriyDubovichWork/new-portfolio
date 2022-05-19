import React from 'react';
import Slider from 'react-slick';
import style from './WorkExample.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WorkExample = (props: {
  imgs: string[];
  name: string;
  explain: string;
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
      <h1 className={style.title}>{props.name}</h1>
      <h3>{props.explain}</h3>

      <Slider {...settings} className={style.WorkExample}>
        {props.imgs.map((img) => {
          return <img src={img} />;
        })}
      </Slider>
    </>
  );
};

export default WorkExample;
