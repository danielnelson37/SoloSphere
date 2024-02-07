import React from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="contact-information">
                <h3>Contact Information</h3>
                <p>Address: Your Address</p>
                <p>Email: your@email.com</p>
                <p>Phone: + 1 123-456-7890</p>
            </div>

            <div className="navigation-links">
                <h3>Navigation Links</h3>
                <ul>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li><NavLink to='/gallery'>Gallery</NavLink></li>
                {/* Add more links as needed */}
                </ul>
            </div>

            <div className="social-media-links">
                <h3>Social Media Links</h3>
                {/*Add Social media icons and links */}
            </div>

            <div className="copyright-information">
                <h3>Copyright Information</h3>
                <p>&copy; {currentYear} SOLISPHERE</p>
            </div>

            <div className="privacy-terms-links">
                <h3>Privacy Policy and Terms of Service</h3>
                <ul>
                    <li><NavLink to='/privacy-policy'>Privacy Policy</NavLink></li>
                    <li><NavLink to='/terms-of-service'>Terms of Service</NavLink></li>
                </ul>
            </div>

            <div className="back-to-top-button">
                <h3>Back to Top Button</h3>
                {/*add back to top button*/}
            </div>

            <div className="accessibility-information">
                <h3>Accessibility Information:</h3>
                {/* Add links to accessibility information or features */}
            </div>

        </footer>
    );
};

export default Footer; 