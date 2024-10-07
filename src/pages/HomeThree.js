import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import IntroThree from '../container/IntroSlider/IntroThree';
import CallToAction from '../container/CallToAction/CallToAction';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import AboutFive from '../container/About/AboutFive.js';
import ServiceIconBox from '../container/service/ServiceIconBox.js';
import CallToActionTwo from '../container/CallToAction/CallToActionTwo.js';
import ContactInformationThree from '../container/ContactInformation/ContactInformationThree.js';
import HomeBlog from '../container/BlogGrid/HomeBlog.js';


const HomeThree = () => {
    return (
        <React.Fragment>
            <SEO title="Hash Solutions | Transformation to Digitalization" />
            <Header />
            <IntroThree />
            <AboutFive />
            <HomeBlog />
            <CallToAction />
            <ServiceIconBox />
            <CallToActionTwo />
            <ContactInformationThree />
            <Footer />
            <ScrollToTop />
        </React.Fragment>
    )
}

export default HomeThree;



