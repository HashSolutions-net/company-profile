import { useState, useEffect, useRef } from "react";
import SectionTitleTwo from '../../components/SectionTitles/SectionTitleTwo';
import { Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import Parallax from 'parallax-js';

const AboutUs = ({ title, content, isContentRight, imageOnePath, imageTwoPath, paddingBottom }) => {
    const [scale] = useState(1.04);
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        })

        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div id="about-us-sec" className="section section-padding-top" style={{
            paddingBottom
        }}>
            <div className="container">
                {
                    isContentRight ? (<div className="row aboutUsSec">
                        <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                            <div className="about-image-area">
                                <div className="about-image">
                                    <Tilt scale={scale} transitionSpeed={4000}>
                                        <img src={process.env.PUBLIC_URL + imageOnePath} alt="" />
                                    </Tilt>
                                </div>
                                <div className="about-image">
                                    <Tilt scale={scale} transitionSpeed={4000}>
                                        <img src={process.env.PUBLIC_URL + imageTwoPath} alt="" />
                                    </Tilt>
                                </div>

                                <div className="shape shape-1" id="scene" ref={sceneEl}>
                                    <span data-depth="1"><img src={process.env.PUBLIC_URL + "images/shape-animation/about-shape-1.png"} alt="" /></span>
                                </div>

                            </div>
                        </div>

                        <div className="col-xl-5 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
                            <div className="about-content-area">
                                <SectionTitleTwo
                                    subTitle=""
                                    title={title}
                                />

                                <p>{content}</p>
                            </div>
                        </div>
                    </div>) : (<div className="row">
                        <div className="col-xl-5 col-lg-6 col-12" data-aos="fade-up" data-aos-delay="300">
                            <div className="about-content-area">
                                <SectionTitleTwo
                                    subTitle=""
                                    title={title}
                                />

                                <p>{content}</p>
                            </div>
                        </div>

                        <div className="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                            <div className="about-image-area">
                                <div className="about-image">
                                    <Tilt scale={scale} transitionSpeed={4000}>
                                        <img src={process.env.PUBLIC_URL + imageOnePath} alt="" />
                                    </Tilt>
                                </div>
                                <div className="about-image">
                                    <Tilt scale={scale} transitionSpeed={4000}>
                                        <img src={process.env.PUBLIC_URL + imageTwoPath} alt="" />
                                    </Tilt>
                                </div>

                                <div className="shape shape-1" id="scene" ref={sceneEl}>
                                    <span data-depth="1"><img src={process.env.PUBLIC_URL + "images/shape-animation/about-shape-1.png"} alt="" /></span>
                                </div>

                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    )
}

export default AboutUs;
