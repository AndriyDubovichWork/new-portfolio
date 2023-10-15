import React, { useEffect, useState } from 'react';

import { Box, Drawer, List, ListItem, Typography } from '@mui/material';
import { Scrollchor } from 'react-scrollchor';

const Sidebar = (props: {
  siteAncors: any;
  setIsSidebarOpen: any;
  isSidebarOpen: boolean;
}) => {
  const drawer = (
    <Box
      sx={{
        color: 'text.primary',
      }}
    >
      <List>
        {props.siteAncors.map((el: { to: string; name: string }) => {
          return (
            <ListItem key={el.to}>
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
                    transition: '.75s color',
                    '&:hover': {
                      color: 'success.main',
                    },
                  }}
                  onClick={() => props.setIsSidebarOpen(false)}
                >
                  {el.name}
                </Typography>
              </Scrollchor>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Box
      component='nav'
      sx={{
        width: { sm: 400 },
        flexShrink: { sm: 0 },
        backgroundColor: 'primary.main',
      }}
      aria-label='mailbox folders'
    >
      <Drawer
        open={props.isSidebarOpen}
        variant='temporary'
        anchor='left'
        onClose={() => props.setIsSidebarOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 400,
            backgroundColor: 'primary.main',
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
