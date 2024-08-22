import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

const Header = () => (
    <AppBar position="sticky" sx={{ backgroundColor: '#333' }}>
        <Container maxWidth="lg">
            <Toolbar disableGutters>
                <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                    #Solutions
                </Typography>
                <Button color="inherit" href="#about-us" sx={{ fontWeight: 'bold' }}>About Us</Button>
                <Button color="inherit" href="#services" sx={{ fontWeight: 'bold' }}>Services</Button>
                <Button color="inherit" href="#contact-us" sx={{ fontWeight: 'bold' }}>Contact Us</Button>
            </Toolbar>
        </Container>
    </AppBar>
);

export default Header;
