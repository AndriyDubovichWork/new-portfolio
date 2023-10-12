import WorkExample from './WorkExample/WorkExample';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import newsPulse from './../assets/imgs/news-pulse.png';
import pcClub from './../assets/imgs/PC_Club.png';
import testTaskShop from './../assets/imgs/test_task_shop.png';
import russianLosses from './../assets/imgs/russian_losses.png';

const WorkExamples = () => {
  return (
    <div id='workExamples'>
      <WorkExample
        img={newsPulse}
        name='Word Hub'
        explain='App for learning new words'
        gitUrl='https://github.com/AndriyDubovichWork/word-hub'
        WebUrl='https://andriydubovichwork.github.io/word-hub/'
      />
      <WorkExample
        img={pcClub}
        name='russian Losses'
        explain='Site that show Russian losseses'
        gitUrl='https://github.com/AndriyDubovichWork/russian_losses'
        WebUrl='https://andriydubovichwork.github.io/russian_losses/'
      />
      <WorkExample
        img={testTaskShop}
        name='Shop'
        explain='test task shop'
        gitUrl='https://github.com/AndriyDubovichWork/test_task_shop'
        WebUrl='https://andriydubovichwork.github.io/test_task_shop/?category=all'
      />
      <WorkExample
        img={russianLosses}
        name='russian Losses'
        explain='Site that show Russian losseses'
        gitUrl='https://github.com/AndriyDubovichWork/russian_losses'
        WebUrl='https://andriydubovichwork.github.io/russian_losses/'
      />
    </div>
  );
};

export default WorkExamples;
