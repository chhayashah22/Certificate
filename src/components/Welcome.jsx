import React from 'react';
import './Welcome.css';
import template from '../assets/img.png';
import { FaInstagram ,FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function Welcome() {
    return (
        <>
            <div className="Header">
                <div className='logo'>
                    <h2 className='logo-text'>.Certify<span>Xpert</span></h2>
                </div>
              
                    <Link to="/Siginin"><span>Login|</span></Link><Link to="/register"><span>Signup</span></Link>
                
            </div>
            <div className="container-welcome">
                <div className="text">
                    <h4> Certificate Generator </h4>
                    <p>Create Professional Certificates in Minutes
                    Design, customize, and generate certificates quickly and easily with our intuitive tool.</p>
               
                </div>
                <div className="image-container">

                    <img src={template} alt="Certificate template" />
                </div>
            </div>
            
                <div className="pricing-options">
                
                  
                    <div className="pricing-option">
                        <h3>Free Plan</h3>
                        <p>$0 / month</p>
                        <ul>
                            <li>10 certificates per month</li>
                            <li>Basic templates</li>
                            <li>Email support</li>
                        </ul>
                    </div>
                    <div className="pricing-option">
                        <h3>Base Plan</h3>
                        <p>$9.99 / month</p>
                        <ul>
                            <li>100 certificates per month</li>
                            <li>Standard templates</li>
                            <li>Email and chat support</li>
                        </ul>
                    </div>
                    <div className="pricing-option">
                        <h3>Pro Plan</h3>
                        <p>$19.99 / month</p>
                        <ul>
                            <li>Unlimited certificates</li>
                            <li>Priority support</li>
                        </ul>
                    </div>
                </div>
        
           
            <div className="features-section">
            
                <div className="feature1">
                <div className="feature2-heading"><h3>Manual Creation</h3></div>
                    <p>Design your certificate from scratch with our intuitive editor Customize your detail to meet your needs.</p>
                    <p>Download as PNG as well as PDF.</p>
                    <p>Modify your certificates anytime.</p>
                </div>
                <div className="feature2">
                    <div className="feature2-heading"><h3>Batch Creation</h3></div>
                    <p>You can generate multiple certificates by simply uploading a file.</p>
                    <p>Download as PNG as well as PDF.</p>
                    <p>You can download all certificates easily.</p>
                </div>
            </div>
            <div className="contact-us">
    <h2>Contact Us</h2>
    
    <div className="social-links">
        <a href="https://github.com" target="_blank" className="social-link">
            <FaGithub style={{ color: '#333', fontSize: '34px' }} />
        </a>
        <a href="https://instagram.com" target="_blank" className="social-link">
            <FaInstagram style={{ color: '#E4405F', fontSize: '34px' }} />
        </a>
        <a href="https://linkedin.com" target="_blank" className="social-link">
            <FaLinkedin style={{ color: '#0077B5', fontSize: '34px' }} />
        </a>
    </div>
    <div className="rights"><h6 className="feedback">&copy; 2024 Certify. All rights reserved.</h6></div>
    
</div>

        </>
    );
}
