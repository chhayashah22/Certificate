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
                    <Link to ="/Register"><span>Signup</span></Link></div>
                </div>
                <div className="container-welcome">
                    <div className=""><p>Welcome to our Certificate Generator website </p></div>
                <div>
                   <img src={template}/>
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
                    <h3>Manual Feature</h3>
                    <p>Details about the manual feature.</p>
                </div>
                <div className="feature">
                    <h3>Batch Creation</h3>
                    <p>Details about batch creation.</p>
                </div>
            </div>

            
           
        </>
    );
}
