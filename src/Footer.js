import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>We're a Boutique Health Mix Manufacturers based in Dublin Ireland, with an aim of making a change to the society</p>
                </div>
                <div className="footer-section">
                    <h4>React Us</h4>
                    <p>Email: sales@goldenmilk.com</p>
                    <p> +1 (123) 456-7819</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Golden Milk Inc. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;