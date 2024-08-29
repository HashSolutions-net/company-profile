import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Slider from 'react-slick';
import PrevArrow from './slick-arrows/prev-arrrow';
import NextArrow from './slick-arrows/next-arrow';

const Services = () => {
    
    return (
        <Container id="services" maxWidth="md">
            <Box my={8}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', marginTop: 8 }}>
                    Services
                </Typography>
                <div className="slider-container">
                    <Slider 
                        infinite={true}
                        speed={500}
                        slidesToShow={1}
                        nextArrow= {<NextArrow to="next"/>}
                        prevArrow= {<PrevArrow to="prev" />}
                    >
                        <div>
                            <p style={{textAlign: 'center'}}>
                                We develop tailored eCommerce platforms designed to boost sales and enhance the customer journey.
                                From seamless payment processing to intuitive UX/UI, we build solutions that drive online growth.
                            </p>
                        </div>
                        <div>
                            <p style={{textAlign: 'center'}}>
                                Secure, compliant medical software that improves patient care and operational efficiency.
                                Our solutions offer advanced features like patient management, secure data handling, and telehealth integration.
                            </p>
                        </div>
                        <div>
                           <p style={{textAlign: 'center'}}>
                                We create adaptive, high-performance streaming platforms to deliver smooth user experiences.
                                With multi-bitrate streaming and live content features, our solutions ensure reliability and engagement.
                            </p>
                        </div>
                        <div>
                           <p style={{textAlign: 'center'}}>
                                We specialize in building scalable SaaS applications for diverse business needs.
                                Our custom solutions ensure flexibility, security, and user-centric design to meet your unique service demands.
                            </p>
                        </div>
                    </Slider>
                </div>
            </Box>
        </Container>
    );
};

export default Services;
