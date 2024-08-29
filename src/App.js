import React, { useState } from 'react';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import useThemeDetector from './hooks/theme-detector.hook';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const isDarkTheme = useThemeDetector();
  const [mode, setMode] = useState(isDarkTheme? 'dark' : 'light');
  console.log(mode);
  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header mode={mode} setMode={setMode}/>
      <AboutUs />
      <Services />
      <ContactUs />
      <Footer />
    </ThemeProvider>
  )
}

export default App;
