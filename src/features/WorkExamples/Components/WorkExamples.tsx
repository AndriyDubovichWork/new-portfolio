import WorkExample from './WorkExample/WorkExample';

import style from './WorkExamples.module.scss';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import newsPulse from './../assets/imgs/news-pulse.png';
import pcClub from './../assets/imgs/PC_Club.png';
import testTaskShop from './../assets/imgs/test_task_shop.png';
import russianLosses from './../assets/imgs/russian_losses.png';
import { Box } from '@mui/material';

const WorkExamples = () => {
  return (
    <Box
      sx={{ backgroundColor: 'primary.main' }}
      id='workExamples'
      className={style.workExamples}
    >
      <WorkExample
        img={newsPulse}
        name='News Pulse'
        explain='News Pulse is your premier source for the latest news, powered by the New York Times API. Dive into a world of information with our user-friendly platform, featuring diverse news categories. Stay ahead of the weather with our elegant widget and connect with our community via Google and GitHub logins.'
        gitUrl='https://github.com/AndriyDubovichWork/news_pulse'
        WebUrl='https://news-pulse-livid.vercel.app/'
      />
      <WorkExample
        isReverse
        img={pcClub}
        name='PC Club'
        explain='Unlock the Ultimate Gaming Experience! Rent high-end PCs for gaming and more. Enjoy a sleek, user-friendly design. Explore our selection of cool mouses and keyboards to take your gaming to the next level.'
        gitUrl='https://github.com/AndriyDubovichWork/PC_Club'
        WebUrl='https://andriydubovichwork.github.io/PC_Club/'
      />
      <WorkExample
        img={testTaskShop}
        name='Test Task Shop'
        explain='Welcome to Test Task Shop, your online shopping haven. Explore a wide array of product categories, with options for out-of-stock items. Shop in your preferred currency, fill your cart, and explore product attributes. Our seamless experience is driven by a GraphQL API for efficient and flexible shopping.'
        gitUrl='https://github.com/AndriyDubovichWork/test_task_shop'
        WebUrl='https://andriydubovichwork.github.io/test_task_shop/?category=all'
      />
      <WorkExample
        isReverse
        img={russianLosses}
        name='russian Losses'
        explain='Russian Losses is your source for tracking Russian casualties since 24th February 2022. With a sleek interface featuring cool icons and multi-language support, you can explore responsive charts that provide insights into various loss categories. Customize your view by selecting loss types through the graph icon for a comprehensive analysis.'
        gitUrl='https://github.com/AndriyDubovichWork/russian_losses'
        WebUrl='https://andriydubovichwork.github.io/russian_losses/'
      />
    </Box>
  );
};

export default WorkExamples;
