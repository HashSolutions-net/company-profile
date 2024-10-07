import React from 'react';
import {Link} from "react-router-dom";
import Logo from '../../components/logo/Logo';
import FooterData from '../../data/Footer/footerItem.json';
import FooterLinkItem from '../../components/Footer/FooterLinkItem.jsx';

const Footer = () => {
    return (
        <div className="footer-section section footer-bg-color">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="copyright">&copy; All copyrights are reserved to <strong>Hash Solutions</strong>. {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
