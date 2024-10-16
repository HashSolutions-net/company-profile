import React from 'react';
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import { Link } from 'react-scroll';

const CallToActionTwo = () => {
    return (
        <div className="cta-section section section-padding-250">
            <div className="container text-center icon-up-down-animation">
                <SectionTitle
                    headingOption="fz-34"
                    title="Let's talk about your project and see how we can work together"
                    subTitle="Our team of designers, developers and creatives are perfectionists
                    who love what they do and love where they work"
                />
                <Link smooth={true} duration={500} className="btn btn-primary btn-hover-secondary" to='contact-us-sec'>Contact Us</Link>

                <div className="shape shape-1">
                    <span>
                        <img src={process.env.PUBLIC_URL + "images/techs/html.png"} alt="" />
                    </span>
                </div>
                <div className="shape shape-2">
                    <span>
                        <img src={process.env.PUBLIC_URL + "images/techs/typescript.png"} alt="" />
                    </span>
                </div>
                <div className="shape shape-3">
                    <span>
                        <img src={process.env.PUBLIC_URL + "images/techs/css.png"} alt="" />
                    </span>
                </div>
                <div className="shape shape-4">
                    <span>
                        <img src={process.env.PUBLIC_URL + "images/techs/react.png"} alt="" />
                    </span>
                </div>
                <div className="shape shape-5">
                    <span>
                        <img src={process.env.PUBLIC_URL + "images/techs/ios.png"} alt="" />
                    </span>
                </div>
                <div className="shape shape-6">
                    <span>
                        <img src={process.env.PUBLIC_URL + "images/techs/aws.png"} alt="" />
                    </span>
                </div>
                <div className="shape shape-7">
                    <span>
                        <img src={process.env.PUBLIC_URL + "images/techs/c-sharp.png"} alt="" />
                    </span>
                </div>
                <div className="shape shape-8">
                    <span>
                        <img src={process.env.PUBLIC_URL + "images/techs/sql.png"} alt="" />
                    </span>
                </div>
                <div className="shape shape-9">
                    <span>
                        <img src={process.env.PUBLIC_URL + "images/techs/android.png"} alt="" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CallToActionTwo;
