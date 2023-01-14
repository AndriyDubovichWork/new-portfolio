import React, { useState } from 'react';
import style from './App.module.scss';
// import Greeting from './features/Greeting/components/Greeting';
import { ParallaxProvider } from 'react-scroll-parallax';
import ReactPageScroller from 'react-page-scroller';
import { ThemeProvider } from '@mui/material/styles';
import CVPDF from './features/CVPDF/components/CVPDF';
import PlaceHolder from './features/WorkExamples/Components/Loading/Loading';
import Header from './Components/Header/Header';
import { createTheme } from '@mui/material/styles';
import Greeting from './features/Greeting/components/Greeting';
import AboutMe from './features/AboutMe/components/AboutMe';
import Contacts from './features/Contacts/components/Contacts';
import WorkExamples from './features/WorkExamples/Components/WorkExamples';

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const LightTheme = createTheme({
		palette: {
			primary: {
				main: '#ECECEC',
			},
			text: {
				primary: '#000',
				secondary: '#D4D4D4',
			},
			info: {
				main: '#fff',
			},
		},
	});
	const DarkTheme = createTheme({
		palette: {
			primary: {
				main: '#2D2D2D',
			},
			text: {
				primary: '#fff',
				secondary: '#4E4E4E',
			},
			info: {
				main: '#000',
			},
		},
	});
	return (
		<ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
			<ParallaxProvider>
				<div className={style.App}>
					<Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
					<Greeting isDarkMode={isDarkMode} />
					<AboutMe />
					<WorkExamples />
					<CVPDF />
					<Contacts />
				</div>
			</ParallaxProvider>
		</ThemeProvider>
	);
}

export default App;
