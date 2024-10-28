import PropTypes from "prop-types";
import React from 'react';
import { Link } from 'react-scroll';


const Logo = ({ image }) => {
    return (
        <div className="header-logo">
            <Link to="home-sec" smooth={true} duration={500}>
                <img className="dark-logo" src={process.env.PUBLIC_URL + image} alt="Agency Logo" />
            </Link>
        </div>
    )
}

Logo.propTypes = {
    image: PropTypes.string
};

export default Logo;
