import React from 'react';
import SEO from '../components/SEO';
import Header from "../partials/header/Header";
import IntroThree from '../container/IntroSlider/IntroThree';
import CallToAction from '../container/CallToAction/CallToAction';
import Footer from '../container/Footer/Footer';
import ScrollToTop from '../components/ScrollToTop.jsx';
import AboutFive from '../container/About/AboutUs.js';
import ServiceIconBox from '../container/service/ServiceIconBox.js';
import CallToActionTwo from '../container/CallToAction/CallToActionTwo.js';
import ContactInformationThree from '../container/ContactInformation/ContactInformationThree.js';

const aboutUsProps = {
    vision: {
        title: "Vision",
        content: "To be a global leader in delivering high-quality, cost-effective software solutions across diverse industries. Leveraging our skilled talent, we aim to expand from Egypt to Europe, MENA, and the USA. Our long-term vision is to evolve into a product-based company, driving innovation with transformative digital products that shape the future of technology.",
        isContentRight: true
    },
    mission: {
        title: "Mission",
        content: "At Hash Solutions, our mission is to empower businesses by delivering innovative, high-quality software solutions that solve real-world challenges. We strive to turn our clients' visions into reality through collaboration, technical expertise, and a commitment to excellence. Our goal is to drive business growth and innovation, one project at a time.",
        isContentRight: false
    }
}

const HomeThree = () => {
    return (
        <React.Fragment>
            <SEO title="Hash Solutions – Software Solutions Services" />
            <Header />
            <IntroThree />
            {
                Object.keys(aboutUsProps).map((key) => {
                    const {
                        title, content, isContentRight
                    } = aboutUsProps[key];
                    return (
                        <AboutFive key={key} title={title} content={content} isContentRight={isContentRight} />
                    );
                })
            }
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



