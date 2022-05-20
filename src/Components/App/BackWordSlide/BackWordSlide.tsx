import React from 'react';
import style from './BackWordSlide.module.scss';
import { Parallax } from 'react-scroll-parallax';

const BackWordSlide = (props: any) => {
  return (
    <div className={style.greet}>
      {window.screen.width >= 900 ? (
        <Parallax translateX={['-20%', '50%']}>
          <div className={style.AboutMe}>
            <h1>{props.children[0]}</h1>
          </div>
        </Parallax>
      ) : (
        ''
      )}

      <div className={style.Text}>
        <h3>{props.children[1]}</h3>
      </div>
    </div>
  );
};

export default BackWordSlide;
