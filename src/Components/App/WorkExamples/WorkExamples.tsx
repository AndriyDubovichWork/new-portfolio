import React, { useState } from 'react';
import style from './WorkExamples.module.scss';

import fs from 'fs';

import WorkExample from './WorkExample/WorkExample';

import ZSU_1 from './../../../assets/imgs/ZSU/ZSU_1.png';
import ZSU_2 from './../../../assets/imgs/ZSU/ZSU_2.png';
import ZSU_3 from './../../../assets/imgs/ZSU/ZSU_3.png';
import ZSU_4 from './../../../assets/imgs/ZSU/ZSU_4.png';
import ZSU_5 from './../../../assets/imgs/ZSU/ZSU_5.png';

import WordHub_1 from './../../../assets/imgs/WordHub/WordHub_1.png';
import WordHub_2 from './../../../assets/imgs/WordHub/WordHub_2.png';

import Weather_1 from './../../../assets/imgs/Weather/Weather_1.png';
import Weather_2 from './../../../assets/imgs/Weather/Weather_2.png';

import Shop_1 from './../../../assets/imgs/Shop/Shop_1.png';
import Shop_2 from './../../../assets/imgs/Shop/Shop_2.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WorkExamples = () => {
  const ZSU_imgs = [ZSU_1, ZSU_2, ZSU_3, ZSU_4, ZSU_5];
  const WordHub_imgs = [WordHub_1, WordHub_2];
  const Weather_imgs = [Weather_1, Weather_2];
  const Shop_imgs = [Shop_1, Shop_2];

  return (
    <>
      <WorkExample imgs={ZSU_imgs} name='ZSU' explain='' />
      <WorkExample imgs={Shop_imgs} name='Shop' explain='' />
      <WorkExample imgs={WordHub_imgs} name='WordHub' explain='' />
      <WorkExample imgs={Weather_imgs} name='Weather from API' explain='' />
    </>
  );
};

export default WorkExamples;
