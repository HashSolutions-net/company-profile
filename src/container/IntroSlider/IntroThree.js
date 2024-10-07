import React from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from "react-router-dom";


const IntroThree = () => {
    return (
        <div className="intro-section section overlay" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero-image/hero-4.jpg)` }}>

            <div className="container">
                <div className="row row-cols-lg-1 row-cols-1">

                    <div className="col align-self-center">
                        <div className="intro-content-two headline-active text-center mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8">
                            <h2 className="title ah-headline">Designing {" "}
                                <Typewriter
                                    options={{
                                        strings: ["awesome", "wonderful", "beautiful"],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 110
                                    }}
                                />
                            </h2>
                            <h2 className="title ah-headline">brands &amp; experiences</h2>
                            <div className="desc">
                                <p>We transforms your ideas into real software and help you grow your business</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default IntroThree
