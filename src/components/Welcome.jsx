import React from "react";
import { Link } from "react-router-dom";

import './Welcome.css';
import template from '../assets/img2.jpg';


export default function Welcome() {



    return (
        <>
            <div className="Header">
                <div className='logo'><h2 className='logo-text'>.Certify<span>Xpert</span></h2></div>
                <div><Link to="/signin"><span>Login</span></Link>
                    <Link to="/Register"><span>Signup</span></Link></div>
            </div>
            <div className="container-welcome">
                <div className=""><h2>Welcome to our Certificate Generator website </h2> <p>Create Professional Certificates in Minutes</p>
                    <p>Design, customize, and generate certificates quickly and easily with our intuitive tool.</p>
                </div>
                <div>
                    <img src={template} />
                </div>
            </div>



            <div className="pricing-section">

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
            </div>

            <div className="features-section">
                <div className="feature">
                <h4>Manual Creation</h4>
                    
                    <p>Design your certificate from scratch with our intuitive editor. Customize every detail to meet your needs             
                
                    <p>Download as PNG as well as PDF</p>
                    Save your completed certificate as a high-quality PNG image</p>
                                
               
                
                    
                    <p>Modify your certificates anytime. Revisit and update them whenever you need to make changes.</p>
                </div>
           
            <div className="feature">
                <h3>Batch Creation</h3>
                <p>You can generate Multiple Certificates by simply uploading a File</p>
                <p>You can download easily all certificates</p>
            </div>
            </div >
           
      <div className="footer-content">
        <div className="footer-section contact-us">
          <h3>Contact Us</h3>
          <p>support@certifyxpert.com</p>
          <p> +91987526655</p>
        </div>
        <div className="footer-section social-links">
          
          <a href="https://linkeln.com" target="_blank" rel="noopener noreferrer">LinkedLn</a>
          <a href="https://gmail.com" target="_blank" rel="noopener noreferrer">Mail</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 CertifyXpert. All rights reserved.</p>
      </div>
 

            
           
        </>
    );
}
