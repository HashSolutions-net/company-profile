import React from 'react';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { CssBaseline } from '@mui/material';

const App = () => (
  <>
    <CssBaseline />
    <Header />
    <AboutUs />
    <Services />
    <ContactUs />
    <Footer />
  </>
);

export default App;
