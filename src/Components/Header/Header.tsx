import { AppBar, Slide, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import React, { useState } from 'react';
import style from './Header.module.scss';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import Sidebar from './../Sibebar/Sidebar';
import MenuIcon from '@mui/icons-material/Menu';

const Header = (props: { setIsDarkMode: any; isDarkMode: boolean }) => {
	const trigger = useScrollTrigger();
	const { isDarkMode, setIsDarkMode } = props;

	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const siteAncors = [
		{ to: '#greeting', name: 'Greeting' },
		{ to: '#aboutMe', name: 'About me' },
		{ to: '#workExamples', name: 'Work Examples' },
		{ to: '#cv', name: 'CV' },
		{ to: '#contacts', name: 'Contacts' },
	];
	return (
		<>
			<Sidebar
				siteAncors={siteAncors}
				isSidebarOpen={isSidebarOpen}
				setIsSidebarOpen={setIsSidebarOpen}
			/>
			<Slide appear={false} direction='down' in={!trigger}>
				<AppBar sx={{ backgroundColor: 'primary.main' }}>
					<Toolbar
						sx={{
							justifyContent: 'space-between',
							width: '90%',
							margin: '0 auto',
						}}
					>
						<MenuIcon sx={{ color: 'text.primary' }} onClick={() => setIsSidebarOpen(true)} />
						<Typography
							variant='h6'
							component='div'
							sx={{
								display: 'table-cell',
								verticalAlign: 'middle',
							}}
						>
							{isDarkMode ? (
								<LightModeIcon
									onClick={() => {
										setIsDarkMode(false);
									}}
									sx={{ fontSize: '2rem', marginTop: '10px' }}
								/>
							) : (
								<NightlightRoundIcon
									onClick={() => {
										setIsDarkMode(true);
									}}
									sx={{ fontSize: '2rem', marginTop: '10px' }}
								/>
							)}
						</Typography>
					</Toolbar>
				</AppBar>
			</Slide>
		</>
	);
};

export default Header;
