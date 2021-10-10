import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div"><Link style={{textDecoration: 'none',color: 'white'}} to="/">
            Game of Thrones</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
