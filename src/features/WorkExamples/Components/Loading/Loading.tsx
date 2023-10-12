import React from 'react';
import style from './Loading.module.scss';
import LoadingImg from './assets/loading.svg';

const Loading = () => {
  return (
    <div className={style.wrapper}>
      <img src={LoadingImg} alt='Loading' className={style.spinner} />
    </div>
  );
};

export default Loading;
