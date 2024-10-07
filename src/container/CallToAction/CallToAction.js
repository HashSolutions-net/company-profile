import {useEffect, useRef} from "react";
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import Parallax from 'parallax-js';
import { Link } from "react-scroll";

const CallToAction = () => {
    const sceneEl = useRef(null);
    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        })
        
        parallaxInstance.enable();

        return () => parallaxInstance.disable();

    }, [])
    return (
        <div className="section section-bg-image section-padding-t110-b120 newsletter-section overlay-two" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/newsletter.jpg)`}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 m-auto">
                        <div className="cta-content text-center">
                            <SectionTitle
                                titleOption="color-light text-center mb-0"
                                title="Do you have any inqueries ?"
                                subTitle="Do not hesitate to contact us at any time and one of our representatives will follow up"
                            />
                            <Link to='contact-us-sec' className="btn btn-primary btn-hover-secondary mt-6" data-aos="fade-up" data-aos-delay="300">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape shape-1" id="scene" ref={sceneEl}>
                <span data-depth="1">
                    <img src={process.env.PUBLIC_URL + '/images/shape-animation/newsletter-shape.png'} alt="" />
                </span>
            </div>
        </div>
    )
}

export default CallToAction;
