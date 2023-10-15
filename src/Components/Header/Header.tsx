import {
  AppBar,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import React, { useState } from 'react';
import style from './Header.module.scss';
import LightModeIcon from '@mui/icons-material/LightMode';
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
  const themeIconStyle = {
    fontSize: '2rem',
    marginTop: '10px',
    cursor: 'pointer',
    '@keyframes rotate': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '50%': {
        transform: 'rotate(50deg)',
      },
      '100%': {
        transform: 'rotate(0deg)',
      },
    },

    animation: 'rotate .75s',
  };
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
            <MenuIcon
              sx={{ color: 'text.primary', cursor: 'pointer' }}
              onClick={() => setIsSidebarOpen(true)}
            />
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
                  sx={themeIconStyle}
                />
              ) : (
                <NightlightRoundIcon
                  onClick={() => {
                    setIsDarkMode(true);
                  }}
                  sx={themeIconStyle}
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
