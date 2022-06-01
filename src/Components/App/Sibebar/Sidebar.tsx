import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';

import Drawer from '@mui/material/Drawer';

import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
} from '@mui/material';

const Sidebar = (props: any) => {
  const drawer = <div style={{ color: '#fff' }}>123</div>;

  return (
    <Box
      component='nav'
      sx={{
        width: { sm: 400 },
        flexShrink: { sm: 0 },
        backgroundColor: '#000',
      }}
      aria-label='mailbox folders'
    >
      <Drawer
        open={true}
        variant='temporary'
        anchor='left'
        onClose={() => {}}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: props.drawerWidth,
            backgroundColor: '#000',
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
