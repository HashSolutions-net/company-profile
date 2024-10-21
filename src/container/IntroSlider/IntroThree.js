import React from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from "react-router-dom";


const IntroThree = () => {
    return (
        <div className="intro-section section overlay" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero-image/hero-2.jpg)` }}>

            <div className="container">
                <div className="row row-cols-lg-1 row-cols-1">

                    <div className="col align-self-center">
                        <div className="intro-content-two headline-active text-center mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8">
                            <h2 className="title ah-headline">Empowering Your Business with {" "}
                                <Typewriter
                                    options={{
                                        strings: ["Innovative"],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 110
                                    }}
                                /> 
                            </h2>
                            <h2 className="title ah-headline">Software Solutions</h2>
                            <div className="desc">
                                <p>We transform your ideas into real software, helping your business grow and succeed</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default IntroThree
