import {
  AppBar,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import React from 'react';
import style from './Header.module.scss';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Scrollchor } from 'react-scrollchor';
import Sidebar from './../Sibebar/Sidebar';

const Header = (props: { setIsDarkMode: any; isDarkMode: boolean }) => {
  const trigger = useScrollTrigger();
  const { isDarkMode, setIsDarkMode } = props;
  const siteAncors = [
    { to: '#greeting', name: 'Greeting' },
    { to: '#aboutMe', name: 'About me' },
    { to: '#workExamples', name: 'Work Examples' },
    { to: '#cv', name: 'CV' },
    { to: '#contacts', name: 'Contacts' },
  ];
  return (
    <>
      <Sidebar />
      <Slide appear={false} direction='down' in={!trigger}>
        <AppBar sx={{ backgroundColor: 'primary.main' }}>
          <Toolbar sx={{ justifyContent: 'space-around' }}>
            {siteAncors.map((el) => {
              return (
                <Scrollchor
                  to={el.to}
                  style={{
                    textDecoration: 'none',
                    fontSize: '2rem',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '2rem',
                      color: 'text.primary',
                    }}
                  >
                    {el.name}
                  </Typography>
                </Scrollchor>
              );
            })}
            <Typography variant='h6' component='div'>
              {isDarkMode ? (
                <LightModeIcon
                  onClick={() => {
                    setIsDarkMode(false);
                  }}
                  sx={{ fontSize: '2rem' }}
                />
              ) : (
                <DarkModeIcon
                  onClick={() => {
                    setIsDarkMode(true);
                  }}
                  sx={{ fontSize: '2rem' }}
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
