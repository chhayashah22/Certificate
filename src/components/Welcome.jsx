import React from "react";


import './Welcome.css';
import template from '../assets/img.jpg';


export default function Welcome() {
    

    
    return (
        <>
                    
         
                <div className="Header">
                    <div className='logo'><h2 className='logo-text'>.Certify<span >Xpert</span></h2></div>
                    <div><button className="btn-login">Login</button>
                    <button className="btn-signup">Signup</button></div>
                </div>
                <div className="container-welcome">
                    <div className=""><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facilis tempore earum amet necessitatibus ducimus animi, consequuntur ullam soluta repellat voluptatem nemo eum beatae, autem quisquam sapiente quod neque consequatur.</p></div>
                <div>
                   <img src={template}/>
                </div>
            </div>

            

            <div className="pricing-section">
                <h2>Pricing</h2>
                <div className="pricing-options">
                    <div className="pricing-option">
                    <h2>Base Plan</h2>
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
                    <div className="pricing-option">
                    <h2>Free Plan</h2>
      <p>$0 / month</p>
      <ul>
        <li>10 certificates per month</li>
        <li>Basic templates</li>
        <li>Email support</li>
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

            <div className="contact-us-section">
                <h2>Contact Us</h2>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button type="submit">Send</button>
                </form>
                
            </div>
        </>
    );
}
