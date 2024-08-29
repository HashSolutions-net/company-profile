import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, IconButton, Box } from '@mui/material';
import {DarkMode as DarkModeIcon, LightMode as LightModeIcon} from '@mui/icons-material';
const Header = ({mode, setMode}) => (
    <AppBar position="sticky">
        <Container maxWidth="lg">
            <Toolbar disableGutters>
                <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                    #Solutions
                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'center', gap: 5}}>
                    <Button color="inherit" href="#about-us" sx={{ fontWeight: 'bold' }}>About Us</Button>
                    <Button color="inherit" href="#services" sx={{ fontWeight: 'bold' }}>Services</Button>
                    <Button color="inherit" href="#contact-us" sx={{ fontWeight: 'bold' }}>Contact Us</Button>
                    <IconButton onClick={() => {
                        setMode(mode === 'light' ? 'dark' : 'light')
                    }} sx={{ p: 0 }}>
                        {mode === 'light' ? <LightModeIcon /> : <DarkModeIcon /> }
                    </IconButton>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
);

export default Header;
