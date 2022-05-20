import React from 'react';
import BackWordSlide from '../BackWordSlide/BackWordSlide';
import style from './Contacts.module.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
const Contacts = () => {
  return (
    <BackWordSlide>
      <>Contacts</>
      <>
        <a href='https://t.me/asa_dad' target='_blank'>
          <TelegramIcon
            sx={{ fontSize: '100px', margin: '0 20px', color: '#000' }}
          />
        </a>
        <a href='https://github.com/AndriyDubovichWork' target='_blank'>
          <GitHubIcon
            sx={{ fontSize: '100px', margin: '0 20px', color: '#000' }}
          />
        </a>
        <a
          href='https://www.linkedin.com/in/andriy-dubovich-14507821a/'
          target='_blank'
        >
          <LinkedInIcon
            sx={{ fontSize: '100px', margin: '0 20px', color: '#000' }}
          />
        </a>
      </>
    </BackWordSlide>
  );
};

export default Contacts;
