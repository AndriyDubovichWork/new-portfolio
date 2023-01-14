import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import BackWordSlide from '../../../Components/BackWordSlide/BackWordSlide';
const Contacts = (props: any) => {
	const icon = {
		fontSize: '100px',
		margin: '0 20px',

		border: '3px solid',
		borderColor: 'text.primary',
		borderRadius: '25px',

		color: 'text.primary',
		'&:hover': {
			backgroundColor: 'text.primary',
			color: 'info.main',
		},
	};
	return (
		<div id='contacts'>
			<BackWordSlide>
				<>Contacts</>
				<>
					<a href='https://t.me/asa_dad' target='_blank' rel='noreferrer'>
						<TelegramIcon sx={icon} />
					</a>
					<a href='https://github.com/AndriyDubovichWork' target='_blank' rel='noreferrer'>
						<GitHubIcon sx={icon} />
					</a>
					<a
						href='https://www.linkedin.com/in/andriy-dubovich-14507821a/'
						target='_blank'
						rel='noreferrer'
					>
						<LinkedInIcon sx={icon} />
					</a>
				</>
			</BackWordSlide>
		</div>
	);
};

export default Contacts;
