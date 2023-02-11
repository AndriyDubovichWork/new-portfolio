import WorkExample from './WorkExample/WorkExample';

import ZSU_1 from './../assets/imgs/ZSU/ZSU_1.png';
import ZSU_2 from './../assets/imgs/ZSU/ZSU_2.png';
import ZSU_3 from './../assets/imgs/ZSU/ZSU_3.png';
import ZSU_4 from './../assets/imgs/ZSU/ZSU_4.png';
import ZSU_5 from './../assets/imgs/ZSU/ZSU_5.png';

import WordHub_1 from './../assets/imgs/WordHub/WordHub_1.png';
import WordHub_2 from './../assets/imgs/WordHub/WordHub_2.png';
import WordHub_3 from './../assets/imgs/WordHub/WordHub_3.png';
import WordHub_4 from './../assets/imgs/WordHub/WordHub_4.png';

import task_shop_1 from './../assets/imgs/Task_Shop/task_shop_1.png';
import task_shop_2 from './../assets/imgs/Task_Shop/task_shop_2.png';
import task_shop_3 from './../assets/imgs/Task_Shop/task_shop_3.png';

import OldPortfolio_1 from './../assets/imgs/OldPortfolio/OldPortfolio_1.png';
import OldPortfolio_2 from './../assets/imgs/OldPortfolio/OldPortfolio_2.png';
import OldPortfolio_3 from './../assets/imgs/OldPortfolio/OldPortfolio_3.png';
import OldPortfolio_4 from './../assets/imgs/OldPortfolio/OldPortfolio_4.png';
import OldPortfolio_5 from './../assets/imgs/OldPortfolio/OldPortfolio_5.png';
import OldPortfolio_6 from './../assets/imgs/OldPortfolio/OldPortfolio_6.png';
import OldPortfolio_7 from './../assets/imgs/OldPortfolio/OldPortfolio_7.png';

import Russian_Losses_1 from './../assets/imgs/Russian_Losses/Russian_Losses_1.png';
import Russian_Losses_2 from './../assets/imgs/Russian_Losses/Russian_Losses_2.png';

import Phone_calculator_1 from './../assets/imgs/Phone_calculator/Phone_calculator_1.png';
import Phone_calculator_2 from './../assets/imgs/Phone_calculator/Phone_calculator_2.png';

import Shop_1 from './../assets/imgs/Shop/Shop_1.png';
import Shop_2 from './../assets/imgs/Shop/Shop_2.png';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const WorkExamples = () => {
	const ZSU_imgs = [ZSU_1, ZSU_2, ZSU_3, ZSU_4, ZSU_5];
	const WordHub_imgs = [WordHub_1, WordHub_2, WordHub_3, WordHub_4];
	const calculator_imgs = [Phone_calculator_1, Phone_calculator_2];
	const task_shop_imgs = [task_shop_1, task_shop_2, task_shop_3];
	const OldPortfolio_imgs = [
		OldPortfolio_1,
		OldPortfolio_2,
		OldPortfolio_3,
		OldPortfolio_4,
		OldPortfolio_5,
		OldPortfolio_6,
		OldPortfolio_7,
	];
	const Shop_imgs = [Shop_1, Shop_2];
	const RussianLosses = [Russian_Losses_1, Russian_Losses_2];

	return (
		<div id='workExamples'>
			<WorkExample
				imgs={WordHub_imgs}
				name='Word Hub'
				explain='App for learning new words'
				gitUrl='https://github.com/AndriyDubovichWork/word-hub'
				WebUrl='https://andriydubovichwork.github.io/word-hub/'
			/>
			<WorkExample
				imgs={RussianLosses}
				name='Russian Losses'
				explain='Site that show Russian losseses'
				gitUrl='https://github.com/AndriyDubovichWork/russian_losses'
				WebUrl='https://andriydubovichwork.github.io/russian_losses/'
			/>
			<WorkExample
				imgs={calculator_imgs}
				name='Phone Calculator'
				explain='React Native Calculator'
				gitUrl='https://github.com/AndriyDubovichWork/phone_calculator'
				WebUrl='https://expo.dev/accounts/asadad/projects/phone_calculator'
			/>
			<WorkExample
				imgs={task_shop_imgs}
				name='Shop'
				explain='test task shop'
				gitUrl='https://github.com/AndriyDubovichWork/test_task_shop'
				WebUrl='https://andriydubovichwork.github.io/test_task_shop/?category=all'
			/>
			{/* <WorkExample
        imgs={OldPortfolio_imgs}
        name='Old Portfolio'
        explain='my old portfolio'
        gitUrl='https://github.com/AndriyDubovichWork/Portfolio'
        WebUrl='https://andriydubovichwork.github.io/Portfolio/#/main'
      /> */}
		</div>
	);
};

export default WorkExamples;
