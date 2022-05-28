import React from 'react';
import style from './PlaceHolder.module.scss';
import Loading from './../../../assets/loading.svg';
const PlaceHolder = () => {
  return (
    <div>
      <img src={Loading} alt='Loading' className={style.Image} />
    </div>
  );
};

export default PlaceHolder;
