import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AboutUs = () => (
    <Container id="about-us" maxWidth="md">
        <Box my={8}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                About Us
            </Typography>
            <Typography variant="body1" color="text.secondary">
                We are a software house specialized in building software solutions that meet your business needs. Our vision and mission are to deliver exceptional services that drive success.
            </Typography>
        </Box>
    </Container>
);

export default AboutUs;
