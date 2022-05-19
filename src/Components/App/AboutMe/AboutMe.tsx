import React from 'react';
import style from './AboutMe.module.scss';
import { Parallax } from 'react-scroll-parallax';

const AboutMe = () => {
  console.log(window.screen.width);
  return (
    <div className={style.greet}>
      {window.screen.width >= 900 ? (
        <Parallax translateX={['-20%', '50%']}>
          <div className={style.AboutMe}>
            <h1>About Me</h1>
          </div>
        </Parallax>
      ) : (
        ''
      )}

      <div className={style.Text}>
        <h3>Front-End developer</h3>
      </div>
    </div>
  );
};

export default AboutMe;
