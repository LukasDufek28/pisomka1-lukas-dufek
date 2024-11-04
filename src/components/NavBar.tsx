// src/components/Navbar.tsx
'use client'; // This ensures the component is client-side rendered

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link href="/" passHref>
              Home
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/prispevok" passHref>
              Prispevok
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/auth/registracia" passHref>
              Registracia
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/auth/prihlasenie" passHref>
              Prihlasenie
            </Link>
          </MenuItem>
        </Menu>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MyApp
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
