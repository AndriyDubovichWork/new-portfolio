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

const Header = (props: { setIsDarkMode: any; isDarkMode: boolean }) => {
  const trigger = useScrollTrigger();
  const { isDarkMode, setIsDarkMode } = props;
  return (
    <Slide appear={false} direction='down' in={!trigger}>
      <AppBar sx={{ backgroundColor: 'primaryMain' }}>
        <Toolbar>
          <Typography variant='h6' component='div'>
            {isDarkMode ? (
              <LightModeIcon
                onClick={() => {
                  console.log('1');
                  setIsDarkMode(false);
                  console.log('1');
                }}
              />
            ) : (
              <DarkModeIcon
                onClick={() => {
                  console.log('2');
                  setIsDarkMode(true);
                }}
              />
            )}
          </Typography>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default Header;