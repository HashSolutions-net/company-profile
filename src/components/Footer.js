import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Footer = () => (
    <Box sx={{ backgroundColor: '#333', color: 'white', padding: 4, marginTop: 8 }}>
        <Container maxWidth="lg">
            <Typography variant="body2" color="inherit" align="center">
                {`© ${new Date().getFullYear()} #Solutions. All rights reserved.`}
            </Typography>
            <Typography variant="body2" color="inherit" align="center">
                Contact Info: info@hashsolutions.com | 01025693869
            </Typography>
        </Container>
    </Box>
);

export default Footer;
