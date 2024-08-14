import React from "react";
import template from '../images/img.jpg'; // Ensure the path is correct

export default function Welcome() {
    return (
        <>
            <div className="container-welcome">
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae obcaecati eos possimus, dolor illo, facilis quia esse et repellat laborum quos autem consequatur dignissimos, necessitatibus architecto excepturi expedita! Id, tempora!</p>
                </div>
                <div>
                    <img src={template} alt="Welcome" />
                </div>
            </div>

            <div className="auth-buttons">
                <button className="btn-login">Login</button>
                <button className="btn-signup">Signup</button>
            </div>

            <div className="pricing-section">
                <h2>Pricing</h2>
                <div className="pricing-options">
                    <div className="pricing-option">
                        <h3>Basic Plan</h3>
                        <p>$10/month</p>
                        <ul>
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                        </ul>
                    </div>
                    <div className="pricing-option">
                        <h3>Pro Plan</h3>
                        <p>$25/month</p>
                        <ul>
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                        </ul>
                    </div>
                    <div className="pricing-option">
                        <h3>Enterprise Plan</h3>
                        <p>$50/month</p>
                        <ul>
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                            <li>Feature 4</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="features-section">
                <h2>Features</h2>
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
