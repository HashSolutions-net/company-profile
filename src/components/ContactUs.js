import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';

const ContactUs = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [picture, setPicture] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://dog.ceo/api/breeds/image/random")
        if (response.ok) {
            const res = await response.json();
            setPicture(res.message);
        }
    };

    return (
        <Container id="contact-us" maxWidth="sm">
            <Box my={8}>
                {
                    picture ?
                        <img
                            style={{ objectFit: 'cover', width: '100%' }}
                            height={200}
                            src={picture}
                            alt='alt'
                        />
                        : null
                }
                <Paper elevation={3} sx={{ padding: 4 }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Contact Us
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            required
                            label="Your Name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            required
                            label="Email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            error={!!(form.email && !/\S+@\S+\.\S+/.test(form.email))}
                            helperText={!!(form.email && !/\S+@\S+\.\S+/.test(form.email)) ? 'Enter a valid email' : ''}
                        />
                        <TextField
                            required
                            label="Your Message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            fullWidth
                            multiline
                            rows={4}
                            margin="normal"
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
                            Submit
                        </Button>
                    </form>
                </Paper>
            </Box>
        </Container>
    );
};

export default ContactUs;
