// Verified.js
import React from 'react';
import { Link } from 'react-router-dom';

const Verified = () => {
  return (
    <div className="verification-container">
      <div className="message-box">
        <h2>Email verified successfully!</h2>
        <Link to="/signin" className="login-link">Log In</Link>
      </div>
    </div>
  );
};

export default Verified;
