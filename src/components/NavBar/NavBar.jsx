import React from 'react'
import { Link } from 'react-scroll';

const NavBar = () => {
    return (
        <nav className="site-main-menu">
            <ul>
                <li>
                    <Link to="home-sec" smooth={true} duration={500} className={{}}><span className="menu-text">Home</span></Link>
                </li>
                <li>
                    <Link to="about-us-sec" smooth={true} duration={500} className={{}}><span className="menu-text">About Us</span></Link>
                </li>
                <li>
                    <Link to="why-us-sec" smooth={true} duration={500} className={{}}><span className="menu-text">Why Us</span></Link>
                </li>
                <li>
                    <Link to="services-sec" smooth={true} duration={500} className={{}}><span className="menu-text">Services</span></Link>
                </li>
                <li>
                    <Link to="contact-us-sec" smooth={true} duration={500} className={{}}><span className="menu-text">Contact Us</span></Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
